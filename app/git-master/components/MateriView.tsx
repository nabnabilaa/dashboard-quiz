import React from 'react';
import { Laptop, Layers, Archive, Github, GitBranch, GitMerge } from 'lucide-react';

export const MateriView = () => {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl shadow-lg mx-auto overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-r from-[#F5A623] to-[#E09000] p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10 pattern-dots"></div>
                <h2 className="text-2xl font-bold text-white relative z-10">GIT POCKET DICTIONARY</h2>
                <p className="text-orange-50 text-sm relative z-10 mt-1">A Brief Guide to Git & GitHub</p>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alur Dasar */}
                    <div className="space-y-6">
                        <h3 className="text-[#E09000] font-bold text-xs uppercase tracking-widest border-b border-orange-200 pb-2">Basic Flow</h3>

                        <div className="flex gap-4 items-start group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
                                <Laptop size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">Working Directory</h4>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Where you write code. The project folder on your computer.
                                </p>
                                <code className="inline-block mt-2 bg-slate-100 px-2 py-1 rounded text-[10px] font-mono text-red-600 border border-slate-200">git init</code>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0 border border-yellow-100 shadow-sm">
                                <Layers size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">Staging Area</h4>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Preparation area. Choose which files to save.
                                </p>
                                <code className="inline-block mt-2 bg-slate-100 px-2 py-1 rounded text-[10px] font-mono text-yellow-700 border border-slate-200">git add .</code>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center shrink-0 border border-green-100 shadow-sm">
                                <Archive size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">Repository (Local)</h4>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Permanently records the history of changes on your computer.
                                </p>
                                <code className="inline-block mt-2 bg-slate-100 px-2 py-1 rounded text-[10px] font-mono text-green-600 border border-slate-200">git commit -m "message"</code>
                            </div>
                        </div>
                    </div>

                    {/* Fitur Lanjutan */}
                    <div className="space-y-6">
                        <h3 className="text-pink-600 font-bold text-xs uppercase tracking-widest border-b border-pink-200 pb-2">Advanced Features</h3>

                        <div className="flex gap-4 items-start group">
                            <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0 border border-pink-100 shadow-sm">
                                <GitBranch size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">Branching</h4>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Creates separate paths or versions to keep the main code safe.
                                </p>
                                <code className="inline-block mt-2 bg-slate-100 px-2 py-1 rounded text-[10px] font-mono text-pink-600 border border-slate-200">git branch new-feature</code>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 border border-purple-100 shadow-sm">
                                <GitMerge size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">Merging</h4>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Merges code from another branch into the main branch.
                                </p>
                                <code className="inline-block mt-2 bg-slate-100 px-2 py-1 rounded text-[10px] font-mono text-purple-600 border border-slate-200">git merge new-feature</code>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start group">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                                <Github size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">Remote (GitHub)</h4>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Saves your code on the internet (Cloud) for collaboration.
                                </p>
                                <div className="flex gap-2 mt-2">
                                    <code className="bg-slate-100 px-2 py-1 rounded text-[10px] font-mono text-blue-600 border border-slate-200">git push</code>
                                    <code className="bg-slate-100 px-2 py-1 rounded text-[10px] font-mono text-blue-600 border border-slate-200">git pull</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
