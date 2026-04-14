import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, AlertTriangle, Home, XCircle, X, Search, Menu } from 'lucide-react';
import { fixers } from '@belajar/data/fixers';
import { FixerOption } from '@belajar/types';

interface RenderFixerVisualProps {
    type: string;
    fixed: boolean;
}

const RenderFixerVisual = ({ type, fixed }: RenderFixerVisualProps) => {
    const containerStyle = "w-full max-w-[280px] bg-white rounded-xl border border-slate-200 p-5 flex flex-col items-center justify-center min-h-[150px]";

    if (type === 'spacing') return <div className={`${containerStyle} ${fixed ? 'p-5' : 'p-0'}`}><div className="w-full h-[50px] bg-blue-500"></div><div className={fixed ? 'p-0' : 'p-[2px]'}>Text</div></div>;
    if (type === 'cta_color') return <div className={containerStyle}><button className={`px-5 py-2.5 rounded-lg border-none ${fixed ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'}`}>BUY</button></div>;
    if (type === 'icon') return <div className={containerStyle}>{fixed ? <Home size={40} className="text-indigo-600" /> : <XCircle size={40} className="text-red-500" />}</div>;
    if (type === 'contrast_fix') return <div className={containerStyle}><span className={`text-[20px] font-bold ${fixed ? 'text-slate-800' : 'text-slate-100'}`}>Hello World</span></div>;
    if (type === 'alignment_fix') return <div className={containerStyle}><p className={`text-xs ${fixed ? 'text-left' : 'text-center'}`}>This text is easier to read if it's left-aligned rather than center-aligned.</p></div>;
    if (type === 'input_label_fix') return <div className={containerStyle}>{fixed && <label className="self-start text-[10px]">Email</label>}<input placeholder={fixed ? "" : "Email..."} className="w-full p-1.5 border border-slate-300 rounded" /></div>;
    if (type === 'touch_target_fix') return <div className={containerStyle}><button className={`rounded-lg border-none bg-indigo-600 text-white ${fixed ? 'px-[30px] py-[15px] text-base' : 'p-[5px] text-[10px]'}`}>Tap Me</button></div>;
    if (type === 'modal_close_fix') return <div className={`${containerStyle} relative bg-slate-800`}><div className="bg-white w-[150px] h-[100px] rounded-lg relative">{fixed && <div className="absolute top-[5px] right-[5px] cursor-pointer"><X size={14} /></div>}<div className="text-center mt-[30px]">Ad</div></div></div>;
    if (type === 'hierarchy_fix') return <div className={containerStyle}><div className={`${fixed ? 'text-2xl font-bold' : 'text-sm font-normal'}`}>Main Heading</div><div className="text-sm">Subheading</div></div>;
    if (type === 'error_msg_fix') return <div className={containerStyle}><input className="border border-red-500 p-1.5 rounded" />{fixed && <div className="text-red-500 text-[10px] mt-[5px]">Invalid email</div>}</div>;
    if (type === 'empty_state_fix') return <div className={containerStyle}>{fixed ? <div className="text-center"><Search className="mx-auto" /><div className="text-[10px]">Empty</div><button className="text-[10px] mt-[5px] px-[5px] border border-slate-300 rounded">Search</button></div> : <div className="text-xl text-slate-300">404</div>}</div>;
    if (type === 'loading_fix') return <div className={containerStyle}>{fixed ? <div className="animate-pulse w-[100px] h-[10px] bg-slate-300 rounded"></div> : <div className="w-[100px] h-[100px] bg-black"></div>}</div>;
    if (type === 'aspect_ratio_fix') return <div className={`${containerStyle} p-0`}><div className="w-full h-[150px] bg-slate-300 flex items-center justify-center overflow-hidden rounded-xl"><div className={`bg-indigo-600 rounded-full ${fixed ? 'w-[100px] h-[100px]' : 'w-[200px] h-[50px]'}`}></div></div></div>;
    if (type === 'menu_simplify_fix') return <div className={containerStyle}>{fixed ? <Menu /> : <div className="text-[8px]">Home Profile Setting About Help Contact</div>}</div>;
    if (type === 'dark_mode_fix') return <div className={`${containerStyle.replace('bg-white', '')} text-white ${fixed ? 'bg-[#121212]' : 'bg-black'}`}>{fixed ? "Dark Gray" : "Pure Black"}</div>;

    return <div className={containerStyle}>{fixed ? <Check size={40} className="text-green-600" /> : <AlertTriangle size={40} className="text-orange-500" />}</div>;
};

export const FixerStudio = () => {
    const [level, setLevel] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
    const [isCompleted, setIsCompleted] = useState(false);

    // Only access task if not completed to prevent out-of-bounds error
    const task = !isCompleted ? fixers[level] : fixers[0];

    useEffect(() => { setIsFixed(false); setFeedback(null); }, [level]);

    const checkAnswer = (opt: FixerOption) => {
        if (opt.correct) {
            setIsFixed(true);
            setFeedback({ type: 'success', msg: opt.feedback });
        } else {
            setFeedback({ type: 'error', msg: opt.feedback });
            setTimeout(() => setFeedback(null), 1000);
        }
    };

    const nextLevel = () => {
        if (level < fixers.length - 1) {
            setLevel(level + 1);
        } else {
            setIsCompleted(true);
        }
    };

    const restart = () => {
        setLevel(0);
        setIsCompleted(false);
        setIsFixed(false);
        setFeedback(null);
    };

    if (isCompleted) {
        return (
            <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[20px] bg-slate-100 p-10 text-center shadow-inner">
                <div className="mb-6 rounded-full bg-indigo-100 p-6">
                    <Check size={64} className="text-indigo-600" />
                </div>
                <h2 className="mb-4 text-3xl font-extrabold text-slate-900">Congratulations!</h2>
                <p className="mb-8 max-w-md text-slate-600">
                    You have successfully completed all UI fix challenges. Your design skills are getting sharper!
                </p>
                <button
                    onClick={restart}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition-all hover:bg-indigo-700"
                >
                    Play Again <ArrowRight size={16} />
                </button>
            </div>
        );
    }

    return (
        <div className="grid min-h-[500px] grid-cols-1 gap-[30px] md:grid-cols-[1fr_320px]">
            <div className="relative flex items-center justify-center rounded-[20px] bg-slate-100 p-6 md:p-10 shadow-inner">
                <RenderFixerVisual type={task.type} fixed={isFixed} />
                {feedback && (
                    <div className={`absolute top-5 animate-[pop-in_0.3s_ease-out] rounded-full px-4 py-1.5 text-sm font-semibold text-white shadow-lg ${feedback.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
                        {feedback.msg}
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-center rounded-[20px] border border-white bg-white p-6 shadow-md">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">Level {level + 1}</h3>
                <h2 className="mb-4 text-xl font-extrabold text-slate-900">{task.title}</h2>
                <p className="mb-6 text-slate-600">{isFixed ? "Great!" : task.problem}</p>

                {!isFixed && (
                    <div className="flex flex-col gap-2">
                        {task.options.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => checkAnswer(opt)}
                                className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left font-medium text-slate-700 transition-all hover:border-indigo-500 hover:bg-indigo-50"
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                )}

                {isFixed && (
                    <button
                        onClick={nextLevel}
                        className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-bold text-white transition-all hover:bg-indigo-700"
                    >
                        Continue <ArrowRight size={16} />
                    </button>
                )}
            </div>
        </div>
    );
};
