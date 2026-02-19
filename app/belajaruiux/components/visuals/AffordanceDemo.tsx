import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AffordanceDemo = () => (
    <div className="flex items-center gap-8">
        <div className="text-center">
            <div className="px-6 py-3 text-sm font-bold text-indigo-600">SUBMIT</div>
            <div className="mt-1.5 text-[10px] text-slate-400">Low Affordance</div>
        </div>
        <ArrowRight className="text-slate-400" />
        <div className="text-center">
            <button className="rounded-lg border-none bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/30">
                SUBMIT
            </button>
            <div className="mt-1.5 text-[10px] text-emerald-500">High Affordance</div>
        </div>
    </div>
);
