
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { modules } from '@backend/data/materials';
import { cn } from '@backend/lib/utils';
import { ChevronRight, Book } from 'lucide-react';

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 fixed h-full border-r border-slate-200 bg-white hidden md:block overflow-y-auto">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                        <Book className="w-5 h-5 text-purple-600" />
                        Curriculum
                    </h2>
                </div>
                <div className="p-4 space-y-2">
                    {modules.map((module) => {
                        const isActive = pathname === `/backend-laravel/learn/${module.id}`;
                        return (
                            <Link
                                key={module.id}
                                href={`/backend-laravel/learn/${module.id}`}
                                className={cn(
                                    "block p-3 rounded-lg text-sm transition-all duration-200 border border-transparent font-medium",
                                    isActive
                                        ? "bg-purple-50 text-purple-700 border-purple-100 shadow-sm"
                                        : "text-slate-500 hover:text-purple-600 hover:bg-purple-50"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{module.title}</span>
                                    {isActive && <ChevronRight className="w-4 h-4" />}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 p-6 md:p-12 max-w-5xl mx-auto w-full">
                {children}
            </div>
        </div>
    );
}
