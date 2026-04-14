import React from 'react';
import { Home, Search, User } from 'lucide-react';

export const IconNavbar = () => (
    <div className="flex w-full max-w-[320px] flex-col gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 text-xs font-bold text-red-500">❌ BAD (Ambigu)</div>
            <div className="flex justify-around rounded-lg bg-slate-50 p-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-300">
                    <span className="text-base">?</span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-300">
                    <span className="text-base">X</span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-300">
                    <span className="text-base">#</span>
                </div>
            </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 text-xs font-bold text-emerald-500">✅ GOOD (Standard)</div>
            <div className="flex justify-around rounded-lg bg-slate-50 p-2.5 text-slate-600">
                <div className="text-center">
                    <Home size={24} />
                    <div className="mt-0.5 text-[9px]">Home</div>
                </div>
                <div className="text-center">
                    <Search size={24} />
                    <div className="mt-0.5 text-[9px]">Search</div>
                </div>
                <div className="text-center">
                    <User size={24} />
                    <div className="mt-0.5 text-[9px]">Profile</div>
                </div>
            </div>
        </div>
    </div>
);
