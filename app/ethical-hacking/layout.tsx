"use client";

import React from "react";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import fonts
import "./styles.css";

// Configure fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export default function EthicalHackingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-dark-bg text-slate-200 min-h-screen`}>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            {children}
        </div>
    );
}
