import { FixerLevel } from '@belajar/types';

export const fixers: FixerLevel[] = [
    {
        level: 1,
        title: "Bad Spacing",
        problem: "Teks ini terlalu mepet dengan kotak biru. Susah dibaca dan tidak estetis.",
        type: "spacing",
        options: [
            { id: 'a', text: "Ganti warna kotak", feedback: "Warna bukan masalah utamanya.", correct: false },
            { id: 'b', text: "Hapus kotak biru", feedback: "Kotak itu elemen penting.", correct: false },
            { id: 'c', text: "Tambah padding", feedback: "Tepat! Space/ruang nafas membuat desain lebih elegan.", correct: true }
        ]
    },
    {
        level: 2,
        title: "Low Contrast CTA",
        problem: "Tombol 'BELI' ini warnanya abu-abu pucat. User tidak akan sadar ini tombol penting.",
        type: "cta_color",
        options: [
            { id: 'a', text: "Ganti font jadi Comic Sans", feedback: "Jangan bercanda...", correct: false },
            { id: 'b', text: "Ubah warna jadi kontras (Biru/Merah)", feedback: "Benar! Call to Action harus menonjol.", correct: true },
            { id: 'c', text: "Kecilkan ukuran tombol", feedback: "Malah makin susah dilihat.", correct: false }
        ]
    },
    {
        level: 3,
        title: "Ambiguous Icon",
        problem: "Ikon 'X' merah ini membingungkan. Apakah ini 'Close', 'Error', atau 'Delete'?",
        type: "icon",
        options: [
            { id: 'a', text: "Ganti jadi ikon Rumah (Home)", feedback: "Ikon Rumah adalah standar universal untuk kembali ke dashboard/home.", correct: true }, // Logic correction based on visual component assumption: visual component switches to Home icon when fixed? Let's check visual component logic. The visual component for 'icon' type shows <Home> when fixed. So correct answer should lead to that.
            { id: 'b', text: "Ganti warna jadi hijau", feedback: "Masih ikon 'X', user tetap bingung.", correct: false },
            { id: 'c', text: "Hapus ikon", feedback: "Terus fungsinya hilang dong.", correct: false }
        ]
    },
    {
        level: 4,
        title: "Poor Text Contrast",
        problem: "Teks putih di background abu-abu muda? Mata sakit membacanya.",
        type: "contrast_fix",
        options: [
            { id: 'a', text: "Ganti background jadi hitam", feedback: "Bisa, tapi teks jadi terlalu silau.", correct: false },
            { id: 'b', text: "Ubah teks jadi abu gelap", feedback: "Sempurna! Kontras tinggi = mudah dibaca.", correct: true },
            { id: 'c', text: "Tebalkan teks", feedback: "Sedikit membantu, tapi belum cukup.", correct: false }
        ]
    },
    {
        level: 5,
        title: "Centered Text Block",
        problem: "Paragraf panjang rata tengah itu sulit dibaca karena awal barisnya tidak konsisten.",
        type: "alignment_fix",
        options: [
            { id: 'a', text: "Ubah jadi Rata Kiri (Left Align)", feedback: "Betul! Mata membaca dari kiri ke kanan.", correct: true },
            { id: 'b', text: "Ubah jadi Justify", feedback: "Justify bisa bikin spasi bolong-bolong (river).", correct: false },
            { id: 'c', text: "Perbesar font", feedback: "Tidak menyelesaikan masalah alur baca.", correct: false }
        ]
    },
    {
        level: 6,
        title: "Missing Label",
        problem: "Input field ini cuma punya placeholder. Kalau user ngetik, dia lupa ini field apa.",
        type: "input_label_fix",
        options: [
            { id: 'a', text: "Tambah Label di luar", feedback: "100%! Label harus tetap terlihat.", correct: true },
            { id: 'b', text: "Ganti warna border", feedback: "Tidak membantu ingatan user.", correct: false },
            { id: 'c', text: "Pakai placeholder lebih panjang", feedback: "Tetap hilang saat diketik.", correct: false }
        ]
    },
    {
        level: 7,
        title: "Tiny Touch Target",
        problem: "Tombol ini kecil banget! Jari jempol susah menekannya.",
        type: "touch_target_fix",
        options: [
            { id: 'a', text: "Perbesar padding area sentuh", feedback: "Wajib! Minimal 44x44px untuk mobile.", correct: true },
            { id: 'b', text: "Ganti jadi Link teks", feedback: "Link teks juga butuh area sentuh besar.", correct: false },
            { id: 'c', text: "Pindahkan ke pojok", feedback: "Malah makin susah dijangkau.", correct: false }
        ]
    },
    {
        level: 8,
        title: "Hidden Exit",
        problem: "Iklan modal ini muncul, tapi tombol close-nya mana? User terjebak!",
        type: "modal_close_fix",
        options: [
            { id: 'a', text: "Tunggu 5 detik", feedback: "Dark pattern! Jangan paksa user menunggu.", correct: false },
            { id: 'b', text: "Munculkan tombol 'X' jelas", feedback: "User control itu prinsip utama UX.", correct: true },
            { id: 'c', text: "Minta user refresh page", feedback: "Itu sih ngusir user.", correct: false }
        ]
    },
    {
        level: 9,
        title: "Hierarchy Confusion",
        problem: "Judul dan Sub-judul ukurannya sama. Mana yang harus dibaca duluan?",
        type: "hierarchy_fix",
        options: [
            { id: 'a', text: "Beri warna beda", feedback: "Membantu, tapi ukuran lebih dominan.", correct: false },
            { id: 'b', text: "Buat Judul lebih besar & tebal", feedback: "Hierarki visual tercipta dari ukuran & bobot.", correct: true },
            { id: 'c', text: "Garis bawahi semua", feedback: "Terlalu berantakan dan dikira link.", correct: false }
        ]
    },
    {
        level: 10,
        title: "Vague Error Message",
        problem: "Input merah, tapi kenapa? User tidak tahu salahnya di mana.",
        type: "error_msg_fix",
        options: [
            { id: 'a', text: "Biarkan user menebak", feedback: "Kejam.", correct: false },
            { id: 'b', text: "Tulis 'Error' saja", feedback: "Masih kurang jelas.", correct: false },
            { id: 'c', text: "Tulis pesan spesifik (mis: Email tidak valid)", feedback: "Error message harus membantu user memperbaiki.", correct: true }
        ]
    },
    {
        level: 11,
        title: "Dead End 404",
        problem: "Halaman 404 ini buntu. User harus 'Back' manual browser.",
        type: "empty_state_fix",
        options: [
            { id: 'a', text: "Redirect otomatis ke Home", feedback: "Bisa membingungkan user.", correct: false },
            { id: 'b', text: "Beri ilustrasi + tombol navigasi", feedback: "Ubah frustrasi jadi navigasi.", correct: true },
            { id: 'c', text: "Tulis 'Server Error'", feedback: "Padahal cuma salah link.", correct: false }
        ]
    },
    {
        level: 12,
        title: "Uncertain Loading",
        problem: "Layar kotak hitam (blank) saat loading? User kira aplikasi crash.",
        type: "loading_fix",
        options: [
            { id: 'a', text: "Tulis 'Loading...'", feedback: "Lebih baik, tapi membosankan.", correct: false },
            { id: 'b', text: "Pakai Skeleton Screen", feedback: "Perceived performance jadi lebih cepat!", correct: true },
            { id: 'c', text: "Tampilkan iklan", feedback: "Mengganggu fokus.", correct: false }
        ]
    },
    {
        level: 13,
        title: "Stretched Image",
        problem: "Foto profil ini gepeng karena dipaksa masuk kotak persegi panjang.",
        type: "aspect_ratio_fix",
        options: [
            { id: 'a', text: "Crop foto jadi lingkaran", feedback: "Estetis dan proporsional.", correct: true },
            { id: 'b', text: "Biarkan gepeng (seni)", feedback: "Seni abstrak mungkin?", correct: false },
            { id: 'c', text: "Kecilkan resolusi", feedback: "Malah jadi buram.", correct: false }
        ]
    },
    {
        level: 14,
        title: "Menu Overload",
        problem: "7 menu navigasi dijejali di layar HP. Sesak dan kekecilan.",
        type: "menu_simplify_fix",
        options: [
            { id: 'a', text: "Hapus 5 menu", feedback: "User kehilangan akses fitur.", correct: false },
            { id: 'b', text: "Gunakan Hamburger Menu", feedback: "Solusi tepat untuk menghemat ruang mobile.", correct: true },
            { id: 'c', text: "Buat jadi 2 baris", feedback: "Mengambil terlalu banyak vertical space.", correct: false }
        ]
    },
    {
        level: 15,
        title: "Pure Black Dark Mode",
        problem: "Background #000000 murni bisa bikin 'smearing' di layar OLED dan kontras terlalu tajam.",
        type: "dark_mode_fix",
        options: [
            { id: 'a', text: "Ganti jadi Abu Gelap (#121212)", feedback: "Lebih nyaman di mata & aman untuk OLED.", correct: true },
            { id: 'b', text: "Ganti jadi Biru Tua", feedback: "Bukan dark mode standar.", correct: false },
            { id: 'c', text: "Pakai warna gradasi neon", feedback: "Cyberpunk banget, tapi kurang aksesibel.", correct: false }
        ]
    }
];
