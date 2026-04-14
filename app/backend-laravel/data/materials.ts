
export interface Module {
    id: string;
    title: string;
    description: string;
    content: string; // Markdown content
}

export const modules: Module[] = [
    {
        id: "backend-http",
        title: "Backend Basics & HTTP",
        description: "Understanding the backend analogy (restaurant kitchen), the Request-Response cycle, and HTTP methods.",
        content: `
# Fundamentals of Backend and HTTP

## What is Backend? (Restaurant Analogy)
The backend is the part of an application that runs on the server side and is not directly visible to the user.

### Restaurant Analogy:
- **Frontend (Dining Room)**: Like a beautiful dining area. Customers see the menu, order food, and enjoy the atmosphere. This is the customer interaction area (Browser/Client).
- **Backend (Kitchen)**: Like the busy kitchen behind the scenes. Customers don't see what happens here. The chef (Server/Script) receives orders, takes ingredients from the fridge (Database), cooks them according to a recipe (Business Logic), and serves them back to the waiter.

### In Short:
- **Frontend**: Focuses on display & interaction in the browser (HTML, CSS, JS).
- **Backend**: Focuses on storage, processing, and data integrity (PHP/Laravel, Database).

## Request-Response Mechanism
Web communication happens via the HTTP protocol with the following model:
1. **Request**: The client sends a request (e.g., "Open product page ID 5").
2. **Processing**: The server receives it, looks for data in the database, and prepares a response.
3. **Response**: The server sends back data (HTML or JSON) along with a Status Code.

## HTTP Methods (HTTP Verbs)
Each request has a "verb" that determines the action:
- **GET**: Retrieves data (e.g., viewing a product page). Does not change server data.
- **POST**: Sends new data (e.g., submitting a registration form).
- **PUT / PATCH**: Updates existing data.
- **DELETE**: Deletes data.

> **Important**: HTTP is *Stateless*, meaning the server does not "remember" previous requests automatically.
        `
    },
    {
        id: "intro-mvc",
        title: "Introduction to Laravel & MVC",
        description: "Installation, folder structure, and the Model-View-Controller concept.",
        content: `
# Introduction to Laravel & MVC

## What is Laravel?
Laravel is a modern, expressive, and elegant PHP framework. It provides a complete toolset ("Batteries Included") such as Eloquent ORM, Routing, and Security out-of-the-box.

## Installing Laravel 12
Ensure PHP and Composer are installed.
\`\`\`bash
composer create-project laravel/laravel:^12.0 project-name
cd project-name
php artisan serve
\`\`\`
Access at \`http://127.0.0.1:8000\`.

## MVC Concept (Model-View-Controller)
Laravel separates code into three main parts:
1.  **Model (M) - "The Data Manager"**: Interacts with the database.
    *   Location: \`app/Models/\`
2.  **View (V) - "The Display"**: Presents data to the user (HTML).
    *   Location: \`resources/views/\`
3.  **Controller (C) - "The Orchestrator"**: Receives requests, tells the Model to get data, then passes it to the View.
    *   Location: \`app/Http/Controllers/\`

## Important Folder Structure
- **\`routes/\`**: Application URL paths (web.php for HTML, api.php for JSON).
- **\`app/\`**: Core application logic (Models, Controllers).
- **\`resources/\`**: Raw assets (Views, source CSS/JS).
- **\`database/\`**: Migrations and Seeds.
- **\`.env\`**: Sensitive configurations (DB Password, API Keys). **Never commit this file!**
        `
    },
    {
        id: "routing-controller",
        title: "Routing & Controllers",
        description: "Managing the flow of logic from URLs to Controllers.",
        content: `
# Routing & Controllers: Managing Logic Flow

If an application is an office building, **Routing** is the receptionist who directs guests, and the **Controller** is the staff member who serves those guests.

## Basic Routing (\`routes/web.php\`)
\`\`\`php
use Illuminate\\Support\\Facades\\Route;

// Simple Route
Route::get('/hello', function () {
    return 'Hello World!';
});

// Route with Parameter
Route::get('/product/{id}', function ($id) {
    return "Product ID: " . $id;
});
\`\`\`

## Controller
Instead of writing logic in the route file (which will get messy), move it to a Controller.

Create a Controller:
\`\`\`bash
php artisan make:controller ProductController
\`\`\`

Controller Content (\`app/Http/Controllers/ProductController.php\`):
\`\`\`php
public function show($id) {
    return "This is Controller logic for ID: " . $id;
}
\`\`\`

Connect in the Route:
\`\`\`php
use App\\Http\\Controllers\\ProductController;
Route::get('/product/{id}', [ProductController::class, 'show']);
\`\`\`

## Resource Controller
A fast way to create 7 standard CRUD routes (Create, Read, Update, Delete):
\`\`\`bash
php artisan make:controller ProductController --resource
\`\`\`
One line in the route is enough:
\`\`\`php
Route::resource('products', ProductController::class);
\`\`\`
This automatically creates routes for index, create, store, show, edit, update, and destroy.
        `
    },
    {
        id: "view-blade",
        title: "Views & Blade Templating",
        description: "Displaying dynamic data using the Blade template engine.",
        content: `
# Views & Blade Templating

Blade is Laravel's powerful template engine. Files have the \`.blade.php\` extension and are located in the \`resources/views/\` folder.

## Basic Syntax
- **Echo Data**: \`{{ $variable }}\` (Safe, automatic XSS escaping).
- **Raw HTML**: \`{!! $html !!}\` (Use this carefully).

## Control Structures
\`\`\`blade
<!-- Conditional -->
@if ($stock > 0)
    <span>Available</span>
@else
    <span>Out of Stock</span>
@endif

<!-- Loop -->
@foreach ($products as $item)
    <li>{{ $item->name }}</li>
@endforeach
\`\`\`

## Template Inheritance (Layout Inheritance)
Creating one base layout to avoid repeating Header/Footer code.

**Parent (\`layouts/app.blade.php\`):**
\`\`\`blade
<html>
<body>
    <nav>Menu...</nav>
    <div class="content">
        @yield('content')
    </div>
</body>
</html>
\`\`\`

**Child (\`home.blade.php\`):**
\`\`\`blade
@extends('layouts.app')

@section('content')
    <h1>Home Page</h1>
@endsection
\`\`\`

## Other Important Features
- **@csrf**: Required inside every \`<form method="POST">\` for security.
- **@method('PUT')**: For HTML form method manipulation to send PUT/DELETE requests.
        `
    },
    {
        id: "database-migration",
        title: "Databases & Migrations",
        description: "Managing database structures like version control.",
        content: `
# Databases & Migrations

## Configuration
Set up the database connection in the \`.env\` file:
\`\`\`env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=database_name
DB_USERNAME=root
DB_PASSWORD=
\`\`\`

## What is Migration?
Migration is *Version Control* for the database. Teams don't need to manually send SQL files. Just run the migration code.

## Creating & Running Migrations
1.  **Create Migration File**:
    \`\`\`bash
    php artisan make:migration create_products_table
    \`\`\`
2.  **Edit File (in \`database/migrations/\`)**:
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
3.  **Execute to Database**:
    \`\`\`bash
    php artisan migrate
    \`\`\`

## Managing Migrations
- \`php artisan migrate:rollback\`: Reverts the last migration.
- \`php artisan migrate:fresh\`: **Deletes all tables** and re-migrates from scratch (Careful, data loss!).
        `
    },
    {
        id: "eloquent-orm",
        title: "Eloquent ORM",
        description: "Interacting with the database using PHP Models, not SQL.",
        content: `
# Eloquent ORM

Eloquent is a "Translator". You speak PHP, Eloquent translates to SQL.
Each table has one **Model**.
- Table: \`products\` (Plural)
- Model: \`Product\` (Singular)

## Creating a Model
\`\`\`bash
php artisan make:model Product
\`\`\`

## Mass Assignment ($fillable)
A mandatory security feature. Define which columns can be filled by the user in the \`app/Models/Product.php\` model file:
\`\`\`php
protected $fillable = ['name', 'description', 'price'];
\`\`\`

## CRUD Operations with Eloquent
### 1. READ (Get Data)
\`\`\`php
$all = Product::all();
$one = Product::find(1); // Find ID 1
$cheap = Product::where('price', '<', 50000)->get();
\`\`\`

### 2. CREATE (Add Data)
\`\`\`php
Product::create([
    'name' => 'Shoes',
    'price' => 150000
]);
\`\`\`

### 3. UPDATE (Change Data)
\`\`\`php
$product = Product::find(1);
$product->update(['price' => 120000]);
\`\`\`

### 4. DELETE (Remove Data)
\`\`\`php
$product = Product::find(1);
$product->delete();
// Or
Product::destroy(1);
\`\`\`
        `
    },
    {
        id: "crud-web",
        title: "Case Study: CRUD Website",
        description: "Building a complete Product Catalog application with a Web view.",
        content: `
# Case Study: CRUD Website (Product Catalog)

We will combine Routes, Controllers, Models, and Views.

## 1. Routing
In \`routes/web.php\`:
\`\`\`php
Route::resource('products', ProductController::class);
\`\`\`

## 2. Controller (\`ProductController\`)
- **index()**: Get \`Product::all()\` data, return the \`index\` view.
- **create()**: Return the add form view.
- **store(Request $request)**: Validate input, then \`Product::create($validated)\`, redirect to index.
- **edit($id)**: Get data, return the edit form view.
- **update(Request $request, $id)**: Validate, update data, redirect.
- **destroy($id)**: Delete data, redirect.

## 3. Index View (\`index.blade.php\`)
Loop through data with a table:
\`\`\`blade
@foreach($products as $p)
    <tr>
        <td>{{ $p->name }}</td>
        <td>
            <a href="{{ route('products.edit', $p->id) }}">Edit</a>
            <form action="{{ route('products.destroy', $p->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">Delete</button>
            </form>
        </td>
    </tr>
@endforeach
\`\`\`
*Note: The Delete button must be wrapped in a form with the DELETE method.*
        `
    },
    {
        id: "rest-api",
        title: "REST API Development",
        description: "Creating CRUD Endpoints that produce JSON for mobile or other frontend applications.",
        content: `
# REST API Development

Unlike Web which returns HTML, an API returns JSON. Use routes in \`routes/api.php\`.

## API Routing
\`\`\`php
// routes/api.php
Route::apiResource('products', ProductApiController::class);
\`\`\`
This route automatically has the \`/api\` prefix, so the URL is: \`http://host/api/products\`.

## API Controller
Create a separate controller, e.g., \`Api/ProductApiController\`.
Responses must be JSON:

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

## Important HTTP Status Codes
- **200 OK**: Success.
- **201 Created**: Successfully created new data.
- **404 Not Found**: Data not found.
- **422 Unprocessable Entity**: Validation failed.
- **500 Internal Server Error**: Error in server code.
        `
    },
    {
        id: "validation",
        title: "Input Validation",
        description: "Maintaining data integrity by validating user input before saving.",
        content: `
# Form and Input Validation

Never trust user input! Always validate in the Controller.

## Basic Validation Method
\`\`\`php
public function store(Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'age' => 'nullable|integer|min:17',
    ]);

    // If it passes, the code continues. If it fails, it automatically redirects back + errors.
    User::create($validated);
}
\`\`\`

## Displaying Errors in Blade
\`\`\`blade
<input type="text" name="name" value="{{ old('name') }}">
@error('name')
    <div class="error">{{ $message }}</div>
@enderror
\`\`\`
The **\`old('name')\`** feature is useful so that the user's input isn't lost when validation fails.

## API Error Response
If the request comes from an API (Header \`Accept: application/json\`), Laravel automatically returns a 422 JSON error instead of a redirect.
        `
    },
    {
        id: "auth-security",
        title: "Authentication & Security",
        description: "Login system, Registration, and Middleware using Laravel Breeze.",
        content: `
# Basic Authentication & Security

## Laravel Breeze
A starter kit package for complete authentication (Login, Register, Password Reset).
\`\`\`bash
composer require laravel/breeze --dev
php artisan breeze:install
php artisan migrate
\`\`\`

## Middleware (Route Guard)
To restrict pages to logged-in users only, use the \`auth\` middleware.
\`\`\`php
Route::middleware('auth')->group(function () {
    Route::resource('products', ProductController::class);
});
\`\`\`
If a user hasn't logged in and accesses this URL, they will be redirected to the Login page.

## Accessing Logged-in User
In the Controller or View:
\`\`\`php
$user = Auth::user(); // Get user object
$id = Auth::id();     // Get user ID
\`\`\`

In Blade:
\`\`\`blade
@auth
    Hello, {{ Auth::user()->name }}
    <form action="{{ route('logout') }}" method="POST">@csrf <button>Logout</button></form>
@endauth
\`\`\`
        `
    },
    {
        id: "postman",
        title: "Testing with Postman",
        description: "How to test API endpoints using the Postman application.",
        content: `
# Using Postman for API Testing

Regular browsers are difficult for testing POST, PUT, and DELETE. Use Postman instead.

## Preparation
1. Run the server: \`php artisan serve\`.
2. Base URL: \`http://127.0.0.1:8000/api/products\`.
3. In the **Headers** tab, add:
   - Key: \`Accept\`
   - Value: \`application/json\`
   *(This lets Laravel know we want JSON, not HTML)*.

## Test Scenarios
1. **GET**: Enter the URL, click Send. Check for Status \`200 OK\` and JSON array results.
2. **POST**:
   - Change method to POST.
   - Go to the **Body** tab -> **raw** -> **JSON**.
   - Content: \`{ "name": "Coffee", "price": 5000 }\`
   - Send. Check for Status \`201 Created\`.
3. **Validation Failure**:
   - Try a POST with an empty body.
   - Check for Status \`422 Unprocessable Entity\` and JSON error messages.
4. **PUT/PATCH** (Edit): URL \`/api/products/1\`, method PUT, new JSON body content.
5. **DELETE**: URL \`/api/products/1\`, method DELETE.

**Tip**: Always check the HTTP Status Code in the top right corner of the Postman response.
        `
    }
];
