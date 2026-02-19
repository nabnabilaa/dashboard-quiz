import React from 'react';
import { ChevronRight } from 'lucide-react';

export const BreadcrumbDemo = () => (
    <div className="w-[320px] rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-indigo-600">
            <span>Home</span> <ChevronRight size={12} className="text-slate-400" />
            <span>Electronics</span> <ChevronRight size={12} className="text-slate-400" />
            <span className="font-normal text-slate-500">MacBook Pro M1</span>
        </div>
        <div className="flex h-[100px] items-center justify-center rounded-lg bg-slate-50 text-slate-300">
            Content Product
        </div>
    </div>
);
