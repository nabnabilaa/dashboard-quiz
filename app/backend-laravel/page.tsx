import Link from 'next/link';
import { BookOpen, MonitorPlay, Terminal, ArrowRight, Presentation, ArrowLeft } from 'lucide-react';

export default function Home() {
  const features = [
    {
      href: "/backend-laravel/learn",
      icon: BookOpen,
      iconBg: "bg-blue-50 text-blue-500",
      ring: "ring-blue-100",
      title: "Structured Learning",
      desc: "Deep dive into MVC, Eloquent, and API Resources with guided modules.",
      cta: "Start Learning",
    },
    {
      href: "/backend-laravel/quiz",
      icon: MonitorPlay,
      iconBg: "bg-purple-50 text-purple-500",
      ring: "ring-purple-100",
      title: "Test Your Knowledge",
      desc: "Challenge yourself with 20 curated questions to verify your understanding.",
      cta: "Start Quiz",
    },
    {
      href: "/backend-laravel/builder",
      icon: Terminal,
      iconBg: "bg-emerald-50 text-emerald-500",
      ring: "ring-emerald-100",
      title: "Backend Builder",
      desc: "Complete real-world backend tasks in a simulated environment.",
      cta: "Start Coding",
    },
    {
      href: "/backend-laravel/demo",
      icon: Presentation,
      iconBg: "bg-amber-50 text-amber-500",
      ring: "ring-amber-100",
      title: "Live Demo",
      desc: "Hands-on guide to creating a Laravel project from scratch.",
      cta: "Start Demo",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-6 text-center">
      <div className="space-y-6 max-w-4xl mx-auto relative">
        <Link href="/" className="absolute -top-12 left-0 inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Main Menu</span>
        </Link>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-600 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          New: Updated for Laravel 12
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 pb-2">
          Master Backend <span className="gradient-text">Laravel.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Interactive platform for learning Web & API Development.
          Combine theory with practice using an integrated builder.
        </p>

        <div className="grid md:grid-cols-2 gap-5 pt-10 text-left">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group maxy-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 ${f.iconBg} rounded-2xl flex items-center justify-center mb-5 ring-4 ${f.ring} group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{f.desc}</p>
              <span className="text-[#F5A623] text-sm font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                {f.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
