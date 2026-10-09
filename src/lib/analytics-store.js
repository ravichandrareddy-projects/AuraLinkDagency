import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const SESSIONS_FILE = path.join(DATA_DIR, 'visitor-sessions.json');
const MAX_STORED_SESSIONS = 3000;

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(SESSIONS_FILE)) {
      fs.writeFileSync(SESSIONS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('[Analytics Storage] Failed to ensure data file:', err);
  }
}

export function getAllSessions() {
  try {
    ensureDataFile();
    if (!fs.existsSync(SESSIONS_FILE)) return [];
    const content = fs.readFileSync(SESSIONS_FILE, 'utf-8');
    return JSON.parse(content || '[]');
  } catch (err) {
    console.error('[Analytics Storage] Error reading sessions:', err);
    return [];
  }
}

export function saveSessionEvent(incoming) {
  try {
    ensureDataFile();
    const sessions = getAllSessions();
    const now = new Date().toISOString();
    const sessionId = incoming.sessionId;

    if (!sessionId) return null;

    let session = sessions.find((s) => s.id === sessionId);

    if (!session) {
      session = {
        id: sessionId,
        firstSeen: now,
        lastSeen: now,
        ip: incoming.ip || 'Unknown',
        geo: incoming.geo || {
          country: 'Unknown',
          region: 'Unknown',
          city: 'Unknown',
        },
        device: incoming.device || {},
        pageViews: [],
        clicks: [],
        totalDurationSeconds: 0,
        referrer: incoming.referrer || '',
      };
      sessions.unshift(session);
    }

    session.lastSeen = now;
    if (incoming.geo && (!session.geo || session.geo.city === 'Unknown')) {
      session.geo = incoming.geo;
    }
    if (incoming.ip && (!session.ip || session.ip === 'Unknown')) {
      session.ip = incoming.ip;
    }

    if (incoming.type === 'pageview') {
      const existingPage = session.pageViews.find(
        (p) => p.path === incoming.path && p.title === incoming.title
      );
      if (!existingPage) {
        session.pageViews.push({
          path: incoming.path || '/',
          title: incoming.title || '',
          timestamp: now,
          durationSeconds: 0,
        });
      }
    } else if (incoming.type === 'heartbeat') {
      if (typeof incoming.durationSeconds === 'number') {
        session.totalDurationSeconds = Math.max(
          session.totalDurationSeconds || 0,
          incoming.durationSeconds
        );
      }
      if (incoming.path && session.pageViews.length > 0) {
        const lastPage = session.pageViews[session.pageViews.length - 1];
        if (lastPage && lastPage.path === incoming.path && typeof incoming.pageDuration === 'number') {
          lastPage.durationSeconds = Math.max(lastPage.durationSeconds || 0, incoming.pageDuration);
        }
      }
    } else if (incoming.type === 'click') {
      session.clicks = session.clicks || [];
      // Keep up to 30 most recent user clicks per session
      if (session.clicks.length >= 30) {
        session.clicks.shift();
      }
      session.clicks.push({
        label: incoming.label || 'Interactive Element',
        tag: incoming.tag || '',
        path: incoming.path || '/',
        timestamp: now,
      });
    }

    // Prune if exceeds max storage
    const trimmed = sessions.slice(0, MAX_STORED_SESSIONS);
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(trimmed, null, 2), 'utf-8');
    return session;
  } catch (err) {
    console.error('[Analytics Storage] Error saving session event:', err);
    return null;
  }
}

export function clearAllSessions() {
  try {
    ensureDataFile();
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify([], null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('[Analytics Storage] Error clearing sessions:', err);
    return false;
  }
}
