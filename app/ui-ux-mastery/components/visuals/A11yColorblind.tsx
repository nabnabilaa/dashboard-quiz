import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const A11yColorblind = () => (
    <div className="flex items-center gap-8">
        <div className="text-center">
            <div className="mx-auto mb-2.5 h-[60px] w-[60px] rounded-full bg-red-500"></div>
            <div className="text-xs text-slate-500">Hanya Warna</div>
        </div>
        <ArrowRight className="text-slate-400" />
        <div className="text-center">
            <div className="mx-auto mb-2.5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-red-500 text-white">
                <AlertCircle size={30} />
            </div>
            <div className="text-xs font-bold text-emerald-500">Warna + Ikon</div>
        </div>
    </div>
);
