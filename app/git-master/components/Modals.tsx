'use strict';
import React from 'react';

type ModalsProps = {
    activeModal: 'intro' | 'mode' | 'end' | null;
    onCloseIntro: () => void;
    onSelectMode: (mode: 'quiz' | 'training') => void;
    onBackToIntro: () => void;
    onRestart: () => void;
    finalScore: number;
    mode: 'quiz' | 'training';
};

const Modals: React.FC<ModalsProps> = ({
    activeModal,
    onCloseIntro,
    onSelectMode,
    onBackToIntro,
    onRestart,
    finalScore,
    mode
}) => {
    if (!activeModal) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm animate-fade-in">

            {/* INTRO MODAL */}
            {activeModal === 'intro' && (
                <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl shadow-2xl my-8 overflow-hidden">
                    <div className="bg-indigo-600 p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-10 pattern-dots"></div>
                        <h2 className="text-2xl font-bold text-white relative z-10">KAMUS SAKU GIT</h2>
                        <p className="text-indigo-200 text-sm relative z-10 mt-1">Baca ini dulu agar tidak tersesat!</p>
                    </div>
                    <div className="p-6 md:p-8 overflow-y-auto max-h-[70vh]">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-indigo-600 font-bold text-xs uppercase tracking-widest border-b border-indigo-200 pb-2">Alur Dasar</h3>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded bg-red-50 text-red-500 flex items-center justify-center text-lg shrink-0"><i className="fas fa-laptop-code"></i></div>
                                    <div><h4 className="font-bold text-slate-800 text-sm">Working Directory</h4><p className="text-xs text-slate-500 mt-1">Tempat ngoding. Mulai dengan <code className="bg-slate-100 px-1 rounded text-red-500">git init</code>.</p></div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded bg-yellow-50 text-yellow-500 flex items-center justify-center text-lg shrink-0"><i className="fas fa-shopping-basket"></i></div>
                                    <div><h4 className="font-bold text-slate-800 text-sm">Staging Area</h4><p className="text-xs text-slate-500 mt-1">Keranjang belanja sebelum disimpan. <code className="bg-slate-100 px-1 rounded text-yellow-600">git add</code></p></div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded bg-green-50 text-green-500 flex items-center justify-center text-lg shrink-0"><i className="fas fa-archive"></i></div>
                                    <div><h4 className="font-bold text-slate-800 text-sm">Repository (Local)</h4><p className="text-xs text-slate-500 mt-1">Simpan sejarah permanen. <code className="bg-slate-100 px-1 rounded text-green-600">git commit</code></p></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-pink-600 font-bold text-xs uppercase tracking-widest border-b border-pink-200 pb-2">Fitur Lanjutan</h3>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded bg-pink-50 text-pink-500 flex items-center justify-center text-lg shrink-0"><i className="fas fa-code-branch"></i></div>
                                    <div><h4 className="font-bold text-slate-800 text-sm">Branching</h4><p className="text-xs text-slate-500 mt-1">Buat jalur baru agar aman. <code className="bg-slate-100 px-1 rounded text-pink-500">git branch</code></p></div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded bg-purple-50 text-purple-500 flex items-center justify-center text-lg shrink-0"><i className="fas fa-stream"></i></div>
                                    <div><h4 className="font-bold text-slate-800 text-sm">Merging</h4><p className="text-xs text-slate-500 mt-1">Gabungkan kode ke utama. <code className="bg-slate-100 px-1 rounded text-purple-500">git merge</code></p></div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded bg-blue-50 text-blue-500 flex items-center justify-center text-lg shrink-0"><i className="fab fa-github"></i></div>
                                    <div><h4 className="font-bold text-slate-800 text-sm">Push & Pull</h4><p className="text-xs text-slate-500 mt-1">Kirim & Ambil dari GitHub. <code className="bg-slate-100 px-1 rounded text-blue-500">git push/pull</code></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-center">
                        <button onClick={onCloseIntro} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30 flex items-center gap-2">
                            <span>SAYA MENGERTI, LANJUT</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            )}

            {/* MODE SELECTION MODAL */}
            {activeModal === 'mode' && (
                <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl shadow-2xl my-8 overflow-hidden">
                    <div className="bg-indigo-600 p-8 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-10 pattern-dots"></div>
                        <h2 className="text-3xl font-bold text-white relative z-10 tracking-tight">PILIH MODE BELAJAR</h2>
                        <p className="text-indigo-200 text-sm relative z-10 mt-2">Sesuaikan dengan gaya belajarmu</p>
                    </div>

                    <div className="p-6 md:p-10 grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center text-center" onClick={() => onSelectMode('quiz')}>
                            <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-list-ul"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Mode Quiz</h3>
                            <p className="text-sm text-slate-500 mb-6">Jawab pertanyaan pilihan ganda. Cocok untuk pemula memahami konsep.</p>
                            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full w-full">Mulai Quiz</button>
                        </div>

                        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 hover:border-green-400 hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center text-center" onClick={() => onSelectMode('training')}>
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-terminal"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Mode Terminal</h3>
                            <p className="text-sm text-slate-500 mb-6">Tantangan mengetik perintah manual. Rasakan sensasi jadi programmer.</p>
                            <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full w-full">Mulai Terminal</button>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 text-center border-t border-slate-200">
                        <button onClick={onBackToIntro} className="text-slate-400 hover:text-slate-700 text-sm underline">
                            <i className="fas fa-arrow-left mr-1"></i> Kembali ke Kamus Saku
                        </button>
                    </div>
                </div>
            )}

            {/* END MODAL */}
            {activeModal === 'end' && (
                <div className="bg-white border-2 border-amber-400 rounded-2xl max-w-md w-full p-8 text-center relative overflow-hidden shadow-2xl">
                    <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl animate-bounce">🎉</div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">MISI SELESAI!</h2>
                    <p className="text-slate-500 text-sm mb-6">
                        {mode === 'quiz'
                            ? "Teori Git sudah kamu kuasai. Coba Mode Terminal untuk tantangan lebih!"
                            : "Hebat! Kamu sudah siap menggunakan Git di terminal sungguhan."}
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                        <span className="text-slate-400 text-xs uppercase tracking-widest">Skor Akhir</span>
                        <div className="text-4xl font-bold text-amber-500 mt-1">{finalScore}</div>
                    </div>
                    <button onClick={onRestart} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-colors">
                        Kembali ke Menu Utama
                    </button>
                </div>
            )}
        </div>
    );
};

export default Modals;
