'use client';

import { useGame } from '@frontend/hooks/useGame';
import { IntroMode } from '@frontend/components/features/IntroMode';
import { QuizMode } from '@frontend/components/features/QuizMode';
import { WorkshopMode } from '@frontend/components/features/WorkshopMode';
import { BuilderMode } from '@frontend/components/features/BuilderMode';
import { Navigation } from '@frontend/components/features/Navigation';
import { WelcomeHero } from '@frontend/components/shared/WelcomeHero';
import { LanguageProvider } from '@frontend/i18n/LanguageProvider';

function CourseShell() {
    const {
        phase,
        setPhase,
        completedModules,
        userCodes,
        canvasItems,
        selectedItemId,
        markModuleComplete,
        setCanvasItems,
        setSelectedItemId,
    } = useGame();

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
            {/* Bottom Navigation */}
            <Navigation phase={phase} setPhase={setPhase} />

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pt-5 pb-24 md:px-6">
                {/* Welcome card + language switch */}
                <WelcomeHero />

                {/*
                  The workshop and builder panes size their own panels against the
                  container, so this stays a bounded card that scrolls internally
                  instead of letting the page grow and clip them. The calc reserves
                  room for the hero above and the floating nav below; min-height
                  keeps it usable on short screens.
                */}
                <main className="h-[calc(100vh-280px)] min-h-[520px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    {/* Intro Mode - Learning Materials */}
                    {phase === 'intro' && (
                        <IntroMode onFinish={() => setPhase('quiz')} />
                    )}

                    {/* Quiz Mode - Assessment */}
                    {phase === 'quiz' && (
                        <QuizMode onPass={() => setPhase('workshop')} />
                    )}

                    {/* Workshop Mode - Hands-on Exercises */}
                    {phase === 'workshop' && (
                        <WorkshopMode
                            completedModules={completedModules}
                            onComplete={markModuleComplete}
                            onFinish={() => setPhase('builder')}
                        />
                    )}

                    {/* Builder Mode - Portfolio Creator */}
                    {phase === 'builder' && (
                        <BuilderMode
                            items={canvasItems}
                            setItems={setCanvasItems}
                            selectedId={selectedItemId}
                            setSelectedId={setSelectedItemId}
                            userCodes={userCodes}
                        />
                    )}
                </main>
            </div>
        </div>
    );
}

/**
 * Entry point for the Frontend 101 course.
 * Used both by the standalone deployment (`apps/frontend`) and by the combined
 * platform route (`/frontend`).
 */
export default function CoursePage() {
    return (
        <LanguageProvider>
            <CourseShell />
        </LanguageProvider>
    );
}
