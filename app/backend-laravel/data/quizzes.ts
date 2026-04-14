
export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
    explanation?: string;
}

export const quizQuestions: Question[] = [
    // Module 1: Backend Basics & HTTP
    {
        id: 1,
        question: "In the restaurant analogy, what does the Backend represent?",
        options: ["Dining Room (Frontend)", "Menu Book (API Doc)", "Kitchen (Server/Database)", "Cashier (Payment Gateway)"],
        correctAnswer: 2,
        explanation: "The Backend is the kitchen where data is processed, hidden from the customer (user)."
    },
    {
        id: 2,
        question: "Which HTTP method is APPROPRIATE for updating existing data?",
        options: ["GET", "POST", "PUT/PATCH", "DELETE"],
        correctAnswer: 2,
        explanation: "PUT/PATCH is used to update resources. POST is for creating new ones."
    },

    // Module 2: Introduction to Laravel & MVC
    {
        id: 3,
        question: "In which file are sensitive configurations like database passwords stored?",
        options: ["config/database.php", ".env", "app/Config.php", "public/.htaccess"],
        correctAnswer: 1,
        explanation: ".env stores environment variables that should not be committed to Git."
    },
    {
        id: 4,
        question: "The letter 'C' in MVC stands for Controller. What is its main task?",
        options: ["Saving data to tables", "Displaying colors and fonts (CSS)", "Managing logic flow between Request, Model, and View", "Creating security tokens"],
        correctAnswer: 2,
        explanation: "The Controller orchestrates data traffic and logic."
    },

    // Module 3: Routing & Controllers
    {
        id: 5,
        question: "Which Artisan command creates a Controller with 7 ready-to-use CRUD methods?",
        options: ["php artisan make:controller Name --basic", "php artisan make:controller Name --resource", "php artisan create:controller Name", "php artisan make:crud Name"],
        correctAnswer: 1,
        explanation: "The --resource flag creates a controller with index, create, store, show, edit, update, and destroy."
    },
    {
        id: 6,
        question: "If you have Route::resource('produk', ...), which URL is used to delete data?",
        options: ["GET /produk/hapus/{id}", "POST /produk/delete/{id}", "DELETE /produk/{id}", "PUT /produk/{id}"],
        correctAnswer: 2,
        explanation: "Following RESTful standards, deleting data uses the DELETE verb on the resource/{id} URL."
    },

    // Module 4: View & Blade
    {
        id: 7,
        question: "Which Blade directive is MANDATORY in every POST form for security?",
        options: ["@koneksi", "@csrf", "@secure", "@auth"],
        correctAnswer: 1,
        explanation: "@csrf generates a token to prevent Cross-Site Request Forgery attacks."
    },
    {
        id: 8,
        question: "What is the function of the {{ $name }} syntax in Blade?",
        options: ["Running JavaScript code", "Printing variables with escaping (XSS safe)", "Printing raw HTML", "Creating comments"],
        correctAnswer: 1,
        explanation: "Double curly braces {{ }} are equivalent to htmlspecialchars() in PHP."
    },

    // Module 5: Databases & Migrations
    {
        id: 9,
        question: "What does the 'php artisan migrate:fresh' command do?",
        options: ["Creates a new migration", "Only runs pending migrations", "DELETES all tables and re-migrates from scratch", "Updates data without deleting tables"],
        correctAnswer: 2,
        explanation: "Careful! :fresh will drop all tables before re-running migrations."
    },
    {
        id: 10,
        question: "The 'up()' method in a migration file is used for?",
        options: ["Deleting tables", "Creating or modifying tables", "Seeding fake data", "Updating composer"],
        correctAnswer: 1,
        explanation: "The up() method contains schema definitions (e.g., create table), while down() is for reversing them."
    },

    // Module 6: Eloquent ORM
    {
        id: 11,
        question: "Which property must be set in the Model to allow Mass Assignment?",
        options: ["$table", "$fillable", "$hidden", "$casts"],
        correctAnswer: 1,
        explanation: "$fillable defines which columns can be mass-filled via an array."
    },
    {
        id: 12,
        question: "How do you retrieve a single record by its Primary Key in Eloquent?",
        options: ["Product::get(1)", "Product::where('id', 1)", "Product::find(1)", "Product::search(1)"],
        correctAnswer: 2,
        explanation: "Product::find($id) is the most concise way to find a record by its Primary Key."
    },

    // Module 7: CRUD Case Study
    {
        id: 13,
        question: "In the store() method, after data is successfully saved, we usually do what?",
        options: ["return view('index')", "return redirect()->route('index')", "echo 'Success'", "exit()"],
        correctAnswer: 1,
        explanation: "Redirecting (PRG Pattern) prevents the user from resubmitting the form if they refresh the page."
    },
    {
        id: 14,
        question: "What is the primary responsibility of the 'edit($id)' controller method?",
        options: ["Saving changes to the database", "Displaying the edit form with old data", "Deleting data", "Validating input"],
        correctAnswer: 1,
        explanation: "The edit method is intended to display the Form (View), while update processes the actual data."
    },

    // Module 8: REST API
    {
        id: 15,
        question: "What does HTTP Status Code 201 mean?",
        options: ["OK (Success)", "Created (Successfully created)", "No Content", "Bad Request"],
        correctAnswer: 1,
        explanation: "201 Created is the standard status when a new resource is successfully created (usually via POST)."
    },
    {
        id: 16,
        question: "What is the main difference between an API Controller and a Web Controller?",
        options: ["API returns JSON, Web returns View (HTML)", "API doesn't need Routes", "API cannot use Databases", "There is no difference"],
        correctAnswer: 0,
        explanation: "APIs are intended for machine/application consumption (JSON), while Web is for humans (HTML)."
    },

    // Module 9: Validation
    {
        id: 17,
        question: "If validation fails on an API Request, Laravel automatically returns which status code?",
        options: ["200 OK", "500 Server Error", "404 Not Found", "422 Unprocessable Entity"],
        correctAnswer: 3,
        explanation: "422 is the standard code for input validation errors."
    },
    {
        id: 18,
        question: "How do you retrieve the validation error message for the 'email' input in Blade?",
        options: ["@error('email') ... @enderror", "@if($email) ... @endif", "{{ $error->email }}", "@validate('email')"],
        correctAnswer: 0,
        explanation: "The @error('field') directive makes it easy to check and display specific error messages."
    },

    // Module 10: Auth & Security
    {
        id: 19,
        question: "What is the purpose of the 'auth' middleware?",
        options: ["To speed up loading", "To allow everyone access", "To ensure only logged-in users can access", "To encrypt passwords"],
        correctAnswer: 2,
        explanation: "The auth middleware acts as a guard checking the user's login session."
    },
    {
        id: 20,
        question: "Which helper is used to get the currently authenticated user's data?",
        options: ["User::now()", "Auth::user()", "Session::get('user')", "Request::user_id()"],
        correctAnswer: 1,
        explanation: "Auth::user() returns the currently authenticated User model object."
    },

    // Module 11: Postman Testing
    {
        id: 21,
        question: "Which header should be added in Postman to ensure Laravel responds with JSON?",
        options: ["Content-Type: text/html", "Accept: application/json", "Authorization: Bearer", "User-Agent: Postman"],
        correctAnswer: 1,
        explanation: "The Accept: application/json header tells Laravel that the client expects a JSON response."
    },
    {
        id: 22,
        question: "What is the Postman feature called that allows saving requests for reuse?",
        options: ["History", "Collection", "Environment", "Preset"],
        correctAnswer: 1,
        explanation: "Collections allow grouping and saving API requests for repeated use."
    }
];
