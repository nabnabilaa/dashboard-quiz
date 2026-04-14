import React from 'react';

export const SkeletonDemo = () => (
    <div className="w-[300px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex animate-pulse items-center gap-4">
            <div className="h-[60px] w-[60px] rounded-full bg-slate-200"></div>
            <div className="flex-1">
                <div className="mb-2 h-3.5 w-[70%] rounded bg-slate-200"></div>
                <div className="h-3.5 w-[40%] rounded bg-slate-200"></div>
            </div>
        </div>
        <div className="animate-pulse">
            <div className="mb-4 h-[100px] w-full rounded-lg bg-slate-100"></div>
            <div className="mb-2 h-3 w-[90%] rounded bg-slate-200"></div>
            <div className="h-3 w-[80%] rounded bg-slate-200"></div>
        </div>
    </div>
);
