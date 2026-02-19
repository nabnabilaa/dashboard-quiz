'use client';

import { useGame } from '@frontend/hooks/useGame';
import { IntroMode } from '@frontend/components/features/IntroMode';
import { QuizMode } from '@frontend/components/features/QuizMode';
import { WorkshopMode } from '@frontend/components/features/WorkshopMode';
import { BuilderMode } from '@frontend/components/features/BuilderMode';
import { Navigation } from '@frontend/components/features/Navigation';

export default function HomePage() {
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
        <div className="min-h-screen h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col overflow-hidden pb-20">
            {/* Bottom Navigation */}
            <Navigation phase={phase} setPhase={setPhase} />

            {/* Main Content Area */}
            <main className="flex-1 overflow-hidden relative">
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
    );
}
