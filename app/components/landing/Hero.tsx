'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { courses, display, hand } from './courses';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Where each sticker lands on the mat at lg+ (x%, y%, rotation). */
const layout = [
  { x: 4, y: 12, r: -7 },
  { x: 27, y: 54, r: 4 },
  { x: 43, y: 9, r: -3 },
  { x: 62, y: 50, r: 6 },
  { x: 77, y: 13, r: -5 },
  { x: 7, y: 60, r: 3 },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % courses.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const current = courses[i];

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 md:pt-20">
      <p className={`${display.className} text-2xl font-semibold text-[#6B6257] sm:text-3xl`}>
        Don&apos;t just{' '}
        <span className="relative inline-block">
          read
          <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute -inset-x-1 top-1/2 h-4 w-[calc(100%+0.5rem)] -translate-y-1/2" aria-hidden="true">
            <motion.path
              d="M2 12 C 20 4, 35 16, 52 9 S 85 5, 98 11"
              stroke="#F5A623"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
            />
          </svg>
        </span>{' '}
        about it.
      </p>

      <h1 className={`${display.className} mt-2 min-h-[3.1em] text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-[#1F1A14] sm:min-h-[2.1em] lg:min-h-[1.1em] lg:whitespace-nowrap`}>
        <span className="sr-only">Go fix, draw, commit, build, ship and scan it yourself.</span>
        <span aria-hidden="true">
          Go{' '}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current.task}
              className="inline-block"
              style={{ color: current.accent }}
              initial={{ opacity: 0, y: '0.35em', filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: '-0.25em', filter: 'blur(6px)' }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
            >
              {current.task}.
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-lg leading-relaxed text-[#5A5248]">
          Six courses from Maxy Academy. Every one ends in something you operate yourself: a terminal, a canvas, a live editor.
        </p>
        <a
          href="#courses"
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#1F1A14] py-3 pl-6 pr-3 font-semibold text-[#FAF6EF] transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          See all courses
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F5A623] text-[#1F1A14] transition-transform duration-200 ease-out group-hover:translate-y-0.5">
            ↓
          </span>
        </a>
      </div>

      <StickerMat />
    </section>
  );
}

function StickerMat() {
  const mat = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const [top, setTop] = useState<number | null>(null);
  const reduce = useReducedMotion();
  // Only let stickers move where a mouse is available; on touch screens dragging would hijack page scroll.
  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    const update = () => setCanDrag(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className="relative mt-14">
      <p className={`${hand.className} pointer-events-none absolute -top-11 right-6 hidden rotate-[-4deg] text-2xl text-[#6B6257] lg:block`} aria-hidden="true">
        psst, these move. try it
        <svg viewBox="0 0 60 40" className="absolute -bottom-7 -left-10 h-10 w-14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M55 5 C 40 8, 20 14, 8 32" />
          <path d="M8 32 L 7 22 M8 32 L 17 28" />
        </svg>
      </p>

      <div
        ref={mat}
        className="relative overflow-hidden rounded-[28px] bg-[#1C1914] p-6 sm:p-8 lg:h-[420px] lg:p-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-3"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0 1px, transparent 1px 14px)' }}
          aria-hidden="true"
        />
        <span className="pointer-events-none absolute bottom-4 right-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
          maxy / 06 courses
        </span>

        <ul className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-5 pb-8 pt-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-5 lg:block lg:p-0">
          {courses.map((c, idx) => {
            const pos = layout[idx];
            return (
              <motion.li
                key={c.path}
                drag={canDrag}
                dragConstraints={mat}
                dragElastic={0.15}
                dragMomentum={false}
                dragSnapToOrigin={false}
                onDragStart={() => {
                  dragged.current = true;
                  setTop(idx);
                }}
                initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: pos.r * 2 }}
                animate={{ opacity: 1, scale: 1, rotate: pos.r }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.2, delay: reduce ? 0 : 0.4 + idx * 0.06 }}
                whileHover={{ y: -4 }}
                whileDrag={{ scale: 1.06, rotate: 0, cursor: 'grabbing' }}
                className="w-full max-w-[172px] select-none lg:cursor-grab lg:touch-none sm:w-[172px] lg:absolute lg:left-[var(--x)] lg:top-[var(--y)]"
                style={{ ['--x' as string]: `${pos.x}%`, ['--y' as string]: `${pos.y}%`, zIndex: top === idx ? 20 : 1 }}
              >
                <Link
                  href={c.path}
                  draggable={false}
                  onClick={(e) => {
                    if (dragged.current) {
                      e.preventDefault();
                      dragged.current = false;
                    }
                  }}
                  onPointerDown={() => {
                    dragged.current = false;
                  }}
                  className="group block rounded-2xl border-[3px] border-[#FAF6EF] px-4 py-3.5 shadow-[0_14px_24px_-10px_rgba(0,0,0,0.6)]"
                  style={{ background: c.color, color: c.ink }}
                >
                  <span className="block font-mono text-[11px] opacity-70">{c.cmd}</span>
                  <span className={`${display.className} mt-1 block text-[19px] font-extrabold leading-tight`}>{c.name}</span>
                  <span className="mt-2 block text-xs font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-80 group-focus-visible:opacity-80">
                    Open course →
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
