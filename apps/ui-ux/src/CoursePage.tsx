'use client';

import { useState } from 'react';
import { Navigation, Phase } from '@belajar/components/Navigation';
import { FondasiSection } from '@belajar/components/FondasiSection';
import { VisualQuiz } from '@belajar/components/VisualQuiz';
import { FixerStudio } from '@belajar/components/FixerStudio';
import { WelcomeHero } from '@belajar/components/shared/WelcomeHero';
import { LanguageProvider } from '@belajar/i18n/LanguageProvider';

function CourseShell() {
    const [phase, setPhase] = useState<Phase>('material');

    return (
        <div className="relative min-h-screen pb-32 pt-8">
            <Navigation phase={phase} setPhase={setPhase} />
            <div className="mx-auto max-w-[1000px] px-4 md:px-6">
                <WelcomeHero />
            </div>
            <main className="mx-auto mt-8 max-w-[1000px] px-4 md:px-6">
                {phase === 'material' && <FondasiSection />}
                {phase === 'quiz' && <VisualQuiz />}
                {phase === 'fixer' && <FixerStudio />}
            </main>
        </div>
    );
}

/**
 * Entry point for the UI/UX Mastery course.
 * Used both by the standalone deployment (`apps/ui-ux`) and by the combined
 * platform route (`/ui-ux-mastery`).
 */
export default function CoursePage() {
    return (
        <LanguageProvider>
            <CourseShell />
        </LanguageProvider>
    );
}
