import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: 'AuraLink Digital Agency | AI Agents, Software & Websites',
  description:
    'AuraLink Digital Agency specializes in building cutting-edge AI agents, custom software solutions, and premium websites that drive growth and transform businesses.',
  keywords: [
    'AI agents',
    'digital agency',
    'web development',
    'software development',
    'WhatsApp automation',
    'voice agents',
    'custom software',
  ],
  authors: [{ name: 'AuraLink Digital Agency' }],
  openGraph: {
    title: 'AuraLink Digital Agency | AI Agents, Software & Websites',
    description:
      'Building cutting-edge AI agents, custom software solutions, and premium websites.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#08080f] text-[#f8fafc] font-sans antialiased">
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 z-[-1] bg-base-gradient grid-pattern overflow-hidden">
          <div className="stars-layer-1" />
          <div className="stars-layer-2" />
          <div className="stars-layer-3" />
        </div>

        {/* Foreground Content Layer */}
        <div className="relative z-0 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
