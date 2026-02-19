'use strict';
import React, { useRef, useEffect } from 'react';

import { LevelData, QuizOption } from '@git/types';

type GameCardProps = {
    mode: 'quiz' | 'training';
    level: LevelData;
    progress: number;
    onQuizAnswer: (correct: boolean, reason: string, btnIndex: number) => void;
    onTerminalCommand: (input: string) => void;
    terminalHistory: string;
    terminalFeedback: { type: 'success' | 'error' | ''; message: string };
    feedback: { visible: boolean; isCorrect: boolean; desc: string; realWorld: string } | null;
    onNextLevel: () => void;
    onRetryLevel: () => void;
};

const GameCard: React.FC<GameCardProps> = ({
    mode,
    level,
    progress,
    onQuizAnswer,
    onTerminalCommand,
    terminalHistory,
    terminalFeedback,
    feedback,
    onNextLevel,
    onRetryLevel
}) => {
    const terminalInputRef = useRef<HTMLInputElement>(null);
    const feedbackRef = useRef<HTMLDivElement>(null);

    // GUARD: Prevents crash if level data isn't loaded yet
    if (!level) {
        return (
            <div id="game-card" className="bg-white border-2 border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg relative fade-in text-slate-400 text-center">
                <i className="fas fa-circle-notch fa-spin text-2xl mb-2"></i>
                <p>Memuat Misi...</p>
            </div>
        );
    }

    // Auto-scroll feedback into view
    useEffect(() => {
        if (feedback?.visible && feedbackRef.current) {
            feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [feedback]);

    // Focus terminal on click or load
    useEffect(() => {
        if (mode === 'training' && terminalInputRef.current && !feedback?.visible) {
            terminalInputRef.current.focus();
        }
    }, [mode, level, feedback]);

    const handleTerminalSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const val = e.currentTarget.value.trim();
            if (val) {
                onTerminalCommand(val);
                e.currentTarget.value = '';
            }
        }
    };

    // State for randomized options to prevent hydration mismatch
    const [shuffledOptions, setShuffledOptions] = React.useState<QuizOption[]>([]);

    useEffect(() => {
        if (level && level.options) {
            // Create a copy and shuffle only on client side after mount
            const opts = [...level.options];
            for (let i = opts.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [opts[i], opts[j]] = [opts[j], opts[i]];
            }
            setShuffledOptions(opts);
        } else {
            setShuffledOptions([]);
        }
    }, [level]);

    return (
        <div id="game-card" className="bg-white border-2 border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg relative fade-in">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 rounded-t-2xl overflow-hidden">
                <div
                    className="bg-[#F5A623] h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Quest Title & Dialog */}
            <div className="flex gap-5 mb-6">
                <div className="flex-shrink-0">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=6366f1"
                        alt="Mentor Avatar"
                        className="w-16 h-16 rounded-full border-2 border-[#F5A623] shadow-md bg-orange-50"
                    />
                </div>
                <div className="relative bg-slate-50 p-4 rounded-xl border border-slate-200 w-full bubble-arrow">
                    <div className="flex justify-between items-start">
                        <h2 className="text-[#E09000] font-bold text-sm uppercase mb-1 tracking-wider">
                            {level.title}
                        </h2>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white uppercase ${mode === 'quiz' ? 'bg-[#F5A623]' : 'bg-green-600'}`}>
                            {mode === 'quiz' ? 'Quiz Mode' : 'Terminal Mode'}
                        </span>
                    </div>
                    {/* Render HTML content safely */}
                    <p
                        className="text-slate-600 text-sm md:text-base leading-relaxed mt-1"
                        dangerouslySetInnerHTML={{ __html: level.text }}
                    ></p>
                </div>
            </div>

            {/* GAME AREA */}
            {mode === 'quiz' ? (
                <div className="grid gap-3">
                    {shuffledOptions.map((opt, i) => (
                        <button
                            key={i}
                            disabled={feedback?.visible}
                            onClick={() => onQuizAnswer(opt.correct, opt.reason, i)}
                            className="w-full text-left p-4 rounded-xl border-2 border-slate-100 bg-white hover:border-[#F5A623] hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                            id={`btn-opt-${i}`}
                        >
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center font-bold text-[#E09000] group-hover:bg-[#F5A623] group-hover:text-white shrink-0 transition-colors shadow-sm">
                                    {String.fromCharCode(65 + i)}
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-slate-900 text-base">
                                    {opt.text}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div id="terminal-container" className="rounded-xl overflow-hidden shadow-2xl border border-slate-800">
                    {/* VS Code-like Header */}
                    <div className="bg-[#1e1e1e] border-b border-[#333] px-4 py-2 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="text-slate-500 text-xs font-mono">bash — 80x24</div>
                    </div>

                    <div
                        className="bg-[#1e1e1e] p-4 font-mono text-sm min-h-[200px] flex flex-col cursor-text text-slate-300"
                        onClick={() => terminalInputRef.current?.focus()}
                        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                    >
                        <div className="mb-2 whitespace-pre-wrap opacity-80">{terminalHistory}</div>
                        <div className="flex items-center text-[#F5A623]">
                            <span className="mr-2 font-bold">➜  proyek git:(<span className="text-blue-400">main</span>)</span>
                            <input
                                ref={terminalInputRef}
                                type="text"
                                className="bg-transparent border-none outline-none flex-1 text-white placeholder-slate-600 focus:ring-0 p-0"
                                placeholder=""
                                autoComplete="off"
                                disabled={feedback?.visible}
                                onKeyDown={handleTerminalSubmit}
                            />
                        </div>
                    </div>
                    <div className="bg-[#252526] px-4 py-2 border-t border-[#333] flex justify-between items-center text-xs">
                        <div className="text-slate-400 flex items-center gap-2">
                            <span className="text-[#F5A623]">⚡</span> Hint: <span className="text-slate-300 italic">{level.hint}</span>
                        </div>
                        <span className="text-slate-500">RETURN to run</span>
                    </div>
                    {terminalFeedback.message && (
                        <p className={`mt-2 text-sm font-bold h-6 ${terminalFeedback.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                            {terminalFeedback.message}
                        </p>
                    )}
                </div>
            )}

            {/* FEEDBACK AREA */}
            {feedback?.visible && (
                <div ref={feedbackRef} className={`mt-6 rounded-xl overflow-hidden border-2 animate-fade-in ${feedback.isCorrect ? 'border-green-400 bg-green-50 shadow-[0_0_20px_rgba(74,222,128,0.2)]' : 'border-red-200 bg-red-50 bg-slate-50'}`}>
                    <div className={`p-4 border-b flex items-center gap-3 ${feedback.isCorrect ? 'border-green-200 bg-green-100' : 'border-red-200 bg-red-100'}`}>
                        <i className={`fas ${feedback.isCorrect ? 'fa-check-circle text-green-600' : 'fa-times-circle text-red-500'} text-2xl`}></i>
                        <span className={`font-bold text-lg ${feedback.isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                            {feedback.isCorrect ? 'SUKSES! Misi Selesai' : 'Kurang Tepat'}
                        </span>
                    </div>
                    <div className="p-4">
                        <p className="text-slate-700 text-sm mb-4 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: feedback.desc }}></p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2 mb-1 text-blue-600 font-bold text-xs uppercase">
                                <i className="fas fa-briefcase"></i> Realita Dunia Kerja
                            </div>
                            <p className="text-xs text-blue-700 leading-relaxed italic" dangerouslySetInnerHTML={{ __html: feedback.realWorld }}></p>
                        </div>

                        {feedback.isCorrect ? (
                            <button onClick={onNextLevel} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-md transform hover:scale-[1.02] active:scale-[0.98]">
                                Lanjut Level Berikutnya <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        ) : (
                            <button onClick={onRetryLevel} className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 rounded-lg text-sm transition-all border border-slate-300">
                                Coba Lagi <i className="fas fa-redo ml-2"></i>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameCard;
