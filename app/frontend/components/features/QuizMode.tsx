'use client';

import { useState } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { assessmentQuestions } from '@frontend/lib/data/questions';

interface QuizModeProps {
    onPass: () => void;
}

/**
 * QuizMode Component
 * Quiz assessment with progress tracking and feedback
 * Responsive: Full-width questions, touch-friendly buttons
 */
export function QuizMode({ onPass }: QuizModeProps) {
    const [idx, setIdx] = useState(0);
    const [showExp, setShowExp] = useState(false);
    const [wrong, setWrong] = useState(false);

    const q = assessmentQuestions[idx];
    const isLastQuestion = idx === assessmentQuestions.length - 1;
    const progress = ((idx) / assessmentQuestions.length) * 100;

    const answer = (i: number) => {
        if (i === q.ans) {
            setWrong(false);
            setShowExp(true);
        } else {
            setWrong(true);
            setTimeout(() => setWrong(false), 500);
        }
    };

    const nextQuestion = () => {
        if (isLastQuestion) {
            onPass();
        } else {
            setShowExp(false);
            setIdx(idx + 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full bg-[#F8FAFC] p-4 md:p-6 relative overflow-auto">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-slate-200">
                <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="max-w-3xl w-full z-10 mt-4 md:mt-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 md:mb-6">
                    <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                        Question {idx + 1} of {assessmentQuestions.length}
                    </span>
                    <span className="text-[10px] md:text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-500 self-start sm:self-auto border border-slate-200">
                        Select one answer
                    </span>
                </div>

                {/* Question Card */}
                <div
                    className={`
            bg-white border rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 shadow-lg relative 
            transition-all duration-300
            ${wrong ? 'border-red-500 animate-shake' : 'border-slate-200'}
          `}
                >
                    {/* Question Text */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 md:mb-8 text-slate-800 leading-snug">
                        {q.q}
                    </h3>

                    {!showExp ? (
                        /* Answer Options */
                        <div className="grid gap-2 md:gap-3">
                            {q.options.map((o, i) => (
                                <button
                                    key={i}
                                    onClick={() => answer(i)}
                                    className="
                    w-full text-left p-4 md:p-5 rounded-lg md:rounded-xl 
                    border border-slate-200 bg-slate-50 
                    hover:bg-white hover:border-pink-400 hover:shadow-md
                    text-slate-700 transition-all 
                    flex items-center justify-between group
                    active:scale-[0.99]
                  "
                                >
                                    <span className="text-sm md:text-base pr-4">{o}</span>
                                    <div className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-pink-500 shrink-0" />
                                </button>
                            ))}
                        </div>
                    ) : (
                        /* Correct Answer Feedback */
                        <div className="animate-fade-in">
                            {/* Rationale Box */}
                            <div className="bg-emerald-50 border border-emerald-200 p-4 md:p-6 rounded-xl mb-6 md:mb-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check size={14} className="text-white font-bold md:w-4 md:h-4" />
                                    </div>
                                    <h4 className="text-base md:text-lg font-bold text-emerald-600">Correct Answer!</h4>
                                </div>
                                <p className="text-emerald-700 text-sm md:text-base leading-relaxed border-t border-emerald-200 pt-3">
                                    {q.rationale}
                                </p>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextQuestion}
                                className="
                  w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold 
                  py-3 md:py-4 rounded-xl flex items-center justify-center gap-3 
                  transition-all shadow-lg
                  text-sm md:text-base
                "
                            >
                                {isLastQuestion ? "Finish Quiz" : "Next Question"}
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    )}

                    {/* Wrong Answer Toast */}
                    {wrong && (
                        <div className="absolute inset-x-0 bottom-4 md:bottom-6 flex justify-center animate-fade-in">
                            <div className="bg-red-500/90 text-white px-4 md:px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm md:text-base">
                                <AlertCircle size={16} />
                                Incorrect, try again!
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
