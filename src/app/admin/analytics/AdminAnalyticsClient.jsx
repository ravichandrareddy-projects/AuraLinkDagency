'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Users,
  MapPin,
  Clock,
  Eye,
  MousePointer,
  RefreshCw,
  ShieldCheck,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Activity,
  Calendar,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export default function AdminAnalyticsClient() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Attempt auto-login if stored in session/local storage
  useEffect(() => {
    const savedKey = localStorage.getItem('al_admin_analytics_key');
    if (savedKey) {
      setAdminKey(savedKey);
      fetchStats(savedKey);
    }
  }, []);

  const fetchStats = useCallback(async (keyToUse) => {
    const key = keyToUse || adminKey;
    if (!key) return;
    setIsLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch(`/api/analytics/stats?key=${encodeURIComponent(key)}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setAnalyticsData(data);
        localStorage.setItem('al_admin_analytics_key', key);
        if (data.sessions?.length > 0 && !selectedSession) {
          setSelectedSession(data.sessions[0]);
        }
      } else {
        setIsAuthenticated(false);
        setErrorMsg(data.error || 'Access denied: invalid credentials.');
      }
    } catch {
      setErrorMsg('Failed to connect to analytics server.');
    } finally {
      setIsLoading(false);
    }
  }, [adminKey, selectedSession]);

  // Live Auto Refresh polling every 10 seconds
  useEffect(() => {
    if (!isAuthenticated || !autoRefresh) return;
    const interval = setInterval(() => {
      fetchStats();
    }, 10000);
    return () => clearInterval(interval);
  }, [isAuthenticated, autoRefresh, fetchStats]);

  const handleLogin = (e) => {
    e.preventDefault();
    fetchStats(adminKey.trim());
  };

  const handleLogout = () => {
    localStorage.removeItem('al_admin_analytics_key');
    setIsAuthenticated(false);
    setAdminKey('');
    setAnalyticsData(null);
  };

  const formatSeconds = (sec) => {
    if (!sec || sec <= 0) return 'Just joined';
    if (sec < 60) return `${sec}s`;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s}s`;
  };

  const formatTimestamp = (iso) => {
    if (!iso) return 'Unknown';
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch {
      return iso;
    }
  };

  const isSessionActive = (lastSeen) => {
    if (!lastSeen) return false;
    return Date.now() - new Date(lastSeen).getTime() < 2 * 60 * 1000;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-3">
              <Lock className="text-cyan-400 w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black font-display tracking-wide text-white">
              AuraLink Intelligence Hub
            </h1>
            <p className="text-xs text-white/60 mt-1">
              Private Real-Time Visitor & Location Tracking Portal
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
                Admin Passcode
              </label>
              <input
                type="password"
                placeholder="Enter access passcode..."
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                autoFocus
                required
              />
              <p className="text-[11px] text-white/40 mt-1">
                Default key: <code className="text-cyan-300 bg-white/5 px-1 py-0.5 rounded">auralink-admin-2026</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <RefreshCw className="animate-spin w-4 h-4" />
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              Unlock Live Analytics
            </button>
          </form>
        </div>
      </div>
    );
  }

  const { stats, sessions } = analyticsData || { stats: {}, sessions: [] };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Top Banner Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              Live Stream Active
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-display text-white tracking-wide">
            Visitor Location & Activity Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-cyan-200/70 mt-0.5">
            Real-time tracking of visitor cities, states, viewed agency pages, duration, and tap events.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              autoRefresh
                ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                : 'bg-white/5 border-white/15 text-white/60'
            }`}
            title="Toggle automatic updates every 10 seconds"
          >
            <Activity className="w-3.5 h-3.5" />
            {autoRefresh ? 'Auto-Refreshing' : 'Paused'}
          </button>

          <button
            onClick={() => fetchStats()}
            disabled={isLoading}
            className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
            title="Refresh statistics now"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white/70 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all text-xs font-bold"
          >
            Lock Dashboard
          </button>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
              Live Active Now
            </span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white font-display">
            {stats.activeVisitors || 0}
          </div>
          <p className="text-[11px] text-emerald-300 mt-1 flex items-center gap-1 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" /> Active in last 2 mins
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
              Total Recorded Visitors
            </span>
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white font-display">
            {stats.totalVisitors || 0}
          </div>
          <p className="text-[11px] text-cyan-200/70 mt-1 font-medium">
            Unique tracking sessions
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
              Avg Time on Website
            </span>
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white font-display">
            {formatSeconds(stats.avgDurationSeconds)}
          </div>
          <p className="text-[11px] text-amber-200/70 mt-1 font-medium">
            Engagement retention time
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
              Top Geo Region
            </span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Globe className="w-5 h-5" />
            </div>
          </div>
          <div className="text-lg font-black text-white font-display truncate">
            {stats.topCities?.[0] ? stats.topCities[0][0] : stats.topCountries?.[0]?.[0] || 'Awaiting data'}
          </div>
          <p className="text-[11px] text-purple-200/70 mt-1 font-medium">
            {stats.topCities?.[0] ? `${stats.topCities[0][1]} visitors` : 'Global coverage'}
          </p>
        </div>
      </div>

      {/* Main Split Layout: Session Feed & Drill-down Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Recent Visitor List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col h-[700px] rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-extrabold text-white uppercase tracking-wider">
                Live Visitor Stream ({sessions.length})
              </h2>
            </div>
            <span className="text-[11px] text-white/40">Sorted by recent</span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-white/5 p-2 space-y-1">
            {sessions.length === 0 ? (
              <div className="p-8 text-center text-white/50 text-xs">
                No visitor sessions detected yet. Open your agency site in a new tab to see it populate instantly.
              </div>
            ) : (
              sessions.map((sess) => {
                const active = isSessionActive(sess.lastSeen);
                const isSelected = selectedSession?.id === sess.id;
                const cityStr = sess.geo?.city !== 'Unknown' ? `${sess.geo?.city}, ${sess.geo?.region || ''}` : sess.geo?.country || 'Unknown Location';

                return (
                  <div
                    key={sess.id}
                    onClick={() => setSelectedSession(sess)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-500/20 border border-cyan-400/40 shadow-lg shadow-cyan-500/10'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            active ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-white/20'
                          }`}
                        />
                        <span className="text-xs font-bold text-white truncate max-w-[180px]">
                          {cityStr}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300/80 shrink-0">
                        {formatTimestamp(sess.lastSeen)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-white/60 mt-2 pl-4">
                      <div className="flex items-center gap-2">
                        {sess.device?.type === 'mobile' ? (
                          <Smartphone className="w-3 h-3 text-white/40" />
                        ) : (
                          <Monitor className="w-3 h-3 text-white/40" />
                        )}
                        <span>{sess.pageViews?.length || 0} pages viewed</span>
                      </div>
                      <span className="font-mono text-white/70">
                        {formatSeconds(sess.totalDurationSeconds)}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Side: Detailed Visitor Inspection (7 cols) */}
        <div className="lg:col-span-7 flex flex-col h-[700px] rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl">
          {selectedSession ? (
            <div className="flex flex-col h-full overflow-y-auto p-6 space-y-6">
              {/* Header Profile */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-black text-white">
                      {selectedSession.geo?.city !== 'Unknown'
                        ? `${selectedSession.geo?.city}, ${selectedSession.geo?.region || ''}`
                        : selectedSession.geo?.country || 'Location Pending'}
                    </h3>
                  </div>
                  <p className="text-xs text-white/60 mt-0.5">
                    Country: <span className="text-cyan-300 font-semibold">{selectedSession.geo?.country || 'Unknown'}</span> | IP: <span className="font-mono text-white/80">{selectedSession.ip}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      isSessionActive(selectedSession.lastSeen)
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                        : 'bg-white/5 text-white/60 border-white/10'
                    }`}
                  >
                    {isSessionActive(selectedSession.lastSeen) ? 'Online Now' : 'Session Ended'}
                  </span>
                </div>
              </div>

              {/* Engagement Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] text-white/50 uppercase font-semibold">Total Time</div>
                  <div className="text-lg font-black text-amber-300 mt-1 font-mono">
                    {formatSeconds(selectedSession.totalDurationSeconds)}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] text-white/50 uppercase font-semibold">Pages Read</div>
                  <div className="text-lg font-black text-cyan-300 mt-1 font-mono">
                    {selectedSession.pageViews?.length || 0}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] text-white/50 uppercase font-semibold">Button Taps</div>
                  <div className="text-lg font-black text-purple-300 mt-1 font-mono">
                    {selectedSession.clicks?.length || 0}
                  </div>
                </div>
              </div>

              {/* Pages Viewed Timeline */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-white/70 mb-3 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  Pages Viewed By Visitor
                </h4>
                <div className="space-y-2">
                  {selectedSession.pageViews?.length > 0 ? (
                    selectedSession.pageViews.map((pv, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-[10px]">
                            {idx + 1}
                          </span>
                          <div>
                            <div className="font-bold text-white">{pv.path}</div>
                            {pv.title && <div className="text-[11px] text-white/50">{pv.title}</div>}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-cyan-300 text-[11px]">
                            {formatSeconds(pv.durationSeconds)}
                          </span>
                          <div className="text-[10px] text-white/40">
                            {formatTimestamp(pv.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-white/40 p-2">No pages recorded yet.</div>
                  )}
                </div>
              </div>

              {/* Interactions / Button Taps */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-white/70 mb-3 flex items-center gap-1.5">
                  <MousePointer className="w-3.5 h-3.5 text-purple-400" />
                  Buttons & Links Tapped
                </h4>
                <div className="space-y-2">
                  {selectedSession.clicks?.length > 0 ? (
                    selectedSession.clicks.map((clk, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <div>
                            <span className="font-bold text-white">&quot;{clk.label}&quot;</span>
                            <span className="text-[10px] text-white/50 ml-2">on {clk.path}</span>
                          </div>
                        </div>
                        <span className="font-mono text-purple-300/80 text-[10px]">
                          {formatTimestamp(clk.timestamp)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-white/40 p-2">
                      Visitor hasn&apos;t tapped on buttons yet.
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Device Info */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-white/60 space-y-1">
                <div>Device: <span className="text-white font-medium">{selectedSession.device?.type || 'Unknown'}</span> ({selectedSession.device?.screen || 'N/A'})</div>
                <div>Language: <span className="text-white font-medium">{selectedSession.device?.language || 'en'}</span></div>
                <div>First Arrived: <span className="font-mono text-white/80">{formatTimestamp(selectedSession.firstSeen)}</span></div>
                {selectedSession.referrer && <div>Referred From: <span className="text-cyan-300">{selectedSession.referrer}</span></div>}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 text-white/50">
              <Users className="w-12 h-12 text-white/20 mb-3" />
              <p className="text-sm font-semibold">Select a visitor from the stream to inspect details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
