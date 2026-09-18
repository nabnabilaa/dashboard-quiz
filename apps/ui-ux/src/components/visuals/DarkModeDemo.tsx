'use client';

import React from 'react';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { moduleVisuals } from '@belajar/i18n/visuals';

export const DarkModeDemo = () => {
    const v = moduleVisuals[useLang()];
    return (
    <div className="flex gap-5">
        <div className="flex h-[200px] w-[140px] flex-col items-center justify-center rounded-xl bg-black p-4 text-white">
            <div className="mb-1 text-xs font-bold">{v.darkMode.pureBlack}</div>
            <div className="text-[10px] text-[#666]">{v.darkMode.pureBlackNote}</div>
            <div className="mt-2.5 h-0.5 w-[80%] bg-white"></div>
        </div>
        <div className="flex h-[200px] w-[140px] flex-col items-center justify-center rounded-xl border border-[#333] bg-[#121212] p-4 text-white shadow-lg">
            <div className="mb-1 text-xs font-bold">{v.darkMode.darkGrey}</div>
            <div className="text-[10px] text-[#A3A3A3]">{v.darkMode.darkGreyNote}</div>
            <div className="mt-2.5 h-0.5 w-[80%] bg-[#404040]"></div>
        </div>
    </div>
    );
};
