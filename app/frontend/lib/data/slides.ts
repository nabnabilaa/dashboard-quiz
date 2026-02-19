import { Slide } from '@frontend/lib/types';

/**
 * Intro Slides Data
 * 15 slides covering HTML, CSS, and Bootstrap fundamentals
 */
export const introSlides: Slide[] = [
    {
        title: "1. Analogi Membangun Rumah",
        desc: "Bayangkan website itu seperti rumah. HTML adalah Dinding & Tiang (Struktur dasar yang menopang segalanya). CSS adalah Cat, Dekorasi, & Tata Letak (Membuat rumah terlihat indah dan nyaman). JS adalah Listrik & Pipa (Membuat lampu menyala, keran air jalan, atau interaksi dinamis).",
        visualType: "analogy_house",
        color: "blue"
    },
    {
        title: "2. Struktur Tubuh HTML",
        desc: "HTML dibagi dua area vital: <head> dan <body>. <head> adalah area tak terlihat (meta data, link CSS, judul tab browser) — ibarat pikiran manusia. <body> adalah area yang terlihat di layar (teks, gambar, tombol) — ibarat tubuh fisik yang dilihat orang lain.",
        visualType: "html_structure",
        color: "indigo"
    },
    {
        title: "3. Tag vs Tanpa Tag",
        desc: "Browser itu bodoh. Jika Anda mengetik teks tanpa 'Tag', browser tidak tahu itu judul atau paragraf, jadi semua ditumpuk begitu saja (inline). Dengan Tag seperti <h1> atau <p>, kita memberi tahu browser: 'Hei, ini Judul!' atau 'Ini Paragraf baru!'. Ini membuat layout rapi (block level).",
        visualType: "tags_vs_none",
        color: "red"
    },
    {
        title: "4. Anatomi Tag (Burger)",
        desc: "Hampir semua elemen HTML memiliki pola 'Burger'. Ada Roti Atas (Tag Pembuka <nama>), Daging (Konten di tengah), dan Roti Bawah (Tag Penutup </nama>). Perhatikan garis miring '/' pada penutup. Jika lupa menutup, tampilan web bisa rusak ke bawahnya.",
        visualType: "tag_anatomy",
        color: "orange"
    },
    {
        title: "5. Heading (Hirarki Judul)",
        desc: "Heading bukan sekadar teks besar, tapi struktur informasi. <h1> hanya boleh ada SATU per halaman (Topik Utama). <h2> untuk sub-bab, <h3> untuk sub-sub-bab, dst hingga <h6>. Ini membantu Google (SEO) dan pembaca memahami struktur dokumen Anda.",
        visualType: "headings",
        color: "yellow"
    },
    {
        title: "6. Text Formatting",
        desc: "HTML punya tag khusus untuk penekanan. <b> atau <strong> membuat teks TEBAL (penting). <i> atau <em> membuat teks MIRING (istilah asing/penekanan). <p> membungkus teks dalam blok paragraf dengan jarak antar baris yang nyaman.",
        visualType: "text_formatting",
        color: "green"
    },
    {
        title: "7. DIV (Wadah Ajaib)",
        desc: "Tag <div> (Division) adalah elemen paling sering dipakai. Dia tidak punya tampilan default, tapi dia bertindak sebagai 'Kardus' atau 'Group'. Kita membungkus judul dan paragraf dalam satu <div> agar bisa diberi background warna atau dipindah posisinya bersamaan.",
        visualType: "div_box",
        color: "purple"
    },
    {
        title: "8. Gambar & Atribut",
        desc: "Tag <img> unik karena dia 'Self-Closing' (tidak butuh penutup </img>). Dia butuh atribut 'src' (Source) untuk tahu file gambar mana yang diambil. Jika file tidak ketemu, dia akan menampilkan ikon rusak. Gunakan atribut 'width' untuk mengatur ukurannya.",
        visualType: "image_src",
        color: "pink"
    },
    {
        title: "9. Link (Jangkar)",
        desc: "Tag <a> (Anchor) menghubungkan halaman satu ke lainnya. Atribut 'href' adalah alamat tujuannya. Jika diisi '#', itu artinya 'Link ke diri sendiri' atau placeholder. Link secara default berwarna biru dan bergaris bawah.",
        visualType: "link_href",
        color: "teal"
    },
    {
        title: "10. List (Daftar)",
        desc: "Ada dua jenis daftar utama. <ul> (Unordered List) menggunakan bullet points untuk daftar acak (seperti bahan masakan). <ol> (Ordered List) menggunakan angka 1,2,3 untuk langkah-langkah berurutan. Setiap butir di dalamnya wajib dibungkus tag <li> (List Item).",
        visualType: "lists",
        color: "cyan"
    },
    {
        title: "11. Box Model (Sangat Penting)",
        desc: "Setiap elemen HTML itu kotak! MARGIN = Jarak transparan di LUAR kotak (mendorong elemen lain menjauh). BORDER = Garis pinggir kotak. PADDING = Jarak di DALAM kotak (antara border dan isi konten). Memahami ini kunci agar layout tidak berantakan.",
        visualType: "box_model",
        color: "orange"
    },
    {
        title: "12. Bootstrap Class Magic",
        desc: "Daripada menulis CSS manual seperti 'background-color: blue; color: white; padding: 10px;', Bootstrap memberi kita 'Shortcut' atau Class. Cukup ketik class='bg-primary text-white p-2', dan boom! Tampilan langsung berubah. Ini mempercepat kerja 3x lipat.",
        visualType: "bootstrap_magic",
        color: "blue"
    },
    {
        title: "13. Tabel (Grid Data)",
        desc: "Untuk menampilkan data terstruktur (seperti jadwal atau nilai), gunakan <table>. Di dalamnya ada <tr> (Baris/Row) dan <td> (Data/Sel). Gunakan class Bootstrap 'table table-bordered' agar tabel langsung terlihat rapi dan profesional tanpa garis manual.",
        visualType: "table_grid",
        color: "indigo"
    },
    {
        title: "14. Formulir (Input Data)",
        desc: "Website interaktif butuh Input! Tag <input> memungkinkan user mengetik. Ada type='text' (nama), type='email', atau type='password'. Bungkus mereka dalam <form> dan beri tombol <button> untuk mengirim data tersebut.",
        visualType: "input_form",
        color: "red"
    },
    {
        title: "15. Semantic HTML (Tag Bermakna)",
        desc: "Jangan pakai <div> untuk segalanya! Gunakan <header> untuk kepala, <footer> untuk kaki, <nav> untuk menu, dan <article> untuk konten. Ini membuat kode Anda 'bisa dibaca' oleh manusia dan robot Google (SEO Friendly).",
        visualType: "semantic_layout",
        color: "green"
    }
];
