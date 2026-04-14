import React from 'react';

export const FormLabelDemo = () => (
    <div className="w-[280px] rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mb-4">
            <label className="mb-1 block text-xs font-bold text-slate-600">Top Aligned Label</label>
            <input
                type="text"
                placeholder="Enter data..."
                className="w-full rounded-md border border-slate-300 p-2.5"
            />
        </div>
        <div>
            <input
                type="text"
                placeholder="Placeholder Label (Disappears when typed)"
                className="w-full rounded-md border border-slate-300 p-2.5"
            />
        </div>
    </div>
);
