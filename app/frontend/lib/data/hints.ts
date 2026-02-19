import { HintCategory } from '@frontend/lib/types';

/**
 * Common Hints Data
 * Reusable hint categories for workshops and builder
 */
export const commonHints: Record<string, HintCategory> = {
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
            { code: "text-muted", desc: "Teks Pudar" }
        ]
    },
    shapes: {
        category: "Bentuk & Border",
        items: [
            { code: "rounded", desc: "Sudut Tumpul" },
            { code: "rounded-circle", desc: "Lingkaran" },
            { code: "rounded-pill", desc: "Pil/Oval" },
            { code: "border-0", desc: "Tanpa Garis" },
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
    components: {
        category: "Komponen",
        items: [
            { code: "btn btn-primary", desc: "Tombol Biru" },
            { code: "card", desc: "Wadah Kartu" },
            { code: "badge bg-success", desc: "Label Hijau" },
            { code: "alert alert-info", desc: "Info Biru" },
            { code: "table table-striped", desc: "Tabel Belang" },
            { code: "form-control", desc: "Input Estetik" },
            { code: "list-group", desc: "List Grup" }
        ]
    }
};

/**
 * Cheat Sheet Data
 * Complete reference for builder mode
 */
export const cheatSheetData: HintCategory[] = [
    commonHints.layout,
    {
        category: "Jarak (Spacing)",
        items: [
            { code: "m-3", desc: "Margin (Luar) Sisi" },
            { code: "mt-3", desc: "Margin Atas" },
            { code: "mb-3", desc: "Margin Bawah" },
            { code: "mx-auto", desc: "Tengah (Horizontal)" },
            { code: "p-3", desc: "Padding (Dalam)" },
            { code: "px-4", desc: "Padding Kiri-Kanan" }
        ]
    },
    commonHints.colors,
    commonHints.shapes,
    commonHints.components
];
