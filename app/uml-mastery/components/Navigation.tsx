import React from 'react';
import { BookOpen, GraduationCap, Briefcase, Atom, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@frontend/lib/utils';
import { motion } from 'framer-motion';

export type UmlMode = 'materi' | 'quiz' | 'case-study' | 'diagram-builder';

interface NavigationProps {
    mode: UmlMode;
    setMode: (mode: UmlMode) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ mode, setMode }) => {
    const navItems = [
        { id: 'home', label: 'Main Menu', icon: ArrowLeft, href: '/' },
        { id: 'materi', label: 'Materi', icon: BookOpen },
        { id: 'quiz', label: 'Kuis', icon: GraduationCap },
        { id: 'case-study', label: 'Knowledge Hub', icon: Briefcase },
        { id: 'diagram-builder', label: 'Builder', icon: Atom },
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
                                onClick={() => setMode(item.id as UmlMode)}
                                className={cn(
                                    "relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 text-sm font-bold",
                                    isActive ? "text-white shadow-md shadow-orange-500/20" : "text-slate-600 hover:text-[#F5A623] hover:bg-slate-100"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill-uml"
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
