import { Bilingual } from './LanguageProvider';

/**
 * Labels baked into the slide illustrations (SlideVisuals).
 * Tag names, Bootstrap classes and CSS properties stay untranslated on purpose —
 * they are the actual code the learner will type.
 */
export interface VisualLabels {
    house: { html: string; css: string; js: string };
    structure: { tabTitle: string; headContent: string; notVisible: string; hello: string; clickMe: string; userArea: string };
    tags: { without: string; with: string; messy: string; heading: string; paragraph: string; button: string };
    anatomy: { opening: string; content: string; closing: string };
    headings: { preview: string; mainTopic: string; subChapter: string; smallLabel: string };
    formatting: { bold: string; italic: string; paragraph: string };
    div: { container: string; item: string; caption: string };
    image: { broken: string };
    link: { toGoogle: string; placeholder: string; staysInPlace: string };
    lists: { ul: string[]; ol: string[] };
    boxModel: { margin: string; border: string; padding: string; content: string };
    bootstrap: { without: string; badge: string; simplyCall: string; button: string; coolButton: string };
    table: { title: string; day: string; time: string; subject: string; rows: [string, string, string][] };
    form: { title: string; nameLabel: string; emailLabel: string; nameValue: string; submit: string };
    semantic: { header: string; nav: string; main: string; aside: string; footer: string };
    fallback: string;
}

export const visualLabels: Bilingual<VisualLabels> = {
    en: {
        house: { html: 'Walls & Pillars', css: 'Colors & Decor', js: 'Electricity' },
        structure: {
            tabTitle: 'My Website',
            headContent: 'Meta Data...|Title...|Link CSS...',
            notVisible: 'NOT VISIBLE',
            hello: 'Hello World!',
            clickMe: 'Click Me',
            userArea: 'USER AREA',
        },
        tags: {
            without: 'WITHOUT TAG',
            with: 'WITH TAG',
            messy: 'This Heading This Paragraph This Button All stuck in one messy line.',
            heading: 'This is a Heading',
            paragraph: 'This is a neat paragraph.',
            button: 'Button',
        },
        anatomy: { opening: 'Opening', content: 'Heading Content', closing: 'Closing (/)' },
        headings: { preview: 'Preview', mainTopic: 'Main Topic', subChapter: 'Sub-chapter', smallLabel: 'Small Label' },
        formatting: { bold: 'Bold Text', italic: 'Italic Text', paragraph: 'Paragraph with spacing' },
        div: { container: 'DIV (Container)', item: 'Item', caption: 'Wraps elements as a group' },
        image: { broken: 'If src is wrong = Broken Image' },
        link: { toGoogle: 'Link to Google', placeholder: 'Placeholder Link', staysInPlace: '# = Stays in place' },
        lists: { ul: ['Sugar', 'Salt', 'Flour'], ol: ['Wash', 'Rinse', 'Dry'] },
        boxModel: { margin: 'MARGIN', border: 'BORDER', padding: 'PADDING', content: 'CONTENT' },
        bootstrap: {
            without: 'Without Bootstrap (Manual CSS)',
            badge: 'BOOTSTRAP MAGIC',
            simplyCall: 'Simply call Class:',
            button: 'Button',
            coolButton: 'Cool Button',
        },
        table: {
            title: 'Subject Schedule',
            day: 'Day',
            time: 'Time',
            subject: 'Subject',
            rows: [
                ['Monday', '08:00', 'Math'],
                ['Tuesday', '09:00', 'Science'],
            ],
        },
        form: {
            title: 'Registration Form',
            nameLabel: 'Name (Text)',
            emailLabel: 'Email (type="email")',
            nameValue: 'Budi Santoso',
            submit: 'Send Data',
        },
        semantic: { header: 'Header', nav: 'Nav', main: 'Article / Main', aside: 'Aside', footer: 'Footer' },
        fallback: 'Material Visualization',
    },
    id: {
        house: { html: 'Dinding & Tiang', css: 'Warna & Dekorasi', js: 'Listrik' },
        structure: {
            tabTitle: 'Website Saya',
            headContent: 'Meta Data...|Judul...|Link CSS...',
            notVisible: 'TIDAK TERLIHAT',
            hello: 'Halo Dunia!',
            clickMe: 'Klik Saya',
            userArea: 'AREA PENGGUNA',
        },
        tags: {
            without: 'TANPA TAG',
            with: 'PAKAI TAG',
            messy: 'Ini Judul Ini Paragraf Ini Tombol Semuanya menempel jadi satu baris berantakan.',
            heading: 'Ini adalah Judul',
            paragraph: 'Ini paragraf yang rapi.',
            button: 'Tombol',
        },
        anatomy: { opening: 'Pembuka', content: 'Isi Judul', closing: 'Penutup (/)' },
        headings: { preview: 'Pratinjau', mainTopic: 'Topik Utama', subChapter: 'Sub-bab', smallLabel: 'Label Kecil' },
        formatting: { bold: 'Teks Tebal', italic: 'Teks Miring', paragraph: 'Paragraf dengan jarak baris' },
        div: { container: 'DIV (Wadah)', item: 'Item', caption: 'Membungkus elemen jadi satu grup' },
        image: { broken: 'Kalau src salah = Gambar Rusak' },
        link: { toGoogle: 'Link ke Google', placeholder: 'Link Placeholder', staysInPlace: '# = Tetap di tempat' },
        lists: { ul: ['Gula', 'Garam', 'Tepung'], ol: ['Cuci', 'Bilas', 'Keringkan'] },
        boxModel: { margin: 'MARGIN', border: 'BORDER', padding: 'PADDING', content: 'KONTEN' },
        bootstrap: {
            without: 'Tanpa Bootstrap (CSS Manual)',
            badge: 'KEAJAIBAN BOOTSTRAP',
            simplyCall: 'Cukup panggil Class:',
            button: 'Tombol',
            coolButton: 'Tombol Keren',
        },
        table: {
            title: 'Jadwal Pelajaran',
            day: 'Hari',
            time: 'Jam',
            subject: 'Mapel',
            rows: [
                ['Senin', '08:00', 'Matematika'],
                ['Selasa', '09:00', 'IPA'],
            ],
        },
        form: {
            title: 'Formulir Pendaftaran',
            nameLabel: 'Nama (Teks)',
            emailLabel: 'Email (type="email")',
            nameValue: 'Budi Santoso',
            submit: 'Kirim Data',
        },
        semantic: { header: 'Header', nav: 'Nav', main: 'Article / Main', aside: 'Aside', footer: 'Footer' },
        fallback: 'Visualisasi Materi',
    },
};
