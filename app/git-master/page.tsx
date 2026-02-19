'use client';

import React, { useState } from 'react';
import VisualFlow from '@git/components/VisualFlow';
import GameCard from '@git/components/GameCard';
import SidePanel from '@git/components/SidePanel';
import Modals from '@git/components/Modals';
import { useGameEngine } from '@git/hooks/useGameEngine';
import { Navigation, Mode } from '@git/components/Navigation';
import { MateriView } from '@git/components/MateriView';

export default function Home() {
  // Local state for Tab Navigation, defaulting to 'intro' (Materi)
  const [activeTab, setActiveTab] = useState<Mode | 'quiz'>('intro');

  const {
    // Game State
    activeModal,
    startMode, // We'll use this to sync the internal engine state

    // Pass-through state/actions
    currentLevel,
    progress,
    score,
    repoStatus,
    fileStatus,
    branchStatus,
    flowState,
    terminalHistory,
    terminalFeedback,
    feedback,
    setActiveModal,
    handleQuizAnswer,
    handleTerminalCommand,
    nextLevel,
    retryLevel,
    restartGame
  } = useGameEngine();

  // Handle Tab Switching
  const handleSetMode = (newMode: Mode | 'quiz') => {
    setActiveTab(newMode);

    // Sync Game Engine Mode
    if (newMode === 'game') {
      startMode('training'); // Terminal Mode
    } else if (newMode === 'quiz') {
      startMode('quiz'); // Quiz Mode
    }
    // 'intro' doesn't need engine sync, it's just a view
  };

  return (
    <>
      <Navigation mode={activeTab as any} setMode={handleSetMode as any} />

      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6 pb-24 relative z-10">

        {/* HEADER AREA (Visual Flow) - Always visible except in Materi? 
            Actually, visual flow is useful context, let's keep it but maybe hide on Materi if cleaner.
            User allowed "Materi" to be a separate page. Let's show flow only on Game/Quiz tabs.
        */}
        {activeTab !== 'intro' && (
          <VisualFlow flowState={flowState} />
        )}

        {/* TAB CONTENT */}
        {activeTab === 'intro' ? (
          <MateriView />
        ) : (
          <div className="grid md:grid-cols-[1fr_300px] gap-6 items-start">
            {/* MAIN INTERACTION CARD */}
            <GameCard
              mode={activeTab === 'quiz' ? 'quiz' : 'training'}
              level={currentLevel}
              progress={progress}
              onQuizAnswer={handleQuizAnswer}
              onTerminalCommand={handleTerminalCommand}
              terminalHistory={terminalHistory}
              terminalFeedback={terminalFeedback}
              feedback={feedback}
              onNextLevel={nextLevel}
              onRetryLevel={retryLevel}
            />

            {/* Side Panel - Only relevant for Game/Quiz */}
            <SidePanel
              repoStatus={repoStatus}
              fileStatus={fileStatus}
              branchStatus={branchStatus}
            />
          </div>
        )}

      </main>

      {/* MODALS - Only keep End Modal, Intro Modal is now a Tab */}
      <Modals
        activeModal={activeModal === 'intro' || activeModal === 'mode' ? null : activeModal} // Suppress intro/mode modals
        onCloseIntro={() => { }}
        onSelectMode={() => { }}
        onBackToIntro={() => setActiveTab('intro')}
        onRestart={() => {
          restartGame();
          setActiveTab('intro');
        }}
        finalScore={score}
        mode={activeTab === 'quiz' ? 'quiz' : 'training'}
      />
    </>
  );
}
