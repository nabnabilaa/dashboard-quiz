'use strict';
import React from 'react';

type HeaderProps = {
    score: number;
    currentBranch: string;
    onShowDictionary: () => void;
};

const Header: React.FC<HeaderProps> = ({ score, currentBranch, onShowDictionary }) => {
    return (
        <header className="bg-white/90 backdrop-blur border-b border-slate-200 p-4 sticky top-0 z-30 shadow-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md p-1 border border-slate-200">
                        <img src="/logo-maxy.png" alt="Maxy Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-800 leading-none">
                            GIT MASTER <span className="text-indigo-600">HERO</span>
                        </h1>
                        <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-1">
                            Quiz & Terminal Simulator
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium w-full md:w-auto justify-between md:justify-end">
                    <div
                        className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 transition-colors"
                        id="branch-indicator-container"
                    >
                        <i className="fas fa-code-branch text-slate-400 text-xs" id="branch-icon"></i>
                        <span className="text-slate-400 text-xs">Branch:</span>
                        <span id="current-branch" className="text-indigo-600 font-mono font-bold">
                            {currentBranch}
                        </span>
                    </div>
                    <div className="bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 text-amber-600">
                        ⭐ <span id="score">{score}</span>
                    </div>
                    <button
                        onClick={onShowDictionary}
                        className="text-slate-400 hover:text-slate-700 transition-colors"
                        title="Open Dictionary"
                    >
                        <i className="fas fa-book"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
