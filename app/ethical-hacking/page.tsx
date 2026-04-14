"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import NetworkBackground from './components/NetworkBackground';
import Typewriter from './components/Typewriter';
import CyberShield from './components/CyberShield';

// Color Variants for Tailwind Safelist
const colorVariants: any = {
    blue: { hoverBorder: 'hover:border-blue-500', bgIcon: 'bg-blue-500/10', text: 'text-blue-400', bgBar: 'bg-blue-500', groupHoverText: 'group-hover:text-blue-400' },
    purple: { hoverBorder: 'hover:border-purple-500', bgIcon: 'bg-purple-500/10', text: 'text-purple-400', bgBar: 'bg-purple-500', groupHoverText: 'group-hover:text-purple-400' },
    cyan: { hoverBorder: 'hover:border-cyan-500', bgIcon: 'bg-cyan-500/10', text: 'text-cyan-400', bgBar: 'bg-cyan-500', groupHoverText: 'group-hover:text-cyan-400' },
    orange: { hoverBorder: 'hover:border-orange-500', bgIcon: 'bg-orange-500/10', text: 'text-orange-400', bgBar: 'bg-orange-500', groupHoverText: 'group-hover:text-orange-400' },
    teal: { hoverBorder: 'hover:border-teal-500', bgIcon: 'bg-teal-500/10', text: 'text-teal-400', bgBar: 'bg-teal-500', groupHoverText: 'group-hover:text-teal-400' },
    rose: { hoverBorder: 'hover:border-rose-500', bgIcon: 'bg-rose-500/10', text: 'text-rose-400', bgBar: 'bg-rose-500', groupHoverText: 'group-hover:text-rose-400' },
    indigo: { hoverBorder: 'hover:border-indigo-500', bgIcon: 'bg-indigo-500/10', text: 'text-indigo-400', bgBar: 'bg-indigo-500', groupHoverText: 'group-hover:text-indigo-400' },
    emerald: { hoverBorder: 'hover:border-emerald-500', bgIcon: 'bg-emerald-500/10', text: 'text-emerald-400', bgBar: 'bg-emerald-500', groupHoverText: 'group-hover:text-emerald-400' },
    amber: { hoverBorder: 'hover:border-amber-500', bgIcon: 'bg-amber-500/10', text: 'text-amber-400', bgBar: 'bg-amber-500', groupHoverText: 'group-hover:text-amber-400' },
    violet: { hoverBorder: 'hover:border-violet-500', bgIcon: 'bg-violet-500/10', text: 'text-violet-400', bgBar: 'bg-violet-500', groupHoverText: 'group-hover:text-violet-400' },
    pink: { hoverBorder: 'hover:border-pink-500', bgIcon: 'bg-pink-500/10', text: 'text-pink-400', bgBar: 'bg-pink-500', groupHoverText: 'group-hover:text-pink-400' },
    sky: { hoverBorder: 'hover:border-sky-500', bgIcon: 'bg-sky-500/10', text: 'text-sky-400', bgBar: 'bg-sky-500', groupHoverText: 'group-hover:text-sky-400' },
    fuchsia: { hoverBorder: 'hover:border-fuchsia-500', bgIcon: 'bg-fuchsia-500/10', text: 'text-fuchsia-400', bgBar: 'bg-fuchsia-500', groupHoverText: 'group-hover:text-fuchsia-400' },
};

const modules = [
    {
        id: 1,
        title: "Introduction to Ethical Hacking",
        desc: "Fundamentals of hacking ethics, differences between Hacker vs Cracker, and legalities.",
        icon: "fa-user-secret",
        color: "blue",
    },
    {
        id: 2,
        title: "Pentest Methodology",
        desc: "7 stages of penetration testing from planning to remediation.",
        icon: "fa-clipboard-list",
        color: "purple",
    },
    {
        id: 3,
        title: "Reconnaissance",
        desc: "Passive and active information gathering techniques (OSINT).",
        icon: "fa-search",
        color: "cyan",
    },
    {
        id: 4,
        title: "Scanning & Enumeration",
        desc: "Nmap, port scanning, and service detection.",
        icon: "fa-radar",
        color: "orange",
    },
    {
        id: 5,
        title: "Exploitation Basics",
        desc: "Metasploit, payloads, and post-exploitation.",
        icon: "fa-bomb",
        color: "teal",
    },
    {
        id: 6,
        title: "OSI Fundamentals",
        desc: "7-layer OSI model, attack vectors, and defense strategies.",
        icon: "fa-shield-alt",
        color: "rose",
    },
    {
        id: 7,
        title: "Injection Attacks",
        desc: "SQL Injection, XXE, OS Command Injection - exploitation and mitigation.",
        icon: "fa-wifi",
        color: "indigo",
    },
    {
        id: 8,
        title: "Client-Side Vulnerabilities",
        desc: "XSS, CSRF, CORS misconfiguration - browser-based attacks.",
        icon: "fa-user-check",
        color: "emerald",
    },
    {
        id: 9,
        title: "Infrastructure & Server-Side",
        desc: "SSRF, HTTP Request Smuggling - server infrastructure exploitation.",
        icon: "fa-bug",
        color: "amber",
    },
    {
        id: 10,
        title: "Auth, Logic & Advanced Threats",
        desc: "OAuth, JWT, LLM attacks, and modern business logic flaws.",
        icon: "fa-lock",
        color: "violet",
    },
    {
        id: 11,
        title: "Red Team vs Blue Team Lifecycle",
        desc: "Complete kill chain from reconnaissance to post-exploitation.",
        icon: "fa-gavel",
        color: "pink",
    },
    {
        id: 12,
        title: "Attack Scenarios (Red vs Blue Labs)",
        desc: "Hands-on labs: Brute Force, SQLi, IDOR, XSS, File Upload, and more.",
        icon: "fa-graduation-cap",
        color: "sky",
    },
    {
        id: 13,
        title: "Supplementary Material: Hacker vs Defender",
        desc: "Complete perspective on attacks and defenses in modern web security.",
        icon: "fa-balance-scale",
        color: "fuchsia",
    },
];

// Tools Data
const toolDB = [
    { id: 'nmap', name: 'Nmap', category: 'Network', type: 'cli', osi: 'L3/L4', desc: 'Network discovery and security auditing tool.', cmd: 'nmap -sC -sV target.com', link: 'https://nmap.org/' },
    { id: 'wireshark', name: 'Wireshark', category: 'Network', type: 'cli', osi: 'L2-L7', desc: 'Network protocol analyzer.', cmd: 'GUI Tool', link: 'https://www.wireshark.org/' },
    { id: 'sublist3r', name: 'Sublist3r', category: 'Recon', type: 'cli', osi: 'L7', desc: 'Fast subdomains enumeration tool.', cmd: 'python sublist3r.py -d target.com', link: 'https://github.com/aboul3la/Sublist3r' },
    { id: 'pagespeed', name: 'PageSpeed', category: 'Performance', type: 'web', osi: 'L7', desc: 'Google PageSpeed Insights.', cmd: 'Web Interface', link: 'https://pagespeed.web.dev/' },
    { id: 'gtmetrix', name: 'GTMetrix', category: 'Performance', type: 'web', osi: 'L7', desc: 'Website performance testing.', cmd: 'Web Interface', link: 'https://gtmetrix.com/' },
    { id: 'ssllabs', name: 'SSL Labs', category: 'Encryption', type: 'web', osi: 'L6', desc: 'SSL Server Test.', cmd: 'Web Interface', link: 'https://www.ssllabs.com/ssltest/' },
    { id: 'securityheaders', name: 'SecurityHeaders', category: 'HTTP', type: 'web', osi: 'L7', desc: 'Analyze HTTP security headers.', cmd: 'Web Interface', link: 'https://securityheaders.com/' },
    { id: 'pentest_tools', name: 'Pentest-Tools', category: 'Scanner', type: 'web', osi: 'L3-L7', desc: 'Online penetration testing tools.', cmd: 'Web Interface', link: 'https://pentest-tools.com/' },
    { id: 'burp', name: 'Burp Suite', category: 'Proxy', type: 'cli', osi: 'L7', desc: 'Web vulnerability scanner.', cmd: 'GUI Tool', link: 'https://portswigger.net/burp' },
    { id: 'zap', name: 'OWASP ZAP', category: 'Scanner', type: 'cli', osi: 'L7', desc: 'Open source web scanner.', cmd: 'zap.sh', link: 'https://www.zaproxy.org/' },
    { id: 'wpscan', name: 'WPScan', category: 'CMS', type: 'cli', osi: 'L7', desc: 'WordPress security scanner.', cmd: 'wpscan --url target.com', link: 'https://wpscan.com/' },
    { id: 'composer', name: 'Composer Audit', category: 'Dependency', type: 'cli', osi: 'L7', desc: 'Check PHP dependencies.', cmd: 'composer audit', link: 'https://getcomposer.org/' },
    { id: 'lynis', name: 'Lynis', category: 'Hardening', type: 'cli', osi: 'OS', desc: 'Security auditing tool for Linux.', cmd: 'lynis audit system', link: 'https://cisofy.com/lynis/' }
];

export default function Dashboard() {
    const [selectedTool, setSelectedTool] = useState<any>(null);
    const [toolFilter, setToolFilter] = useState('all');

    const filteredTools = toolDB.filter(tool => {
        if (toolFilter === 'all') return true;
        return tool.type === toolFilter;
    });

    const openToolLink = (tool: any) => {
        if (tool.type === 'web') {
            window.open(tool.link, '_blank');
        } else {
            setSelectedTool(tool);
        }
    };

    const confirmToolAction = () => {
        if (selectedTool) {
            window.open(selectedTool.link, '_blank');
            setSelectedTool(null);
        }
    };

    return (
        <div className="min-h-screen bg-dark-bg text-slate-200">
            <NetworkBackground />


            {/* Hero Section */}
            <section
                id="hero"
                className="min-h-screen flex flex-col pt-12 relative overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 w-full mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-500 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Main Menu</span>
                    </Link>
                </div>
                <div className="max-w-7xl mx-auto px-4 w-full flex-1 flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        {/* Left Content */}
                        <div className="z-10 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-mono font-semibold mb-6">
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                BASIC CYBER SECURITY COURSE
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
                                Protect Assets <br />
                                <Typewriter />
                            </h1>

                            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                                Learn the fundamentals of cybersecurity, ethical hacking, and network defense.
                                Material specifically designed for beginners starting a career in info security.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#curriculum"
                                    className="bg-white text-[#0B1F3A] px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition flex items-center gap-2 shadow-lg"
                                >
                                    Start Learning <i className="fas fa-arrow-right"></i>
                                </a>
                                <a
                                    href="#about"
                                    className="px-8 py-4 rounded-lg font-bold border border-white/5 hover:border-brand-500 hover:text-brand-500 transition"
                                >
                                    About Course
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="mt-12 flex gap-8 border-t border-white/5 pt-8">
                                <div>
                                    <div className="text-3xl font-bold text-white">13</div>
                                    <div className="text-sm text-slate-500">Main Modules</div>
                                </div>

                                <div>
                                    <div className="text-3xl font-bold text-white">Beginner</div>
                                    <div className="text-sm text-slate-500">Friendly</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="order-1 lg:order-2 flex justify-center items-center relative h-[400px] lg:h-[600px]">
                            <CyberShield />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-20 bg-dark-bg border-y border-white/5"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Why Learn Cyber Security?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Data security is no longer an option, but a necessity. Understand the
                            basic concepts before moving on to advanced techniques.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-dark-card rounded-xl border border-white/5 hover:border-brand-500 transition-colors text-center group">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-user-lock text-2xl text-blue-400"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Data Protection
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Understanding how to protect sensitive personal and organizational information from theft.
                            </p>
                        </div>

                        <div className="p-6 bg-dark-card rounded-xl border border-white/5 hover:border-brand-500 transition-colors text-center group">
                            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-laptop-code text-2xl text-cyan-400"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Attack Prevention
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Learning common attack patterns like Phishing and Malware for mitigation.
                            </p>
                        </div>

                        <div className="p-6 bg-dark-card rounded-xl border border-white/5 hover:border-brand-500 transition-colors text-center group">
                            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-briefcase text-2xl text-teal-400"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Career Opportunities
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                The demand for cybersecurity experts continues to rise in today's digital era.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section id="curriculum" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Learning Curriculum
                            </h2>
                            <p className="text-slate-400">
                                13 comprehensive modules systematically arranged for beginners.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((mod) => {
                            const cv = colorVariants[mod.color] || colorVariants.blue;
                            return (
                                <Link
                                    key={mod.id}
                                    href={`/ethical-hacking/modules/${mod.id}`}
                                    className={`bg-dark-card border border-white/5 rounded-xl p-6 ${cv.hoverBorder} transition-colors duration-300 group block`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-lg ${cv.bgIcon} flex items-center justify-center ${cv.text} mb-6 group-hover:scale-110 transition-transform`}
                                    >
                                        <i className={`fas ${mod.icon} text-xl`}></i>
                                    </div>
                                    <span
                                        className={`text-xs font-mono ${cv.text} mb-2 block`}
                                    >
                                        MODULE {mod.id}
                                    </span>
                                    <h3
                                        className={`text-xl font-bold text-white mb-2 ${cv.groupHoverText} transition-colors`}
                                    >
                                        {mod.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">{mod.desc}</p>

                                    <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden mt-4">
                                        <div
                                            className={`${cv.bgBar} h-full w-0 group-hover:w-full transition-all duration-700`}
                                        ></div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tools Library Section */}
            <section id="tools" className="py-20 bg-dark-card/30 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Tools Library</h2>
                            <p className="text-slate-400">Collection of audit tools covering Network, Application, and Performance.</p>
                        </div>
                        <div className="flex gap-2 bg-dark-card p-1 rounded-lg border border-white/5">
                            <button
                                onClick={() => setToolFilter('all')}
                                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${toolFilter === 'all' ? 'text-white bg-brand-600' : 'text-slate-400 hover:text-white bg-transparent'}`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setToolFilter('web')}
                                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${toolFilter === 'web' ? 'text-white bg-brand-600' : 'text-slate-400 hover:text-white bg-transparent'}`}
                            >
                                Web-Based
                            </button>
                            <button
                                onClick={() => setToolFilter('cli')}
                                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${toolFilter === 'cli' ? 'text-white bg-brand-600' : 'text-slate-400 hover:text-white bg-transparent'}`}
                            >
                                Install/CLI
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTools.map((tool) => (
                            <div
                                key={tool.id}
                                className="bg-dark-card border border-white/5 rounded-xl p-6 hover:border-brand-500 transition-all cursor-pointer group flex flex-col h-full"
                                onClick={() => openToolLink(tool)}
                            >
                                <div className="flex justify-between items-start mb-3 gap-2">
                                    <span className="text-xs font-bold px-2 py-1 bg-slate-800 text-brand-500 rounded uppercase tracking-wider truncate">{tool.category}</span>
                                    <div className="flex gap-1 shrink-0">
                                        <span className="text-xs font-bold px-2 py-1 bg-purple-500/20 text-purple-400 rounded border border-purple-500/20 font-mono">{tool.osi || 'L7'}</span>
                                        {tool.type === 'web' ? (
                                            <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/20">WEB</span>
                                        ) : (
                                            <span className="text-xs font-bold px-2 py-1 bg-orange-500/20 text-orange-400 rounded border border-orange-500/20">CLI</span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brand-500 transition-colors">{tool.name}</h3>
                                <p className="text-sm text-slate-400 mb-4 flex-1 line-clamp-2">{tool.desc}</p>

                                <div className="text-xs text-slate-500 flex items-center gap-1 border-t border-white/5 pt-3">
                                    {tool.type === 'web' ? 'Click to open website' : 'Click to view command'}
                                    <i className="fas fa-arrow-right ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Tool Modal (for CLI tools) */}
            {selectedTool && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-slate-900 border border-white/5 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <i className="fas fa-terminal text-brand-500"></i> {selectedTool.name}
                            </h3>
                            <button
                                onClick={() => setSelectedTool(null)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <p className="text-slate-300">{selectedTool.desc}</p>

                            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border border-white/5">
                                <div className="text-slate-500 text-xs mb-2 uppercase tracking-wider">Command Example</div>
                                <code className="text-emerald-400 block break-all">
                                    $ {selectedTool.cmd}
                                </code>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-slate-900/50 flex justify-end gap-3">
                            <button
                                onClick={() => setSelectedTool(null)}
                                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmToolAction}
                                className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-bold shadow-lg shadow-brand-500/20 transition-all flex items-center gap-2"
                            >
                                Open Documentation <i className="fas fa-external-link-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
