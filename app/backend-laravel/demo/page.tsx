'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Globe, ChevronRight, Server, Layout, Play, ArrowLeft } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function LiveDemoPage() {
    return (
        <div className="min-h-screen pt-1 px-4 sm:px-6 relative">
            <Link href="/backend-laravel" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors mb-6 mt-4">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Dashboard</span>
            </Link>
            <div className="max-w-xl mx-auto space-y-4 pb-5">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-xs font-medium text-green-700">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Latest Version
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Creating a Laravel 12 Project
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Step-by-step guide to starting a new project from scratch to browser.
                    </p>
                </div>

                {/* Step 1: Prerequisites & Install */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm">1</span>
                        Prerequisites & Installation
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-semibold text-purple-600 mb-4 flex items-center gap-2">
                                <Terminal className="w-4 h-4" /> System Requirements
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span> PHP &gt;= 8.2 (Required)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span> Composer (Dependency Manager)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400">•</span> Node.js & NPM (Optional)
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-semibold text-purple-600 mb-4 flex items-center gap-2">
                                <Code className="w-4 h-4" /> Install via Composer
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Standard Method (Stable):</p>
                                    <div className="overflow-x-auto">
                                        <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                                            composer create-project laravel/laravel project-name
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Specific Version (Laravel 12):</p>
                                    <div className="overflow-x-auto">
                                        <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                                            composer create-project laravel/laravel:^12.0 project-name
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 2: Running Server */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm">2</span>
                        Running the Server
                    </h2>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-xs text-slate-400 ml-2">Terminal</span>
                        </div>
                        <div className="p-4 font-mono text-sm">
                            <div className="text-slate-500"># Enter project folder</div>
                            <div className="text-white mb-2">cd project-name</div>

                            <div className="text-slate-500"># Start development server</div>
                            <div className="text-white mb-4">php artisan serve</div>

                            <div className="text-green-400">INFO Server running on [http://127.0.0.1:8000].</div>
                            <div className="text-slate-500">Press Ctrl+C to stop the server</div>
                        </div>
                    </div>
                </section>

                {/* Hands On Tutorial */}
                <div className="pt-8 border-t border-slate-200">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg shadow-md">
                            <Play className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Hands On Tutorial</h2>
                            <p className="text-slate-600">Creating a Simple Post Web App (Input & Display Data)</p>
                        </div>
                    </div>

                    <div className="space-y-12">

                        {/* 1. Database Config */}
                        <div className="relative pl-8 border-l border-slate-200 space-y-6">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-pink-600">1. Database Configuration</h3>

                            <div className="space-y-4">
                                <p className="text-slate-600">Before starting, set up the database connection in the <code>.env</code> file. For this exercise, we'll use the default MySQL.</p>

                                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                                    <div className="text-xs text-slate-500 mb-2">.env</div>
                                    <div className="overflow-x-auto">
                                        <SyntaxHighlighter language="ini" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.9rem' }}>
                                            {`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=project_name_db
DB_USERNAME=root
DB_PASSWORD=`}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>

                                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg flex items-start gap-3">
                                    <Database className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-yellow-800">
                                        <strong>Important:</strong> Make sure you have created an empty database named <code>project_name_db</code> in phpMyAdmin or your database manager before proceeding.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Migration & Model */}
                        <div className="relative pl-8 border-l border-slate-200 space-y-6">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-pink-600">2. Model & Migration</h3>

                            <div className="space-y-4">
                                <p className="text-slate-600">Create a Model and Migration simultaneously with the <code>-m</code> flag:</p>
                                <div className="overflow-x-auto">
                                    <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.75rem' }}>
                                        php artisan make:model Post -m
                                    </SyntaxHighlighter>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm font-semibold mb-2 flex items-center gap-2 text-slate-700"><Database className="w-4 h-4 text-blue-500" /> Migration</p>
                                        <div className="text-xs text-slate-500 mb-1">database/migrations/xxxx_create_posts_table.php</div>
                                        <SyntaxHighlighter language="php" style={vscDarkPlus} customStyle={{ borderRadius: '0.75rem', fontSize: '0.8rem' }}>
                                            {`public function up() {
  Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('content');
    $table->timestamps();
  });
}`}
                                        </SyntaxHighlighter>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold mb-2 flex items-center gap-2 text-slate-700"><Code className="w-4 h-4 text-yellow-500" /> Model</p>
                                        <div className="text-xs text-slate-500 mb-1">app/Models/Post.php</div>
                                        <SyntaxHighlighter language="php" style={vscDarkPlus} customStyle={{ borderRadius: '0.75rem', fontSize: '0.8rem' }}>
                                            {`class Post extends Model
{
    // Allow all columns to be filled (Mass Assignment)
    protected $guarded = [];
}`}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-center gap-3">
                                    <Terminal className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <div className="text-sm text-blue-800">
                                        Now run this command to create the tables in the database:
                                        <div className="mt-2">
                                            <code className="bg-blue-900 px-2 py-1 rounded text-white font-mono">php artisan migrate</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Controller */}
                        <div className="relative pl-8 border-l border-slate-200 space-y-6">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-pink-600">3. Logic Controller</h3>

                            <div className="space-y-4">
                                <div className="overflow-x-auto">
                                    <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.75rem' }}>
                                        php artisan make:controller PostController
                                    </SyntaxHighlighter>
                                </div>

                                <div className="text-xs text-slate-500 mb-1">app/Http/Controllers/PostController.php</div>
                                <div className="overflow-x-auto">
                                    <SyntaxHighlighter language="php" style={vscDarkPlus} customStyle={{ borderRadius: '0.75rem' }}>
                                        {`use App\\Models\\Post;
use Illuminate\\Http\\Request;

class PostController extends Controller {
  // Display data
  public function index() {
    return view('posts.index', ['posts' => Post::all()]);
  }

  // Save data
  public function store(Request $request) {
    Post::create($request->all());
    return back();
  }
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>

                        {/* 4. Route */}
                        <div className="relative pl-8 border-l border-slate-200 space-y-6">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-pink-600">4. Routing</h3>

                            <div className="space-y-4">
                                <div className="text-xs text-slate-500 mb-1">routes/web.php</div>
                                <div className="overflow-x-auto">
                                    <SyntaxHighlighter language="php" style={vscDarkPlus} customStyle={{ borderRadius: '0.75rem' }}>
                                        {`use App\\Http\\Controllers\\PostController;

Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store']);`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>

                        {/* 5. View */}
                        <div className="relative pl-8 border-l border-slate-200 space-y-6">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-white"></div>
                            <h3 className="text-xl font-bold text-pink-600">5. Visuals (Blade View)</h3>

                            <div className="space-y-4">
                                <p className="text-slate-600 text-sm">Create file: <code>resources/views/posts/index.blade.php</code></p>
                                <div className="overflow-x-auto">
                                    <SyntaxHighlighter language="html" style={vscDarkPlus} customStyle={{ borderRadius: '0.75rem' }}>
                                        {`<h1>Simple Blog</h1>

<!-- Input Form -->
<form action="/posts" method="POST">
  @csrf
  <input type="text" name="title" placeholder="Title">
  <textarea name="content" placeholder="Content"></textarea>
  <button type="submit">Save</button>
</form>

<hr>

<!-- Data List -->
<ul>
  @foreach($posts as $post)
    <li>
      <strong>{{ $post->title }}</strong>: {{ $post->content }}
    </li>
  @endforeach
</ul>`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Cheat Sheet */}
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm !mt-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                    <Terminal className="w-6 h-6 text-yellow-500" />
                    Terminal Cheatsheet
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-slate-700 text-sm mb-2">Make Something</h4>
                            <div className="overflow-x-auto">
                                <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                                    php artisan make:model Product -mcr
                                </SyntaxHighlighter>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Create Model + Migration + Controller Resource</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-700 text-sm mb-2">Database</h4>
                            <div className="overflow-x-auto">
                                <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                                    php artisan migrate:fresh --seed
                                </SyntaxHighlighter>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Reset DB & fill with dummy data</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-slate-700 text-sm mb-2">Utility</h4>
                            <div className="overflow-x-auto">
                                <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                                    php artisan route:list
                                </SyntaxHighlighter>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Check all registered URLs</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-700 text-sm mb-2">Cleaning</h4>
                            <div className="overflow-x-auto">
                                <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.8rem' }}>
                                    php artisan optimize:clear
                                </SyntaxHighlighter>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">Clear all config/view caches</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* N+1 Problem */}
            <section className="bg-red-50 border border-red-100 rounded-3xl p-8 !mt-10">
                <h2 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-2">
                    <Server className="w-6 h-6" />
                    N+1 Query Problem
                </h2>
                <p className="text-slate-600 mb-6">The most common performance issue: The application makes far more queries than needed.</p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-red-600 mb-3 flex items-center gap-2">⛔ Wrong Way (Lazy Loading)</h3>
                        <div className="overflow-x-auto">
                            <SyntaxHighlighter language="php" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.8rem', height: '180px' }}>
                                {`// Controller
$books = Book::all();

// View (Loop 100x)
@foreach($books as $book)
  {{ $book->author->name }}
@endforeach

// SQL: 1 Query Books + 100 Query Authors
// Total: 101 Query!`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-green-600 mb-3 flex items-center gap-2">✅ Solution (Eager Loading)</h3>
                        <div className="overflow-x-auto">
                            <SyntaxHighlighter language="php" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.8rem', height: '180px' }}>
                                {`// Controller
// Use 'with'
$books = Book::with('author')->get();

// View
@foreach($books as $book)
  {{ $book->author->name }}
@endforeach

// SQL: 1 Query Books + 1 Query Authors
// Total: 2 Query!`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>

                <div className="mt-6 bg-red-100 p-4 rounded-lg border border-red-200 text-sm text-red-900">
                    <strong>Pro Tip:</strong> Add <code>Model::preventLazyLoading(!app()-&gt;isProduction())</code> in <code>AppServiceProvider</code> to prevent this automatically during development.
                </div>
            </section>

        </div>
    );
}
