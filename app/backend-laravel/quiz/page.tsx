
'use client';

import { useState } from 'react';
import { quizQuestions } from '@backend/data/quizzes';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Award, ArrowLeft } from 'lucide-react';
import { cn } from '@backend/lib/utils';
import confetti from 'canvas-confetti';

export default function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [answers, setAnswers] = useState<{ questionId: number; isCorrect: boolean }[]>([]);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

    const handleAnswerSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);

        const isCorrect = index === currentQuestion.correctAnswer;
        if (isCorrect) {
            setScore(score + 1);
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#a855f7', '#ec4899']
            });
        }

        setAnswers([...answers, { questionId: currentQuestion.id, isCorrect }]);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            setQuizCompleted(true);
            if (score > 15) {
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.6 }
                });
            }
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setScore(0);
        setQuizCompleted(false);
        setAnswers([]);
    };


    if (quizCompleted) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white border border-slate-200 p-8 rounded-3xl max-w-md w-full text-center shadow-xl"
                >
                    <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-purple-100">
                        <Award className="w-10 h-10 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2 text-slate-900">Quiz Completed!</h2>
                    <p className="text-slate-500 mb-8">You scored {score} out of {quizQuestions.length}</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                            <div className="text-2xl font-bold text-green-600">{score}</div>
                            <div className="text-xs text-green-600/80 uppercase font-bold tracking-wider">Correct</div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                            <div className="text-2xl font-bold text-red-600">{quizQuestions.length - score}</div>
                            <div className="text-xs text-red-600/80 uppercase font-bold tracking-wider">Incorrect</div>
                        </div>
                    </div>

                    <button
                        onClick={restartQuiz}
                        className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Restart Quiz
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 pt-10 pb-24 relative">
            <Link href="/backend-laravel" className="absolute top-4 left-4 md:top-8 md:left-8 inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Dashboard</span>
            </Link>

            <div className="w-full max-w-md">
                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-slate-500 mb-1.5 font-medium">
                        <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white border border-slate-300 p-5 rounded-2xl shadow-lg w-full mx-auto"
                    >
                        <h2 className="text-xl md:text-2xl font-bold mb-6 leading-snug text-slate-900">
                            {currentQuestion.question}
                        </h2>

                        <div className="space-y-2.5">
                            {currentQuestion.options.map((option, index) => {
                                const isSelected = selectedAnswer === index;
                                const isCorrect = index === currentQuestion.correctAnswer;
                                const showCorrect = isAnswered && isCorrect;
                                const showWrong = isAnswered && isSelected && !isCorrect;

                                let borderColor = "border-slate-200";
                                let bgColor = "bg-white hover:bg-slate-50";
                                let textColor = "text-slate-600";
                                let ring = "";

                                if (showCorrect) {
                                    borderColor = "border-green-500";
                                    bgColor = "bg-green-50";
                                    textColor = "text-green-700 font-bold";
                                    ring = "ring-1 ring-green-500";
                                } else if (showWrong) {
                                    borderColor = "border-red-500";
                                    bgColor = "bg-red-50";
                                    textColor = "text-red-700 font-bold";
                                    ring = "ring-1 ring-red-500";
                                } else if (isSelected) {
                                    borderColor = "border-purple-500";
                                    ring = "ring-1 ring-purple-500";
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(index)}
                                        disabled={isAnswered}
                                        className={cn(
                                            "w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group shadow-sm text-sm md:text-base",
                                            borderColor,
                                            bgColor,
                                            textColor,
                                            ring,
                                            isAnswered ? "cursor-default" : "cursor-pointer"
                                        )}
                                    >
                                        <span className="font-medium">{option}</span>
                                        {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                                        {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                                    </button>
                                );
                            })}
                        </div>

                        {isAnswered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 pt-5 border-t border-slate-100"
                            >
                                {currentQuestion.explanation && (
                                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100 text-blue-800 text-xs md:text-sm flex gap-2">
                                        <div className="mt-0.5">💡</div>
                                        <div>
                                            <strong className="block mb-0.5 text-blue-900">Insight:</strong>
                                            {currentQuestion.explanation}
                                        </div>
                                    </div>
                                )}
                                <button
                                    onClick={handleNextQuestion}
                                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm md:text-base transform hover:-translate-y-0.5"
                                >
                                    {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
