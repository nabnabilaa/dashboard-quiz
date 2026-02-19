'use client';
import React, { useState } from 'react';
import { Navigation, UmlMode } from '@uml/components/Navigation';
import WelcomeScreen from '@uml/components/WelcomeScreen';
import LearningScreen from '@uml/components/LearningScreen';
import QuizScreen from '@uml/components/QuizScreen';
import KnowledgeScreen from '@uml/components/KnowledgeScreen';
import VisualMenuScreen from '@uml/components/VisualMenuScreen';
import VisualBuilder from '@uml/components/VisualBuilder';

export default function Home() {
  const [mode, setMode] = useState<UmlMode>('materi');
  const [activeScenario, setActiveScenario] = useState<{ id: string, type: 'usecase' | 'activity' } | null>(null);

  // MAPPING LEGACY SCREENS TO NEW TABS
  // 'materi' -> LearningScreen
  // 'quiz' -> QuizScreen
  // 'case-study' -> KnowledgeScreen (Case Studies)
  // 'diagram-builder' -> VisualMenuScreen / VisualBuilder

  const renderContent = () => {
    switch (mode) {
      case 'materi':
        return <LearningScreen onComplete={() => setMode('quiz')} />;
      case 'quiz':
        return <QuizScreen onComplete={() => setMode('case-study')} />;
      case 'case-study':
        return <KnowledgeScreen onNavigate={(target) => { }} />;
      case 'diagram-builder':
        if (activeScenario) {
          return (
            <VisualBuilder
              scenarioId={activeScenario.id}
              initialType={activeScenario.type}
              onBack={() => setActiveScenario(null)}
            />
          );
        }
        return (
          <VisualMenuScreen
            onStartBuilder={(id, type) => setActiveScenario({ id, type })}
            onBack={() => setMode('case-study')}
          />
        );
      default:
        return <LearningScreen onComplete={() => setMode('quiz')} />;
    }
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-slate-50 font-sans pb-24">
      {/* Navigation */}
      <Navigation mode={mode} setMode={setMode} />

      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-6 relative z-10">
        {renderContent()}
      </main>
    </div>
  );
}
