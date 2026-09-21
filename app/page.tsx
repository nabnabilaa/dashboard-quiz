import Link from 'next/link';
import {
  Package, Shield, Code, GitBranch, Layout, FileJson, ArrowRight, Github,
  Eye, MousePointerClick, Trophy, Zap, Sparkles,
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/nabnabilaa/dashboard-quiz';

const modules = [
  {
    name: 'UI/UX Mastery',
    path: '/ui-ux-mastery',
    icon: Layout,
    accent: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-blue-50 text-blue-600 ring-blue-100',
    badge: 'Design',
    desc: 'Train your design eye by comparing real interfaces and repairing broken layouts with live controls.',
    features: ['Visual Quiz', 'Fixer Studio', 'EN / ID'],
  },
  {
    name: 'UML Mastery',
    path: '/uml-mastery',
    icon: FileJson,
    accent: 'from-indigo-500 to-violet-400',
    iconBg: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
    badge: 'Modeling',
    desc: 'Turn real-world case studies into diagrams with a built-in drag-and-drop visual builder.',
    features: ['Case Studies', 'Diagram Builder'],
  },
  {
    name: 'Git Mastery',
    path: '/git-master',
    icon: GitBranch,
    accent: 'from-orange-500 to-amber-400',
    iconBg: 'bg-orange-50 text-orange-600 ring-orange-100',
    badge: 'DevOps',
    desc: 'Type real Git commands in a simulated terminal and watch the repository update in real time.',
    features: ['Interactive Terminal', 'Live Visualizer', 'Quiz'],
  },
  {
    name: 'Frontend Development',
    path: '/frontend',
    icon: Code,
    accent: 'from-purple-500 to-fuchsia-400',
    iconBg: 'bg-purple-50 text-purple-600 ring-purple-100',
    badge: 'Web Dev',
    desc: 'From semantic HTML and modern CSS to the DOM, practiced through workshops and a page builder.',
    features: ['Workshops', 'Page Builder', 'EN / ID'],
  },
  {
    name: 'Backend Laravel',
    path: '/backend-laravel',
    icon: Package,
    accent: 'from-rose-500 to-red-400',
    iconBg: 'bg-rose-50 text-rose-600 ring-rose-100',
    badge: 'Laravel 12',
    desc: 'MVC, routing, Eloquent and APIs, then prove it in a code builder with simulated output.',
    features: ['Guided Modules', 'Code Builder', 'Live Demo'],
  },
  {
    name: 'Ethical Hacking',
    path: '/ethical-hacking',
    icon: Shield,
    accent: 'from-emerald-500 to-teal-400',
    iconBg: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    badge: 'Security',
    desc: 'A 13-module path from reconnaissance to red vs. blue team, with a pentest tools reference.',
    features: ['13 Modules', 'Tools Library'],
  },
];

const highlights = [
  {
    icon: Eye,
    title: 'Visual-first learning',
    desc: 'Concepts are shown, not just described: side-by-side UI comparisons, live diagrams and branch graphs.',
  },
  {
    icon: MousePointerClick,
    title: 'Hands-on simulators',
    desc: 'A Git terminal, a UML canvas and a UI fixer let learners practice inside the browser, no setup required.',
  },
  {
    icon: Trophy,
    title: 'Gamified progress',
    desc: 'Instant feedback, scoring and completion celebrations keep learners motivated to finish each module.',
  },
  {
    icon: Zap,
    title: 'Instant navigation',
    desc: 'Built on the Next.js App Router, so moving between lessons, quizzes and tools never reloads the page.',
  },
];

const stack = [
  'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4',
  'Framer Motion', 'Lucide Icons', 'React Markdown', 'Vercel',
];

const stats = [
  { value: '6', label: 'Courses' },
  { value: '3', label: 'Built-in simulators' },
  { value: '2', label: 'Languages (EN/ID)' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo-maxy.png" alt="" className="h-8 w-8 rounded-lg" />
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              Maxy <span className="text-[#E09000]">Learning</span>
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            <a href="#courses" className="hidden rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 sm:inline-flex">Courses</a>
            <a href="#features" className="hidden rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 sm:inline-flex">Features</a>
            <a href="#stack" className="hidden rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 md:inline-flex">Tech Stack</a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.10),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_1fr]">
            <div className="animate-slide-up space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                <Sparkles size={14} />
                Interactive Learning Platform
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
                Learn tech by <span className="gradient-text">doing</span>, not just reading.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-500">
                Maxy Learning brings six interactive courses into one dashboard, with visual quizzes,
                live editors and in-browser simulators that turn theory into practice.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#courses" className="maxy-btn-primary">
                  Explore Courses
                  <ArrowRight size={16} />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-px hover:border-slate-300 hover:shadow"
                >
                  <Github size={16} />
                  View Source
                </a>
              </div>
              <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-3xl font-extrabold text-slate-900">{s.value}</dd>
                    <dd className="text-sm font-medium text-slate-400">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <HeroPreview />
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="scroll-mt-20 border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionHeading
              eyebrow="Courses"
              title="Six courses, one dashboard"
              desc="Every course pairs structured material with a hands-on mode. Pick one and start learning."
            />
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod, i) => (
                <Link
                  key={mod.name}
                  href={mod.path}
                  className="group animate-slide-up relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${mod.accent} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <div className="mb-5 flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-4 transition-transform group-hover:scale-110 ${mod.iconBg}`}>
                      <mod.icon size={22} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                      {mod.badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#E09000]">
                    {mod.name}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-500">{mod.desc}</p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {mod.features.map((f) => (
                      <span key={f} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#E09000] transition-all group-hover:gap-3">
                    Start Learning
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section id="features" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionHeading
              eyebrow="Why it's different"
              title="A simulator, not a reader"
              desc="The platform is designed around interaction, so learners build intuition by trying things out."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#E09000]">
                    <h.icon size={20} />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section id="stack" className="scroll-mt-20 border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-12">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#F5A623]/25 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Tech Stack</p>
                <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Built with a modern frontend stack</h2>
                <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
                  {stack.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-[#F8FAFC]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <img src="/logo-maxy.png" alt="" className="h-6 w-6 rounded-md" />
            <span>
              Designed &amp; built by <span className="font-semibold text-slate-700">Nabila Melsyana</span>
            </span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-slate-900"
          >
            <Github size={15} />
            nabnabilaa/dashboard-quiz
          </a>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E09000]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-500">{desc}</p>
    </div>
  );
}

/** Decorative mock of the Git Mastery terminal + branch visualizer. */
function HeroPreview() {
  return (
    <div className="animate-slide-up relative mx-auto w-full max-w-md opacity-0 [animation-delay:150ms] lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-200/50 via-transparent to-blue-200/40 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-medium text-slate-400">git-mastery — terminal</span>
        </div>
        <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
          <p><span className="text-emerald-400">$</span> <span className="text-slate-200">git init</span></p>
          <p className="text-slate-500">Initialized empty Git repository</p>
          <p><span className="text-emerald-400">$</span> <span className="text-slate-200">git add .</span></p>
          <p><span className="text-emerald-400">$</span> <span className="text-slate-200">git commit -m &quot;first commit&quot;</span></p>
          <p className="text-amber-300">✓ Correct! +10 XP</p>
          <p><span className="text-emerald-400">$</span> <span className="text-slate-200">git checkout -b feature</span><span className="cursor text-slate-200" /></p>
        </div>
        <div className="border-t border-white/10 bg-white/[0.03] px-5 py-4">
          <svg viewBox="0 0 320 70" className="h-16 w-full">
            <path d="M20 45 H300" stroke="#F5A623" strokeWidth="3" fill="none" />
            <path d="M120 45 C150 45 150 18 180 18 H280" stroke="#60A5FA" strokeWidth="3" fill="none" />
            {[20, 70, 120, 220, 300].map((x) => <circle key={x} cx={x} cy="45" r="7" fill="#F5A623" />)}
            {[180, 230, 280].map((x) => <circle key={x} cx={x} cy="18" r="7" fill="#60A5FA" />)}
            <text x="20" y="66" fill="#94A3B8" fontSize="10" fontFamily="monospace">main</text>
            <text x="244" y="10" fill="#94A3B8" fontSize="10" fontFamily="monospace">feature</text>
          </svg>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block animate-float">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Trophy size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Module complete</p>
            <p className="text-xs text-slate-400">Git Basics · 10/10</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <Layout size={16} className="text-blue-600" />
          Fixer Studio
        </div>
        <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </div>
      </div>
    </div>
  );
}
