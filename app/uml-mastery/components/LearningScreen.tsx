import React from 'react';
import { learningSlides } from '@uml/data/learning';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, RotateCcw } from 'lucide-react';
import { cn } from '@frontend/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface LearningScreenProps {
    onComplete: () => void;
}

export default function LearningScreen({ onComplete }: LearningScreenProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    const slide = learningSlides[currentIndex];

    // Scroll to top helper
    const scrollToTop = () => {
        const scroller = document.getElementById('slide-content-scroller');
        if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const nextSlide = () => {
        if (currentIndex < learningSlides.length - 1) {
            setDirection(1);
            setCurrentIndex(currentIndex + 1);
            setTimeout(scrollToTop, 100);
        } else {
            onComplete();
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(currentIndex - 1);
            setTimeout(scrollToTop, 100);
        }
    };

    const progress = ((currentIndex + 1) / learningSlides.length) * 100;

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    return (
        <div className="w-full h-[calc(100vh-120px)] max-h-[800px] min-h-[500px] max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

            {/* LEFT SIDE: Visual Context & Progress */}
            <div className="w-full md:w-[35%] lg:w-[30%] bg-gradient-to-br from-[#F5A623] via-[#ffbd2e] to-[#E09000] text-white flex flex-col relative overflow-hidden shrink-0">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-20"></div>
                </div>

                {/* Header Info */}
                <div className="p-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wide uppercase mb-6">
                        <BookOpen size={12} />
                        <span>Materi Pembelajaran</span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2 text-white">
                        {slide.title}
                    </h1>
                    <p className="text-orange-50 text-sm opacity-90 leading-relaxed">
                        Topik {currentIndex + 1} dari {learningSlides.length}
                    </p>
                </div>

                {/* Centered Icon / Graphic */}
                <div className="flex-1 flex items-center justify-center p-6 relative z-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 animate-pulse-slow"></div>
                        <div className="text-8xl md:text-9xl relative drop-shadow-2xl transform transition-transform duration-700 hover:scale-110">
                            {slide.icon}
                        </div>
                    </div>
                </div>

                {/* Progress Footer */}
                <div className="p-6 bg-black/5 backdrop-blur-sm relative z-10 mt-auto">
                    <div className="flex justify-between text-xs font-medium text-orange-50 mb-2">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Content & Navigation */}
            <div className="flex-1 flex flex-col h-full relative bg-slate-50/50">

                {/* Scrollable Content */}
                <div id="slide-content-scroller" className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar scroll-smooth">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div
                                className="prose prose-slate prose-lg max-w-none 
                                prose-headings:text-slate-800 prose-headings:font-bold prose-headings:tracking-tight
                                prose-h3:text-xl prose-h3:mb-3
                                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-base
                                prose-strong:text-[#E09000] prose-strong:font-bold
                                prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-[#F5A623] prose-li:mb-2
                                prose-table:border-collapse prose-table:w-full prose-table:my-6 prose-table:shadow-sm prose-table:rounded-lg prose-table:overflow-hidden
                                prose-th:bg-[#FFF8EB] prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:text-[#7A4A00] prose-th:border-b prose-th:border-[#FFEFC6]
                                prose-td:p-4 prose-td:border-b prose-td:border-slate-200 prose-td:text-slate-700
                                [&_blockquote]:border-l-4 [&_blockquote]:border-[#F5A623] [&_blockquote]:bg-[#FFF8EB]/50 [&_blockquote]:py-3 [&_blockquote]:px-5 [&_blockquote]:rounded-r-lg [&_blockquote]:text-[#945A00] [&_blockquote]:italic
                                [&_.visual-box]:bg-white [&_.visual-box]:border [&_.visual-box]:border-slate-200 [&_.visual-box]:rounded-xl [&_.visual-box]:p-5 [&_.visual-box]:my-6 [&_.visual-box]:shadow-sm [&_.visual-box]:flex [&_.visual-box]:flex-col [&_.visual-box]:items-center [&_.visual-box]:gap-4
                                [&_.visual-flow]:flex [&_.visual-flow]:flex-wrap [&_.visual-flow]:gap-3 [&_.visual-flow]:items-center [&_.visual-flow]:justify-center [&_.visual-flow]:my-4
                                [&_.flow-item]:px-4 [&_.flow-item]:py-2 [&_.flow-item]:bg-white [&_.flow-item]:border [&_.flow-item]:border-[#FFDF88] [&_.flow-item]:rounded-lg [&_.flow-item]:shadow-sm [&_.flow-item]:font-semibold [&_.flow-item]:text-slate-700
                                [&_.flow-arrow]:text-[#F5A623] [&_.flow-arrow]:font-bold
                                [&_img]:rounded-xl [&_img]:shadow-md"
                                dangerouslySetInnerHTML={{ __html: slide.content }}
                            />
                        </motion.div>
                    </AnimatePresence>
                    {/* Padding at bottom for visibility */}
                    <div className="h-10"></div>
                </div>

                {/* Footer Navigation */}
                <div className="p-4 md:p-6 bg-white border-t border-slate-200 flex items-center justify-between shrink-0 z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 border-2",
                            currentIndex === 0
                                ? "border-slate-100 text-slate-300 cursor-not-allowed bg-slate-50"
                                : "border-slate-200 text-slate-600 hover:border-[#FFDF88] hover:bg-[#FFF8EB] hover:text-[#E09000] active:scale-95"
                        )}
                    >
                        <ArrowLeft size={18} />
                        <span>Sebelumnya</span>
                    </button>

                    <button
                        onClick={nextSlide}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white transition-all duration-200 shadow-lg shadow-[#F5A623]/30 active:scale-95",
                            currentIndex === learningSlides.length - 1
                                ? "bg-green-600 hover:bg-green-700 ring-2 ring-green-600/20"
                                : "bg-[#F5A623] hover:bg-[#E09000] ring-2 ring-[#F5A623]/20"
                        )}
                    >
                        <span>{currentIndex === learningSlides.length - 1 ? "Selesai & Lanjut Kuis" : "Selanjutnya"}</span>
                        {currentIndex === learningSlides.length - 1 ? <CheckCircle size={18} /> : <ArrowRight size={18} />}
                    </button>
                </div>
            </div>
        </div>
    );
}
