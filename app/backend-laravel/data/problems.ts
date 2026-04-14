
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
        title: "Basic Hello Route",
        description: "Create a GET route for '/hello' that returns the string 'Hello Laravel'.",
        initialCode: `<?php
use Illuminate\\Support\\Facades\\Route;

// Write your route code below
`,
        solutionPattern: "Route::get\\s*\\(\\s*['\"]/hello['\"]\\s*,\\s*function\\s*\\(\\)\\s*\\{\\s*return\\s*['\"]Hello Laravel['\"]\\s*;\\s*\\}\\s*\\);",
        answerKey: `Route::get('/hello', function() {
    return 'Hello Laravel';
});`,
        hints: [
            "1. Start by typing `Route::get` to create a new route.",
            "2. The first parameter is the URL path, which is `'/hello'`.",
            "3. The second parameter is the function that handles it: `function() { ... }`.",
            "4. Inside the function's curly braces, write `return 'Hello Laravel';`.",
            "5. Combine everything: `Route::get('/hello', function() { return 'Hello Laravel'; });`"
        ],
        dictionary: [
            { label: "Route::get", code: "Route::get('/url', function() { ... });", description: "Defines a route for the GET method (retrieving data)." },
            { label: "Function", code: "function() { ... }", description: "An anonymous function (closure) executed when the route is accessed." },
            { label: "Return", code: "return 'Text';", description: "Sends output back to the user's browser." }
        ]
    },
    {
        id: 2,
        title: "Controller & View",
        description: "In the index() method, return a view named 'products.index' with the data variable 'products'.",
        initialCode: `<?php
class ProductController extends Controller {
    public function index() {
        $products = ['Shoes', 'Bags'];
        // Return the view here
        
    }
}
`,
        solutionPattern: "return\\s+view\\s*\\(\\s*['\"]products\\.index['\"]\\s*,\\s*\\[\\s*['\"]products['\"]\\s*=>\\s*\\$products\\s*\\]\\s*\\);",
        answerKey: `return view('products.index', ['products' => $products]);`,
        hints: [
            "1. Use the `return view(...)` function.",
            "2. The first argument is the view file name: `'products.index'`.",
            "3. The second argument is the data in array format: `['products' => $products]`.",
            "4. PHP associative array syntax uses the arrow `=>`, e.g., `['key' => 'value']`.",
            "5. Final result: `return view('products.index', ['products' => $products]);`"
        ],
        dictionary: [
            { label: "return view()", code: "return view('view.name', ['key' => $val]);", description: "Returns a visual display (HTML) from a Blade file." },
            { label: "Associative Array", code: "['name' => 'Drill', 'price' => 5000]", description: "An array with custom-defined keys." },
            { label: "Variable Parsing", code: "['data' => $data]", description: "Passes PHP variables to the view so they can be displayed." }
        ]
    },
    {
        id: 3,
        title: "Blade Layout Inheritance",
        description: "Use the Blade directive to inherit the main layout 'layouts.app'.",
        initialCode: `
<!-- Write the extends directive on the first line -->

@section('content')
    <h1>Dashboard Page</h1>
@endsection
`,
        solutionPattern: "@extends\\s*\\(\\s*['\"]layouts\\.app['\"]\\s*\\)",
        answerKey: `@extends('layouts.app')`,
        hints: [
            "1. Layout inheritance in Blade uses `@extends`.",
            "2. Place this code at the very top of the file.",
            "3. The layout name is `'layouts.app'`, which refers to `app.blade.php` inside the `layouts` folder.",
            "4. Write it fully: `@extends('layouts.app')`."
        ],
        dictionary: [
            { label: "@extends", code: "@extends('folder.file')", description: "Inherits the HTML structure of a parent layout." },
            { label: "@section", code: "@section('name') ... @endsection", description: "Defines content content for a specific section." },
            { label: "Dot Notation", code: "layouts.app", description: "Laravel's way of pointing to file paths: layouts/app.blade.php" }
        ]
    },
    {
        id: 4,
        title: "Model Mass Assignment",
        description: "Add the $fillable property to the Model so that the 'name' and 'price' columns can be filled.",
        initialCode: `<?php
namespace App\\Models;
use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model {
    // Add the $fillable property
    
}
`,
        solutionPattern: "protected\\s+\\$fillable\\s*=\\s*\\[\\s*['\"]name['\"]\\s*,\\s*['\"]price['\"]\\s*\\]\\s*;",
        answerKey: `protected $fillable = ['name', 'price'];`,
        hints: [
            "1. *Mass Assignment* is a Laravel security feature to restrict which columns can be filled by users.",
            "2. We use the `protected $fillable` property.",
            "3. Its value is an array of database column names.",
            "4. Syntax: `protected $fillable = ['column1', 'column2'];`.",
            "5. Include 'name' and 'price' in that array."
        ],
        dictionary: [
            { label: "$fillable", code: "protected $fillable = ['col1', 'col2'];", description: "A whitelist of columns that can be mass-filled." },
            { label: "Visibility", code: "protected", description: "The property is only accessible by this class and its subclasses." },
            { label: "Array Syntax", code: "['item1', 'item2']", description: "The way to write lists in PHP." }
        ]
    },
    {
        id: 5,
        title: "Creating a Resource Route",
        description: "Register a Resource Route for 'products' pointing to ProductController.",
        initialCode: `<?php
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\ProductController;

// Create a one-line resource route
`,
        solutionPattern: "Route::resource\\s*\\(\\s*['\"]products['\"]\\s*,\\s*ProductController::class\\s*\\);",
        answerKey: `Route::resource('products', ProductController::class);`,
        hints: [
            "1. `Route::resource` is a shortcut to create 7 CRUD routes at once (index, create, store, show, edit, update, destroy).",
            "2. Parameter 1: URL path prefix, which is `'products'`.",
            "3. Parameter 2: The Controller Class name.",
            "4. Use `::class` syntax to get the controller class name: `ProductController::class`.",
            "5. Write: `Route::resource('products', ProductController::class);`"
        ],
        dictionary: [
            { label: "Route::resource", code: "Route::resource('path', Ctrl::class);", description: "Automatically creates 7 standard CRUD routes." },
            { label: "::class", code: "User::class", description: "Retrieves the full class namespace name as a string." }
        ]
    },
    {
        id: 6,
        title: "Request Validation",
        description: "Validate input: 'title' is required and 'body' must be at least 10 characters.",
        initialCode: `<?php
public function store(Request $request) {
    // Write validation here
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
            "1. The `$request` object has a `validate()` method.",
            "2. `validate` accepts an array of rules. The key is the input name, the value is the rule.",
            "3. The 'required' rule means it cannot be empty.",
            "4. The 'min:10' rule means a minimum of 10 characters.",
            "5. Combine: `$request->validate(['title' => 'required', 'body' => 'min:10']);`"
        ],
        dictionary: [
            { label: "validate()", code: "$request->validate([... rules ...]);", description: "Checks input. If incorrect, automatically returns errors to the user." },
            { label: "Rule: required", code: "'email' => 'required'", description: "The input field is mandatory." },
            { label: "Rule: min", code: "'password' => 'min:8'", description: "Minimum character length." }
        ]
    },
    {
        id: 7,
        title: "API Responses",
        description: "Return a JSON response with product data and status code 201 (Created).",
        initialCode: `<?php
public function store() {
    $product = Product::create([...]);
    
    // Return JSON response
    
}
`,
        solutionPattern: "return\\s+response\\(\\)->json\\(\\s*\\$product\\s*,\\s*201\\s*\\);",
        answerKey: `return response()->json($product, 201);`,
        hints: [
            "1. For APIs, we don't return a view, but rather JSON data.",
            "2. Use the `response()->json(...)` helper.",
            "3. The first parameter is the data, which is the `$product` variable.",
            "4. The second parameter is the HTTP Status Code. For 'Created' (successfully made), the code is `201`.",
            "5. Write: `return response()->json($product, 201);`"
        ],
        dictionary: [
            { label: "response()->json()", code: "return response()->json($data, 200);", description: "Converts PHP data into JSON format for APIs." },
            { label: "Status 200", code: "200 OK", description: "Request successful." },
            { label: "Status 201", code: "201 Created", description: "New data successfully created." }
        ]
    },
    {
        id: 8,
        title: "Middleware Auth",
        description: "Protect the '/dashboard' route with 'auth' middleware.",
        initialCode: `<?php
Route::get('/dashboard', function() {
    return view('dashboard');
})
// Chain middleware here
;
`,
        solutionPattern: "->middleware\\(['\"]auth['\"]\\)",
        answerKey: `->middleware('auth')`,
        hints: [
            "1. Middleware is a gatekeeper. We want to install an 'auth' (login) guard.",
            "2. We can chain the `middleware` method directly after the Route definition.",
            "3. The method is `->middleware('middleware_name')`.",
            "4. The login middleware name in Laravel is `'auth'`.",
            "5. Add `->middleware('auth')` before the semicolon `;`."
        ],
        dictionary: [
            { label: "Middleware", code: "->middleware('auth')", description: "Code that runs before the request reaches the controller. E.g., Login Check." },
            { label: "Chaining", code: "$obj->method1()->method2();", description: "Calling methods sequentially in a single statement." }
        ]
    },
    {
        id: 9,
        title: "Blade Data Loop",
        description: "Use @foreach to display a list of item names.",
        initialCode: `
<ul>
    <!-- Loop $items as $item -->
    
        <li>{{ $item->name }}</li>
    <!-- End loop -->
</ul>
`,
        solutionPattern: "@foreach\\s*\\(\\$items\\s+as\\s+\\$item\\)\\s*<li>\\{\\{\\s*\\$item->name\\s*\\}\\}\\s*<\\/li>\\s*@endforeach",
        answerKey: `@foreach ($items as $item)
    <li>{{ $item->name }}</li>
@endforeach`,
        hints: [
            "1. `@foreach` is used to iterate through an array of data.",
            "2. Syntax is similar to standard PHP: `@foreach ($dataCollection as $singleItem)`.",
            "3. Here `$dataCollection` is `$items` and `$singleItem` is `$item`.",
            "4. Don't forget to close the loop with `@endforeach`.",
            "5. Wrap the `<li>...</li>` tags between `@foreach` and `@endforeach`."
        ],
        dictionary: [
            { label: "@foreach", code: "@foreach($list as $item) ... @endforeach", description: "Looping / iterating through data in Blade." },
            { label: "{{ }}", code: "{{ $variable }}", description: "Echoing / printing variable content to the screen (XSS safe)." },
            { label: "Object Property", code: "$user->name", description: "Accessing the 'name' property of the '$user' object." }
        ]
    },
    {
        id: 10,
        title: "API Resource Route",
        description: "Register 'api/photos' using apiResource for PhotoController.",
        initialCode: `<?php
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\PhotoController;

// Use apiResource
`,
        solutionPattern: "Route::apiResource\\s*\\(\\s*['\"]photos['\"]\\s*,\\s*PhotoController::class\\s*\\);",
        answerKey: `Route::apiResource('photos', PhotoController::class);`,
        hints: [
            "1. Similar to the standard `resource`, but `apiResource` does not create routes for views (create & edit).",
            "2. This is suitable for pure APIs.",
            "3. Use `Route::apiResource(...)`.",
            "4. Parameter 1: `'photos'` (it will automatically become the URL `/api/photos`).",
            "5. Parameter 2: `PhotoController::class`.",
            "6. Write: `Route::apiResource('photos', PhotoController::class);`"
        ],
        dictionary: [
            { label: "apiResource", code: "Route::apiResource('name', Ctrl::class);", description: "Resource route without create/edit views, specific for APIs." },
            { label: "REST API", code: "GET, POST, PUT, DELETE", description: "Web communication architecture standard." }
        ]
    }
];
