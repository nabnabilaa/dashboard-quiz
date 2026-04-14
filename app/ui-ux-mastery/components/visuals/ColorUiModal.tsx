import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const ColorUiModal = () => (
    <div className="w-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
        <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-50">
                <AlertTriangle size={24} className="text-red-500" />
            </div>
            <h3 className="mb-1 text-lg font-extrabold text-slate-900">Delete Data?</h3>
            <p className="m-0 text-sm text-slate-500">This action cannot be undone.</p>
        </div>
        <div className="flex border-t border-slate-200">
            <button className="flex-1 cursor-pointer border-r border-slate-200 bg-white p-4 font-semibold text-slate-500 hover:bg-slate-50">
                Cancel
            </button>
            <button className="flex-1 cursor-pointer bg-red-50 p-4 font-bold text-red-500 hover:bg-red-100">
                Delete
            </button>
        </div>
    </div>
);
