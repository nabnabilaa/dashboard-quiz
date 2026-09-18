import { Slide } from '@frontend/lib/types';
import { Bilingual } from '@frontend/i18n/LanguageProvider';

/**
 * Intro Slides Data
 * 15 slides covering HTML, CSS, and Bootstrap fundamentals.
 * `visualType` and `color` are shared; only the copy differs per language.
 */
export const introSlides: Bilingual<Slide[]> = {
    en: [
        {
            title: "1. The House Analogy",
            desc: "Imagine a website as a house. HTML is the Walls & Pillars (the basic structure that supports everything). CSS is the Paint, Decoration, & Layout (making the house look beautiful and comfortable). JS is the Electricity & Plumbing (making lights turn on, water flow, or dynamic interactions).",
            visualType: "analogy_house",
            color: "blue"
        },
        {
            title: "2. The HTML Body Structure",
            desc: "HTML is divided into two vital areas: <head> and <body>. The <head> is the invisible area (meta data, CSS links, browser tab title) — like the human mind. The <body> is the area visible on the screen (text, images, buttons) — like the physical body seen by others.",
            visualType: "html_structure",
            color: "indigo"
        },
        {
            title: "3. Tag vs. No Tag",
            desc: "Browsers are literal. If you type text without 'Tags', the browser doesn't know if it's a heading or a paragraph, so everything is just clumped together (inline). With Tags like <h1> or <p>, we tell the browser: 'Hey, this is a Heading!' or 'This is a new Paragraph!'. This creates a clean layout (block level).",
            visualType: "tags_vs_none",
            color: "red"
        },
        {
            title: "4. Tag Anatomy (The Burger)",
            desc: "Almost all HTML elements follow the 'Burger' pattern. There's the Top Bun (Opening Tag <name>), the Meat (Content in the middle), and the Bottom Bun (Closing Tag </name>). Notice the forward slash '/' in the closing tag. Forgetting to close can break the layout below it.",
            visualType: "tag_anatomy",
            color: "orange"
        },
        {
            title: "5. Headings (Hierarchy)",
            desc: "Headings aren't just large text; they are information structure. <h1> should only exist ONCE per page (Main Topic). <h2> for sub-chapters, <h3> for sub-sub-chapters, and so on up to <h6>. This helps Google (SEO) and readers understand your document's structure.",
            visualType: "headings",
            color: "yellow"
        },
        {
            title: "6. Text Formatting",
            desc: "HTML has special tags for emphasis. <b> or <strong> make text BOLD (important). <i> or <em> make text ITALIC (foreign terms/emphasis). <p> wraps text in a paragraph block with comfortable line spacing.",
            visualType: "text_formatting",
            color: "green"
        },
        {
            title: "7. DIV (The Magic Container)",
            desc: "The <div> (Division) tag is the most frequently used element. It has no default appearance but acts as a 'Box' or 'Group'. We wrap titles and paragraphs in a <div> so we can give them a background color or move their position together.",
            visualType: "div_box",
            color: "purple"
        },
        {
            title: "8. Images & Attributes",
            desc: "The <img> tag is unique because it's 'Self-Closing' (no closing </img> needed). It needs a 'src' (Source) attribute to know which image file to fetch. If the file isn't found, it shows a broken icon. Use the 'width' attribute to adjust its size.",
            visualType: "image_src",
            color: "pink"
        },
        {
            title: "9. Links (Anchors)",
            desc: "The <a> (Anchor) tag connects one page to another. The 'href' attribute is the destination address. If filled with '#', it means 'Link to oneself' or a placeholder. Links are blue and underlined by default.",
            visualType: "link_href",
            color: "teal"
        },
        {
            title: "10. Lists (Listing Items)",
            desc: "There are two main types of lists. <ul> (Unordered List) uses bullet points for random lists (like ingredients). <ol> (Ordered List) uses numbers 1, 2, 3 for sequential steps. Every item inside must be wrapped in an <li> (List Item) tag.",
            visualType: "lists",
            color: "cyan"
        },
        {
            title: "11. Box Model (Crucial!)",
            desc: "Every HTML element is a box! MARGIN = Transparent space OUTSIDE the box (pushes other elements away). BORDER = The box's edge. PADDING = Space INSIDE the box (between the border and content). Understanding this is key to layout stability.",
            visualType: "box_model",
            color: "orange"
        },
        {
            title: "12. Bootstrap Class Magic",
            desc: "Instead of writing manual CSS like 'background-color: blue; color: white;', Bootstrap gives us 'Shortcuts' or Classes. Just type class='bg-primary text-white p-2', and boom! The appearance changes instantly. This speeds up work by 3x.",
            visualType: "bootstrap_magic",
            color: "blue"
        },
        {
            title: "13. Tables (Grid Data)",
            desc: "To display structured data (like schedules or grades), use <table>. Inside, there are <tr> (Row) and <td> (Data/Cell). Use Bootstrap's 'table table-bordered' classes for a professional-looking table instantly.",
            visualType: "table_grid",
            color: "indigo"
        },
        {
            title: "14. Forms (Data Input)",
            desc: "Interactive websites need Input! The <input> tag allowing users to type. There are type='text' (name), type='email', or type='password'. Wrap them in a <form> and provide a <button> to send that data.",
            visualType: "input_form",
            color: "red"
        },
        {
            title: "15. Semantic HTML (Meaningful Tags)",
            desc: "Don't use <div> for everything! Use <header> for the head, <footer> for the foot, <nav> for menus, and <article> for content. This makes your code 'readable' by humans and search engines like Google (SEO Friendly).",
            visualType: "semantic_layout",
            color: "green"
        }
    ],
    id: [
        {
            title: "1. Analogi Rumah",
            desc: "Bayangkan sebuah website seperti rumah. HTML adalah Dinding & Tiang (struktur dasar yang menopang semuanya). CSS adalah Cat, Dekorasi, & Tata Letak (membuat rumah terlihat indah dan nyaman). JS adalah Listrik & Perpipaan (membuat lampu menyala, air mengalir, atau interaksi yang dinamis).",
            visualType: "analogy_house",
            color: "blue"
        },
        {
            title: "2. Struktur Tubuh HTML",
            desc: "HTML terbagi menjadi dua area penting: <head> dan <body>. <head> adalah area yang tidak terlihat (meta data, link CSS, judul tab browser) — seperti pikiran manusia. <body> adalah area yang tampil di layar (teks, gambar, tombol) — seperti tubuh fisik yang dilihat orang lain.",
            visualType: "html_structure",
            color: "indigo"
        },
        {
            title: "3. Pakai Tag vs Tanpa Tag",
            desc: "Browser itu sangat harfiah. Kalau kamu mengetik teks tanpa 'Tag', browser tidak tahu itu judul atau paragraf, jadi semuanya menempel jadi satu (inline). Dengan Tag seperti <h1> atau <p>, kita memberi tahu browser: 'Hei, ini Judul!' atau 'Ini Paragraf baru!'. Hasilnya tata letak jadi rapi (block level).",
            visualType: "tags_vs_none",
            color: "red"
        },
        {
            title: "4. Anatomi Tag (Si Burger)",
            desc: "Hampir semua elemen HTML mengikuti pola 'Burger'. Ada Roti Atas (Tag Pembuka <nama>), Dagingnya (Konten di tengah), dan Roti Bawah (Tag Penutup </nama>). Perhatikan garis miring '/' pada tag penutup. Lupa menutup tag bisa merusak tampilan di bawahnya.",
            visualType: "tag_anatomy",
            color: "orange"
        },
        {
            title: "5. Heading (Hierarki)",
            desc: "Heading bukan sekadar teks besar; ia adalah struktur informasi. <h1> sebaiknya hanya ada SATU per halaman (Topik Utama). <h2> untuk sub-bab, <h3> untuk sub-sub-bab, dan seterusnya sampai <h6>. Ini membantu Google (SEO) dan pembaca memahami struktur dokumenmu.",
            visualType: "headings",
            color: "yellow"
        },
        {
            title: "6. Format Teks",
            desc: "HTML punya tag khusus untuk penekanan. <b> atau <strong> membuat teks TEBAL (penting). <i> atau <em> membuat teks MIRING (istilah asing/penekanan). <p> membungkus teks dalam blok paragraf dengan jarak baris yang nyaman dibaca.",
            visualType: "text_formatting",
            color: "green"
        },
        {
            title: "7. DIV (Wadah Ajaib)",
            desc: "Tag <div> (Division) adalah elemen yang paling sering dipakai. Tampilannya polos, tapi fungsinya sebagai 'Kotak' atau 'Grup'. Kita bungkus judul dan paragraf dalam satu <div> supaya bisa diberi warna latar atau dipindahkan posisinya bersama-sama.",
            visualType: "div_box",
            color: "purple"
        },
        {
            title: "8. Gambar & Atribut",
            desc: "Tag <img> itu unik karena 'Self-Closing' (tidak perlu penutup </img>). Ia butuh atribut 'src' (Source) untuk tahu file gambar mana yang diambil. Kalau file tidak ditemukan, muncul ikon rusak. Gunakan atribut 'width' untuk mengatur ukurannya.",
            visualType: "image_src",
            color: "pink"
        },
        {
            title: "9. Link (Anchor)",
            desc: "Tag <a> (Anchor) menghubungkan satu halaman ke halaman lain. Atribut 'href' adalah alamat tujuannya. Kalau diisi '#', artinya 'Link ke dirinya sendiri' alias placeholder. Secara bawaan, link berwarna biru dan bergaris bawah.",
            visualType: "link_href",
            color: "teal"
        },
        {
            title: "10. List (Daftar Item)",
            desc: "Ada dua jenis daftar utama. <ul> (Unordered List) memakai bullet untuk daftar acak (misalnya bahan masakan). <ol> (Ordered List) memakai angka 1, 2, 3 untuk langkah berurutan. Setiap item di dalamnya wajib dibungkus tag <li> (List Item).",
            visualType: "lists",
            color: "cyan"
        },
        {
            title: "11. Box Model (Penting Banget!)",
            desc: "Setiap elemen HTML itu sebuah kotak! MARGIN = Ruang transparan di LUAR kotak (mendorong elemen lain menjauh). BORDER = Garis tepi kotak. PADDING = Ruang di DALAM kotak (antara border dan konten). Memahami ini adalah kunci tata letak yang stabil.",
            visualType: "box_model",
            color: "orange"
        },
        {
            title: "12. Keajaiban Class Bootstrap",
            desc: "Daripada menulis CSS manual seperti 'background-color: blue; color: white;', Bootstrap memberi kita 'Jalan Pintas' berupa Class. Cukup ketik class='bg-primary text-white p-2', dan bum! Tampilan langsung berubah. Ini mempercepat kerja sampai 3x lipat.",
            visualType: "bootstrap_magic",
            color: "blue"
        },
        {
            title: "13. Tabel (Data Bergrid)",
            desc: "Untuk menampilkan data terstruktur (seperti jadwal atau nilai), gunakan <table>. Di dalamnya ada <tr> (Baris) dan <td> (Data/Sel). Pakai class Bootstrap 'table table-bordered' supaya tabel langsung terlihat profesional.",
            visualType: "table_grid",
            color: "indigo"
        },
        {
            title: "14. Form (Input Data)",
            desc: "Website interaktif butuh Input! Tag <input> memungkinkan pengguna mengetik. Ada type='text' (nama), type='email', atau type='password'. Bungkus dalam <form> dan sediakan <button> untuk mengirim data tersebut.",
            visualType: "input_form",
            color: "red"
        },
        {
            title: "15. HTML Semantik (Tag yang Bermakna)",
            desc: "Jangan pakai <div> untuk segalanya! Gunakan <header> untuk kepala, <footer> untuk kaki, <nav> untuk menu, dan <article> untuk konten. Ini membuat kodemu 'terbaca' oleh manusia maupun mesin pencari seperti Google (SEO Friendly).",
            visualType: "semantic_layout",
            color: "green"
        }
    ]
};
