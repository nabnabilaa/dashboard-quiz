'use client';

import { GraduationCap } from 'lucide-react';
import { useLang } from '@frontend/i18n/LanguageProvider';
import { LanguageToggle } from '@frontend/i18n/LanguageToggle';

const copy = {
    en: {
        badge: 'Interactive Learning Platform',
        welcome: 'Welcome to',
        brand: 'Maxy Learning! 🚀',
        statLabel: 'HTML · CSS · Bootstrap',
    },
    id: {
        badge: 'Platform Belajar Interaktif',
        welcome: 'Selamat datang di',
        brand: 'Maxy Learning! 🚀',
        statLabel: 'HTML · CSS · Bootstrap',
    },
} as const;

/**
 * Welcome card shown at the top of the course. Also hosts the EN/ID switch so
 * the language control is reachable from the first screen.
 */
export function WelcomeHero() {
    const lang = useLang();
    const t = copy[lang];

    return (
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5A623] via-[#F7B844] to-[#E09000] p-5 text-white shadow-lg md:rounded-3xl md:p-7">
            <div className="absolute top-0 right-0 h-56 w-56 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-36 w-36 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <div className="flex-1 space-y-3 text-center md:text-left">
                    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between md:justify-start md:gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                            <GraduationCap size={14} />
                            <span>{t.badge}</span>
                        </div>
                        <LanguageToggle />
                    </div>

                    <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                        {t.welcome}
                        <br />
                        {t.brand}
                    </h2>
                </div>

                <div className="hidden flex-shrink-0 md:block">
                    <div className="flex h-28 w-36 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-sm">
                        <div className="space-y-0.5 text-center">
                            <div className="text-2xl font-extrabold leading-none">Frontend</div>
                            <div className="text-2xl font-extrabold leading-none">101</div>
                            <div className="pt-1.5 text-[10px] font-medium text-white/80">{t.statLabel}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
