import React, { useState } from 'react';
import { ArrowLeft, Play, Smartphone, CreditCard, X, User, Layout } from 'lucide-react';

interface VisualMenuScreenProps {
    onStartBuilder: (templateId: string, type: 'usecase' | 'activity') => void;
    onBack: () => void;
}

export default function VisualMenuScreen({ onStartBuilder, onBack }: VisualMenuScreenProps) {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

    const templates = [
        {
            id: 'gofood',
            title: 'Go-Food Flow',
            desc: 'Simulasi pesan makanan online dari pemilihan menu hingga pembayaran.',
            icon: <Smartphone size={32} className="text-white" />,
            color: 'from-green-500 to-emerald-600',
            btnColor: 'bg-green-600 hover:bg-green-700'
        },
        {
            id: 'atm',
            title: 'ATM System',
            desc: 'Simulasi alur transaksi mesin ATM termasuk tarik tunai & cek saldo.',
            icon: <CreditCard size={32} className="text-white" />,
            color: 'from-orange-500 to-brand-600',
            btnColor: 'bg-blue-600 hover:bg-blue-700'
        }
    ];

    const handleTemplateClick = (id: string) => {
        setSelectedTemplate(id);
    };

    const handleTypeSelect = (type: 'usecase' | 'activity') => {
        if (selectedTemplate) {
            onStartBuilder(selectedTemplate, type);
            setSelectedTemplate(null);
        }
    };

    return (
        <div id="screen-visual-menu" className="w-full max-w-5xl mx-auto py-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            {/* Header */}
            <div className="text-center mb-12 space-y-3">
                <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
                    Tantangan Visual
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Pilih topik dan susun diagram berdasarkan skenario nyata untuk menguji pemahaman logika sistem Anda.
                </p>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        onClick={() => handleTemplateClick(template.id)}
                        className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-orange-200 cursor-pointer relative overflow-hidden flex flex-col items-center text-center"
                    >
                        {/* Decorative background glow */}
                        <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${template.color}`} />

                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${template.color} shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {template.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#E09000] transition-colors">
                            {template.title}
                        </h3>

                        <p className="text-slate-500 mb-8 leading-relaxed">
                            {template.desc}
                        </p>

                        <button className={`w-full py-3.5 px-6 rounded-xl font-bold text-white shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${template.btnColor}`}>
                            <Play size={18} fill="currentColor" />
                            <span>Mulai Misi</span>
                        </button>
                    </div>
                ))}
            </div>

            {/* Selection Modal */}
            {selectedTemplate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedTemplate(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Pilih Jenis Diagram</h3>
                            <p className="text-slate-500">
                                Anda ingin membuat diagram apa untuk skenario ini?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <button
                                onClick={() => handleTypeSelect('usecase')}
                                className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all group text-left"
                            >
                                <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 group-hover:text-brand-700">Use Case Diagram</h4>
                                    <p className="text-sm text-slate-500">Fokus pada aktor dan fungsionalitas sistem.</p>
                                </div>
                            </button>

                            <button
                                onClick={() => handleTypeSelect('activity')}
                                className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group text-left"
                            >
                                <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Layout size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 group-hover:text-emerald-700">Activity Diagram</h4>
                                    <p className="text-sm text-slate-500">Fokus pada alur kerja dan urutan aktivitas.</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer Action */}
            <div className="text-center">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-slate-50"
                >
                    <ArrowLeft size={18} />
                    <span>Kembali ke Knowledge Hub</span>
                </button>
            </div>
        </div>
    );
}
