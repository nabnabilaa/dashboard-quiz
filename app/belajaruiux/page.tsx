'use client';

import { useState } from 'react';
import { Navigation } from '@belajar/components/Navigation';
import { FondasiSection } from '@belajar/components/FondasiSection';
import { VisualQuiz } from '@belajar/components/VisualQuiz';
import { FixerStudio } from '@belajar/components/FixerStudio';



export default function Home() {
  const [phase, setPhase] = useState<'fondasi' | 'kuis' | 'fixer'>('fondasi');

  return (
    <div className="min-h-screen pb-32 pt-10 relative">
      <Navigation phase={phase} setPhase={setPhase} />
      <main className="mx-auto max-w-[1000px] px-6">
        {phase === 'fondasi' && <FondasiSection />}
        {phase === 'kuis' && <VisualQuiz />}
        {phase === 'fixer' && <FixerStudio />}
      </main>
    </div>
  );
}
