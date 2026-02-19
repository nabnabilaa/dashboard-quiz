import { Laptop, Layers, Archive, Github } from 'lucide-react';

type FlowState = {
    activeNodes: string[];
    activeLines: string[];
    reverseLines: string[];
    flowText: string;
};

type VisualFlowProps = {
    flowState: FlowState;
};

const VisualFlow: React.FC<VisualFlowProps> = ({ flowState }) => {
    const { activeNodes = [], activeLines = [], reverseLines = [], flowText = 'Menunggu Misi...' } = flowState;

    const getNodeClass = (id: string, baseClass: string) => {
        return activeNodes.includes(id)
            ? `${baseClass} active`
            : baseClass;
    };

    const getLineClass = (id: string) => {
        let className = "text-slate-300 flow-line";
        if (activeLines.includes(id)) {
            className += " active";
            if (reverseLines.includes(id)) {
                className += " reverse";
            }
        }
        return className;
    };

    return (
        <div className="mb-8 bg-white rounded-2xl border border-slate-200 p-6 relative overflow-x-auto shadow-sm">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line id="line-ws" x1="20%" y1="50%" x2="40%" y2="50%" stroke="currentColor" className={getLineClass('line-ws')} />
                <line id="line-sl" x1="40%" y1="50%" x2="60%" y2="50%" stroke="currentColor" className={getLineClass('line-sl')} />
                <line id="line-lr" x1="60%" y1="50%" x2="80%" y2="50%" stroke="currentColor" className={getLineClass('line-lr')} />
            </svg>

            <div className="relative z-10 flex justify-between items-center min-w-[600px]">
                <div id="node-working" className={getNodeClass('node-working', "flow-node flex flex-col items-center gap-3")}>
                    <div className="w-14 h-14 bg-red-50 border-2 border-red-200 text-red-500 rounded-xl flex items-center justify-center shadow-sm">
                        <Laptop size={24} />
                    </div>
                    <div className="text-center">
                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Working</span>
                    </div>
                </div>
                <div id="node-staging" className={getNodeClass('node-staging', "flow-node flex flex-col items-center gap-3")}>
                    <div className="w-14 h-14 bg-yellow-50 border-2 border-yellow-200 text-yellow-600 rounded-full flex items-center justify-center shadow-sm">
                        <Layers size={24} />
                    </div>
                    <div className="text-center">
                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Staging</span>
                    </div>
                </div>
                <div id="node-local" className={getNodeClass('node-local', "flow-node flex flex-col items-center gap-3")}>
                    <div className="w-14 h-14 bg-green-50 border-2 border-green-200 text-green-600 rounded-xl flex items-center justify-center shadow-sm relative transition-all duration-300">
                        <Archive size={24} />
                    </div>
                    <div className="text-center">
                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Local Repo</span>
                    </div>
                </div>
                <div id="node-remote" className={getNodeClass('node-remote', "flow-node flex flex-col items-center gap-3")}>
                    <div className="w-14 h-14 bg-blue-50 border-2 border-blue-200 text-blue-600 rounded-full flex items-center justify-center shadow-sm">
                        <Github size={28} />
                    </div>
                    <div className="text-center">
                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Remote</span>
                    </div>
                </div>
            </div>

            <div id="flow-label" className="text-center text-xs font-medium text-orange-600 mt-6 bg-orange-50 py-2 rounded-lg border border-orange-100">
                {flowText}
            </div>
        </div >
    );
};

export default VisualFlow;
