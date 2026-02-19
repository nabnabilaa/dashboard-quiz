import { Module } from "@belajar/types";

export const modules: Module[] = [
    { id: 1, title: "1. Definisi: UI vs UX", desc: "UI adalah Tampilan (Mockup, Warna, Ikon). UX adalah Alur & Rasa (Flow, Kemudahan).", visualType: "ui_ux_comparison", tags: ["Konsep Dasar"] },
    { id: 2, title: "2. Psychology: Warna", desc: "Merah = Bahaya/Destruktif. Hijau/Biru = Aman/Positif. Warna mempengaruhi emosi user.", visualType: "color_ui_modal", tags: ["Color"] },
    { id: 3, title: "3. Typography: Hierarchy", desc: "Judul harus menonjol (H1). Body text gunakan ukuran standar (14-16px) agar nyaman dibaca.", visualType: "typography_wireframe", tags: ["Typography"] },
    { id: 4, title: "4. White Space", desc: "Jangan pelit jarak! Ruang kosong membuat desain 'bernafas' dan mudah dipindai (scannable).", visualType: "whitespace_cards", tags: ["Layout"] },
    { id: 5, title: "5. F-Pattern Scanning", desc: "Mata user membaca dari kiri ke kanan, lalu turun sedikit. Bentuknya seperti huruf F.", visualType: "f_pattern_wireframe", tags: ["Scanning"] },
    { id: 6, title: "6. Consistency", desc: "Posisi tombol dan navigasi harus sama di setiap halaman agar user tidak bingung.", visualType: "consistency_app", tags: ["Pattern"] },
    { id: 7, title: "7. Iconography", desc: "Gunakan ikon standar (Mental Model). Ikon 'Gear' untuk Setting, 'Rumah' untuk Home.", visualType: "icon_navbar", tags: ["Semiotics"] },
    { id: 8, title: "8. Micro-interactions", desc: "Berikan feedback visual saat tombol ditekan. User butuh kepastian sistem merespons.", visualType: "button_state_demo", tags: ["Interaction"] },
    { id: 9, title: "9. Wireframe to UI", desc: "Buat kerangka hitam putih (Wireframe) dulu untuk struktur, baru ke UI berwarna.", visualType: "wireframe_to_ui", tags: ["Workflow"] },
    { id: 10, title: "10. Grid System & Gutter", desc: "Grid 12 kolom adalah standar desktop. 'Gutter' adalah jarak antar kolom untuk memisahkan konten.", visualType: "grid_system_demo", tags: ["Layout"] },
    { id: 11, title: "11. Prinsip Gestalt: Proximity", desc: "Objek yang berdekatan dianggap berhubungan. Label form harus lebih dekat ke inputnya.", visualType: "gestalt_proximity", tags: ["Psychology"] },
    { id: 12, title: "12. Accessibility (A11y)", desc: "Jangan hanya mengandalkan warna (untuk buta warna). Gunakan teks/ikon tambahan.", visualType: "a11y_colorblind", tags: ["A11y"] },
    { id: 13, title: "13. Mobile Thumb Zone", desc: "Area kiri atas layar HP susah dijangkau satu tangan. Taruh tombol penting di bawah.", visualType: "thumb_zone_demo", tags: ["Mobile"] },
    { id: 14, title: "14. Skeleton Screen", desc: "Gunakan bayangan struktur (Skeleton) saat loading agar terasa lebih cepat daripada spinner.", visualType: "skeleton_demo", tags: ["Performance"] },
    { id: 15, title: "15. Dark Mode: No Pure Black", desc: "Hindari #000000 di layar OLED karena efek 'Smearing'. Gunakan Abu Gelap (#121212).", visualType: "dark_mode_demo", tags: ["Theming"] },
    { id: 16, title: "16. Content: Empty States", desc: "Jangan biarkan halaman kosong. Beri ilustrasi dan tombol aksi (CTA) untuk membimbing user.", visualType: "empty_state_demo", tags: ["UX Writing"] },
    { id: 17, title: "17. Form: Label vs Placeholder", desc: "Label di luar input lebih baik. Placeholder hilang saat diketik, membebani ingatan user.", visualType: "form_label_demo", tags: ["Forms"] },
    { id: 18, title: "18. Navigation: Breadcrumbs", desc: "Gunakan Breadcrumb (Home > Sepatu > Nike) untuk situs e-commerce yang dalam strukturnya.", visualType: "breadcrumb_demo", tags: ["Navigation"] },
    { id: 19, title: "19. Affordance & Signifiers", desc: "Benda harus 'terlihat' bisa dipakai. Tombol flat tanpa shadow sulit dikenali sebagai tombol.", visualType: "affordance_demo", tags: ["Concept"] },
    { id: 20, title: "20. Advanced Typography", desc: "Line-height 1.5x ukuran font ideal untuk baca. Rata kiri lebih nyaman daripada Rata Kanan-Kiri (Justified).", visualType: "typo_advanced_demo", tags: ["Typography"] },
];
