import React from 'react';

export const TypographyWireframe = () => (
    <div className="w-[300px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
            <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-500">
                HEADER (H1)
            </span>
            <h1 className="my-1 text-[26px] font-extrabold leading-tight text-slate-900">
                Website Design
            </h1>
        </div>
        <div className="mb-4">
            <span className="rounded bg-pink-50 px-2 py-0.5 text-[10px] font-bold text-pink-500">
                SUB-HEADER (H2)
            </span>
            <h2 className="my-1 text-lg font-semibold text-slate-600">Beginner's Guide</h2>
        </div>
        <div>
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
                BODY TEXT (P)
            </span>
            <p className="my-1 text-sm leading-relaxed text-slate-500">
                Good typography has a clear hierarchy. Headings should stand out, and body text should be
                comfortable to read.
            </p>
        </div>
    </div>
);
