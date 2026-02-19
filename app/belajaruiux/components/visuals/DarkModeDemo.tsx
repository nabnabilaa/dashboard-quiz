import React from 'react';

export const DarkModeDemo = () => (
    <div className="flex gap-5">
        <div className="flex h-[200px] w-[140px] flex-col items-center justify-center rounded-xl bg-black p-4 text-white">
            <div className="mb-1 text-xs font-bold">Pure Black</div>
            <div className="text-[10px] text-[#666]">High Contrast (Eye Strain)</div>
            <div className="mt-2.5 h-0.5 w-[80%] bg-white"></div>
        </div>
        <div className="flex h-[200px] w-[140px] flex-col items-center justify-center rounded-xl border border-[#333] bg-[#121212] p-4 text-white shadow-lg">
            <div className="mb-1 text-xs font-bold">Dark Grey</div>
            <div className="text-[10px] text-[#A3A3A3]">Soft Contrast (Comfort)</div>
            <div className="mt-2.5 h-0.5 w-[80%] bg-[#404040]"></div>
        </div>
    </div>
);
