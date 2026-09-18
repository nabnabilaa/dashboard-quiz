'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'id';

/** Per-language value holder used by every data file in this course. */
export type Bilingual<T> = Record<Lang, T>;

const STORAGE_KEY = 'maxy-lang';

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Always start at 'en' so server and first client render match, then hydrate
    // the stored preference in an effect.
    const [lang, setLangState] = useState<Lang>('en');

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored === 'en' || stored === 'id') setLangState(stored);
        } catch {
            // localStorage unavailable (private mode / blocked) — keep the default.
        }
    }, []);

    const setLang = (next: Lang) => {
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Ignore — the choice simply won't persist across reloads.
        }
    };

    const toggleLang = () => setLang(lang === 'en' ? 'id' : 'en');

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
    return ctx;
}

/** Shorthand for reading the active language only. */
export function useLang(): Lang {
    return useLanguage().lang;
}
