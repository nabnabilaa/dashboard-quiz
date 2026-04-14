import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WhitespaceCards = () => (
    <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="w-[160px] overflow-hidden rounded-xl border border-slate-200 bg-white opacity-70">
            <div className="h-[90px] bg-slate-300"></div>
            <div className="p-[2px]">
                <div className="text-xs font-bold">Cool Shoes</div>
                <div className="text-[10px] text-slate-500">$50.00</div>
                <button className="w-full border-none bg-slate-900 p-[2px] text-[10px] text-white">
                    Buy
                </button>
            </div>
            <div className="bg-slate-100 p-[2px] text-center text-[8px] text-red-500">
                CROWDED (Bad)
            </div>
        </div>
        <ArrowRight size={24} className="rotate-90 text-slate-400 md:rotate-0" />
        <div className="w-[160px] scale-110 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            <div className="h-[90px] bg-blue-500"></div>
            <div className="p-3">
                <div className="mb-1 text-sm font-bold">Cool Shoes</div>
                <div className="mb-3 text-xs text-slate-500">$50.00</div>
                <button className="w-full rounded-md border-none bg-indigo-600 p-2 text-xs font-semibold text-white">
                    Buy Now
                </button>
            </div>
            <div className="bg-emerald-50 p-[5px] text-center text-[10px] font-semibold text-emerald-500">
                SPACIOUS (Good)
            </div>
        </div>
    </div>
);
