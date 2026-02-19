import React from 'react';

export const FPatternWireframe = () => (
    <div className="relative h-[200px] w-[300px] rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-[15px] h-[20px] w-[60%] rounded bg-slate-800"></div>
        <div className="mb-[10px] h-[12px] w-[80%] rounded bg-slate-400"></div>
        <div className="mb-[25px] h-[12px] w-[80%] rounded bg-slate-400"></div>
        <div className="mb-[10px] h-[16px] w-[40%] rounded bg-slate-700"></div>
        <div className="mb-[5px] h-[10px] w-[70%] rounded bg-slate-300"></div>
        <div className="pointer-events-none absolute left-[15px] top-[15px] h-[160px] w-[250px] opacity-80">
            <div className="mb-[40px] h-[30px] w-full border-l-[5px] border-red-500 bg-red-500/10"></div>
            <div className="h-[20px] w-[70%] border-l-[5px] border-red-500 bg-red-500/10"></div>
            <div className="absolute left-0 top-0 h-full w-[5px] bg-red-500"></div>
        </div>
    </div>
);
