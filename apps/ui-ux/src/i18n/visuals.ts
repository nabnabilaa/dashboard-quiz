import { Bilingual } from './LanguageProvider';

/**
 * Copy baked into the Fixer Studio mock interfaces. These strings are part of
 * the illustration, so they follow the learner's language too.
 */
export interface FixerVisualLabels {
    spacingText: string;
    buyButton: string;
    helloWorld: string;
    alignmentParagraph: string;
    emailLabel: string;
    emailPlaceholder: string;
    tapMe: string;
    ad: string;
    mainHeading: string;
    subHeading: string;
    invalidEmail: string;
    empty: string;
    search: string;
    crowdedMenu: string;
    darkGray: string;
    pureBlack: string;
}

export const fixerVisuals: Bilingual<FixerVisualLabels> = {
    en: {
        spacingText: 'Text',
        buyButton: 'BUY',
        helloWorld: 'Hello World',
        alignmentParagraph: "This text is easier to read if it's left-aligned rather than center-aligned.",
        emailLabel: 'Email',
        emailPlaceholder: 'Email...',
        tapMe: 'Tap Me',
        ad: 'Ad',
        mainHeading: 'Main Heading',
        subHeading: 'Subheading',
        invalidEmail: 'Invalid email',
        empty: 'Empty',
        search: 'Search',
        crowdedMenu: 'Home Profile Setting About Help Contact',
        darkGray: 'Dark Gray',
        pureBlack: 'Pure Black',
    },
    id: {
        spacingText: 'Teks',
        buyButton: 'BELI',
        helloWorld: 'Halo Dunia',
        alignmentParagraph: 'Teks ini lebih mudah dibaca kalau rata kiri daripada rata tengah.',
        emailLabel: 'Email',
        emailPlaceholder: 'Email...',
        tapMe: 'Ketuk Saya',
        ad: 'Iklan',
        mainHeading: 'Judul Utama',
        subHeading: 'Sub-judul',
        invalidEmail: 'Email tidak valid',
        empty: 'Kosong',
        search: 'Cari',
        crowdedMenu: 'Beranda Profil Pengaturan Tentang Bantuan Kontak',
        darkGray: 'Abu-abu Gelap',
        pureBlack: 'Hitam Murni',
    },
};

/**
 * Copy inside the 20 material illustrations. Design jargon that learners will
 * meet in real tools (Wireframe, UI Mockup, Affordance, Proximity…) is kept in
 * English on purpose — only the surrounding prose is translated.
 */
export interface ModuleVisualLabels {
    comparison: { ui: string; uiCaption: string; ux: string; uxCaption: string; button: string; page: string; goal: string };
    modal: { title: string; body: string; cancel: string; confirm: string };
    typography: { header: string; subHeader: string; body: string; title: string; subtitle: string; paragraph: string };
    whitespace: { product: string; buy: string; buyNow: string; crowded: string; spacious: string };
    fPattern: Record<string, never>;
    consistency: { home: string; profile: string };
    icons: { bad: string; good: string; home: string; search: string; profile: string };
    buttonState: { idle: string; hover: string; pressed: string; hint: string; normalLabel: string; hoverLabel: string; pressedLabel: string };
    wireframe: { wireframe: string; mockup: string; order: string };
    grid: { content: string; side: string };
    proximity: { bad: string; good: string; labelA: string; labelB: string };
    a11y: { colorOnly: string; colorPlusIcon: string };
    thumbZone: { hard: string; stretch: string; natural: string };
    darkMode: { pureBlack: string; pureBlackNote: string; darkGrey: string; darkGreyNote: string };
    emptyState: { title: string; body: string; cta: string };
    formLabel: { label: string; placeholder: string; badPlaceholder: string };
    breadcrumb: { home: string; category: string; product: string; content: string };
    affordance: { submit: string; low: string; high: string };
    typoAdvanced: { justified: string; justifiedBody: string; leftAligned: string; leftAlignedBody: string };
}

export const moduleVisuals: Bilingual<ModuleVisualLabels> = {
    en: {
        comparison: {
            ui: 'UI (Interface)',
            uiCaption: 'Visuals, Colors, Layout',
            ux: 'UX (Experience)',
            uxCaption: 'Flow, Logic, Ease of Use',
            button: 'Button',
            page: 'Page',
            goal: 'Goal',
        },
        modal: {
            title: 'Delete Data?',
            body: 'This action cannot be undone.',
            cancel: 'Cancel',
            confirm: 'Delete',
        },
        typography: {
            header: 'HEADER (H1)',
            subHeader: 'SUB-HEADER (H2)',
            body: 'BODY TEXT (P)',
            title: 'Website Design',
            subtitle: "Beginner's Guide",
            paragraph: 'Good typography has a clear hierarchy. Headings should stand out, and body text should be comfortable to read.',
        },
        whitespace: {
            product: 'Cool Shoes',
            buy: 'Buy',
            buyNow: 'Buy Now',
            crowded: 'CROWDED (Bad)',
            spacious: 'SPACIOUS (Good)',
        },
        fPattern: {},
        consistency: { home: 'HOME', profile: 'PROFILE' },
        icons: {
            bad: '❌ BAD (Ambiguous)',
            good: '✅ GOOD (Standard)',
            home: 'Home',
            search: 'Search',
            profile: 'Profile',
        },
        buttonState: {
            idle: 'Click Me',
            hover: 'Hovering!',
            pressed: 'Pressed!',
            hint: 'Try hovering & clicking this button',
            normalLabel: 'Normal',
            hoverLabel: 'Hover',
            pressedLabel: 'Pressed',
        },
        wireframe: { wireframe: 'WIREFRAME', mockup: 'UI MOCKUP', order: 'Order Now' },
        grid: { content: 'Content (8 Col)', side: 'Side (4)' },
        proximity: {
            bad: 'Bad (Uniform Spacing)',
            good: 'Good (Proximity)',
            labelA: 'Label A',
            labelB: 'Label B',
        },
        a11y: { colorOnly: 'Color Only', colorPlusIcon: 'Color + Icon' },
        thumbZone: { hard: 'HARD', stretch: 'STRETCH', natural: 'NATURAL' },
        darkMode: {
            pureBlack: 'Pure Black',
            pureBlackNote: 'High Contrast (Eye Strain)',
            darkGrey: 'Dark Grey',
            darkGreyNote: 'Soft Contrast (Comfort)',
        },
        emptyState: {
            title: 'Empty Cart',
            body: "Whoops, looks like you haven't picked any items yet.",
            cta: 'Start Shopping',
        },
        formLabel: {
            label: 'Top Aligned Label',
            placeholder: 'Enter data...',
            badPlaceholder: 'Placeholder Label (Disappears when typed)',
        },
        breadcrumb: {
            home: 'Home',
            category: 'Electronics',
            product: 'MacBook Pro M1',
            content: 'Product Content',
        },
        affordance: { submit: 'SUBMIT', low: 'Low Affordance', high: 'High Affordance' },
        typoAdvanced: {
            justified: 'Justified',
            justifiedBody: 'This text is forced to justify, creating uncomfortable white gaps for the eyes.',
            leftAligned: 'Left Aligned (Ideal)',
            leftAlignedBody: 'This text is left-aligned with adequate line spacing, making it comfortable for the eyes when moving between lines.',
        },
    },
    id: {
        comparison: {
            ui: 'UI (Antarmuka)',
            uiCaption: 'Visual, Warna, Tata Letak',
            ux: 'UX (Pengalaman)',
            uxCaption: 'Alur, Logika, Kemudahan',
            button: 'Tombol',
            page: 'Halaman',
            goal: 'Tujuan',
        },
        modal: {
            title: 'Hapus Data?',
            body: 'Tindakan ini tidak bisa dibatalkan.',
            cancel: 'Batal',
            confirm: 'Hapus',
        },
        typography: {
            header: 'HEADER (H1)',
            subHeader: 'SUB-HEADER (H2)',
            body: 'TEKS ISI (P)',
            title: 'Desain Website',
            subtitle: 'Panduan Pemula',
            paragraph: 'Tipografi yang baik punya hierarki yang jelas. Judul harus menonjol, dan teks isi harus nyaman dibaca.',
        },
        whitespace: {
            product: 'Sepatu Keren',
            buy: 'Beli',
            buyNow: 'Beli Sekarang',
            crowded: 'SESAK (Buruk)',
            spacious: 'LEGA (Baik)',
        },
        fPattern: {},
        consistency: { home: 'BERANDA', profile: 'PROFIL' },
        icons: {
            bad: '❌ BURUK (Ambigu)',
            good: '✅ BAIK (Standar)',
            home: 'Beranda',
            search: 'Cari',
            profile: 'Profil',
        },
        buttonState: {
            idle: 'Klik Saya',
            hover: 'Dihover!',
            pressed: 'Ditekan!',
            hint: 'Coba arahkan kursor & klik tombol ini',
            normalLabel: 'Normal',
            hoverLabel: 'Hover',
            pressedLabel: 'Ditekan',
        },
        wireframe: { wireframe: 'WIREFRAME', mockup: 'UI MOCKUP', order: 'Pesan Sekarang' },
        grid: { content: 'Konten (8 Kolom)', side: 'Samping (4)' },
        proximity: {
            bad: 'Buruk (Jarak Seragam)',
            good: 'Baik (Proximity)',
            labelA: 'Label A',
            labelB: 'Label B',
        },
        a11y: { colorOnly: 'Warna Saja', colorPlusIcon: 'Warna + Ikon' },
        thumbZone: { hard: 'SULIT', stretch: 'AGAK SULIT', natural: 'NYAMAN' },
        darkMode: {
            pureBlack: 'Hitam Murni',
            pureBlackNote: 'Kontras Tinggi (Mata Lelah)',
            darkGrey: 'Abu-abu Gelap',
            darkGreyNote: 'Kontras Lembut (Nyaman)',
        },
        emptyState: {
            title: 'Keranjang Kosong',
            body: 'Yah, sepertinya kamu belum memilih barang apa pun.',
            cta: 'Mulai Belanja',
        },
        formLabel: {
            label: 'Label di Atas Input',
            placeholder: 'Masukkan data...',
            badPlaceholder: 'Label Placeholder (Hilang saat diketik)',
        },
        breadcrumb: {
            home: 'Beranda',
            category: 'Elektronik',
            product: 'MacBook Pro M1',
            content: 'Konten Produk',
        },
        affordance: { submit: 'KIRIM', low: 'Affordance Rendah', high: 'Affordance Tinggi' },
        typoAdvanced: {
            justified: 'Rata Kanan-Kiri',
            justifiedBody: 'Teks ini dipaksa rata kanan-kiri sehingga menciptakan celah putih yang tidak nyaman di mata.',
            leftAligned: 'Rata Kiri (Ideal)',
            leftAlignedBody: 'Teks ini rata kiri dengan jarak baris yang cukup, sehingga nyaman di mata saat berpindah antar baris.',
        },
    },
};

/**
 * Tiny labels inside the quiz mock-ups. Option markers stay "A" / "B".
 */
export interface QuizVisualLabels {
    save: string;
    cancel: string;
    crumbDeep: string;
    crumbLanding: string;
    primary: string;
    secondary: string;
    noData: string;
    search: string;
    error500: string;
    serverDown: string;
    submit: string;
    submitCaps: string;
    noResponse: string;
    home: string;
    leftComfortable: string;
    justifiedGaps: string;
    tightText: string;
    spaciousText: string;
    title: string;
    phone: string;
    lbl: string;
}

export const quizVisuals: Bilingual<QuizVisualLabels> = {
    en: {
        save: 'Save',
        cancel: 'Cancel',
        crumbDeep: 'Home > Item',
        crumbLanding: 'Home > (Landing?)',
        primary: 'Main',
        secondary: 'Sec',
        noData: 'No Data',
        search: 'Search',
        error500: 'Error 500',
        serverDown: 'Server Down',
        submit: 'Submit',
        submitCaps: 'SUBMIT',
        noResponse: '(No response)',
        home: 'Home',
        leftComfortable: 'Left-aligned is comfortable.',
        justifiedGaps: 'Justified has gaps.',
        tightText: 'Tight text is hard to read.',
        spaciousText: 'Spacious text is easy to read.',
        title: 'Title',
        phone: 'Phone',
        lbl: 'Lbl',
    },
    id: {
        save: 'Simpan',
        cancel: 'Batal',
        crumbDeep: 'Beranda > Item',
        crumbLanding: 'Beranda > (Landing?)',
        primary: 'Utama',
        secondary: 'Sek',
        noData: 'Tidak Ada Data',
        search: 'Cari',
        error500: 'Error 500',
        serverDown: 'Server Mati',
        submit: 'Kirim',
        submitCaps: 'KIRIM',
        noResponse: '(Tidak ada respons)',
        home: 'Beranda',
        leftComfortable: 'Rata kiri itu nyaman dibaca.',
        justifiedGaps: 'Rata kanan-kiri berlubang.',
        tightText: 'Teks rapat sulit dibaca.',
        spaciousText: 'Teks lega mudah dibaca.',
        title: 'Judul',
        phone: 'Telepon',
        lbl: 'Lbl',
    },
};
