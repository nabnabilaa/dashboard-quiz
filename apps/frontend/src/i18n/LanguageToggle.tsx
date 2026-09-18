'use client';

import { Languages } from 'lucide-react';
import { Lang, useLanguage } from './LanguageProvider';

const OPTIONS: { value: Lang; label: string; title: string }[] = [
    { value: 'en', label: 'EN', title: 'English' },
    { value: 'id', label: 'ID', title: 'Bahasa Indonesia' },
];

interface LanguageToggleProps {
    /** 'light' sits on a coloured hero, 'dark' sits on a white surface. */
    variant?: 'light' | 'dark';
    className?: string;
}

/**
 * Bilingual switch (EN / ID). Renders as a two-state segmented control so the
 * available languages are visible without opening anything.
 */
export function LanguageToggle({ variant = 'light', className = '' }: LanguageToggleProps) {
    const { lang, setLang } = useLanguage();

    const shell =
        variant === 'light'
            ? 'bg-white/20 border-white/30 text-white'
            : 'bg-slate-100 border-slate-200 text-slate-500';

    const active =
        variant === 'light'
            ? 'bg-white text-[#E09000] shadow-sm'
            : 'bg-white text-slate-900 shadow-sm';

    const idle = variant === 'light' ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-800';

    return (
        <div
            className={`inline-flex items-center gap-1 rounded-full border p-1 backdrop-blur-sm ${shell} ${className}`}
            role="group"
            aria-label="Language / Bahasa"
        >
            <Languages size={14} className="ml-1.5 mr-0.5 shrink-0 opacity-80" aria-hidden />
            {OPTIONS.map((opt) => (
                <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLang(opt.value)}
                    aria-pressed={lang === opt.value}
                    title={opt.title}
                    className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide transition-all ${lang === opt.value ? active : idle
                        }`}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}
