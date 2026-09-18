import { Lang } from './LanguageProvider';

/**
 * Interface chrome strings (labels, buttons, empty states).
 * Course content itself lives in `src/lib/data/*` and is keyed the same way.
 */
export const ui = {
    en: {
        nav: {
            home: 'Main Menu',
            intro: 'Materials',
            quiz: 'Quiz',
            workshop: 'Learn',
            builder: 'Builder',
            menu: 'Menu',
            openMenu: 'Open menu',
            closeMenu: 'Close menu',
        },
        intro: {
            slideCounter: (current: number, total: number) => `Slide ${current} of ${total}`,
            back: 'Back',
            continue: 'Continue',
            startQuiz: 'Start Quiz',
        },
        quiz: {
            counter: (current: number, total: number) => `Question ${current} of ${total}`,
            selectOne: 'Select one answer',
            correct: 'Correct Answer!',
            incorrect: 'Incorrect, try again!',
            finish: 'Finish Quiz',
            next: 'Next Question',
        },
        workshop: {
            moduleList: 'Learning Modules',
            mission: 'Mission:',
            dictionary: 'Code Dictionary',
            finish: 'Finish',
            continue: 'Continue',
        },
        builder: {
            components: 'Components',
            quickSheets: 'Quick Sheets',
            export: 'Export',
            exportHtml: 'HTML',
            emptyDesktop: 'Drag components here',
            emptyMobile: 'Tap a component to add it',
            editHtml: 'Edit HTML',
            exportTitle: 'Complete Code (HTML)',
            copyAll: 'Copy All Code',
            copied: 'Copied!',
        },
    },
    id: {
        nav: {
            home: 'Menu Utama',
            intro: 'Materi',
            quiz: 'Kuis',
            workshop: 'Praktik',
            builder: 'Builder',
            menu: 'Menu',
            openMenu: 'Buka menu',
            closeMenu: 'Tutup menu',
        },
        intro: {
            slideCounter: (current: number, total: number) => `Slide ${current} dari ${total}`,
            back: 'Kembali',
            continue: 'Lanjut',
            startQuiz: 'Mulai Kuis',
        },
        quiz: {
            counter: (current: number, total: number) => `Soal ${current} dari ${total}`,
            selectOne: 'Pilih satu jawaban',
            correct: 'Jawaban Benar!',
            incorrect: 'Salah, coba lagi!',
            finish: 'Selesaikan Kuis',
            next: 'Soal Berikutnya',
        },
        workshop: {
            moduleList: 'Modul Belajar',
            mission: 'Misi:',
            dictionary: 'Kamus Kode',
            finish: 'Selesai',
            continue: 'Lanjut',
        },
        builder: {
            components: 'Komponen',
            quickSheets: 'Contekan Cepat',
            export: 'Ekspor',
            exportHtml: 'HTML',
            emptyDesktop: 'Seret komponen ke sini',
            emptyMobile: 'Ketuk komponen untuk menambahkannya',
            editHtml: 'Edit HTML',
            exportTitle: 'Kode Lengkap (HTML)',
            copyAll: 'Salin Semua Kode',
            copied: 'Tersalin!',
        },
    },
} as const;

export type UiDict = (typeof ui)[Lang];
