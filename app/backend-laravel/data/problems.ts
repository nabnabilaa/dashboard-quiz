
export interface BuilderTask {
    id: number;
    title: string;
    description: string;
    initialCode: string;
    solutionPattern: string; // Regex or substring to check
    answerKey: string; // Correct solution code
    hints: string[];
    dictionary: DictionaryItem[];
}

export interface DictionaryItem {
    label: string;
    code: string;
    description: string;
}

export const builderTasks: BuilderTask[] = [
    {
        id: 1,
        title: "Route Dasar Hello",
        description: "Buat rute GET '/hello' yang mengembalikan string 'Halo Laravel'.",
        initialCode: `<?php
use Illuminate\\Support\\Facades\\Route;

// Tulis kode route di bawah
`,
        solutionPattern: "Route::get\\s*\\(\\s*['\"]/hello['\"]\\s*,\\s*function\\s*\\(\\)\\s*\\{\\s*return\\s*['\"]Halo Laravel['\"]\\s*;\\s*\\}\\s*\\);",
        answerKey: `Route::get('/hello', function() {
    return 'Halo Laravel';
});`,
        hints: [
            "1. Mulai dengan mengetik `Route::get` untuk membuat rute baru.",
            "2. Parameter pertama adalah url path, yaitu `'/hello'`.",
            "3. Parameter kedua adalah fungsi yang menjalankannya: `function() { ... }`.",
            "4. Di dalam kurung kurawal fungsi, tulis `return 'Halo Laravel';`.",
            "5. Gabungkan semuanya: `Route::get('/hello', function() { return 'Halo Laravel'; });`"
        ],
        dictionary: [
            { label: "Route::get", code: "Route::get('/url', function() { ... });", description: "Mendefinisikan rute untuk method GET (ambil data)." },
            { label: "Function", code: "function() { ... }", description: "Fungsi anonim (closure) yang dijalankan saat rute diakses." },
            { label: "Return", code: "return 'Teks';", description: "Mengirimkan output kembali ke browser pengguna." }
        ]
    },
    {
        id: 2,
        title: "Controller & View",
        description: "Di dalam method index(), return view bernama 'products.index' dengan data variable 'products'.",
        initialCode: `<?php
class ProductController extends Controller {
    public function index() {
        $products = ['Sepatu', 'Tas'];
        // Return view di sini
        
    }
}
`,
        solutionPattern: "return\\s+view\\s*\\(\\s*['\"]products\\.index['\"]\\s*,\\s*\\[\\s*['\"]products['\"]\\s*=>\\s*\\$products\\s*\\]\\s*\\);",
        answerKey: `return view('products.index', ['products' => $products]);`,
        hints: [
            "1. Gunakan fungsi `return view(...)`.",
            "2. Argumen pertama adalah nama file view: `'products.index'`.",
            "3. Argumen kedua adalah data dalam bentuk array: `['products' => $products]`.",
            "4. Syntax array asosiatif di PHP menggunakan tanda panah `=>`, contoh: `['kunci' => 'nilai']`.",
            "5. Hasil akhir: `return view('products.index', ['products' => $products]);`"
        ],
        dictionary: [
            { label: "return view()", code: "return view('nama.view', ['key' => $val]);", description: "Mengembalikan tampilan (HTML) dari file Blade." },
            { label: "Associative Array", code: "['nama' => 'Busi', 'harga' => 5000]", description: "Array dengan kunci (key) yang ditentukan sendiri." },
            { label: "Variable Parsing", code: "['data' => $data]", description: "Mengoper variable PHP ke view agar bisa ditampilkan." }
        ]
    },
    {
        id: 3,
        title: "Blade Layout Inheritance",
        description: "Gunakan direktif Blade untuk mewarisi layout utama 'layouts.app'.",
        initialCode: `
<!-- Tulis direktif extends di baris pertama -->

@section('content')
    <h1>Halaman Dashboard</h1>
@endsection
`,
        solutionPattern: "@extends\\s*\\(\\s*['\"]layouts\\.app['\"]\\s*\\)",
        answerKey: `@extends('layouts.app')`,
        hints: [
            "1. Inheritance (pewarisan) layout di Blade menggunakan `@extends`.",
            "2. Letakkan kode ini di baris paling atas file.",
            "3. Nama layoutnya adalah `'layouts.app'`, yang berarti file `app.blade.php` di dalam folder `layouts`.",
            "4. Tulis lengkap: `@extends('layouts.app')`."
        ],
        dictionary: [
            { label: "@extends", code: "@extends('folder.file')", description: "Mewarisi struktur HTML layout induk." },
            { label: "@section", code: "@section('nama') ... @endsection", description: "Mendefinisikan isi konten untuk bagian tertentu." },
            { label: "Dot Notation", code: "layouts.app", description: "Cara Laravel menunjuk path file: layouts/app.blade.php" }
        ]
    },
    {
        id: 4,
        title: "Mass Assignment Model",
        description: "Tambahkan properti $fillable di Model supaya kolom 'name' dan 'price' bisa diisi.",
        initialCode: `<?php
namespace App\\Models;
use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model {
    // Tambahkan properti $fillable
    
}
`,
        solutionPattern: "protected\\s+\\$fillable\\s*=\\s*\\[\\s*['\"]name['\"]\\s*,\\s*['\"]price['\"]\\s*\\]\\s*;",
        answerKey: `protected $fillable = ['name', 'price'];`,
        hints: [
            "1. *Mass Assignment* adalah fitur keamanan Laravel untuk membatasi kolom apa saja yang boleh diisi user.",
            "2. Kita menggunakan properti `protected $fillable`.",
            "3. Isinya adalah array nama-nama kolom database.",
            "4. Syntax: `protected $fillable = ['kolom1', 'kolom2'];`.",
            "5. Masukkan 'name' dan 'price' ke dalam array tersebut."
        ],
        dictionary: [
            { label: "$fillable", code: "protected $fillable = ['col1', 'col2'];", description: "Daftar putih (whitelist) kolom yang boleh diisi massal." },
            { label: "Visibility", code: "protected", description: "Properti hanya bisa diakses oleh class ini dan turunannya." },
            { label: "Array Syntax", code: "['item1', 'item2']", description: "Cara menulis list di PHP." }
        ]
    },
    {
        id: 5,
        title: "Membuat Resource Route",
        description: "Daftarkan Resource Route untuk 'products' yang mengarah ke ProductController.",
        initialCode: `<?php
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\ProductController;

// Buat resource route satu baris
`,
        solutionPattern: "Route::resource\\s*\\(\\s*['\"]products['\"]\\s*,\\s*ProductController::class\\s*\\);",
        answerKey: `Route::resource('products', ProductController::class);`,
        hints: [
            "1. `Route::resource` adalah jalan pintas untuk membuat 7 rute CRUD sekaligus (index, create, store, show, edit, update, destroy).",
            "2. Parameter 1: URL path prefix, yaitu `'products'`.",
            "3. Parameter 2: Nama Controller Class.",
            "4. Gunakan syntax `::class` untuk mengambil nama class controller: `ProductController::class`.",
            "5. Tulis: `Route::resource('products', ProductController::class);`"
        ],
        dictionary: [
            { label: "Route::resource", code: "Route::resource('path', Ctrl::class);", description: "Membuat otomatis 7 rute standar CRUD." },
            { label: "::class", code: "User::class", description: "Mengambil nama lengkap namespace class sebagai string." }
        ]
    },
    {
        id: 6,
        title: "Validasi Request",
        description: "Validasi input: 'title' wajib diisi (required) dan 'body' minimal 10 karakter.",
        initialCode: `<?php
public function store(Request $request) {
    // Tulis validasi di sini
    $validated = 
    
    Post::create($validated);
}
`,
        solutionPattern: "\\$validated\\s*=\\s*\\$request->validate\\s*\\(\\s*\\[\\s*['\"]title['\"]\\s*=>\\s*['\"]required['\"]\\s*,\\s*['\"]body['\"]\\s*=>\\s*['\"]min:10['\"]\\s*\\]\\s*\\);",
        answerKey: `$validated = $request->validate([
    'title' => 'required',
    'body' => 'min:10'
]);`,
        hints: [
            "1. Objek `$request` memiliki method `validate()`.",
            "2. `validate` menerima array aturan. Kuncinya nama input, nilainya aturan.",
            "3. Aturan 'required' artinya tidak boleh kosong.",
            "4. Aturan 'min:10' artinya minimal 10 karakter.",
            "5. Gabungkan: `$request->validate(['title' => 'required', 'body' => 'min:10']);`"
        ],
        dictionary: [
            { label: "validate()", code: "$request->validate([... rules ...]);", description: "Mengecek input. Jika salah, otomatis return error ke user." },
            { label: "Rule: required", code: "'email' => 'required'", description: "Input wajib diisi." },
            { label: "Rule: min", code: "'password' => 'min:8'", description: "Panjang karakter minimal." }
        ]
    },
    {
        id: 7,
        title: "API Responses",
        description: "Return respon JSON dengan data produk dan status code 201 (Created).",
        initialCode: `<?php
public function store() {
    $product = Product::create([...]);
    
    // Return JSON response
    
}
`,
        solutionPattern: "return\\s+response\\(\\)->json\\(\\s*\\$product\\s*,\\s*201\\s*\\);",
        answerKey: `return response()->json($product, 201);`,
        hints: [
            "1. Untuk API, kita tidak me-return view, tapi data JSON.",
            "2. Gunakan helper `response()->json(...)`.",
            "3. Parameter pertama adalah datanya, yaitu variable `$product`.",
            "4. Parameter kedua adalah HTTP Status Code. Untuk 'Created' (berhasil dibuat), kodenya `201`.",
            "5. Tulis: `return response()->json($product, 201);`"
        ],
        dictionary: [
            { label: "response()->json()", code: "return response()->json($data, 200);", description: "Mengubah data PHP menjadi format JSON untuk API." },
            { label: "Status 200", code: "200 OK", description: "Request berhasil." },
            { label: "Status 201", code: "201 Created", description: "Data baru berhasil dibuat." }
        ]
    },
    {
        id: 8,
        title: "Middleware Auth",
        description: "Lindungi route '/dashboard' dengan middleware 'auth'.",
        initialCode: `<?php
Route::get('/dashboard', function() {
    return view('dashboard');
})
// Chain middleware di sini
;
`,
        solutionPattern: "->middleware\\(['\"]auth['\"]\\)",
        answerKey: `->middleware('auth')`,
        hints: [
            "1. Middleware adalah penjaga pintu. Kita mau pasang penjaga 'auth' (login).",
            "2. Kita bisa menempelkan (chain) method `middleware` langsung di belakang definisi Route.",
            "3. Method nya adalah `->middleware('nama_middleware')`.",
            "4. Nama middleware untuk login di Laravel adalah `'auth'`.",
            "5. Tambahkan `->middleware('auth')` sebelum titik koma `;`."
        ],
        dictionary: [
            { label: "Middleware", code: "->middleware('auth')", description: "Kode yang jalan sebelum request sampai ke controller. Cth: Cek Login." },
            { label: "Chaining", code: "$obj->method1()->method2();", description: "Memanggil method berantai dalam satu baris." }
        ]
    },
    {
        id: 9,
        title: "Blade Loop Data",
        description: "Gunakan @foreach untuk menampilkan list nama item.",
        initialCode: `
<ul>
    <!-- Loop $items sebagai $item -->
    
        <li>{{ $item->name }}</li>
    <!-- End loop -->
</ul>
`,
        solutionPattern: "@foreach\\s*\\(\\$items\\s+as\\s+\\$item\\)\\s*<li>\\{\\{\\s*\\$item->name\\s*\\}\\}\\s*<\\/li>\\s*@endforeach",
        answerKey: `@foreach ($items as $item)
    <li>{{ $item->name }}</li>
@endforeach`,
        hints: [
            "1. `@foreach` digunakan untuk mengulang array data.",
            "2. Syntaxnya mirip PHP biasa: `@foreach ($kumpulanData as $satuanData)`.",
            "3. Di sini `$kumpulanData` adalah `$items` dan `$satuanData` adalah `$item`.",
            "4. Jangan lupa menutup loop dengan `@endforeach`.",
            "5. Bungkus tag `<li>...</li>` di antara `@foreach` dan `@endforeach`."
        ],
        dictionary: [
            { label: "@foreach", code: "@foreach($list as $item) ... @endforeach", description: "Looping / perulangan data di Blade." },
            { label: "{{ }}", code: "{{ $variable }}", description: "Echo / mencetak isi variable ke layar (aman dari XSS)." },
            { label: "Object Property", code: "$user->name", description: "Mengakses properti 'name' dari objek '$user'." }
        ]
    },
    {
        id: 10,
        title: "API Resource Route",
        description: "Daftarkan 'api/photos' menggunakan apiResource untuk PhotoController.",
        initialCode: `<?php
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\PhotoController;

// Gunakan apiResource
`,
        solutionPattern: "Route::apiResource\\s*\\(\\s*['\"]photos['\"]\\s*,\\s*PhotoController::class\\s*\\);",
        answerKey: `Route::apiResource('photos', PhotoController::class);`,
        hints: [
            "1. Mirip dengan `resource` biasa, tapi `apiResource` tidak membuat route untuk tampilan (create & edit).",
            "2. Ini cocok untuk API murni.",
            "3. Gunakan `Route::apiResource(...)`.",
            "4. Parameter 1: `'photos'` (nanti otomatis jadi URL `/api/photos`).",
            "5. Parameter 2: `PhotoController::class`.",
            "6. Tulis: `Route::apiResource('photos', PhotoController::class);`"
        ],
        dictionary: [
            { label: "apiResource", code: "Route::apiResource('name', Ctrl::class);", description: "Resource route tanpa create/edit view, khusus API." },
            { label: "REST API", code: "GET, POST, PUT, DELETE", description: "Standar arsitektur komunikasi web." }
        ]
    }
];
