'use strict';
import React from 'react';

type SidePanelProps = {
    repoStatus: string;
    fileStatus: string;
    branchStatus: string;
};

const SidePanel: React.FC<SidePanelProps> = ({ repoStatus, fileStatus, branchStatus }) => {
    return (
        <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 border-b border-slate-200 pb-2">Status Proyek</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Repo:</span>
                        <span className="text-slate-700 font-mono">{repoStatus}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">File:</span>
                        <span className="text-slate-700 font-mono">{fileStatus}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Branch:</span>
                        <span className="text-[#E09000] font-mono font-bold">{branchStatus}</span>
                    </div>
                </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <p className="text-xs text-orange-600 italic text-center">
                    &quot;Developer handal tidak menghafal semua perintah, tapi mengerti konsepnya.&quot;
                </p>
            </div>
        </div>
    );
};

export default SidePanel;
