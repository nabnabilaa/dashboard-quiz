"use client";

import React, { useState, useEffect } from 'react';
import { Lightbulb, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { quizzes } from '@belajar/data/quizzes';
import { QuizBtnHierarchy } from './quiz-visuals/QuizBtnHierarchy';
import { QuizProximity } from './quiz-visuals/QuizProximity';
import { QuizLineHeight } from './quiz-visuals/QuizLineHeight';
import { QuizScanPattern } from './quiz-visuals/QuizScanPattern';
import { QuizNavRisk } from './quiz-visuals/QuizNavRisk';
import { QuizIconLabel } from './quiz-visuals/QuizIconLabel';
import { QuizFeedbackFail } from './quiz-visuals/QuizFeedbackFail';
import { QuizFidelityRisk } from './quiz-visuals/QuizFidelityRisk';
import { QuizGutter } from './quiz-visuals/QuizGutter';
import { QuizColorBlind } from './quiz-visuals/QuizColorBlind';
import { QuizThumbReach } from './quiz-visuals/QuizThumbReach';
import { QuizSkeletonWhy } from './quiz-visuals/QuizSkeletonWhy';
import { QuizBlackSmear } from './quiz-visuals/QuizBlackSmear';
import { QuizEmptyGoal } from './quiz-visuals/QuizEmptyGoal';
import { QuizCtaEmphasis } from './quiz-visuals/QuizCtaEmphasis';
import { QuizPlaceholderMemory } from './quiz-visuals/QuizPlaceholderMemory';
import { QuizBreadcrumbNeed } from './quiz-visuals/QuizBreadcrumbNeed';
import { QuizFlatAffordance } from './quiz-visuals/QuizFlatAffordance';
import { QuizErrorUxw } from './quiz-visuals/QuizErrorUxw';
import { QuizJustifiedBad } from './quiz-visuals/QuizJustifiedBad';
import { Quiz } from '@belajar/types';
import { useLang } from '@belajar/i18n/LanguageProvider';
import { ui } from '@belajar/i18n/ui';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const QuizRenderer = ({ type }: { type: string }) => {
    const t = ui[useLang()];
    switch (type) {
        case 'quiz_btn_hierarchy': return <QuizBtnHierarchy />;
        case 'quiz_proximity': return <QuizProximity />;
        case 'quiz_line_height': return <QuizLineHeight />;
        case 'quiz_scan_pattern': return <QuizScanPattern />;
        case 'quiz_nav_risk': return <QuizNavRisk />;
        case 'quiz_icon_label': return <QuizIconLabel />;
        case 'quiz_feedback_fail': return <QuizFeedbackFail />;
        case 'quiz_fidelity_risk': return <QuizFidelityRisk />;
        case 'quiz_gutter': return <QuizGutter />;
        case 'quiz_color_blind': return <QuizColorBlind />;
        case 'quiz_thumb_reach': return <QuizThumbReach />;
        case 'quiz_skeleton_why': return <QuizSkeletonWhy />;
        case 'quiz_black_smear': return <QuizBlackSmear />;
        case 'quiz_empty_goal': return <QuizEmptyGoal />;
        case 'quiz_cta_emphasis': return <QuizCtaEmphasis />;
        case 'quiz_placeholder_memory': return <QuizPlaceholderMemory />;
        case 'quiz_breadcrumb_need': return <QuizBreadcrumbNeed />;
        case 'quiz_flat_affordance': return <QuizFlatAffordance />;
        case 'quiz_error_uxw': return <QuizErrorUxw />;
        case 'quiz_justified_bad': return <QuizJustifiedBad />;
        default: return <div>{t.quizVisualFallback}</div>;
    }
};

export const VisualQuiz = () => {
    const lang = useLang();
    const t = ui[lang].quiz;
    const questions = quizzes[lang];

    const [qIdx, setQIdx] = useState(0);
    const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
    const [shake, setShake] = useState(false);
    const [finished, setFinished] = useState(false);

    // Get current question
    const q = questions[Math.min(qIdx, questions.length - 1)];

    // State for shuffled options to ensure client-side consistency
    const [shuffledOptions, setShuffledOptions] = useState<Quiz['opts']>([]);

    useEffect(() => {
        // Shuffle options whenever the question (or language) changes
        setShuffledOptions(shuffleArray(q.opts));
        setStatus('idle');
    }, [q]);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setStatus('correct');
        } else {
            setStatus('wrong');
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    const nextQuestion = () => {
        setStatus('idle');
        if (qIdx < questions.length - 1) setQIdx(qIdx + 1);
        else setFinished(true);
    };

    const restart = () => {
        setQIdx(0);
        setStatus('idle');
        setFinished(false);
    };

    if (finished) {
        return (
            <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[20px] border border-white bg-white p-10 text-center shadow-md">
                <div className="mb-6 rounded-full bg-emerald-100 p-6">
                    <Check size={64} className="text-emerald-600" />
                </div>
                <h2 className="mb-4 text-3xl font-extrabold text-slate-900">{t.finishedTitle}</h2>
                <p className="mb-8 max-w-md text-slate-600">{t.finished}</p>
                <button
                    onClick={restart}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition-all hover:bg-indigo-700"
                >
                    {t.playAgain} <ArrowRight size={16} />
                </button>
            </div>
        );
    }

    return (
        <div className="flex min-h-[500px] flex-col justify-center rounded-[20px] border border-white bg-white p-6 md:p-10 shadow-md">
            <div className="mx-auto w-full max-w-[600px]">
                <div className="mb-5 flex justify-between text-xs font-bold text-slate-500">
                    <span>{t.counter(qIdx + 1, questions.length)}</span>
                    <span className="rounded border border-red-500 px-1.5 py-0.5 text-red-500">
                        {t.hardMode}
                    </span>
                </div>
                <div className="mb-10 h-1.5 w-full rounded-full bg-slate-100">
                    <div
                        className="h-full rounded-full bg-indigo-600 transition-all duration-300"
                        style={{ width: `${((qIdx + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
                <h2 className="mb-[30px] text-center text-[1.3rem] font-bold text-slate-900">{q.q}</h2>

                <div className="mb-[30px]">
                    <QuizRenderer type={q.visualType} />
                </div>

                <div className={`flex flex-col gap-2.5 ${shake ? 'animate-shake' : ''}`}>
                    {shuffledOptions.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => status !== 'correct' && handleAnswer(opt.c)}
                            disabled={status === 'correct'}
                            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 text-left text-[0.95rem] font-medium transition-all duration-200 ${status === 'correct'
                                ? 'cursor-default opacity-50'
                                : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-100'
                                }`}
                            style={{
                                borderColor: status === 'correct' && opt.c ? 'green' : undefined,
                                opacity: status === 'correct' && !opt.c ? 0.5 : 1,
                            }}
                        >
                            {opt.t}
                            {status === 'wrong' && !opt.c && (
                                <span className="text-xs font-bold text-red-600">{t.wrongOption}</span>
                            )}
                            {status === 'correct' && opt.c && <Check size={20} className="text-emerald-600" />}
                        </button>
                    ))}
                </div>

                {status === 'wrong' && (
                    <div className="animate-slide-up mt-5 rounded-lg bg-red-50 p-4 text-center font-semibold text-red-700">
                        <AlertCircle size={20} className="mr-1.5 inline align-middle" />
                        {t.retry}
                    </div>
                )}

                {status === 'correct' && (
                    <div className="animate-slide-up mt-[30px] rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                        <div className="mb-2.5 flex items-center gap-2.5 font-bold text-emerald-700">
                            <Lightbulb size={24} /> <span>{t.insight}</span>
                        </div>
                        <p className="m-0 text-[0.95rem] leading-relaxed text-emerald-800">{q.feedback}</p>
                        <button
                            onClick={nextQuestion}
                            className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700"
                        >
                            {t.next} <ArrowRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

