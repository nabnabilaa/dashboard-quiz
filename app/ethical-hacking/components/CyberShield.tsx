import React from "react";

export default function CyberShield() {
    return (
        <div className="relative w-[300px] h-[300px] flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow-blue -z-10"></div>

            {/* Rings */}
            <div className="absolute w-full h-full rounded-full border border-sky-500/30 shadow-[0_0_15px_rgba(14,165,233,0.1)] border-t-sky-500 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[70%] h-[70%] rounded-full border border-sky-500/30 shadow-[0_0_15px_rgba(14,165,233,0.1)] border-b-cyan-500 animate-[reverseSpin_15s_linear_infinite]"></div>
            <div className="absolute w-[40%] h-[40%] rounded-full border border-sky-500/30 shadow-[0_0_15px_rgba(14,165,233,0.1)] border-l-teal-500 animate-[spin_5s_linear_infinite]"></div>

            {/* Core Icon */}
            <div className="z-10 text-6xl text-white drop-shadow-[0_0_20px_#0ea5e9]">
                <i className="fas fa-shield-halved"></i>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-0 right-0 bg-dark-card border border-dark-border p-3 rounded-lg text-xs font-mono text-emerald-400 animate-bounce shadow-lg shadow-emerald-500/10" style={{ animationDuration: '3s' }}>
                <i className="fas fa-check-circle mr-2"></i> Ethical Hacking
            </div>
            <div className="absolute bottom-10 left-0 bg-dark-card border border-dark-border p-3 rounded-lg text-xs font-mono text-sky-500 animate-bounce shadow-lg shadow-sky-500/10" style={{ animationDuration: '4s' }}>
                <i className="fas fa-network-wired mr-2"></i> Network Defense
            </div>
        </div>
    );
}
