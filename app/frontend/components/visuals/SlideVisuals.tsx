'use client';

import {
    Home, Paintbrush, Zap, ArrowRight, Image as ImageIcon
} from 'lucide-react';
import { Slide } from '@frontend/lib/types';

interface SlideVisualsProps {
    slide: Slide;
}

/**
 * Visual illustrations for intro slides
 * Renders different visual based on slide.visualType
 */
export function SlideVisuals({ slide }: SlideVisualsProps) {
    switch (slide.visualType) {
        case 'analogy_house':
            return (
                <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full h-full">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <div className="flex flex-col items-center gap-2 p-3 md:p-4 bg-orange-50 border border-orange-200 rounded-xl w-24 md:w-32 shadow-sm">
                            <Home size={32} className="text-orange-500 md:w-10 md:h-10" />
                            <span className="text-xs font-bold text-orange-600">HTML</span>
                            <span className="text-[9px] md:text-[10px] text-center text-slate-500">Dinding & Tiang</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 md:p-4 bg-pink-50 border border-pink-200 rounded-xl w-24 md:w-32 shadow-sm">
                            <Paintbrush size={32} className="text-pink-500 md:w-10 md:h-10" />
                            <span className="text-xs font-bold text-pink-600">CSS</span>
                            <span className="text-[9px] md:text-[10px] text-center text-slate-500">Warna & Dekor</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 md:p-4 bg-yellow-50 border border-yellow-200 rounded-xl w-24 md:w-32 animate-pulse shadow-sm">
                        <Zap size={32} className="text-yellow-500 md:w-10 md:h-10" />
                        <span className="text-xs font-bold text-yellow-600">JS</span>
                        <span className="text-[9px] md:text-[10px] text-center text-slate-500">Listrik</span>
                    </div>
                </div>
            );

        case 'html_structure':
            return (
                <div className="w-full max-w-[280px] bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-600 shadow-2xl flex flex-col font-mono text-[10px]">
                    <div className="bg-gray-800 p-2 flex items-center gap-2 border-b border-gray-600">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <div className="bg-gray-600 text-gray-300 px-2 rounded text-[8px] flex-1">My Website</div>
                    </div>
                    <div className="bg-blue-100 p-2 relative border-b-2 border-blue-400 border-dashed">
                        <span className="absolute right-1 top-1 text-[8px] font-bold text-blue-600 uppercase">&lt;head&gt;</span>
                        <div className="text-blue-800 opacity-60">Meta Data...<br />Title...<br />Link CSS...</div>
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20 backdrop-blur-[1px] font-bold text-blue-700 text-[9px]">TIDAK TAMPIL</div>
                    </div>
                    <div className="bg-white p-4 h-28 md:h-32 relative">
                        <span className="absolute right-1 top-1 text-[8px] font-bold text-green-600 uppercase">&lt;body&gt;</span>
                        <h1 className="text-base md:text-lg font-bold text-black mb-1">Halo Dunia!</h1>
                        <button className="bg-blue-600 text-white px-2 py-1 rounded text-[10px]">Klik Saya</button>
                        <div className="absolute bottom-2 right-2 text-[8px] md:text-[9px] text-green-700 font-bold bg-green-100 px-1 border border-green-500">AREA USER</div>
                    </div>
                </div>
            );

        case 'tags_vs_none':
            return (
                <div className="flex flex-col gap-4 w-full px-4 md:px-6">
                    {/* Without Tags */}
                    <div className="bg-red-50 border border-red-200 p-4 rounded-xl relative shadow-sm">
                        <div className="absolute -top-2.5 -left-2 bg-red-600 text-white px-2 py-0.5 text-[10px] rounded-lg font-bold shadow-sm">TANPA TAG</div>
                        <div className="text-red-900/70 text-xs font-mono leading-tight mt-2 break-words">
                            Ini Judul Ini Paragraf Ini Tombol Semua nempel jadi satu baris berantakan.
                        </div>
                    </div>

                    <ArrowRight className="mx-auto text-slate-400 rotate-90" size={20} />

                    {/* With Tags */}
                    <div className="bg-green-50 border border-green-200 p-4 rounded-xl relative shadow-sm">
                        <div className="absolute -top-2.5 -left-2 bg-green-600 text-white px-2 py-0.5 text-[10px] rounded-lg font-bold shadow-sm">DENGAN TAG</div>
                        <div className="text-slate-700 text-xs font-sans mt-2">
                            <h1 className="font-bold text-lg text-slate-900 mb-1">Ini Judul</h1>
                            <p className="mb-2 text-slate-600">Ini Paragraf rapi.</p>
                            <button className="bg-slate-800 text-white px-3 py-1 rounded-md text-[10px] shadow-sm">Tombol</button>
                        </div>
                    </div>
                </div>
            );

        case 'tag_anatomy':
            return (
                <div className="flex flex-col gap-2 font-mono text-sm w-full px-4 md:px-8">
                    <div className="flex items-center gap-2">
                        <div className="bg-orange-600 text-white px-3 py-2 rounded-t-lg w-full text-center border-b-2 border-orange-800 text-xs md:text-sm">&lt;h1&gt;</div>
                        <span className="text-orange-400 text-[10px] md:text-xs whitespace-nowrap">Pembuka</span>
                    </div>
                    <div className="bg-amber-900/50 text-amber-200 py-3 md:py-4 w-full text-center border-x-2 border-amber-700 text-sm md:text-base">
                        Konten Judul
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-orange-600 text-white px-3 py-2 rounded-b-lg w-full text-center border-t-2 border-orange-800 text-xs md:text-sm">&lt;/h1&gt;</div>
                        <span className="text-orange-400 text-[10px] md:text-xs whitespace-nowrap">Penutup (/)</span>
                    </div>
                </div>
            );

        case 'headings':
            return (
                <div className="bs-scope bg-white p-4 md:p-6 text-black w-full h-full flex flex-col justify-center gap-2 rounded-xl shadow-lg relative">
                    <div className="absolute top-2 right-2 text-[10px] bg-gray-200 px-2 rounded text-gray-500">Preview</div>
                    <div className="border-b pb-1 mb-1 border-gray-200">
                        <h1 className="m-0 text-2xl md:text-3xl font-bold text-blue-700">Heading 1</h1>
                        <span className="text-[8px] md:text-[9px] text-gray-400 font-mono">&lt;h1&gt; Topik Utama &lt;/h1&gt;</span>
                    </div>
                    <div className="pl-4 border-l-2 border-gray-300">
                        <h3 className="m-0 text-lg md:text-xl font-bold text-gray-700">Heading 3</h3>
                        <span className="text-[8px] md:text-[9px] text-gray-400 font-mono">&lt;h3&gt; Sub-bab &lt;/h3&gt;</span>
                    </div>
                    <div className="pl-8 border-l-2 border-gray-200">
                        <h6 className="m-0 text-xs font-bold text-gray-500 uppercase">Heading 6</h6>
                        <span className="text-[8px] md:text-[9px] text-gray-400 font-mono">&lt;h6&gt; Label Kecil &lt;/h6&gt;</span>
                    </div>
                </div>
            );

        case 'text_formatting':
            return (
                <div className="bs-scope bg-white p-4 md:p-6 text-black w-full rounded-xl shadow-lg">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                            <code className="text-blue-600 text-xs">&lt;b&gt;</code>
                            <span className="font-bold">Teks Tebal</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                            <code className="text-blue-600 text-xs">&lt;i&gt;</code>
                            <span className="italic">Teks Miring</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                            <code className="text-blue-600 text-xs">&lt;p&gt;</code>
                            <span>Paragraf dengan spasi</span>
                        </div>
                    </div>
                </div>
            );

        case 'div_box':
            return (
                <div className="relative w-40 h-40 md:w-48 md:h-48 border-4 border-dashed border-purple-400 rounded-xl flex items-center justify-center bg-purple-50 group">
                    <span className="absolute -top-3 bg-purple-600 text-white px-2 py-0.5 text-[10px] font-bold rounded shadow-sm">DIV (Wadah)</span>
                    <div className="flex flex-col gap-2 p-2 w-full items-center">
                        <div className="w-16 md:w-20 h-2 bg-slate-300 rounded animate-pulse"></div>
                        <div className="w-20 md:w-28 h-2 bg-slate-400 rounded animate-pulse"></div>
                        <div className="w-14 md:w-16 h-6 md:h-8 bg-purple-500 rounded mt-2 flex items-center justify-center text-[8px] text-white shadow-sm">Item</div>
                    </div>
                    <div className="absolute bottom-2 text-[8px] md:text-[9px] text-purple-700 text-center px-2 md:px-4 font-medium">Membungkus elemen jadi grup</div>
                </div>
            );

        case 'image_src':
            return (
                <div className="flex flex-col items-center justify-center gap-6 h-full">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-pink-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl z-10 relative bg-white"
                            alt="Avatar"
                        />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur text-pink-300 font-mono text-[10px] px-3 py-1 rounded-full border border-pink-500/30 shadow-lg whitespace-nowrap z-20">
                            src=&quot;avatar.png&quot;
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg border border-red-100 text-red-600 mt-2">
                        <div className="w-6 h-6 border border-red-300 flex items-center justify-center bg-white rounded shadow-sm">
                            <ImageIcon size={12} className="text-red-400" />
                        </div>
                        <span className="text-[10px] font-medium">Jika src salah = Gambar Rusak</span>
                    </div>
                </div>
            );

        case 'link_href':
            return (
                <div className="bs-scope bg-white p-4 md:p-6 rounded-xl shadow-lg w-full">
                    <div className="space-y-4">
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <code className="text-sm text-gray-600 block mb-2">&lt;a href=&quot;https://google.com&quot;&gt;</code>
                            <a href="#" className="text-blue-600 underline">Link ke Google</a>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <code className="text-sm text-gray-600 block mb-2">&lt;a href=&quot;#&quot;&gt;</code>
                            <a href="#" className="text-blue-600 underline">Placeholder Link</a>
                            <span className="text-[10px] text-gray-500 block mt-1"># = Diam di tempat</span>
                        </div>
                    </div>
                </div>
            );

        case 'lists':
            return (
                <div className="bs-scope bg-white p-4 md:p-6 rounded-xl shadow-lg w-full">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <code className="text-xs text-blue-600 block mb-2">&lt;ul&gt;</code>
                            <ul className="list-disc list-inside text-sm text-gray-700">
                                <li>Gula</li>
                                <li>Garam</li>
                                <li>Tepung</li>
                            </ul>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <code className="text-xs text-blue-600 block mb-2">&lt;ol&gt;</code>
                            <ol className="list-decimal list-inside text-sm text-gray-700">
                                <li>Cuci</li>
                                <li>Bilas</li>
                                <li>Keringkan</li>
                            </ol>
                        </div>
                    </div>
                </div>
            );

        case 'box_model':
            return (
                <div className="relative flex items-center justify-center w-52 h-52 md:w-64 md:h-64 font-mono text-[8px] md:text-[9px]">
                    <div className="absolute inset-0 bg-orange-50 border-2 border-dashed border-orange-300 flex items-start justify-center pt-1 text-orange-600 font-bold">MARGIN</div>
                    <div className="absolute inset-3 md:inset-4 bg-slate-800 border-4 border-slate-300 flex items-start justify-center pt-1 text-white z-10 shadow-xl">BORDER</div>
                    <div className="absolute inset-6 md:inset-8 bg-green-100 flex items-start justify-center pt-1 text-green-700 font-bold z-20">PADDING</div>
                    <div className="absolute inset-12 md:inset-16 bg-blue-500 flex items-center justify-center text-white font-bold z-30 shadow-inner text-xs border border-blue-400">CONTENT</div>
                </div>
            );

        case 'bootstrap_magic':
            return (
                <div className="flex flex-col gap-3 md:gap-4 w-full px-4 md:px-6">
                    <div className="p-3 border border-slate-300 rounded bg-slate-100 scale-95">
                        <div className="text-[9px] text-slate-500 mb-1 font-bold">Tanpa Bootstrap (CSS Manual)</div>
                        <code className="text-[8px] text-slate-600 block mb-2 font-mono bg-white p-1 rounded border border-slate-200">
                            background-color: blue;<br />color: white;<br />padding: 10px;
                        </code>
                        <button style={{ background: 'blue', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '10px' }}>Tombol</button>
                    </div>
                    <ArrowRight className="mx-auto text-blue-500 rotate-90" size={20} />
                    <div className="p-3 md:p-4 border-2 border-blue-500 rounded bg-blue-50 shadow-lg shadow-blue-500/20 relative">
                        <div className="absolute -top-3 right-2 bg-blue-600 text-white px-2 py-0.5 text-[9px] rounded font-bold shadow-sm">BOOTSTRAP MAGIC</div>
                        <div className="text-[10px] text-blue-800 mb-2 mt-1 font-medium">Cukup panggil Class:</div>
                        <code className="text-xs text-blue-600 block mb-3 font-bold bg-white p-1 rounded border border-blue-100">class=&quot;btn btn-primary&quot;</code>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500 transition-all text-xs font-bold">Tombol Keren</button>
                    </div>
                </div>
            );

        case 'table_grid':
            return (
                <div className="w-full max-w-[280px] bg-white rounded-lg shadow-lg border border-indigo-100 overflow-hidden">
                    <div className="bg-indigo-50 border-b border-indigo-100 p-2 text-center text-xs font-bold text-indigo-700">
                        Jadwal Pelajaran
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-3 gap-px bg-indigo-200 border border-indigo-200 rounded text-[10px]">
                            {/* Header */}
                            <div className="bg-indigo-100 p-2 font-bold text-indigo-800">Hari</div>
                            <div className="bg-indigo-100 p-2 font-bold text-indigo-800">Jam</div>
                            <div className="bg-indigo-100 p-2 font-bold text-indigo-800">Mapel</div>

                            {/* Row 1 */}
                            <div className="bg-white p-2 text-slate-600">Senin</div>
                            <div className="bg-white p-2 text-slate-600">08:00</div>
                            <div className="bg-white p-2 text-slate-600">MTK</div>

                            {/* Row 2 */}
                            <div className="bg-white p-2 text-slate-600">Selasa</div>
                            <div className="bg-white p-2 text-slate-600">09:00</div>
                            <div className="bg-white p-2 text-slate-600">IPA</div>
                        </div>
                        <div className="mt-2 text-[9px] text-indigo-400 text-center font-mono">
                            &lt;table&gt; &lt;tr&gt; &lt;td&gt;
                        </div>
                    </div>
                </div>
            );

        case 'input_form':
            return (
                <div className="w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col gap-4">
                    <div className="text-sm font-bold text-slate-800 border-b pb-2">Form Pendaftaran</div>
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Nama (Text)</label>
                            <div className="h-8 w-full border border-slate-300 rounded px-2 flex items-center text-xs text-slate-600 bg-slate-50">
                                Budi Santoso
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Email (Type="Email")</label>
                            <div className="h-8 w-full border border-slate-300 rounded px-2 flex items-center text-xs text-slate-600 bg-slate-50">
                                budi@example.com
                            </div>
                        </div>
                        <button className="w-full h-8 bg-blue-600 text-white rounded text-xs font-bold shadow-md hover:bg-blue-500 transition-colors">
                            Kirim Data
                        </button>
                    </div>
                </div>
            );

        case 'semantic_layout':
            return (
                <div className="w-full max-w-[260px] aspect-[3/4] bg-white border border-slate-200 shadow-xl rounded-lg flex flex-col p-2 gap-2 text-[10px] font-bold text-white uppercase text-center">
                    <div className="h-12 bg-red-400 rounded flex items-center justify-center shadow-sm">
                        Header
                    </div>
                    <div className="flex-1 flex gap-2">
                        <div className="w-16 bg-orange-400 rounded flex items-center justify-center writing-mode-vertical shadow-sm">
                            Nav
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="flex-1 bg-green-500 rounded flex items-center justify-center shadow-sm">
                                Article / Main
                            </div>
                            <div className="h-16 bg-teal-400 rounded flex items-center justify-center shadow-sm">
                                Aside
                            </div>
                        </div>
                    </div>
                    <div className="h-10 bg-blue-500 rounded flex items-center justify-center shadow-sm">
                        Footer
                    </div>
                </div>
            );

        default:
            return <div className="text-center text-gray-500">Visualisasi Materi</div>;
    }
}
