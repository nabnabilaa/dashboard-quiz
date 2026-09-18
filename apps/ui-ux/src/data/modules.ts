import { Module } from "@belajar/types";
import { Bilingual } from "@belajar/i18n/LanguageProvider";

/**
 * 20 foundation modules. `visualType` is shared across languages — only the
 * copy and the tag labels change.
 */
export const modules: Bilingual<Module[]> = {
    en: [
        { id: 1, title: "1. Definition: UI vs UX", desc: "UI is Visuals (Mockups, Colors, Icons). UX is Flow & Feel (Ease of use, Logic).", visualType: "ui_ux_comparison", tags: ["Basic Concepts"] },
        { id: 2, title: "2. Psychology: Color", desc: "Red = Danger/Destructive. Green/Blue = Safe/Positive. Colors affect user emotions.", visualType: "color_ui_modal", tags: ["Color"] },
        { id: 3, title: "3. Typography: Hierarchy", desc: "Headings must stand out (H1). Use standard sizes (14-16px) for body text for readability.", visualType: "typography_wireframe", tags: ["Typography"] },
        { id: 4, title: "4. White Space", desc: "Don't be stingy with spacing! Negative space lets the design 'breathe' and stay scannable.", visualType: "whitespace_cards", tags: ["Layout"] },
        { id: 5, title: "5. F-Pattern Scanning", desc: "Users read from left to right, then scan slightly down. It forms an 'F' shape.", visualType: "f_pattern_wireframe", tags: ["Scanning"] },
        { id: 6, title: "6. Consistency", desc: "Button placements and navigation must be consistent across pages to avoid user confusion.", visualType: "consistency_app", tags: ["Pattern"] },
        { id: 7, title: "7. Iconography", desc: "Use standard icons (Mental Models). 'Gear' for Settings, 'Home' for Dashboard.", visualType: "icon_navbar", tags: ["Semiotics"] },
        { id: 8, title: "8. Micro-interactions", desc: "Provide visual feedback when a button is pressed. Users need confirmation the system responded.", visualType: "button_state_demo", tags: ["Interaction"] },
        { id: 9, title: "9. Wireframe to UI", desc: "Create a black and white framework (Wireframe) first for structure, then move to colored UI.", visualType: "wireframe_to_ui", tags: ["Workflow"] },
        { id: 10, title: "10. Grid System & Gutter", desc: "12-column grids are the desktop standard. 'Gutter' is the space between columns.", visualType: "grid_system_demo", tags: ["Layout"] },
        { id: 11, title: "11. Gestalt Principle: Proximity", desc: "Objects close together are perceived as related. Form labels should be closer to their inputs.", visualType: "gestalt_proximity", tags: ["Psychology"] },
        { id: 12, title: "12. Accessibility (A11y)", desc: "Don't rely solely on color (for color blindness). Use supplementary text/icons.", visualType: "a11y_colorblind", tags: ["A11y"] },
        { id: 13, title: "13. Mobile Thumb Zone", desc: "The top-left area of a mobile screen is hard to reach with one hand. Place key buttons at the bottom.", visualType: "thumb_zone_demo", tags: ["Mobile"] },
        { id: 14, title: "14. Skeleton Screen", desc: "Use structural placeholders (Skeleton screens) during loading to make it feel faster than a spinner.", visualType: "skeleton_demo", tags: ["Performance"] },
        { id: 15, title: "15. Dark Mode: No Pure Black", desc: "Avoid #000000 on OLED screens due to the 'Smearing' effect. Use Dark Gray (#121212) instead.", visualType: "dark_mode_demo", tags: ["Theming"] },
        { id: 16, title: "16. Content: Empty States", desc: "Don't leave pages blank. Provide illustrations and actions (CTAs) to guide the user.", visualType: "empty_state_demo", tags: ["UX Writing"] },
        { id: 17, title: "17. Form: Label vs Placeholder", desc: "Labels outside inputs are better. Placeholders vanish on focus, taxing the user's memory.", visualType: "form_label_demo", tags: ["Forms"] },
        { id: 18, title: "18. Navigation: Breadcrumbs", desc: "Use Breadcrumbs (Home > Shoes > Nike) for deep-structure e-commerce sites.", visualType: "breadcrumb_demo", tags: ["Navigation"] },
        { id: 19, title: "19. Affordance & Signifiers", desc: "Objects must 'look' usable. Flat buttons without shadows are harder to perceive as buttons.", visualType: "affordance_demo", tags: ["Concept"] },
        { id: 20, title: "20. Advanced Typography", desc: "Line-height 1.5x the font size is ideal for reading. Left-aligned is more comfortable than Justified.", visualType: "typo_advanced_demo", tags: ["Typography"] },
    ],
    id: [
        { id: 1, title: "1. Definisi: UI vs UX", desc: "UI itu Visual (Mockup, Warna, Ikon). UX itu Alur & Rasa (Kemudahan pakai, Logika).", visualType: "ui_ux_comparison", tags: ["Konsep Dasar"] },
        { id: 2, title: "2. Psikologi: Warna", desc: "Merah = Bahaya/Destruktif. Hijau/Biru = Aman/Positif. Warna memengaruhi emosi pengguna.", visualType: "color_ui_modal", tags: ["Warna"] },
        { id: 3, title: "3. Tipografi: Hierarki", desc: "Judul harus menonjol (H1). Pakai ukuran standar (14-16px) untuk teks isi agar nyaman dibaca.", visualType: "typography_wireframe", tags: ["Tipografi"] },
        { id: 4, title: "4. White Space", desc: "Jangan pelit jarak! Ruang kosong membuat desain bisa 'bernapas' dan mudah dipindai.", visualType: "whitespace_cards", tags: ["Tata Letak"] },
        { id: 5, title: "5. Pemindaian Pola F", desc: "Pengguna membaca dari kiri ke kanan, lalu memindai sedikit ke bawah. Polanya membentuk huruf 'F'.", visualType: "f_pattern_wireframe", tags: ["Pemindaian"] },
        { id: 6, title: "6. Konsistensi", desc: "Posisi tombol dan navigasi harus konsisten di semua halaman agar pengguna tidak bingung.", visualType: "consistency_app", tags: ["Pola"] },
        { id: 7, title: "7. Ikonografi", desc: "Pakai ikon standar (Mental Model). 'Gerigi' untuk Pengaturan, 'Rumah' untuk Dashboard.", visualType: "icon_navbar", tags: ["Semiotika"] },
        { id: 8, title: "8. Mikro-interaksi", desc: "Beri umpan balik visual saat tombol ditekan. Pengguna butuh konfirmasi bahwa sistem merespons.", visualType: "button_state_demo", tags: ["Interaksi"] },
        { id: 9, title: "9. Dari Wireframe ke UI", desc: "Buat kerangka hitam putih (Wireframe) dulu untuk struktur, baru lanjut ke UI berwarna.", visualType: "wireframe_to_ui", tags: ["Alur Kerja"] },
        { id: 10, title: "10. Grid System & Gutter", desc: "Grid 12 kolom adalah standar desktop. 'Gutter' adalah jarak antar kolom.", visualType: "grid_system_demo", tags: ["Tata Letak"] },
        { id: 11, title: "11. Prinsip Gestalt: Kedekatan", desc: "Objek yang berdekatan dianggap saling berhubungan. Label formulir harus lebih dekat ke inputnya.", visualType: "gestalt_proximity", tags: ["Psikologi"] },
        { id: 12, title: "12. Aksesibilitas (A11y)", desc: "Jangan hanya mengandalkan warna (untuk buta warna). Tambahkan teks/ikon pendukung.", visualType: "a11y_colorblind", tags: ["A11y"] },
        { id: 13, title: "13. Thumb Zone di Mobile", desc: "Area kiri atas layar ponsel sulit dijangkau satu tangan. Taruh tombol penting di bagian bawah.", visualType: "thumb_zone_demo", tags: ["Mobile"] },
        { id: 14, title: "14. Skeleton Screen", desc: "Pakai placeholder berbentuk struktur (Skeleton) saat loading supaya terasa lebih cepat dari spinner.", visualType: "skeleton_demo", tags: ["Performa"] },
        { id: 15, title: "15. Dark Mode: Hindari Hitam Murni", desc: "Hindari #000000 di layar OLED karena efek 'Smearing'. Pakai Abu-abu Gelap (#121212).", visualType: "dark_mode_demo", tags: ["Tema"] },
        { id: 16, title: "16. Konten: Empty State", desc: "Jangan biarkan halaman kosong melompong. Beri ilustrasi dan aksi (CTA) untuk memandu pengguna.", visualType: "empty_state_demo", tags: ["UX Writing"] },
        { id: 17, title: "17. Form: Label vs Placeholder", desc: "Label di luar input lebih baik. Placeholder hilang saat difokus dan membebani ingatan pengguna.", visualType: "form_label_demo", tags: ["Formulir"] },
        { id: 18, title: "18. Navigasi: Breadcrumb", desc: "Pakai Breadcrumb (Beranda > Sepatu > Nike) untuk situs e-commerce berstruktur dalam.", visualType: "breadcrumb_demo", tags: ["Navigasi"] },
        { id: 19, title: "19. Affordance & Signifier", desc: "Objek harus 'terlihat' bisa dipakai. Tombol flat tanpa bayangan lebih sulit dikenali sebagai tombol.", visualType: "affordance_demo", tags: ["Konsep"] },
        { id: 20, title: "20. Tipografi Lanjutan", desc: "Line-height 1,5x ukuran font itu ideal untuk dibaca. Rata kiri lebih nyaman daripada rata kanan-kiri.", visualType: "typo_advanced_demo", tags: ["Tipografi"] },
    ],
};
