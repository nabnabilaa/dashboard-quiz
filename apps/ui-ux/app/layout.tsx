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
    title: 'UI/UX Mastery - Maxy Learning',
    description: 'Interactive UI/UX design course by Maxy Academy. Available in English and Bahasa Indonesia.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jakartaSans.variable} ${jetbrainsMono.variable}`}>
            <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
