
'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { builderTasks } from '@backend/data/problems';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Book, Check, AlertCircle, ChevronRight, Lightbulb, ArrowLeft } from 'lucide-react';
import { cn } from '@backend/lib/utils';
import confetti from 'canvas-confetti';

export default function BuilderPage() {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [code, setCode] = useState('');
    const [output, setOutput] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
    const [showDictionary, setShowDictionary] = useState(false);
    const [showHints, setShowHints] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // New state for mobile sidebar toggle

    const task = builderTasks[currentTaskIndex];
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // Reset state on task change
        setCode(task.initialCode);
        setOutput(null);
        setShowHints(false);
        setShowAnswer(false);
    }, [currentTaskIndex, task]);

    const handleRun = () => {
        setOutput({ type: 'info', message: 'Running Tests...' });

        setTimeout(() => {
            // Normalize code for comparison (remove extra spaces/newlines)
            const normalizedCode = code.replace(/\s+/g, ' ').trim();
            const regex = new RegExp(task.solutionPattern, 'i');

            if (regex.test(normalizedCode)) {
                setOutput({ type: 'success', message: 'Test Passed! Logic is correct.' });
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } else {
                setOutput({ type: 'error', message: 'Test Failed. Logic does not match requirements.' });
            }
        }, 800);
    };

    const handleNext = () => {
        if (currentTaskIndex < builderTasks.length - 1) {
            setCurrentTaskIndex(currentTaskIndex + 1);
        }
    };
    return (
        <div className="h-[100dvh] pb-20 flex flex-col md:flex-row bg-[#1e1e1e] overflow-hidden">
            {/* Mobile Header for Task Toggle */}
            <div className="md:hidden h-14 bg-[#18181b] border-b border-white/10 flex items-center justify-between px-4 z-20">
                <div className="flex items-center gap-3">
                    <Link href="/backend-laravel" className="text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-purple-400" />
                        <span className="font-bold text-sm text-gray-200">Task {currentTaskIndex + 1}</span>
                    </div>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-xs px-3 py-1.5 bg-white/10 rounded-md text-white font-medium"
                >
                    {isSidebarOpen ? 'Close Info' : 'View Task'}
                </button>
            </div>

            {/* Sidebar: Problem & Dictionary */}
            <div className={cn(
                "w-full md:w-1/3 border-r border-white/10 flex flex-col bg-[#18181b] absolute md:relative z-10 h-full transition-transform duration-300 transform md:transform-none",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}>
                <div className="hidden md:flex p-4 border-b border-white/10 bg-[#09090b] items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/backend-laravel" className="text-gray-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                        <div className="h-4 w-px bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-purple-400" />
                            <h2 className="font-bold text-sm text-gray-300">Laravel Builder</h2>
                        </div>
                    </div>
                    <span className="text-xs text-gray-500">Task {currentTaskIndex + 1}/{builderTasks.length}</span>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div>
                        <h1 className="text-xl font-bold text-white mb-2">{task.title}</h1>
                        <p className="text-gray-400 text-sm leading-relaxed">{task.description}</p>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => setShowHints(!showHints)}
                            className="flex items-center text-xs font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
                        >
                            <Lightbulb className="w-3 h-3 mr-1" />
                            {showHints ? "Hide Hints" : "Show Hints"}
                        </button>

                        <AnimatePresence>
                            {showHints && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="list-disc list-inside text-xs text-yellow-500/80 space-y-1 pl-2 border-l-2 border-yellow-500/20"
                                >
                                    {task.hints.map((hint, i) => (
                                        <li key={i}>{hint}</li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>

                        {/* Answer Key Section */}
                        <div className="pt-2">
                            <button
                                onClick={() => setShowAnswer(!showAnswer)}
                                className="flex items-center text-xs font-bold text-green-500 hover:text-green-400 transition-colors"
                            >
                                <Check className="w-3 h-3 mr-1" />
                                {showAnswer ? "Sembunyikan Kunci" : "Lihat Kunci Jawaban"}
                            </button>

                            <AnimatePresence>
                                {showAnswer && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="mt-2"
                                    >
                                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                                            <p className="text-[10px] text-green-400 mb-1 font-semibold uppercase tracking-wider">Jawaban:</p>
                                            <pre className="text-xs text-green-300 font-mono overflow-x-auto whitespace-pre-wrap">
                                                {task.answerKey}
                                            </pre>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                        <button
                            onClick={() => setShowDictionary(!showDictionary)}
                            className="flex items-center justify-between w-full text-sm font-bold text-gray-300 mb-4 hover:text-white"
                        >
                            <span className="flex items-center gap-2">
                                <Book className="w-4 h-4" /> Dictionary
                            </span>
                            <ChevronRight className={cn("w-4 h-4 transition-transform", showDictionary && "rotate-90")} />
                        </button>

                        <AnimatePresence>
                            {showDictionary && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="space-y-3 overflow-hidden"
                                >
                                    {task.dictionary.map((item, i) => (
                                        <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors group cursor-help">
                                            <code className="text-purple-300 font-mono text-xs block mb-1">{item.label}</code>
                                            <p className="text-gray-500 text-xs hidden group-hover:block transition-all">{item.description}</p>
                                            <pre className="text-[10px] text-gray-400 mt-1 opacity-50">{item.code}</pre>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex flex-col h-full relative z-0">
                {/* Toolbar */}
                <div className="h-12 bg-[#1e1e1e] border-b border-white/10 flex items-center justify-end px-4 gap-2">
                    <button
                        onClick={handleRun}
                        className="flex items-center gap-2 px-4 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded text-xs font-bold transition-all"
                    >
                        <Play className="w-3 h-3" /> Run Code
                    </button>
                    {output?.type === 'success' && (
                        <button
                            onClick={handleNext}
                            className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold transition-all animate-in fade-in zoom-in"
                        >
                            Next Task <ChevronRight className="w-3 h-3" />
                        </button>
                    )}
                </div>

                {/* Code Input */}
                <div className="flex-1 relative bg-[#1e1e1e]">
                    <textarea
                        ref={textareaRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck={false}
                        className="w-full h-full bg-[#1e1e1e] text-gray-300 font-mono text-sm p-6 resize-none focus:outline-none"
                        style={{ tabSize: 4 }}
                    />
                </div>

                {/* Console / Output */}
                <div className="h-32 md:h-48 bg-[#09090b] border-t border-white/10 p-4 font-mono text-sm overflow-y-auto">
                    <div className="text-gray-500 text-xs mb-2">Terminal Output</div>
                    {output ? (
                        <div className={cn(
                            "flex items-center gap-2",
                            output.type === 'success' ? "text-green-400" :
                                output.type === 'error' ? "text-red-400" : "text-blue-400"
                        )}>
                            {output.type === 'success' && <Check className="w-4 h-4" />}
                            {output.type === 'error' && <AlertCircle className="w-4 h-4" />}
                            {output.type === 'info' && <div className="w-4 h-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent" />}
                            <span>{output.message}</span>
                        </div>
                    ) : (
                        <span className="text-gray-600 italic">Ready usually means nothing is running...</span>
                    )}
                </div>
            </div>
        </div>
    );
}
