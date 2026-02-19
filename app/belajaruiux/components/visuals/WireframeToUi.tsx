import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WireframeToUi = () => (
    <div className="flex flex-col items-center gap-5 md:flex-row">
        <div className="flex h-[220px] w-[140px] flex-col gap-2.5 rounded-xl border-2 border-dashed border-slate-400 bg-slate-100 p-3">
            <div className="text-center text-[10px] font-bold text-slate-500">WIREFRAME</div>
            <div className="flex h-[60px] items-center justify-center rounded-md border-2 border-slate-400 text-[10px] text-slate-400">
                IMG
            </div>
            <div className="h-2.5 w-full rounded bg-slate-300"></div>
            <div className="h-2.5 w-[70%] rounded bg-slate-300"></div>
            <div className="mt-auto h-[30px] rounded-md border-2 border-slate-400"></div>
        </div>
        <ArrowRight size={30} className="rotate-90 text-slate-400 md:rotate-0" />
        <div className="flex h-[220px] w-[140px] flex-col gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
            <div className="text-center text-[10px] font-bold text-indigo-500">UI MOCKUP</div>
            <div className="h-[60px] rounded-md bg-gradient-to-br from-indigo-500 to-violet-500"></div>
            <div className="h-2.5 w-full rounded bg-slate-50"></div>
            <div className="h-2.5 w-[70%] rounded bg-slate-50"></div>
            <div className="mt-auto flex h-[30px] items-center justify-center rounded-md bg-indigo-600 text-[10px] font-bold text-white">
                Order Now
            </div>
        </div>
    </div>
);
