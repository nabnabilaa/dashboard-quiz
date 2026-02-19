
export interface Module {
    id: string;
    title: string;
    description: string;
    content: string; // Markdown content
}

export const modules: Module[] = [
    {
        id: "backend-http",
        title: "Dasar Backend & HTTP",
        description: "Memahami analogi backend (dapur restoran), siklus Request-Response, dan metode HTTP.",
        content: `
# Dasar Cara Kerja Backend dan HTTP

## Apa Itu Backend? (Analogi Restoran)
Backend adalah bagian dari aplikasi yang berjalan di sisi server dan tidak terlihat langsung oleh pengguna.

### Analogi Restoran:
- **Frontend (Ruang Makan)**: Ibarat ruang makan yang indah. Pelanggan melihat buku menu, memesan makanan, dan menikmati suasana. Ini adalah area interaksi pelanggan (Browser/Client).
- **Backend (Dapur)**: Ibarat dapur yang sibuk di belakang layar. Pelanggan tidak melihat apa yang terjadi di sini. Koki (Server/Script) menerima pesanan, mengambil bahan baku dari kulkas (Database), memasaknya sesuai resep (Logika Bisnis), dan menyajikannya kembali ke pelayan.

### Ringkasnya:
- **Frontend**: Fokus pada tampilan & interaksi di browser (HTML, CSS, JS).
- **Backend**: Fokus pada penyimpanan, pengolahan, dan integritas data (PHP/Laravel, Database).

## Mekanisme Request-Response
Komunikasi web terjadi melalui protokol HTTP dengan model:
1. **Request (Permintaan)**: Client mengirim permintaan (misal: "Buka halaman produk ID 5").
2. **Processing (Pemrosesan)**: Server menerima, mencari data di database, dan meracik respon.
3. **Response (Jawaban)**: Server mengirim balik data (HTML atau JSON) beserta Status Code.

## Metode HTTP (HTTP Verbs)
Setiap request memiliki "kata kerja" yang menentukan tindakan:
- **GET**: Mengambil data (misal: lihat halaman produk). Tidak mengubah data server.
- **POST**: Mengirim data baru (misal: submit form registrasi).
- **PUT / PATCH**: Memperbarui data yang sudah ada.
- **DELETE**: Menghapus data.

> **Penting**: HTTP bersifat *Stateless*, artinya server tidak "mengingat" request sebelumnya secara otomatis.
        `
    },
    {
        id: "intro-mvc",
        title: "Pengenalan Laravel & MVC",
        description: "Instalasi, struktur folder, dan konsep Model-View-Controller.",
        content: `
# Pengenalan Laravel & MVC

## Apa Itu Laravel?
Laravel adalah kerangka kerja (framework) PHP modern yang ekspresif dan elegan. Ia menyediakan alat lengkap ("Batteries Included") seperti Eloquent ORM, Routing, dan Security out-of-the-box.

## Instalasi Laravel 12
Pastikan PHP dan Composer sudah terinstal.
\`\`\`bash
composer create-project laravel/laravel:^12.0 nama-proyek
cd nama-proyek
php artisan serve
\`\`\`
Akses di \`http://127.0.0.1:8000\`.

## Konsep MVC (Model-View-Controller)
Laravel memisahkan kode menjadi tiga bagian utama:
1.  **Model (M) - "Si Pengelola Data"**: Berinteraksi dengan database.
    *   Lokasi: \`app/Models/\`
2.  **View (V) - "Si Tampilan"**: Menyajikan data ke user (HTML).
    *   Lokasi: \`resources/views/\`
3.  **Controller (C) - "Si Pengatur"**: Menerima request, menyuruh Model mengambil data, lalu melemparnya ke View.
    *   Lokasi: \`app/Http/Controllers/\`

## Struktur Folder Penting
- **\`routes/\`**: Jalur URL aplikasi (web.php untuk HTML, api.php untuk JSON).
- **\`app/\`**: Inti logika aplikasi (Models, Controllers).
- **\`resources/\`**: Aset mentah (Views, CSS/JS sumber).
- **\`database/\`**: Migrasi dan Seeds.
- **\`.env\`**: Konfigurasi sensitif (Password DB, API Keys). **Jangan pernah commit file ini!**
        `
    },
    {
        id: "routing-controller",
        title: "Routing & Controller",
        description: "Mengatur alur logika URL ke Controller.",
        content: `
# Routing & Controller: Mengatur Alur Logika

Jika aplikasi adalah gedung kantor, **Routing** adalah resepsionis yang mengarahkan tamu, dan **Controller** adalah staf yang melayani tamu tersebut.

## Routing Dasar (\`routes/web.php\`)
\`\`\`php
use Illuminate\\Support\\Facades\\Route;

// Route sederhana
Route::get('/halo', function () {
    return 'Halo Dunia!';
});

// Route dengan Parameter
Route::get('/produk/{id}', function ($id) {
    return "Produk ID: " . $id;
});
\`\`\`

## Controller
Daripada menulis logika di file route (yang akan jadi berantakan), pindahkan ke Controller.

Buat Controller:
\`\`\`bash
php artisan make:controller ProductController
\`\`\`

Isi Controller (\`app/Http/Controllers/ProductController.php\`):
\`\`\`php
public function show($id) {
    return "Ini logika Controller untuk ID: " . $id;
}
\`\`\`

Hubungkan di Route:
\`\`\`php
use App\\Http\\Controllers\\ProductController;
Route::get('/produk/{id}', [ProductController::class, 'show']);
\`\`\`

## Resource Controller
Cara cepat membuat 7 route standar CRUD (Create, Read, Update, Delete):
\`\`\`bash
php artisan make:controller ProductController --resource
\`\`\`
Di route cukup satu baris:
\`\`\`php
Route::resource('products', ProductController::class);
\`\`\`
Ini otomatis membuat route untuk index, create, store, show, edit, update, dan destroy.
        `
    },
    {
        id: "view-blade",
        title: "View & Blade Templating",
        description: "Menampilkan data dinamis dengan mesin template Blade.",
        content: `
# View & Blade Templating

Blade adalah mesin template powerful Laravel. File berekstensi \`.blade.php\` di folder \`resources/views/\`.

## Sintaks Dasar
- **Echo Data**: \`{{ $variabel }}\` (Aman, otomatis escaping XSS).
- **HTML Mentah**: \`{!! $html !!}\` (Hati-hati gunakan ini).

## Struktur Kendali
\`\`\`blade
<!-- Pengkondisian -->
@if ($stok > 0)
    <span>Tersedia</span>
@else
    <span>Habis</span>
@endif

<!-- Perulangan -->
@foreach ($produk as $item)
    <li>{{ $item->nama }}</li>
@endforeach
\`\`\`

## Template Inheritance (Pewarisan Layout)
Membuat satu layout induk agar tidak mengulang kode Header/Footer.

**Induk (\`layouts/app.blade.php\`):**
\`\`\`blade
<html>
<body>
    <nav>Menu...</nav>
    <div class="konten">
        @yield('content')
    </div>
</body>
</html>
\`\`\`

**Anak (\`home.blade.php\`):**
\`\`\`blade
@extends('layouts.app')

@section('content')
    <h1>Halaman Home</h1>
@endsection
\`\`\`

## Fitur Penting Lain
- **@csrf**: Wajib ada di dalam setiap form \`<form method="POST">\` untuk keamanan.
- **@method('PUT')**: Untuk manipulasi method form HTML agar bisa mengirim request PUT/DELETE.
        `
    },
    {
        id: "database-migration",
        title: "Database & Migrasi",
        description: "Mengelola struktur database layaknya version control.",
        content: `
# Database & Migrasi

## Konfigurasi
Atur koneksi database di file \`.env\`:
\`\`\`env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=
\`\`\`

## Apa Itu Migrasi?
Migrasi adalah *Version Control* untuk database. Tim tidak perlu kirim-kiriman file SQL manual. Cukup jalankan kode migrasi.

## Membuat & Menjalankan Migrasi
1.  **Buat File Migrasi**:
    \`\`\`bash
    php artisan make:migration create_products_table
    \`\`\`
2.  **Edit File (di \`database/migrations/\`)**:
    \`\`\`php
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->string('name');
            $table->text('description')->nullable();
            $table->integer('price');
            $table->timestamps(); // created_at & updated_at
        });
    }
    \`\`\`
3.  **Eksekusi ke Database**:
    \`\`\`bash
    php artisan migrate
    \`\`\`

## Mengelola Migrasi
- \`php artisan migrate:rollback\`: Membatalkan migrasi terakhir.
- \`php artisan migrate:fresh\`: **Hapus semua tabel** dan migrasi ulang dari nol (Hati-hati data hilang!).
        `
    },
    {
        id: "eloquent-orm",
        title: "Eloquent ORM",
        description: "Berinteraksi dengan database menggunakan Model PHP, bukan SQL.",
        content: `
# Eloquent ORM

Eloquent adalah "Penerjemah". Anda bicara PHP, Eloquent menerjemahkan ke SQL.
Setiap tabel punya satu **Model**.
- Tabel: \`products\` (Jamak)
- Model: \`Product\` (Tunggal)

## Membuat Model
\`\`\`bash
php artisan make:model Product
\`\`\`

## Mass Assignment ($fillable)
Fitur keamanan wajib. Tentukan kolom mana yang boleh diisi user di file Model \`app/Models/Product.php\`:
\`\`\`php
protected $fillable = ['name', 'description', 'price'];
\`\`\`

## Operasi CRUD dengan Eloquent
### 1. READ (Ambil Data)
\`\`\`php
$all = Product::all();
$satu = Product::find(1); // Cari ID 1
$murah = Product::where('price', '<', 50000)->get();
\`\`\`

### 2. CREATE (Tambah Data)
\`\`\`php
Product::create([
    'name' => 'Sepatu',
    'price' => 150000
]);
\`\`\`

### 3. UPDATE (Ubah Data)
\`\`\`php
$product = Product::find(1);
$product->update(['price' => 120000]);
\`\`\`

### 4. DELETE (Hapus Data)
\`\`\`php
$product = Product::find(1);
$product->delete();
// Atau
Product::destroy(1);
\`\`\`
        `
    },
    {
        id: "crud-web",
        title: "Studi Kasus: CRUD Website",
        description: "Membangun aplikasi Katalog Produk lengkap dengan tampilan Web.",
        content: `
# Studi Kasus: CRUD Website (Katalog Produk)

Kita akan menggabungkan Route, Controller, Model, dan View.

## 1. Routing
Di \`routes/web.php\`:
\`\`\`php
Route::resource('products', ProductController::class);
\`\`\`

## 2. Controller (\`ProductController\`)
- **index()**: Ambil data \`Product::all()\`, return view \`index\`.
- **create()**: Return view form tambah.
- **store(Request $request)**: Validasi input, lalu \`Product::create($validated)\`, redirect ke index.
- **edit($id)**: Ambil data, return view form edit.
- **update(Request $request, $id)**: Validasi, update data, redirect.
- **destroy($id)**: Hapus data, redirect.

## 3. View Index (\`index.blade.php\`)
Looping data dengan table:
\`\`\`blade
@foreach($products as $p)
    <tr>
        <td>{{ $p->name }}</td>
        <td>
            <a href="{{ route('products.edit', $p->id) }}">Edit</a>
            <form action="{{ route('products.destroy', $p->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">Hapus</button>
            </form>
        </td>
    </tr>
@endforeach
\`\`\`
*Catatan: Tombol Hapus harus dibungkus form dengan method DELETE.*
        `
    },
    {
        id: "rest-api",
        title: "REST API Development",
        description: "Membuat Endpoint CRUD yang menghasilkan JSON untuk aplikasi mobile/frontend lain.",
        content: `
# Pembuatan REST API

Berbeda dengan Web yang me-return HTML, API me-return JSON. Gunakan route di \`routes/api.php\`.

## Routing API
\`\`\`php
// routes/api.php
Route::apiResource('products', ProductApiController::class);
\`\`\`
Route ini otomatis memiliki prefix \`/api\`, jadi URL-nya: \`http://host/api/products\`.

## Controller API
Buat controller terpisah, misal \`Api/ProductApiController\`.
Respon harus JSON:

**GET (Index)**
\`\`\`php
public function index() {
    return response()->json(Product::all(), 200);
}
\`\`\`

**POST (Store)**
\`\`\`php
public function store(Request $request) {
    $product = Product::create($request->all());
    return response()->json($product, 201); // 201 = Created
}
\`\`\`

**DELETE (Destroy)**
\`\`\`php
public function destroy($id) {
    Product::destroy($id);
    return response()->json(['message' => 'Deleted'], 200);
}
\`\`\`

## HTTP Status Codes Penting
- **200 OK**: Sukses.
- **201 Created**: Berhasil membuat data baru.
- **404 Not Found**: Data tidak ditemukan.
- **422 Unprocessable Entity**: Validasi gagal.
- **500 Internal Server Error**: Error di kode server.
        `
    },
    {
        id: "validation",
        title: "Validasi Input",
        description: "Menjaga integritas data dengan memvalidasi input user sebelum disimpan.",
        content: `
# Validasi Form dan Input

Jangan pernah percaya input user! Selalu validasi di Controller.

## Cara Validasi Dasar
\`\`\`php
public function store(Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'age' => 'nullable|integer|min:17',
    ]);

    // Jika lolos, kode lanjut. Jika gagal, otomatis redirect back + error.
    User::create($validated);
}
\`\`\`

## Menampilkan Error di Blade
\`\`\`blade
<input type="text" name="name" value="{{ old('name') }}">
@error('name')
    <div class="error">{{ $message }}</div>
@enderror
\`\`\`
Fitur **\`old('name')\`** berguna agar isian user tidak hilang saat validasi gagal.

## Respon Error API
Jika request datang dari API (Header \`Accept: application/json\`), Laravel otomatis me-return JSON error 422, bukan redirect.
        `
    },
    {
        id: "auth-security",
        title: "Autentikasi & Keamanan",
        description: "Sistem Login, Register, dan Middleware menggunakan Laravel Breeze.",
        content: `
# Autentikasi Dasar & Keamanan

## Laravel Breeze
Paket starter kit untuk autentikasi lengkap (Login, Register, Reset Password).
\`\`\`bash
composer require laravel/breeze --dev
php artisan breeze:install
php artisan migrate
\`\`\`

## Middleware (Satpam Route)
Untuk membatasi halaman hanya bagi user yang login, gunakan middleware \`auth\`.
\`\`\`php
Route::middleware('auth')->group(function () {
    Route::resource('products', ProductController::class);
});
\`\`\`
Jika user belum login mengakses URL ini, akan dilempar ke halaman Login.

## Mengakses User Login
Di Controller atau View:
\`\`\`php
$user = Auth::user(); // Ambil objek user
$id = Auth::id();     // Ambil ID user
\`\`\`

Di Blade:
\`\`\`blade
@auth
    Halo, {{ Auth::user()->name }}
    <form action="{{ route('logout') }}" method="POST">@csrf <button>Logout</button></form>
@endauth
\`\`\`
        `
    },
    {
        id: "postman",
        title: "Testing dengan Postman",
        description: "Cara menguji endpoint API menggunakan aplikasi Postman.",
        content: `
# Menggunakan Postman untuk Testing API

Browser biasa sulit untuk mengetes POST, PUT, DELETE. Gunakan Postman.

## Persiapan
1. Jalankan server: \`php artisan serve\`.
2. Base URL: \`http://127.0.0.1:8000/api/products\`.
3. Di Tab **Headers**, tambahkan:
   - Key: \`Accept\`
   - Value: \`application/json\`
   *(Ini agar Laravel tahu kita minta JSON, bukan HTML)*.

## Skenario Tes
1. **GET**: Masukkan URL, klik Send. Cek Status \`200 OK\` dan hasil JSON array.
2. **POST**:
   - Ganti method ke POST.
   - Ke tab **Body** -> **raw** -> **JSON**.
   - Isi: \`{ "name": "Kopi", "price": 5000 }\`
   - Send. Cek Status \`201 Created\`.
3. **Validasi Gagal**:
   - Coba POST dengan body kosong.
   - Cek Status \`422 Unprocessable Entity\` dan pesan error JSON.
4. **PUT/PATCH** (Edit): URL \`/api/products/1\`, method PUT, isi Body JSON baru.
5. **DELETE**: URL \`/api/products/1\`, method DELETE.

**Tips**: Selalu cek HTTP Status Code di pojok kanan atas response Postman.
        `
    }
];
