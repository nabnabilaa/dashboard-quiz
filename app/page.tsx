import Link from 'next/link';
import { Package, Shield, Code, GitBranch, Layout, FileJson, GraduationCap, ArrowRight } from 'lucide-react';

const modules = [
  {
    name: "Backend Laravel",
    path: "/backend-laravel",
    icon: Package,
    color: "bg-red-50 text-red-500",
    colorRing: "ring-red-100",
    desc: "Learn backend development with Laravel",
    badge: "Laravel 12",
  },
  {
    name: "UI/UX Mastery",
    path: "/ui-ux-mastery",
    icon: Layout,
    color: "bg-blue-50 text-blue-500",
    colorRing: "ring-blue-100",
    desc: "Master modern UI/UX design principles",
    badge: "Design",
  },
  {
    name: "Ethical Hacking",
    path: "/ethical-hacking",
    icon: Shield,
    color: "bg-emerald-50 text-emerald-500",
    colorRing: "ring-emerald-100",
    desc: "Cybersecurity & ethical hacking",
    badge: "Security",
  },
  {
    name: "Frontend Development",
    path: "/frontend",
    icon: Code,
    color: "bg-purple-50 text-purple-500",
    colorRing: "ring-purple-100",
    desc: "HTML, CSS, Bootstrap & modern web development",
    badge: "Web Dev",
  },
  {
    name: "Git Mastery",
    path: "/git-master",
    icon: GitBranch,
    color: "bg-orange-50 text-orange-500",
    colorRing: "ring-orange-100",
    desc: "Version control from basics to advanced",
    badge: "DevOps",
  },
  {
    name: "UML Mastery",
    path: "/uml-mastery",
    icon: FileJson,
    color: "bg-indigo-50 text-indigo-500",
    colorRing: "ring-indigo-100",
    desc: "Unified Modeling Language & visual builder",
    badge: "Modeling",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Bar */}


      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5A623] via-[#F7B844] to-[#E09000] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <GraduationCap size={16} />
                <span>Interactive Learning Platform</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Welcome to<br />Maxy Learning! 🚀
              </h2>
              <p className="text-white/90 text-lg max-w-lg leading-relaxed">
                Access all interactive learning modules from one dashboard. Learn in a fun and effective way.
              </p>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-48 h-48 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-extrabold">6</div>
                  <div className="text-sm font-medium text-white/80">Courses Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Your Courses</h3>
              <p className="text-sm text-slate-400 mt-0.5">Select a course to start learning</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <Link
                key={mod.name}
                href={mod.path}
                className="group maxy-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${mod.color} flex items-center justify-center ring-4 ${mod.colorRing} transition-transform group-hover:scale-110`}>
                    <mod.icon size={22} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                    {mod.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-[#E09000] transition-colors">
                  {mod.name}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {mod.desc}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#F5A623] group-hover:gap-3 transition-all">
                  <span>Start Learning</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>


      </div>
    </main>
  );
}
