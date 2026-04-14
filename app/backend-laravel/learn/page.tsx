
import { modules } from '@backend/data/materials';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LearnPage() {
    return (
        <div className="space-y-8 px-4 sm:px-6 py-12 max-w-7xl mx-auto min-h-screen">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    Complete Laravel <span className="text-purple-600">Backend Guide</span>
                </h1>
                <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                    Master modern Web & API development with our comprehensive curriculum.
                    Learn best practices from basics to advanced.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((module, index) => (
                    <Link
                        key={module.id}
                        href={`/backend-laravel/learn/${module.id}`}
                        className="group relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                {index + 1}
                            </div>
                            <div className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:bg-purple-100 transition-colors">
                                Module
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-purple-700 transition-colors line-clamp-1">
                            {module.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                            {module.description}
                        </p>

                        <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors border-t border-slate-100 pt-4">
                            Start Learning
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-purple-500" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
