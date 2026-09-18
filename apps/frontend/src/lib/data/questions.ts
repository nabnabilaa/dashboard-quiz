import { Question } from '@frontend/lib/types';
import { Bilingual } from '@frontend/i18n/LanguageProvider';

/**
 * Assessment Questions Data
 * 20 quiz questions with rationale explanations.
 * The `ans` index is identical across languages — option order must stay in sync.
 */
export const assessmentQuestions: Bilingual<Question[]> = {
    en: [
        {
            q: "What is the primary function of the <body> tag in HTML?",
            options: ["Store meta info and tab title", "Container for visual content seen by the user", "Makes text italic", "Connects to a database server"],
            ans: 1,
            rationale: "Exactly! The <body> tag acts as the browser's main canvas. Anything you type inside the <head> (like meta or title) will not appear on the web page, while text, images, and buttons inside the <body> are what users see and interact with."
        },
        {
            q: "Which is the correct order of Headings from Largest to Smallest?",
            options: ["h6 -> h1", "h1 -> h6", "head -> body", "p -> b"],
            ans: 1,
            rationale: "Correct! In HTML, header numbers work inversely. <h1> is the main 'Headline' (Huge Size/Main Topic), whereas <h6> is the smallest sub-heading. Think of it like a newspaper: Main Headline (h1) vs Classified Ads (h6)."
        },
        {
            q: "What is the function of the <div> tag?",
            options: ["Play video", "Bold text automatically", "Container for grouping elements", "Create links to other pages"],
            ans: 2,
            rationale: "Right! Div (Division) is like a 'Box' or 'Wrapper'. It doesn't change text appearance directly but is used to group several elements (e.g., image + text) so they can be styled (CSS) or positioned together."
        },
        {
            q: "If we fill the href attribute with a hash symbol (#), what does it mean?",
            options: ["Link to Google", "Error / Broken Link", "Placeholder Link (Stay in place)", "Delete the Link"],
            ans: 2,
            rationale: "Yes! '#' is often called a 'Dead Link' or 'Anchor'. It is used by developers as a placeholder when the destination page hasn't been created yet, so the element still looks and acts like a clickable link button without reloading the page."
        },
        {
            q: "What is the correct way to close an <h1> tag?",
            options: ["<h1/>", "\\h1", "</h1>", "(h1)"],
            ans: 2,
            rationale: "Remember the 'Burger' principle! The opening tag is <h1>, and the closing tag always has a forward slash before the tag name: </h1>. Without this closure, the browser will assume all subsequent text is a large heading."
        },
        {
            q: "What is the mandatory attribute for an <img> tag to display an image?",
            options: ["href", "src", "link", "img"],
            ans: 1,
            rationale: "Correct. 'src' stands for Source. The browser needs to know 'Where is the image file?'. The href attribute is used for Links (<a>), while src is used for media (<img>, <video>, <audio>)."
        },
        {
            q: "What is the main advantage of using Bootstrap over manual CSS?",
            options: ["Slower due to large file size", "Faster because of ready-to-use Classes", "No need to write HTML anymore", "Only for professionals"],
            ans: 1,
            rationale: "100%! Bootstrap provides thousands of pre-written 'Utility Classes'. You don't need to stitch CSS code from scratch to create a beautiful blue button; just call 'btn btn-primary', and the style is applied instantly."
        },
        {
            q: "Which tag is used to create a regular paragraph of text?",
            options: ["<text>", "<p>", "<par>", "<write>"],
            ans: 1,
            rationale: "Easy, right? <p> stands for Paragraph. This tag automatically provides spacing (margin) above and below the text so the reading doesn't feel too cramped, unlike text without tags."
        },
        {
            q: "What is the difference between Margin and Padding?",
            options: ["They are the same, just different names", "Margin is internal space, Padding is external", "Margin is EXTERNAL space, Padding is INTERNAL", "Margin is for color, Padding is for text"],
            ans: 2,
            rationale: "The key to layout! Padding is 'Thickening' (Space between content and skin/border), like the filling of a pillow inside its case. Margin is 'Repulsion' (Space between that pillow and another), the empty area outside the element."
        },
        {
            q: "To create an ordered list (1. Wash, 2. Rinse), we use the tag...",
            options: ["<ul> (Unordered List)", "<ol> (Ordered List)", "<dl> (Definition List)", "<list>"],
            ans: 1,
            rationale: "Exactly. Ordered List (<ol>) automatically provides sequential numbers (1, 2, 3) or letters (a, b, c) next to each item. An <ul> (Unordered) only provides bullet points or dots."
        },
        {
            q: "In Bootstrap, the function of the 'text-center' class is to...",
            options: ["Change text color to center", "Bold the text", "Center align the text", "Delete the text"],
            ans: 2,
            rationale: "As the name suggests, 'text-center' is a utility class equivalent to the CSS 'text-align: center'. It's very useful for positioning titles or buttons precisely in the middle of their container."
        },
        {
            q: "Where is the best position to place the <script> (JavaScript) tag?",
            options: ["At the very top of <head>", "Outside the <html> tag", "At the very bottom of <body> (before the closing tag)", "Inside a CSS file"],
            ans: 2,
            rationale: "Smart! Scripts are usually placed at the very bottom of the <body> so the browser can load the visual layout (HTML/CSS) first without being blocked. This makes the website feel 'faster' to the user."
        },
        {
            q: "What is the function of the 'class' attribute?",
            options: ["Give a unique ID that can only be used once", "Label an element so it can be styled (CSS)", "Create a page link", "Store a password"],
            ans: 1,
            rationale: "Class is a 'Label' that can be attached to MANY elements at once. For example, the class 'btn-red' can be attached to 10 different buttons, and they will all automatically turn red according to that class's CSS rules."
        },
        {
            q: "What is Frontend?",
            options: ["Database & Server part", "The UI part that users see & interact with", "Undersea Internet cables", "Windows Operating System"],
            ans: 1,
            rationale: "Correct! Frontend is the 'Face' of the website (HTML, CSS, JS). Backend is the 'Brain & Memory' on the server. Users only see the Frontend, while the Backend works behind the scenes."
        },
        {
            q: "The <b> tag is used for...",
            options: ["New line (Break)", "Bold", "Bottom", "Blue"],
            ans: 1,
            rationale: "B for Bold. Used to thicken text to make it more prominent. However, in modern HTML, it's recommended to use <strong> if the bolding has the semantic meaning of 'Important'."
        },
        {
            q: "The <br> tag is used for...",
            options: ["Create a thick line", "Line break (Enter)", "Bold a letter", "Create a red background"],
            ans: 1,
            rationale: "Correct! <br> stands for 'Break'. This tag forces the following text to drop to a new line, similar to the Enter key on a keyboard."
        },
        {
            q: "What is Semantic HTML?",
            options: ["Using tags with meaning (header, footer, article)", "Using only div for all elements", "Writing code without spaces", "Making moving animations"],
            ans: 0,
            rationale: "Exactly! Semantic HTML uses tags that explain their 'meaning' (like <article> for an article, <nav> for a menu), not just <div>. This helps search engines and Screen Readers understand the website's content."
        },
        {
            q: "The primary tag for creating a table is...",
            options: ["<grid>", "<excel>", "<table>", "<list>"],
            ans: 2,
            rationale: "Simple! <table> is the main container. Inside are <tr> (Table Row) for rows and <td> (Table Data) for the cells."
        },
        {
            q: "If <input type='password'>, then the typed text will...",
            options: ["Turn red", "Change into stars/dots", "Become all capital letters", "Disappear automatically"],
            ans: 1,
            rationale: "For security! The browser automatically masks password characters as dots or stars so they can't be peeked at by someone next to you."
        },
        {
            q: "What is the function of the <form> tag?",
            options: ["Send user input data to the server", "Create a paper form", "Delete data", "Format text into a form"],
            ans: 0,
            rationale: "Right. The <form> tag wraps all inputs (text, checkboxes, buttons). When the submit button is pressed, the data inside that <form> is what gets sent for processing."
        }
    ],
    id: [
        {
            q: "Apa fungsi utama tag <body> dalam HTML?",
            options: ["Menyimpan info meta dan judul tab", "Wadah konten visual yang dilihat pengguna", "Membuat teks miring", "Menghubungkan ke server database"],
            ans: 1,
            rationale: "Tepat! Tag <body> adalah kanvas utama browser. Apa pun yang kamu tulis di dalam <head> (seperti meta atau title) tidak akan tampil di halaman web, sedangkan teks, gambar, dan tombol di dalam <body> itulah yang dilihat dan disentuh pengguna."
        },
        {
            q: "Mana urutan Heading yang benar dari Terbesar ke Terkecil?",
            options: ["h6 -> h1", "h1 -> h6", "head -> body", "p -> b"],
            ans: 1,
            rationale: "Benar! Di HTML, angka heading bekerja terbalik. <h1> adalah 'Headline' utama (ukuran terbesar/topik utama), sedangkan <h6> adalah sub-judul terkecil. Bayangkan koran: Headline Utama (h1) vs Iklan Baris (h6)."
        },
        {
            q: "Apa fungsi tag <div>?",
            options: ["Memutar video", "Menebalkan teks otomatis", "Wadah untuk mengelompokkan elemen", "Membuat link ke halaman lain"],
            ans: 2,
            rationale: "Betul! Div (Division) itu seperti 'Kotak' atau 'Pembungkus'. Ia tidak mengubah tampilan teks secara langsung, tapi dipakai untuk mengelompokkan beberapa elemen (misalnya gambar + teks) supaya bisa distyling (CSS) atau dipindahkan bersama."
        },
        {
            q: "Kalau atribut href kita isi dengan tanda pagar (#), apa artinya?",
            options: ["Link ke Google", "Error / Link Rusak", "Link Placeholder (tetap di tempat)", "Menghapus link"],
            ans: 2,
            rationale: "Ya! '#' sering disebut 'Dead Link' atau 'Anchor'. Developer memakainya sebagai placeholder saat halaman tujuan belum dibuat, jadi elemennya tetap terlihat dan berperilaku seperti tombol link tanpa memuat ulang halaman."
        },
        {
            q: "Bagaimana cara yang benar menutup tag <h1>?",
            options: ["<h1/>", "\\h1", "</h1>", "(h1)"],
            ans: 2,
            rationale: "Ingat prinsip 'Burger'! Tag pembukanya <h1>, dan tag penutup selalu punya garis miring sebelum nama tag: </h1>. Tanpa penutup ini, browser akan menganggap semua teks setelahnya sebagai judul besar."
        },
        {
            q: "Atribut apa yang wajib ada pada tag <img> agar gambar tampil?",
            options: ["href", "src", "link", "img"],
            ans: 1,
            rationale: "Benar. 'src' singkatan dari Source. Browser perlu tahu 'Di mana file gambarnya?'. Atribut href dipakai untuk Link (<a>), sedangkan src dipakai untuk media (<img>, <video>, <audio>)."
        },
        {
            q: "Apa keunggulan utama memakai Bootstrap dibanding CSS manual?",
            options: ["Lebih lambat karena file besar", "Lebih cepat karena ada Class siap pakai", "Tidak perlu menulis HTML lagi", "Hanya untuk profesional"],
            ans: 1,
            rationale: "100%! Bootstrap menyediakan ribuan 'Utility Class' yang sudah jadi. Kamu tidak perlu merangkai CSS dari nol untuk membuat tombol biru yang cantik; cukup panggil 'btn btn-primary', dan gayanya langsung terpasang."
        },
        {
            q: "Tag apa yang dipakai untuk membuat paragraf teks biasa?",
            options: ["<text>", "<p>", "<par>", "<write>"],
            ans: 1,
            rationale: "Gampang, kan? <p> singkatan dari Paragraph. Tag ini otomatis memberi jarak (margin) di atas dan bawah teks supaya bacaan tidak terasa sesak, tidak seperti teks tanpa tag."
        },
        {
            q: "Apa perbedaan Margin dan Padding?",
            options: ["Sama saja, hanya beda nama", "Margin ruang dalam, Padding ruang luar", "Margin ruang LUAR, Padding ruang DALAM", "Margin untuk warna, Padding untuk teks"],
            ans: 2,
            rationale: "Kunci tata letak! Padding itu 'Ketebalan' (jarak antara konten dan kulit/border), seperti isian bantal di dalam sarungnya. Margin itu 'Dorongan' (jarak antara bantal itu dan bantal lain), area kosong di luar elemen."
        },
        {
            q: "Untuk membuat daftar berurutan (1. Cuci, 2. Bilas), kita pakai tag...",
            options: ["<ul> (Unordered List)", "<ol> (Ordered List)", "<dl> (Definition List)", "<list>"],
            ans: 1,
            rationale: "Tepat. Ordered List (<ol>) otomatis memberi nomor berurutan (1, 2, 3) atau huruf (a, b, c) di samping tiap item. <ul> (Unordered) hanya memberi bullet atau titik."
        },
        {
            q: "Di Bootstrap, fungsi class 'text-center' adalah untuk...",
            options: ["Mengubah warna teks jadi center", "Menebalkan teks", "Membuat teks rata tengah", "Menghapus teks"],
            ans: 2,
            rationale: "Sesuai namanya, 'text-center' adalah utility class yang setara dengan CSS 'text-align: center'. Sangat berguna untuk menempatkan judul atau tombol tepat di tengah wadahnya."
        },
        {
            q: "Di mana posisi terbaik menaruh tag <script> (JavaScript)?",
            options: ["Di paling atas <head>", "Di luar tag <html>", "Di paling bawah <body> (sebelum tag penutup)", "Di dalam file CSS"],
            ans: 2,
            rationale: "Cerdas! Script biasanya ditaruh di paling bawah <body> supaya browser bisa memuat tampilan visual (HTML/CSS) lebih dulu tanpa terhambat. Ini membuat website terasa 'lebih cepat' bagi pengguna."
        },
        {
            q: "Apa fungsi atribut 'class'?",
            options: ["Memberi ID unik yang hanya boleh dipakai sekali", "Memberi label pada elemen agar bisa distyling (CSS)", "Membuat link halaman", "Menyimpan password"],
            ans: 1,
            rationale: "Class adalah 'Label' yang bisa dipasang ke BANYAK elemen sekaligus. Misalnya class 'btn-red' bisa dipasang ke 10 tombol berbeda, dan semuanya otomatis jadi merah sesuai aturan CSS class tersebut."
        },
        {
            q: "Apa itu Frontend?",
            options: ["Bagian database & server", "Bagian tampilan yang dilihat & disentuh pengguna", "Kabel internet bawah laut", "Sistem operasi Windows"],
            ans: 1,
            rationale: "Benar! Frontend adalah 'Wajah' website (HTML, CSS, JS). Backend adalah 'Otak & Ingatan' di server. Pengguna hanya melihat Frontend, sementara Backend bekerja di balik layar."
        },
        {
            q: "Tag <b> dipakai untuk...",
            options: ["Baris baru (Break)", "Menebalkan (Bold)", "Bagian bawah (Bottom)", "Warna biru (Blue)"],
            ans: 1,
            rationale: "B untuk Bold. Dipakai untuk menebalkan teks agar lebih menonjol. Namun di HTML modern, disarankan memakai <strong> jika penebalannya punya makna semantik 'Penting'."
        },
        {
            q: "Tag <br> dipakai untuk...",
            options: ["Membuat garis tebal", "Pindah baris (Enter)", "Menebalkan huruf", "Membuat latar merah"],
            ans: 1,
            rationale: "Benar! <br> singkatan dari 'Break'. Tag ini memaksa teks setelahnya turun ke baris baru, mirip tombol Enter pada keyboard."
        },
        {
            q: "Apa itu HTML Semantik?",
            options: ["Memakai tag yang bermakna (header, footer, article)", "Memakai div untuk semua elemen", "Menulis kode tanpa spasi", "Membuat animasi bergerak"],
            ans: 0,
            rationale: "Tepat! HTML Semantik memakai tag yang menjelaskan 'maknanya' (seperti <article> untuk artikel, <nav> untuk menu), bukan cuma <div>. Ini membantu mesin pencari dan Screen Reader memahami isi website."
        },
        {
            q: "Tag utama untuk membuat tabel adalah...",
            options: ["<grid>", "<excel>", "<table>", "<list>"],
            ans: 2,
            rationale: "Sederhana! <table> adalah wadah utamanya. Di dalamnya ada <tr> (Table Row) untuk baris dan <td> (Table Data) untuk selnya."
        },
        {
            q: "Kalau <input type='password'>, maka teks yang diketik akan...",
            options: ["Berubah jadi merah", "Berubah jadi bintang/titik", "Jadi huruf kapital semua", "Hilang otomatis"],
            ans: 1,
            rationale: "Demi keamanan! Browser otomatis menyamarkan karakter password menjadi titik atau bintang supaya tidak bisa diintip orang di sebelahmu."
        },
        {
            q: "Apa fungsi tag <form>?",
            options: ["Mengirim data input pengguna ke server", "Membuat formulir kertas", "Menghapus data", "Memformat teks menjadi formulir"],
            ans: 0,
            rationale: "Betul. Tag <form> membungkus semua input (teks, checkbox, tombol). Saat tombol submit ditekan, data di dalam <form> itulah yang dikirim untuk diproses."
        }
    ]
};
