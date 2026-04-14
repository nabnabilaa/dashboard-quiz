import React from 'react';

export const ConsistencyApp = () => (
    <div className="flex gap-5">
        <div className="flex h-[200px] w-[120px] flex-col overflow-hidden rounded-2xl border-4 border-slate-700 bg-white shadow-md">
            <div className="flex h-[30px] items-center justify-center bg-indigo-600 text-[8px] font-bold text-white">
                HOME
            </div>
            <div className="flex-1 p-2.5">
                <div className="mb-1.5 h-[40px] rounded bg-slate-100"></div>
                <div className="h-[40px] rounded bg-slate-100"></div>
            </div>
            <div className="flex h-[30px] items-center justify-around border-t border-slate-200 bg-white">
                <div className="h-[15px] w-[15px] rounded-full bg-indigo-600"></div>
                <div className="h-[15px] w-[15px] rounded-full bg-slate-300"></div>
            </div>
        </div>
        <div className="flex h-[200px] w-[120px] flex-col overflow-hidden rounded-2xl border-4 border-slate-700 bg-white shadow-md">
            <div className="flex h-[30px] items-center justify-center bg-indigo-600 text-[8px] font-bold text-white">
                PROFILE
            </div>
            <div className="flex flex-1 flex-col items-center p-2.5">
                <div className="mb-2.5 h-[40px] w-[40px] rounded-full bg-slate-100"></div>
            </div>
            <div className="flex h-[30px] items-center justify-around border-t border-slate-200 bg-white">
                <div className="h-[15px] w-[15px] rounded-full bg-slate-300"></div>
                <div className="h-[15px] w-[15px] rounded-full bg-indigo-600"></div>
            </div>
        </div>
    </div>
);
