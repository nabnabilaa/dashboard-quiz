import { Question } from '@frontend/lib/types';

/**
 * Assessment Questions Data
 * 15 quiz questions with rationale explanations
 */
export const assessmentQuestions: Question[] = [
    {
        q: "Apa fungsi utama dari tag <body> dalam HTML?",
        options: ["Menyimpan info meta dan judul tab", "Wadah konten visual yang dilihat user", "Membuat teks menjadi miring", "Menghubungkan ke database server"],
        ans: 1,
        rationale: "Tepat Sekali! Tag <body> bertindak sebagai kanvas utama browser. Apapun yang Anda ketik di dalam <head> (seperti meta atau title) tidak akan muncul di halaman web, sedangkan teks, gambar, dan tombol di dalam <body> adalah apa yang dilihat dan diinteraksi oleh pengguna."
    },
    {
        q: "Manakah urutan Heading dari yang Paling Besar ke Paling Kecil?",
        options: ["h6 -> h1", "h1 -> h6", "head -> body", "p -> b"],
        ans: 1,
        rationale: "Benar! Dalam HTML, angka header bekerja terbalik. <h1> adalah 'Headline' utama (Ukuran Raksasa/Topik Utama), sedangkan <h6> adalah sub-judul terkecil. Bayangkan seperti koran: Judul Utama (h1) vs Judul Iklan Baris (h6)."
    },
    {
        q: "Apa fungsi tag <div>?",
        options: ["Memutar video", "Menebalkan teks secara otomatis", "Wadah/Container pengelompok elemen", "Membuat link ke halaman lain"],
        ans: 2,
        rationale: "Betul! Div (Division) ibarat 'Kardus' atau 'Bungkus'. Dia tidak mengubah tampilan teks secara langsung, tapi digunakan untuk mengelompokkan beberapa elemen (misal: gambar + teks) agar bisa diberi gaya (CSS) atau diposisikan bersama-sama."
    },
    {
        q: "Jika kita mengisi atribut href dengan tanda pagar (#), apa artinya?",
        options: ["Link ke Google", "Link Error / Rusak", "Link Placeholder (Diam di tempat)", "Menghapus Link tersebut"],
        ans: 2,
        rationale: "Sip! '#' sering disebut 'Dead Link' atau 'Anchor'. Ini digunakan oleh developer sebagai placeholder saat halaman tujuan belum dibuat, agar elemen tersebut tetap terlihat dan bisa diklik layaknya tombol link, namun tidak memuat ulang halaman."
    },
    {
        q: "Bagaimana cara menutup tag <h1> yang benar?",
        options: ["<h1/>", "\\h1", "</h1>", "(h1)"],
        ans: 2,
        rationale: "Ingat prinsip 'Burger'! Tag pembuka adalah <h1>, dan tag penutup selalu memiliki garis miring (slash) di depan nama tag, yaitu </h1>. Tanpa penutup ini, browser akan menganggap semua teks setelahnya adalah judul besar."
    },
    {
        q: "Apa atribut wajib untuk tag <img> agar gambar bisa muncul?",
        options: ["href", "src", "link", "img"],
        ans: 1,
        rationale: "Benar. 'src' adalah singkatan dari Source (Sumber). Browser perlu tahu 'Di mana file gambarnya?'. Atribut href digunakan untuk Link (<a>), sedangkan src digunakan untuk media (<img>, <video>, <audio>)."
    },
    {
        q: "Apa keuntungan utama menggunakan Bootstrap dibanding CSS manual?",
        options: ["Lebih lambat karena file besar", "Lebih cepat karena pakai Class siap pakai", "Tidak perlu menulis HTML lagi", "Hanya untuk profesional"],
        ans: 1,
        rationale: "100%! Bootstrap menyediakan ribuan 'Class Utility' yang sudah ditulis sebelumnya. Anda tidak perlu menjahit kode CSS dari nol untuk membuat tombol biru yang cantik; cukup panggil 'btn btn-primary', dan gayanya langsung terpasang."
    },
    {
        q: "Tag mana yang digunakan untuk membuat paragraf teks biasa?",
        options: ["<text>", "<p>", "<par>", "<write>"],
        ans: 1,
        rationale: "Mudah kan? <p> adalah singkatan dari Paragraph. Tag ini secara otomatis memberikan jarak (margin) di atas dan di bawah teks agar bacaan tidak terlalu padat, berbeda dengan teks tanpa tag."
    },
    {
        q: "Apa bedanya Margin dan Padding?",
        options: ["Sama saja, hanya beda nama", "Margin jarak dalam, Padding jarak luar", "Margin jarak LUAR, Padding jarak DALAM", "Margin untuk warna, Padding untuk teks"],
        ans: 2,
        rationale: "Kunci Layout! Padding adalah 'Penebalan' (Jarak antara isi dan kulit/border), seperti isi bantal dengan sarungnya. Margin adalah 'Tolakan' (Jarak antara bantal itu dengan bantal lain), area kosong di luar elemen."
    },
    {
        q: "Untuk membuat daftar berurutan (1. Cuci, 2. Bilas), kita pakai tag...",
        options: ["<ul> (Unordered List)", "<ol> (Ordered List)", "<dl> (Definition List)", "<list>"],
        ans: 1,
        rationale: "Tepat. Ordered List (<ol>) otomatis memberi nomor urut (1, 2, 3) atau huruf (a, b, c) di samping setiap item. Kalau <ul> (Unordered) hanya memberi simbol bullet point atau titik hitam."
    },
    {
        q: "Class 'text-center' di Bootstrap fungsinya untuk...",
        options: ["Mengubah warna teks jadi tengah", "Menebalkan teks", "Membuat teks rata tengah (Center Alignment)", "Menghapus teks"],
        ans: 2,
        rationale: "Sesuai namanya, 'text-center' adalah class utilitas yang setara dengan CSS 'text-align: center'. Ini sangat berguna untuk memposisikan judul atau tombol agar presisi di tengah wadahnya."
    },
    {
        q: "Di mana posisi terbaik meletakkan <script> (JavaScript)?",
        options: ["Paling atas <head>", "Di luar tag <html>", "Paling bawah <body> (sebelum tutup body)", "Di dalam file CSS"],
        ans: 2,
        rationale: "Cerdas! Script biasanya ditaruh di paling bawah <body> agar browser bisa memuat tampilan visual (HTML/CSS) terlebih dahulu tanpa terblokir. Ini membuat website terasa 'muncul' lebih cepat bagi pengguna."
    },
    {
        q: "Atribut 'class' berfungsi untuk...",
        options: ["Memberi ID unik yang hanya boleh satu", "Melabeli elemen agar bisa digayakan (CSS)", "Membuat link halaman", "Menyimpan password"],
        ans: 1,
        rationale: "Class adalah 'Label' yang bisa ditempel ke BANYAK elemen sekaligus. Misalnya, class 'btn-merah' bisa ditempel ke 10 tombol berbeda, dan semuanya akan otomatis berwarna merah sesuai aturan CSS class tersebut."
    },
    {
        q: "Apa itu Frontend?",
        options: ["Bagian Database & Server", "Bagian Tampilan yang dilihat & diinteraksi User", "Kabel Internet Bawah Laut", "Sistem Operasi Windows"],
        ans: 1,
        rationale: "Benar! Frontend adalah 'Wajah' website (HTML, CSS, JS). Backend adalah 'Otak & Memori' di server. Pengguna hanya melihat Frontend, sementara Backend bekerja di balik layar."
    },
    {
        q: "Tag <b> digunakan untuk...",
        options: ["Baris baru (Break)", "Bold (Tebal)", "Bawah (Bottom)", "Biru (Blue)"],
        ans: 1,
        rationale: "B for Bold. Digunakan untuk menebalkan teks agar lebih menonjol. Namun di HTML modern, disarankan menggunakan <strong> jika penebalan itu memiliki arti semantik 'Penting'."
    },
    {
        q: "Tag <br> digunakan untuk...",
        options: ["Membuat garis tebal", "Pindah baris (Enter)", "Menebalkan huruf", "Membuat background merah"],
        ans: 1,
        rationale: "Correct! <br> adalah singkatan dari 'Break'. Tag ini memaksa teks setelahnya untuk turun ke baris baru, mirip tombol Enter di keyboard."
    },
    {
        q: "Apa itu Semantic HTML?",
        options: ["Menggunakan tag yang memiliki makna (header, footer, article)", "Hanya menggunakan div untuk semua elemen", "Menulis kode tanpa spasi", "Membuat animasi bergerak"],
        ans: 0,
        rationale: "Tepat! Semantic HTML menggunakan tag yang menjelaskan 'artinya' (seperti <article> untuk artikel, <nav> untuk menu), bukan hanya <div>. Ini membantu Google dan Screen Reader memahami isi website."
    },
    {
        q: "Tag utama untuk membuat tabel adalah...",
        options: ["<grid>", "<excel>", "<table>", "<list>"],
        ans: 2,
        rationale: "Simpel! <table> adalah wadah utamanya. Di dalamnya ada <tr> (Table Row) untuk baris, dan <td> (Table Data) untuk sel isinya."
    },
    {
        q: "Jika <input type='password'>, maka teks yang diketik akan...",
        options: ["Berwarna merah", "Berubah menjadi bintang/titik", "Menjadi huruf besar semua", "Hilang otomatis"],
        ans: 1,
        rationale: "Demi keamanan! Browser otomatis menyamarkan karakter password menjadi titik atau bintang agar tidak bisa diintip oleh orang di sebelah Anda."
    },
    {
        q: "Apa fungsi tag <form>?",
        options: ["Mengirim data input pengguna ke server", "Membuat formulir kertas", "Menghapus data", "Memformat teks jadi form"],
        ans: 0,
        rationale: "Betul. Tag <form> membungkus semua input (teks, checkbox, tombol). Saat tombol submit ditekan, data di dalam <form> itulah yang dikirim untuk diproses."
    }
];
