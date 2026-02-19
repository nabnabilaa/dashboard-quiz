import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-md border-b border-dark-border z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2">
                        {/* Logo */}
                        <Link href="/ethical-hacking" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                <img
                                    src="/ethical-hacking-logo.png"
                                    alt="Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                Maxy<span className="text-sky-400">CyberEdu</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                        {["Beranda", "Tentang", "Kurikulum"].map((item) => {
                            let href = "#";
                            if (item === "Beranda") href = "#hero";
                            if (item === "Tentang") href = "#about";
                            if (item === "Kurikulum") href = "#curriculum";

                            return (
                                <a
                                    key={item}
                                    href={href}
                                    className="hover:text-sky-400 transition-colors relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
                                </a>
                            );
                        })}
                    </div>

                    <div className="hidden md:block">
                        <button className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold text-sm transition shadow-lg shadow-sky-500/20 active:scale-95">
                            Akses Materi
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
