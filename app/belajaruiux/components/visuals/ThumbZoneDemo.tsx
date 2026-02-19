import React from 'react';
import { Check } from 'lucide-react';

export const ThumbZoneDemo = () => (
    <div className="relative h-[340px] w-[200px] overflow-hidden rounded-3xl border-[6px] border-slate-800 bg-white shadow-lg">
        <div className="absolute top-0 flex h-[30%] w-full justify-center bg-red-200 pt-5 text-xs font-bold text-red-800">
            HARD
        </div>
        <div className="absolute top-[30%] flex h-[30%] w-full items-center justify-center bg-amber-100 text-xs font-bold text-amber-800">
            STRETCH
        </div>
        <div className="absolute bottom-0 flex h-[40%] w-full items-end justify-center rounded-t-full bg-emerald-100 pb-8 text-xs font-bold text-emerald-900">
            NATURAL
        </div>
        <div className="absolute bottom-5 right-5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-black/30">
            <Check />
        </div>
    </div>
);
