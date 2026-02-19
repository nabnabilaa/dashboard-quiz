import { useState, useEffect } from 'react';
import { quizLevels, trainingLevels } from '@git/data/levels';
import { GameMode, FeedbackState, TerminalFeedback, LevelData } from '@git/types';





export const useGameEngine = () => {
    const [mode, setMode] = useState<GameMode>('quiz');
    const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [activeModal, setActiveModal] = useState<'intro' | 'mode' | 'end' | null>('intro');

    // Game State
    const [repoStatus, setRepoStatus] = useState("Belum Ada");
    const [fileStatus, setFileStatus] = useState("-");
    const [branchStatus, setBranchStatus] = useState("main");

    // Flow State
    const [flowState, setFlowState] = useState({
        activeNodes: [] as string[],
        activeLines: [] as string[],
        reverseLines: [] as string[],
        flowText: "Menunggu Misi..."
    });

    // Interaction State
    const [terminalHistory, setTerminalHistory] = useState("");
    const [terminalFeedback, setTerminalFeedback] = useState<TerminalFeedback>({ type: '', message: '' });
    const [feedback, setFeedback] = useState<FeedbackState | null>(null);

    // Derived Data
    const currentLevels = mode === 'quiz' ? quizLevels : trainingLevels;
    const currentLevel = currentLevels[currentLevelIdx] || currentLevels[0];
    const progress = ((currentLevelIdx) / currentLevels.length) * 100;

    // Reset Flow when level changes
    useEffect(() => {
        if (!activeModal && currentLevel) {
            updateFlowVisuals(currentLevel);
        }
    }, [currentLevel, activeModal, mode]);

    const updateFlowVisuals = (level: LevelData) => {
        const nodes: string[] = [];
        const lines: string[] = [];
        const reverse: string[] = [];

        level.flowFocus?.forEach(id => {
            if (id.startsWith('node-')) nodes.push(id);
            if (id.startsWith('line-')) lines.push(id);
        });

        if (level.visualReverse) {
            level.flowFocus?.forEach(id => {
                if (id.startsWith('line-')) reverse.push(id);
            });
        }

        setFlowState({
            activeNodes: nodes,
            activeLines: lines,
            reverseLines: reverse,
            flowText: level.flowText || "..."
        });
    };

    const updateStatus = (statusUpdate: any) => {
        if (!statusUpdate) return;
        if (statusUpdate.repo) setRepoStatus(statusUpdate.repo);
        if (statusUpdate.file) setFileStatus(statusUpdate.file);
        if (statusUpdate.branch) setBranchStatus(statusUpdate.branch);
    };

    // Actions
    const startMode = (selectedMode: GameMode) => {
        setMode(selectedMode);
        setCurrentLevelIdx(0);
        setScore(0);
        setTerminalHistory("");
        setFeedback(null);
        setActiveModal(null);
        // Reset statuses for fresh start might be good, but following original game logic which keeps them or resets them based on level 0?
        // Original game resets them only via level 0 logic.
        if (selectedMode === 'quiz') {
            // In original game, loadLevel(0) is called after startMode which sets the visualization.
        }
    };

    const handleQuizAnswer = (correct: boolean, reason: string, btnIndex: number) => {
        setFeedback({
            visible: true,
            isCorrect: correct,
            desc: reason,
            realWorld: currentLevel.realWorld
        });

        if (correct) {
            setScore(prev => prev + 100);
            updateStatus(currentLevel.updateStatus);
        }
    };

    const handleTerminalCommand = (input: string) => {
        const newHistory = terminalHistory + `user@smk:~/proyek$ ${input}\n`;
        const cleanVal = input.replace(/\s+/g, ' ');

        // Validation
        let isCorrect = false;
        if (currentLevel.isPartialMatch) {
            isCorrect = currentLevel.validCommands?.some(cmd => cleanVal.startsWith(cmd)) || false;
        } else {
            isCorrect = currentLevel.validCommands?.some(cmd => cmd === cleanVal) || false;
        }

        if (isCorrect) {
            setTerminalFeedback({ type: 'success', message: ">> SUKSES! Perintah dijalankan." });
            const successHistory = newHistory + `>> ${currentLevel.successMsg}\n\n`;
            setTerminalHistory(successHistory);

            setScore(prev => prev + 150);
            setFeedback({
                visible: true,
                isCorrect: true,
                desc: currentLevel.successMsg || "Berhasil!",
                realWorld: currentLevel.realWorld
            });
            updateStatus(currentLevel.updateStatus);
        } else {
            setTerminalFeedback({ type: 'error', message: ">> ERROR: Perintah tidak dikenali." });
            setTerminalHistory(newHistory); // Just add input, no success msg
        }
    };

    const nextLevel = () => {
        setFeedback(null);
        setTerminalFeedback({ type: '', message: '' });

        if (currentLevelIdx + 1 >= currentLevels.length) {
            setActiveModal('end');
        } else {
            setCurrentLevelIdx(prev => prev + 1);
        }
    };

    const retryLevel = () => {
        setFeedback(null);
        setTerminalFeedback({ type: '', message: '' });
        // In quiz, maybe shuffle options? Handled by component render.
    };

    const restartGame = () => {
        setCurrentLevelIdx(0);
        setScore(0);
        setActiveModal('intro');
        setRepoStatus("Belum Ada");
        setFileStatus("-");
        setBranchStatus("main");
    };

    return {
        // State
        mode,
        currentLevel,
        progress,
        score,
        activeModal,
        repoStatus,
        fileStatus,
        branchStatus,
        flowState,
        terminalHistory,
        terminalFeedback,
        feedback,

        // Actions
        setActiveModal,
        startMode,
        handleQuizAnswer,
        handleTerminalCommand,
        nextLevel,
        retryLevel,
        restartGame
    };
};
