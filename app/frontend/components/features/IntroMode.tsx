'use client';

import { useState } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { introSlides } from '@frontend/lib/data/slides';
import { SlideVisuals } from '@frontend/components/visuals/SlideVisuals';

interface IntroModeProps {
    onFinish: () => void;
}

// Tailwind safeguards for dynamic color classes
const themeMap: Record<string, {
    badge: string;
    badgeText: string;
    badgeBorder: string;
    button: string;
    buttonHover: string;
    gradientFrom: string;
}> = {
    blue: {
        badge: 'bg-blue-50', badgeText: 'text-blue-600', badgeBorder: 'border-blue-200',
        button: 'bg-blue-600', buttonHover: 'hover:bg-blue-500', gradientFrom: 'from-blue-50'
    },
    indigo: {
        badge: 'bg-indigo-50', badgeText: 'text-indigo-600', badgeBorder: 'border-indigo-200',
        button: 'bg-indigo-600', buttonHover: 'hover:bg-indigo-500', gradientFrom: 'from-indigo-50'
    },
    red: {
        badge: 'bg-red-50', badgeText: 'text-red-600', badgeBorder: 'border-red-200',
        button: 'bg-red-600', buttonHover: 'hover:bg-red-500', gradientFrom: 'from-red-50'
    },
    orange: {
        badge: 'bg-orange-50', badgeText: 'text-orange-600', badgeBorder: 'border-orange-200',
        button: 'bg-[#F5A623]', buttonHover: 'hover:bg-[#E09000]', gradientFrom: 'from-orange-50'
    },
    yellow: {
        badge: 'bg-yellow-50', badgeText: 'text-yellow-600', badgeBorder: 'border-yellow-200',
        button: 'bg-yellow-600', buttonHover: 'hover:bg-yellow-500', gradientFrom: 'from-yellow-50'
    },
    green: {
        badge: 'bg-green-50', badgeText: 'text-green-600', badgeBorder: 'border-green-200',
        button: 'bg-green-600', buttonHover: 'hover:bg-green-500', gradientFrom: 'from-green-50'
    },
    purple: {
        badge: 'bg-purple-50', badgeText: 'text-purple-600', badgeBorder: 'border-purple-200',
        button: 'bg-purple-600', buttonHover: 'hover:bg-purple-500', gradientFrom: 'from-purple-50'
    },
    pink: {
        badge: 'bg-pink-50', badgeText: 'text-pink-600', badgeBorder: 'border-pink-200',
        button: 'bg-pink-600', buttonHover: 'hover:bg-pink-500', gradientFrom: 'from-pink-50'
    },
    teal: {
        badge: 'bg-teal-50', badgeText: 'text-teal-600', badgeBorder: 'border-teal-200',
        button: 'bg-teal-600', buttonHover: 'hover:bg-teal-500', gradientFrom: 'from-teal-50'
    },
    cyan: {
        badge: 'bg-cyan-50', badgeText: 'text-cyan-600', badgeBorder: 'border-cyan-200',
        button: 'bg-cyan-600', buttonHover: 'hover:bg-cyan-500', gradientFrom: 'from-cyan-50'
    }
};

/**
 * IntroMode Component
 * Slide-based learning content presentation
 * Responsive: Stacked on mobile, side-by-side on desktop
 */
export function IntroMode({ onFinish }: IntroModeProps) {
    const [slideIdx, setSlideIdx] = useState(0);
    const slide = introSlides[slideIdx];
    const theme = themeMap[slide.color] || themeMap.blue; // Fallback to blue

    const nextSlide = () => {
        if (slideIdx < introSlides.length - 1) {
            setSlideIdx(slideIdx + 1);
        } else {
            onFinish();
        }
    };

    const prevSlide = () => {
        if (slideIdx > 0) {
            setSlideIdx(slideIdx - 1);
        }
    };

    const isLastSlide = slideIdx === introSlides.length - 1;

    return (
        <div className="flex flex-col items-center justify-center h-full bg-[#F8FAFC] p-4 md:p-6 relative overflow-auto">
            <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch justify-center min-h-0 lg:h-[80vh]">

                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col justify-center text-center lg:text-left z-10 order-2 lg:order-1">
                    {/* Progress Badge */}
                    <div className="mb-4">
                        <span className={`
              ${theme.badge} ${theme.badgeText} 
              px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold 
              border ${theme.badgeBorder} uppercase tracking-wider
              inline-block
            `}>
                            Materi {slideIdx + 1} dari {introSlides.length}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
                        {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                        {slide.desc}
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 justify-center lg:justify-start mt-auto">
                        {slideIdx > 0 && (
                            <button
                                onClick={prevSlide}
                                className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold flex items-center gap-2 border border-slate-300 text-slate-500 hover:bg-slate-100 transition-all text-sm md:text-base"
                            >
                                <ChevronLeft size={18} />
                                <span className="hidden sm:inline">Kembali</span>
                            </button>
                        )}
                        <button
                            onClick={nextSlide}
                            className={`
                px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold flex items-center gap-2 md:gap-3 
                shadow-lg hover:scale-105 transition-all text-sm md:text-base
                ${isLastSlide
                                    ? 'bg-green-600 hover:bg-green-500 text-white'
                                    : `${theme.button} ${theme.buttonHover} text-white`
                                }
              `}
                        >
                            {isLastSlide ? "Mulai Kuis" : "Lanjut"}
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Right: Visual Container */}
                <div className="flex-1 w-full bg-white border border-slate-200 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg p-4 md:p-6 lg:p-8 relative overflow-hidden order-1 lg:order-2 min-h-[280px] md:min-h-[350px]">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradientFrom} to-transparent opacity-50`}></div>

                    {/* Noise Texture */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
                    ></div>

                    {/* Visual Content */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <SlideVisuals slide={slide} />
                    </div>
                </div>
            </div>
        </div>
    );
}
