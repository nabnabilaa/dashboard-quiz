import { HintCategory } from '@frontend/lib/types';
import { Bilingual, Lang } from '@frontend/i18n/LanguageProvider';

/**
 * Common Hints Data
 * Reusable hint categories for workshops and builder.
 * The `code` values are Bootstrap classes and never translated — only `desc` is.
 */
export const commonHints: Bilingual<Record<string, HintCategory>> = {
    en: {
        colors: {
            category: "Colors",
            items: [
                { code: "bg-primary", desc: "Blue Background" },
                { code: "bg-success", desc: "Green Background" },
                { code: "bg-danger", desc: "Red Background" },
                { code: "bg-warning", desc: "Yellow Background" },
                { code: "bg-dark", desc: "Black Background" },
                { code: "bg-light", desc: "Gray Background" },
                { code: "text-primary", desc: "Blue Text" },
                { code: "text-white", desc: "White Text" },
                { code: "text-muted", desc: "Faded Text" }
            ]
        },
        shapes: {
            category: "Shapes & Borders",
            items: [
                { code: "rounded", desc: "Rounded Corners" },
                { code: "rounded-circle", desc: "Circle" },
                { code: "rounded-pill", desc: "Pill/Oval" },
                { code: "border-0", desc: "No Border" },
                { code: "shadow-sm", desc: "Thin Shadow" },
                { code: "shadow", desc: "Medium Shadow" }
            ]
        },
        layout: {
            category: "Layout",
            items: [
                { code: "text-center", desc: "Center Align" },
                { code: "d-flex justify-content-center", desc: "Flex Center" },
                { code: "p-3", desc: "Medium Padding" },
                { code: "m-3", desc: "Medium Margin" },
                { code: "gap-2", desc: "Spacing Between Elements" }
            ]
        },
        spacing: {
            category: "Spacing",
            items: [
                { code: "m-3", desc: "Outer Margin (All sides)" },
                { code: "mt-3", desc: "Top Margin" },
                { code: "mb-3", desc: "Bottom Margin" },
                { code: "mx-auto", desc: "Center (Horizontal)" },
                { code: "p-3", desc: "Inner Padding (All sides)" },
                { code: "px-4", desc: "Left-Right Padding" }
            ]
        },
        components: {
            category: "Components",
            items: [
                { code: "btn btn-primary", desc: "Blue Button" },
                { code: "card", desc: "Card Container" },
                { code: "badge bg-success", desc: "Green Label" },
                { code: "alert alert-info", desc: "Blue Info Box" },
                { code: "table table-striped", desc: "Striped Table" },
                { code: "form-control", desc: "Form Input" },
                { code: "list-group", desc: "List Group" }
            ]
        }
    },
    id: {
        colors: {
            category: "Warna",
            items: [
                { code: "bg-primary", desc: "Latar Biru" },
                { code: "bg-success", desc: "Latar Hijau" },
                { code: "bg-danger", desc: "Latar Merah" },
                { code: "bg-warning", desc: "Latar Kuning" },
                { code: "bg-dark", desc: "Latar Hitam" },
                { code: "bg-light", desc: "Latar Abu-abu" },
                { code: "text-primary", desc: "Teks Biru" },
                { code: "text-white", desc: "Teks Putih" },
                { code: "text-muted", desc: "Teks Samar" }
            ]
        },
        shapes: {
            category: "Bentuk & Garis Tepi",
            items: [
                { code: "rounded", desc: "Sudut Membulat" },
                { code: "rounded-circle", desc: "Lingkaran" },
                { code: "rounded-pill", desc: "Pil/Lonjong" },
                { code: "border-0", desc: "Tanpa Garis Tepi" },
                { code: "shadow-sm", desc: "Bayangan Tipis" },
                { code: "shadow", desc: "Bayangan Sedang" }
            ]
        },
        layout: {
            category: "Tata Letak",
            items: [
                { code: "text-center", desc: "Rata Tengah" },
                { code: "d-flex justify-content-center", desc: "Flex Tengah" },
                { code: "p-3", desc: "Padding Sedang" },
                { code: "m-3", desc: "Margin Sedang" },
                { code: "gap-2", desc: "Jarak Antar Elemen" }
            ]
        },
        spacing: {
            category: "Jarak",
            items: [
                { code: "m-3", desc: "Margin Luar (Semua sisi)" },
                { code: "mt-3", desc: "Margin Atas" },
                { code: "mb-3", desc: "Margin Bawah" },
                { code: "mx-auto", desc: "Tengah (Horizontal)" },
                { code: "p-3", desc: "Padding Dalam (Semua sisi)" },
                { code: "px-4", desc: "Padding Kiri-Kanan" }
            ]
        },
        components: {
            category: "Komponen",
            items: [
                { code: "btn btn-primary", desc: "Tombol Biru" },
                { code: "card", desc: "Wadah Kartu" },
                { code: "badge bg-success", desc: "Label Hijau" },
                { code: "alert alert-info", desc: "Kotak Info Biru" },
                { code: "table table-striped", desc: "Tabel Belang" },
                { code: "form-control", desc: "Input Formulir" },
                { code: "list-group", desc: "Grup Daftar" }
            ]
        }
    }
};

/**
 * Cheat Sheet Data
 * Complete reference for builder mode.
 */
export const cheatSheetData: Bilingual<HintCategory[]> = {
    en: [
        commonHints.en.layout,
        commonHints.en.spacing,
        commonHints.en.colors,
        commonHints.en.shapes,
        commonHints.en.components
    ],
    id: [
        commonHints.id.layout,
        commonHints.id.spacing,
        commonHints.id.colors,
        commonHints.id.shapes,
        commonHints.id.components
    ]
};

/** Pick a hint category by key for the given language. */
export const hint = (lang: Lang, key: string): HintCategory => commonHints[lang][key];
