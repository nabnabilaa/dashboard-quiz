import Link from 'next/link';
import { Hero } from './components/landing/Hero';
import { CommandMarquee, CourseList } from './components/landing/CourseList';
import { display } from './components/landing/courses';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6EF] text-[#1F1A14] selection:bg-[#F5A623]/40">
      <header className="sticky top-0 z-50 border-b border-[#1F1A14]/10 bg-[#FAF6EF]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo-maxy.png" alt="" className="h-8 w-8 rounded-lg" />
            <span className={`${display.className} text-lg font-extrabold tracking-[-0.02em]`}>Maxy Learning</span>
          </Link>
          <a href="#courses" className="rounded-full px-4 py-2 text-sm font-semibold text-[#5A5248] transition-colors hover:text-[#1F1A14]">
            Courses
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <CommandMarquee />
        <CourseList />
      </main>
    </div>
  );
}
