import { Lang } from './LanguageProvider';

/**
 * Interface chrome strings (labels, buttons, empty states).
 * Course content itself lives in `src/data/*` and is keyed the same way.
 */
export const ui = {
    en: {
        nav: {
            home: 'Main Menu',
            material: 'Material',
            quiz: 'Quiz',
            fixer: 'Case Studies',
        },
        material: {
            previous: 'Previous',
            next: 'Next',
        },
        quiz: {
            counter: (current: number, total: number) => `QUESTION ${current} / ${total}`,
            hardMode: 'HARD MODE',
            wrongOption: 'Wrong',
            retry: 'Analyze the visual again. Not quite right.',
            insight: 'INSIGHT',
            next: 'Continue to Next Question',
            finishedTitle: 'Congratulations!',
            finished: 'You have conquered the Hard Mode Quiz.',
            playAgain: 'Play Again',
        },
        fixer: {
            level: (n: number) => `Level ${n}`,
            fixed: 'Great!',
            continue: 'Continue',
            doneTitle: 'Congratulations!',
            doneDesc: 'You have successfully completed all UI fix challenges. Your design skills are getting sharper!',
            playAgain: 'Play Again',
        },
        visualFallback: 'Visual Loading...',
        quizVisualFallback: 'Quiz Visual Loading...',
    },
    id: {
        nav: {
            home: 'Menu Utama',
            material: 'Materi',
            quiz: 'Kuis',
            fixer: 'Studi Kasus',
        },
        material: {
            previous: 'Sebelumnya',
            next: 'Berikutnya',
        },
        quiz: {
            counter: (current: number, total: number) => `SOAL ${current} / ${total}`,
            hardMode: 'MODE SULIT',
            wrongOption: 'Salah',
            retry: 'Perhatikan visualnya lagi. Belum tepat.',
            insight: 'INSIGHT',
            next: 'Lanjut ke Soal Berikutnya',
            finishedTitle: 'Selamat!',
            finished: 'Kamu berhasil menaklukkan Kuis Mode Sulit.',
            playAgain: 'Main Lagi',
        },
        fixer: {
            level: (n: number) => `Level ${n}`,
            fixed: 'Mantap!',
            continue: 'Lanjut',
            doneTitle: 'Selamat!',
            doneDesc: 'Kamu berhasil menyelesaikan semua tantangan perbaikan UI. Kemampuan desainmu makin tajam!',
            playAgain: 'Main Lagi',
        },
        visualFallback: 'Memuat visual...',
        quizVisualFallback: 'Memuat visual kuis...',
    },
} as const;

export type UiDict = (typeof ui)[Lang];
