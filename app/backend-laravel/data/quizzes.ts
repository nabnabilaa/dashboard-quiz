
export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
    explanation?: string;
}

export const quizQuestions: Question[] = [
    // Module 1: Dasar Backend & HTTP
    {
        id: 1,
        question: "Dalam analogi restoran, Backend diibaratkan sebagai apa?",
        options: ["Ruang Makan (Frontend)", "Buku Menu (API Doc)", "Dapur (Server/Database)", "Kasir (Payment Gateway)"],
        correctAnswer: 2,
        explanation: "Backend adalah dapur tempat data diolah, tidak terlihat oleh pelanggan (user)."
    },
    {
        id: 2,
        question: "Manakah metode HTTP yang TEPAT untuk memperbarui data yang sudah ada?",
        options: ["GET", "POST", "PUT/PATCH", "DELETE"],
        correctAnswer: 2,
        explanation: "PUT/PATCH digunakan untuk update resource. POST untuk create baru."
    },

    // Module 2: Pengenalan Laravel & MVC
    {
        id: 3,
        question: "Di folder manakah file konfigurasi sensitif seperti password database disimpan?",
        options: ["config/database.php", ".env", "app/Config.php", "public/.htaccess"],
        correctAnswer: 1,
        explanation: ".env menyimpan environment variables yang tidak boleh di-commit ke Git."
    },
    {
        id: 4,
        question: "Huruf 'C' dalam MVC mewakili Controller. Apa tugas utamanya?",
        options: ["Menyimpan data ke tabel", "Menampilkan warna dan font (CSS)", "Mengatur alur logika antara Request, Model, dan View", "Membuat token keamanan"],
        correctAnswer: 2,
        explanation: "Controller adalah pengatur lalu lintas data dan logika."
    },

    // Module 3: Routing & Controller
    {
        id: 5,
        question: "Perintah Artisan apa yang membuat Controller beserta 7 method CRUD siap pakai?",
        options: ["php artisan make:controller Nama --basic", "php artisan make:controller Nama --resource", "php artisan create:controller Nama", "php artisan make:crud Nama"],
        correctAnswer: 1,
        explanation: "Flag --resource membuat controller dengan index, create, store, show, edit, update, dan destroy."
    },
    {
        id: 6,
        question: "Jika Anda memiliki Route::resource('produk', ...), URL mana yang digunakan untuk menghapus data?",
        options: ["GET /produk/hapus/{id}", "POST /produk/delete/{id}", "DELETE /produk/{id}", "PUT /produk/{id}"],
        correctAnswer: 2,
        explanation: "Sesuai standar RESTful, menghapus data menggunakan verb DELETE ke URL resource/{id}."
    },

    // Module 4: View & Blade
    {
        id: 7,
        question: "Direktif Blade apa yang WAJIB ada di setiap form POST untuk keamanan?",
        options: ["@koneksi", "@csrf", "@secure", "@auth"],
        correctAnswer: 1,
        explanation: "@csrf menghasilkan token untuk mencegah serangan Cross-Site Request Forgery."
    },
    {
        id: 8,
        question: "Apa fungsi dari syntax {{ $nama }} di Blade?",
        options: ["Menjalankan kode JavaScript", "Mencetak variabel dengan escaping (aman dari XSS)", "Mencetak HTML mentah", "Membuat komentar"],
        correctAnswer: 1,
        explanation: "Kurung kurawal ganda {{ }} setara dengan htmlspecialchars() di PHP."
    },

    // Module 5: Database & Migrasi
    {
        id: 9,
        question: "Perintah 'php artisan migrate:fresh' akan melakukan apa?",
        options: ["Membuat migrasi baru", "Hanya menjalankan migrasi yang belum jalan", "MENGHAPUS semua tabel dan migrasi ulang dari nol", "Memperbarui data tanpa menghapus tabel"],
        correctAnswer: 2,
        explanation: "Hati-hati! :fresh akan menghapus (drop) semua tabel sebelum migrasi ulang."
    },
    {
        id: 10,
        question: "Method 'up()' dalam file migrasi digunakan untuk?",
        options: ["Menghapus tabel", "Membuat atau memodifikasi tabel", "Mengisi data palsu", "Mengupdate composer"],
        correctAnswer: 1,
        explanation: "Method up() berisi definisi perubahan skema (misal create table), sedangkan down() untuk membatalkannya."
    },

    // Module 6: Eloquent ORM
    {
        id: 11,
        question: "Properti apa yang harus diatur di Model untuk mengizinkan Mass Assignment?",
        options: ["$table", "$fillable", "$hidden", "$casts"],
        correctAnswer: 1,
        explanation: "$fillable menentukan kolom mana saja yang boleh diisi secara massal (array)."
    },
    {
        id: 12,
        question: "Bagaimana cara mengambil satu data berdasarkan Primary Key di Eloquent?",
        options: ["Product::get(1)", "Product::where('id', 1)", "Product::find(1)", "Product::search(1)"],
        correctAnswer: 2,
        explanation: "Product::find($id) adalah cara paling ringkas mencari berdasarkan Primary Key."
    },

    // Module 7: Studi Kasus CRUD
    {
        id: 13,
        question: "Dalam method store(), setelah data berhasil disimpan, biasanya kita melakukan?",
        options: ["return view('index')", "return redirect()->route('index')", "echo 'Sukses'", "exit()"],
        correctAnswer: 1,
        explanation: "Redirect (PRG Pattern) mencegah user mensubmit ulang form jika me-refresh halaman."
    },
    {
        id: 14,
        question: "Method controller 'edit($id)' bertugas untuk?",
        options: ["Menyimpan perubahan ke database", "Menampilkan form edit dengan data lama", "Menghapus data", "Memvalidasi input"],
        correctAnswer: 1,
        explanation: "Method edit bertujuan menampilkan Form (View), sedangkan update yang memproses datanya."
    },

    // Module 8: REST API
    {
        id: 15,
        question: "HTTP Status Code 201 berarti?",
        options: ["OK (Berhasil)", "Created (Berhasil dibuat)", "No Content", "Bad Request"],
        correctAnswer: 1,
        explanation: "201 Created adalah status standar saat resource baru berhasil dibuat (biasanya via POST)."
    },
    {
        id: 16,
        question: "Apa perbedaan utama Controller API dibanding Web?",
        options: ["API me-return JSON, Web me-return View (HTML)", "API tidak butuh Route", "API tidak bisa pakai Database", "Tidak ada bedanya"],
        correctAnswer: 0,
        explanation: "API ditujukan untuk konsumsi mesin/aplikasi lain (JSON), Web untuk manusia (HTML)."
    },

    // Module 9: Validasi
    {
        id: 17,
        question: "Jika validasi gagal pada Request API, Laravel otomatis mengembalikan status code?",
        options: ["200 OK", "500 Server Error", "404 Not Found", "422 Unprocessable Entity"],
        correctAnswer: 3,
        explanation: "422 adalah standar untuk kesalahan validasi input."
    },
    {
        id: 18,
        question: "Cara mengambil pesan error validasi input 'email' di Blade adalah?",
        options: ["@error('email') ... @enderror", "@if($email) ... @endif", "{{ $error->email }}", "@validate('email')"],
        correctAnswer: 0,
        explanation: "Direktif @error('field') memudahkan pengecekan dan menampilkan pesan error spesifik."
    },

    // Module 10: Auth & Security
    {
        id: 19,
        question: "Middleware 'auth' berfungsi untuk?",
        options: ["Mempercepat loading", "Mengizinkan semua orang masuk", "Memastikan hanya user yang login yang bisa akses", "Mengenkripsi password"],
        correctAnswer: 2,
        explanation: "Middleware auth bertindak sebagai satpam yang mengecek sesi login user."
    },
    {
        id: 20,
        question: "Helper untuk mendapatkan data user yang sedang login adalah?",
        options: ["User::now()", "Auth::user()", "Session::get('user')", "Request::user_id()"],
        correctAnswer: 1,
        explanation: "Auth::user() mengembalikan objek model User yang sedang terautentikasi."
    },

    // Module 11: Testing Postman
    {
        id: 21,
        question: "Header apa yang perlu ditambahkan di Postman agar Laravel merespon dengan JSON?",
        options: ["Content-Type: text/html", "Accept: application/json", "Authorization: Bearer", "User-Agent: Postman"],
        correctAnswer: 1,
        explanation: "Header Accept: application/json memberitahu Laravel bahwa klien mengharapkan respon JSON."
    },
    {
        id: 22,
        question: "Fitur Postman untuk menyimpan request agar bisa dipakai lagi disebut?",
        options: ["History", "Collection", "Environment", "Preset"],
        correctAnswer: 1,
        explanation: "Collection memungkinkan kita mengelompokkan dan menyimpan request API untuk penggunaan berulang."
    }
];
