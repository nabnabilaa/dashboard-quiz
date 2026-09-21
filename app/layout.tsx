import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000',
  ),
  title: {
    default: 'Maxy Learning — Interactive Learning Platform',
    template: '%s · Maxy Learning',
  },
  description:
    'Six interactive tech courses in one dashboard: UI/UX, UML, Git, Frontend, Laravel and Ethical Hacking, with visual quizzes, live editors and in-browser simulators.',
  authors: [{ name: 'Nabila Melsyana' }],
  icons: { icon: '/logo-maxy.png', apple: '/logo-maxy.png' },
  openGraph: {
    title: 'Maxy Learning — Interactive Learning Platform',
    description:
      'Learn tech by doing, not just reading. Visual quizzes, live editors and in-browser simulators across six courses.',
    images: ['/logo-maxy.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
