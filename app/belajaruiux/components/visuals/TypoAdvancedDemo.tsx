import React from 'react';

export const TypoAdvancedDemo = () => (
    <div className="flex gap-5">
        <div className="w-[140px] rounded-lg border border-slate-200 p-2.5">
            <div className="mb-1.5 text-[10px] font-bold text-slate-400">Rata Kanan-Kiri</div>
            <p className="text-justify text-[11px] leading-snug text-slate-700">
                Teks ini dipaksa rata kanan dan kiri sehingga tercipta celah putih yang tidak nyaman di
                mata.
            </p>
        </div>
        <div className="w-[140px] rounded-lg border-2 border-emerald-500 bg-emerald-50 p-2.5">
            <div className="mb-1.5 text-[10px] font-bold text-emerald-800">Rata Kiri (Ideal)</div>
            <p className="text-left text-[11px] leading-relaxed text-slate-900">
                Teks ini rata kiri dengan spasi baris yang cukup, membuat mata nyaman saat berpindah baris.
            </p>
        </div>
    </div>
);
