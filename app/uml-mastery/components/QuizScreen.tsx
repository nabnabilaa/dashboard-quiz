import React, { useState } from 'react';
import { theoryQuestions } from '@uml/data/quiz';
import { CheckCircle, XCircle, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';
import { cn } from '@frontend/lib/utils'; // Assuming we can use this, or just use template literals

interface QuizScreenProps {
    onComplete: () => void;
}

export default function QuizScreen({ onComplete }: QuizScreenProps) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const question = theoryQuestions[currentIdx];

    const handleAnswer = (optionIndex: number) => {
        if (showFeedback) return;

        setSelectedOption(optionIndex);
        const correct = optionIndex === question.correct;
        setIsCorrect(correct);

        if (correct) {
            setShowFeedback(true);
        } else {
            // Visual shake effect or temporary wrong state could be added here
            setTimeout(() => {
                setSelectedOption(null);
                setIsCorrect(null);
            }, 500);
        }
    };

    const nextQuestion = () => {
        if (currentIdx < theoryQuestions.length - 1) {
            setCurrentIdx(currentIdx + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowFeedback(false);
        } else {
            onComplete();
        }
    };

    const progress = ((currentIdx + 1) / theoryQuestions.length) * 100;

    return (
        <div className="w-full max-w-3xl mx-auto space-y-6">
            {/* Progress Bar */}
            <div className="bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                    className="bg-[#F5A623] h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className="bg-slate-50 p-6 border-b border-slate-200 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-brand-600 font-bold uppercase tracking-wider text-sm">
                        <HelpCircle size={18} />
                        Kuis Teori
                    </div>
                    <div className="text-slate-500 font-medium text-sm">
                        Soal {currentIdx + 1} / {theoryQuestions.length}
                    </div>
                </div>

                {/* Question */}
                <div className="p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
                        {question.q}
                    </h2>

                    <div className="space-y-3">
                        {question.opts.map((opt, i) => {
                            const isSelected = selectedOption === i;
                            const isWrong = isSelected && isCorrect === false;
                            const isSuccess = isSelected && isCorrect === true;

                            return (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(i)}
                                    disabled={showFeedback}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group relative overflow-hidden
                                        ${isSelected
                                            ? (isCorrect
                                                ? 'border-green-500 bg-green-50 text-green-800'
                                                : 'border-red-500 bg-red-50 text-red-800')
                                            : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-brand-50 text-slate-700'
                                        }
                                    `}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0 transition-colors
                                        ${isSelected
                                            ? (isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700')
                                            : 'bg-slate-100 text-slate-500 group-hover:bg-brand-500 group-hover:text-white'
                                        }
                                    `}>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                    <span className="font-medium text-base">{opt}</span>

                                    {isSuccess && <CheckCircle className="ml-auto text-green-600 animate-in zoom-in spin-in-90 duration-300" />}
                                    {isWrong && <XCircle className="ml-auto text-red-600 animate-in zoom-in duration-300" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback */}
                    {showFeedback && (
                        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                                    <CheckCircle size={24} />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <h4 className="font-bold text-green-800 text-lg">Jawaban Benar!</h4>
                                    <p className="text-green-700 leading-relaxed text-sm">
                                        {question.exp}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={nextQuestion}
                                    className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
                                >
                                    <span>{currentIdx < theoryQuestions.length - 1 ? 'Soal Selanjutnya' : 'Selesai'}</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
