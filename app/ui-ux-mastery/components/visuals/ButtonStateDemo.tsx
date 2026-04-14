import React, { useState } from 'react';

export const ButtonStateDemo = () => {
    const [state, setState] = useState<'default' | 'hover' | 'pressed'>('default');
    return (
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <div className="text-center">
                <button
                    onMouseDown={() => setState('pressed')}
                    onMouseUp={() => setState('default')}
                    onMouseEnter={() => setState('hover')}
                    onMouseLeave={() => setState('default')}
                    className={`cursor-pointer rounded-xl border-none px-8 py-3.5 text-base font-bold text-white transition-all duration-100 ${state === 'pressed'
                        ? 'scale-95 bg-indigo-900'
                        : state === 'hover'
                            ? 'bg-indigo-700 shadow-xl shadow-indigo-500/40'
                            : 'bg-indigo-600 shadow-md shadow-indigo-600/10'
                        }`}
                >
                    {state === 'default' && "Click Me"}
                    {state === 'hover' && "Hovering!"}
                    {state === 'pressed' && "Pressed!"}
                </button>
                <p className="mt-4 text-[13px] text-slate-500">Try hovering & clicking this button</p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <div className="h-3 w-3 rounded-[3px] bg-indigo-600"></div> Normal
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <div className="h-3 w-3 rounded-[3px] bg-indigo-700 shadow shadow-indigo-700"></div> Hover
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <div className="h-3 w-3 rounded-[3px] bg-indigo-900"></div> Pressed
                </div>
            </div>
        </div>
    );
};
