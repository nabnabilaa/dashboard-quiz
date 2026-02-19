import React, { useState } from 'react';
import { umlComponents, UMLType } from '@uml/data/uml';
import { Search, Filter, BookOpen, ArrowRight } from 'lucide-react';

interface KnowledgeScreenProps {
    onNavigate: (screen: string) => void;
}

export default function KnowledgeScreen({ onNavigate }: KnowledgeScreenProps) {
    const [filter, setFilter] = useState<UMLType>('usecase');

    const filteredComponents = umlComponents.filter(c => c.type === filter);

    return (
        <div className="w-full space-y-8">
            {/* Header Area */}
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Knowledge Hub</h1>
                <p className="text-slate-500">Kamus Visual Komponen UML</p>
            </div>

            {/* Filter Bar */}
            <div className="flex justify-center mb-8">
                <div className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-1">
                    {(['usecase', 'activity'] as const).map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === type
                                ? 'bg-[#F5A623] text-white shadow-md'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-[#E09000]'
                                }`}
                        >
                            {type === 'usecase' ? 'Use Case' : 'Activity'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredComponents.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all hover:border-orange-300 group">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                                {/* We keep the SVG injection but size it properly */}
                                <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full" dangerouslySetInnerHTML={{ __html: item.svg }} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-100 text-slate-500">
                                {item.type}
                            </span>
                        </div>

                        <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-[#E09000] transition-colors">
                            {item.name}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer Action */}
            <div className="flex justify-center mt-12">
                <button
                    className="flex items-center gap-2 bg-gradient-to-r from-[#F5A623] to-[#E09000] hover:from-[#ffbd2e] hover:to-[#ffa600] text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-orange-500/30 hover:scale-105 transition-all"
                    onClick={() => onNavigate('visual-menu')}
                >
                    <BookOpen size={20} />
                    <span>Lanjut ke Tantangan Visual</span>
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
}
