
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@backend/lib/utils';
import { BookOpen, MonitorPlay, Terminal, Home, Presentation, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { href: '/', label: 'Main Menu', icon: ArrowLeft },
    { href: '/backend-laravel', label: 'Dashboard', icon: Home },
    { href: '/backend-laravel/learn', label: 'Materials', icon: BookOpen },
    { href: '/backend-laravel/quiz', label: 'Quiz', icon: MonitorPlay },
    { href: '/backend-laravel/builder', label: 'Builder', icon: Terminal },
    { href: '/backend-laravel/demo', label: 'Live Demo', icon: Presentation },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg border border-slate-200 rounded-full px-6 py-3 shadow-xl">
            <ul className="flex items-center gap-1 sm:gap-2">
                {navItems.map((item) => {
                    // Logic for active state
                    const isActive = item.href === '/backend-laravel'
                        ? pathname === item.href
                        : item.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(item.href);

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 text-sm font-bold",
                                    isActive ? "text-white shadow-md shadow-brand-500/20" : "text-slate-600 hover:text-brand-600 hover:bg-slate-100"
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
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
