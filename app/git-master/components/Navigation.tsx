import React from 'react';
import { Terminal, BookOpen, Layers, ArrowLeft, GitBranch, Github, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@frontend/lib/utils'; // Reusing utility from frontend or lib
import { motion } from 'framer-motion';

// Define the Mode type locally or import if available
export type Mode = 'intro' | 'game' | 'cheatsheet';

interface NavigationProps {
    mode: Mode;
    setMode: (mode: Mode) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ mode, setMode }) => {
    const navItems = [
        { id: 'home', label: 'Main Menu', icon: ArrowLeft, href: '/' },
        { id: 'intro', label: 'Materi', icon: BookOpen },
        { id: 'quiz', label: 'Kuis', icon: GraduationCap },
        { id: 'game', label: 'Terminal', icon: Terminal },
    ];

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg border border-slate-200 rounded-full px-6 py-3 shadow-xl">
            <ul className="flex items-center gap-1 sm:gap-2">
                {navItems.map((item) => {
                    const isActive = mode === item.id;
                    const isLink = item.id === 'home';

                    if (isLink) {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href!}
                                    className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 text-sm font-bold text-slate-500 hover:text-[#F5A623] hover:bg-slate-100"
                                >
                                    <item.icon className="w-5 h-5 sm:w-4 sm:h-4" />
                                    <span className="hidden sm:block opacity-80">{item.label}</span>
                                </Link>
                            </li>
                        );
                    }

                    return (
                        <li key={item.id}>
                            <button
                                onClick={() => setMode(item.id as Mode)}
                                className={cn(
                                    "relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 text-sm font-bold",
                                    isActive ? "text-white shadow-md shadow-orange-500/20" : "text-slate-600 hover:text-[#F5A623] hover:bg-slate-100"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-gradient-to-r from-[#F5A623] to-[#E09000] rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <item.icon className="w-5 h-5 sm:w-4 sm:h-4" />
                                <span className={cn("hidden sm:block", isActive ? "opacity-100" : "opacity-80")}>{item.label}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
