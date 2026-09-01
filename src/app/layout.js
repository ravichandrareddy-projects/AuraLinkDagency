import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CurrencyProvider } from '@/lib/currency-context';
import { ThemeProvider } from '@/lib/theme-context';
import JsonLd from '@/components/seo/JsonLd';

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
  metadataBase: new URL('https://auralinkdigitalagency.indevs.in'),
  title: {
    default: 'AuraLink Digital Agency | AI Agents, Custom Software & Websites',
    template: '%s | AuraLink Digital Agency',
  },
  description:
    'AuraLink Digital Agency delivers autonomous AI Agents, custom web & mobile software, E-Commerce stores, technical SEO, and workflow automation for modern enterprises.',
  keywords: [
    'AuraLink Digital Agency',
    'AI Agents Solutions',
    'Voice Calling Agent',
    'WhatsApp Business Agent',
    'Custom Software Development',
    'SaaS Platform Development',
    'E-Commerce Development',
    'Technical SEO Architecture',
    'Digital Transformation Agency',
  ],
  authors: [{ name: 'AuraLink Digital Agency' }],
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-icon.png' }],
  },
  alternates: {
    canonical: 'https://auralinkdigitalagency.indevs.in',
  },
  openGraph: {
    title: 'AuraLink Digital Agency | AI Agents, Custom Software & Websites',
    description:
      'Engineered for growth: Autonomous AI voice/WhatsApp agents, full-stack software, and conversion-focused websites.',
    url: 'https://auralinkdigitalagency.indevs.in',
    siteName: 'AuraLink Digital Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://auralink.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraLink Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraLink Digital Agency | AI Agents, Custom Software & Websites',
    description:
      'Autonomous AI voice & WhatsApp agents, custom SaaS platforms, and modern web development.',
    images: ['https://auralink.agency/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Andhra Pradesh, India',
    'geo.position': '16.5062;80.6480',
    'ICBM': '16.5062, 80.6480',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#08080f] text-[#f8fafc] font-sans antialiased transition-colors duration-300">
        <JsonLd />
        <ThemeProvider>
          <CurrencyProvider>
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
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
