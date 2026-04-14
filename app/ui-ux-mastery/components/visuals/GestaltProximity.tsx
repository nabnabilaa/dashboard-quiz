import React from 'react';

export const GestaltProximity = () => (
    <div className="flex gap-5">
        <div className="w-[160px] rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="mb-2.5 text-xs font-bold text-red-800">Bad (Uniform Spacing)</div>
            <div className="rounded-lg bg-white p-2.5">
                <div className="text-[10px] text-slate-500">Label A</div>
                <div className="mb-2.5 h-[25px] rounded border border-slate-300"></div>
                <div className="text-[10px] text-slate-500">Label B</div>
                <div className="h-[25px] rounded border border-slate-300"></div>
            </div>
        </div>
        <div className="w-[160px] rounded-xl border border-green-200 bg-green-50 p-4">
            <div className="mb-2.5 text-xs font-bold text-green-800">Good (Proximity)</div>
            <div className="rounded-lg bg-white p-2.5">
                <div className="mb-0.5 text-[10px] text-slate-500">Label A</div>
                <div className="mb-4 h-[25px] rounded border border-emerald-500"></div>
                <div className="mb-0.5 text-[10px] text-slate-500">Label B</div>
                <div className="h-[25px] rounded border border-emerald-500"></div>
            </div>
        </div>
    </div>
);
