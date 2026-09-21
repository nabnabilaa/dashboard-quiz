import Link from 'next/link';
import { courses, display } from './courses';

const commands = [
  'git checkout -b feature', 'line-height: 1.6', 'Actor → Use Case', 'php artisan make:model',
  'nmap -sV 10.0.0.1', 'display: grid', 'git rebase main', 'contrast 4.5 : 1',
  'Route::get()', '<nav aria-label>', 'wireshark -i eth0', 'git merge --no-ff',
];

export function CommandMarquee() {
  const row = [...commands, ...commands];
  return (
    <div className="overflow-hidden border-y border-[#1F1A14]/10 bg-[#F5A623] py-4" aria-hidden="true">
      <div className="landing-marquee flex w-max gap-10 font-mono text-sm font-medium text-[#1F1A14]">
        {row.map((c, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {c}
            <span className="h-1.5 w-1.5 rounded-full bg-[#1F1A14]/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function CourseList() {
  return (
    <section id="courses" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className={`${display.className} text-4xl font-extrabold tracking-[-0.03em] text-[#1F1A14] sm:text-5xl`}>
          Pick one.
          <br />
          <span className="text-[#9A8F80]">Start in a minute.</span>
        </h2>
        <p className="max-w-xs text-[#5A5248]">No sign-up, nothing to install. Every course runs right here in your browser.</p>
      </div>

      <ol className="mt-14 border-t border-[#1F1A14]/15">
        {courses.map((c, i) => (
          <li key={c.path} className="border-b border-[#1F1A14]/15">
            <Link
              href={c.path}
              className="group relative grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 gap-y-3 py-7 transition-colors duration-200 sm:grid-cols-[3.5rem_1.1fr_1.4fr_auto] sm:items-center sm:gap-x-8"
            >
              <span
                className="pointer-events-none absolute inset-y-0 -left-4 w-1 origin-top scale-y-0 rounded-full transition-transform duration-200 ease-out group-hover:scale-y-100 sm:-left-6"
                style={{ background: c.accent }}
                aria-hidden="true"
              />
              <span className="pt-1 font-mono text-sm text-[#9A8F80] sm:pt-0">{String(i + 1).padStart(2, '0')}</span>
              <span className={`${display.className} text-2xl font-extrabold tracking-[-0.02em] text-[#1F1A14] transition-colors duration-200 sm:text-3xl`}>
                <span className="transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ ['--accent' as string]: c.accent }}>
                  {c.name}
                </span>
              </span>
              <span className="col-start-2 col-end-4 sm:col-start-auto sm:col-end-auto">
                <span className="block text-[15px] leading-relaxed text-[#5A5248]">{c.desc}</span>
                <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-[#8A7F70]">
                  {c.features.map((f) => (
                    <span key={f}>/ {f}</span>
                  ))}
                </span>
              </span>
              <span className="row-start-1 col-start-3 grid h-11 w-11 place-items-center rounded-full border border-[#1F1A14]/15 text-lg text-[#1F1A14] transition-all duration-200 ease-out group-hover:border-transparent group-hover:bg-[#1F1A14] group-hover:text-[#FAF6EF] sm:col-start-4">
                <span className="transition-transform duration-200 ease-out group-hover:-rotate-45">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
