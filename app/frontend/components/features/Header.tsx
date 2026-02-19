'use client';

import { useState } from 'react';
import { Code, Book, GraduationCap, PenTool, Palette, Menu, X } from 'lucide-react';
import { Phase } from '@frontend/lib/types';

interface HeaderProps {
    phase: Phase;
    setPhase: (phase: Phase) => void;
}

interface NavButtonProps {
    target: Phase;
    icon: React.ElementType;
    label: string;
    color: string;
    isActive: boolean;
    onClick: () => void;
}

/**
 * Navigation button component
 */
function NavButton({ target, icon: Icon, label, color, isActive, onClick }: NavButtonProps) {
    const colorClasses: Record<string, string> = {
        purple: 'bg-purple-600 text-white',
        pink: 'bg-pink-600 text-white',
        orange: 'bg-[#F5A623] text-white',
        indigo: 'bg-indigo-600 text-white',
    };

    return (
        <button
            onClick={onClick}
            className={`
        flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
        ${isActive
                    ? `${colorClasses[color]} shadow-md`
                    : 'bg-white text-slate-500 hover:text-slate-700 border border-slate-200'
                }
      `}
        >
            <Icon size={14} />
            <span className="hidden sm:inline">{label}</span>
        </button>
    );
}

/**
 * Header component with responsive navigation
 * Mobile: Hamburger menu with slide-out drawer
 * Desktop: Full navigation bar
 */
export function Header({ phase, setPhase }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems: { target: Phase; icon: React.ElementType; label: string; color: string }[] = [
        { target: 'intro', icon: Book, label: 'Materi', color: 'purple' },
        { target: 'quiz', icon: GraduationCap, label: 'Kuis', color: 'pink' },
        { target: 'workshop', icon: PenTool, label: 'Belajar', color: 'orange' },
        { target: 'builder', icon: Palette, label: 'Builder', color: 'indigo' },
    ];

    const handleNavClick = (target: Phase) => {
        setPhase(target);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="h-14 border-b border-slate-200 bg-white px-4 flex justify-between items-center z-20 shrink-0 shadow-sm">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center">
                        <img src="/logo-maxy.png" alt="Maxy Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="font-bold text-sm tracking-wide text-slate-800">
                        Frontend 101 <span className="text-indigo-600">Maxy Academy</span>
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-2">
                    {navItems.map((item) => (
                        <NavButton
                            key={item.target}
                            target={item.target}
                            icon={item.icon}
                            label={item.label}
                            color={item.color}
                            isActive={phase === item.target}
                            onClick={() => handleNavClick(item.target)}
                        />
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-700"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={20} />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`
          fixed top-0 right-0 h-full w-64 bg-white border-l border-slate-200 z-50 
          transform transition-transform duration-300 ease-in-out md:hidden
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                    <span className="text-slate-800 font-bold">Menu</span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1 rounded hover:bg-slate-100"
                        aria-label="Close menu"
                    >
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>
                <nav className="p-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.target}
                            onClick={() => handleNavClick(item.target)}
                            className={`
                flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                ${phase === item.target
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                }
              `}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
}
