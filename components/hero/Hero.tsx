'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'

const NeuralField = dynamic(() => import('@/components/NeuralField'), { ssr: false })

const NAV_ITEMS = ['Work', 'About', 'Experience', 'Contact']
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ⚠️  Portrait asset flag:
// The current file (portrait.png.jpeg) has a solid black background — not alpha
// transparency. The radial mask feathers the rectangle edges but won't dissolve
// the black fill where it overlaps text. Replace with a transparent PNG before
// final review. remove.bg or Photoshop "Remove Background" both work.

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex flex-col">

      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.22 }} aria-hidden>
        <NeuralField />
      </div>

      {/* ── Nav ── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
        className="relative z-10 flex items-center justify-between px-8 md:px-14 pt-8"
      >
        <div className="flex items-center gap-2.5">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FAFAFA] opacity-70" />
          <span
            className="text-[#6B6B6B] text-[0.65rem] tracking-[0.22em] uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Available for work
          </span>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            {NAV_ITEMS.map(item => (
              <li key={item}>
                <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      {/* ════════════════════════════════════════
          MOBILE  (<768px) — pure stack, no tricks
          ════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 pb-12 md:hidden">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
          className="text-[#FAFAFA] font-black leading-[0.88] tracking-[-0.02em] uppercase"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(4.5rem, 22vw, 7rem)' }}
        >
          Dev<br />Garg
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: EASE }}
          className="relative mt-8 w-[200px] h-[268px] rounded-xl overflow-hidden"
        >
          <Image
            src="/images/profile/portrait.png"
            alt="Dev Garg"
            fill
            priority
            className="object-cover object-top"
            sizes="200px"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: EASE }}
          className="mt-7 text-[#6B6B6B] leading-relaxed max-w-xs"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 300 }}
        >
          AI Engineer building intelligent systems for manufacturing, defense, and automation.
        </motion.p>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  (≥768px) — DEV | portrait | GARG
          ════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 hidden md:flex flex-col justify-center px-10 lg:px-14 pb-16">

        {/* 3-column row */}
        <div className="flex items-center w-full">

          {/* ── DEV ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
            className="flex-1 flex justify-end relative"
            style={{ zIndex: 1 }}
          >
            <span
              className="text-[#FAFAFA] font-black leading-none tracking-[-0.03em] uppercase select-none"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(4.5rem, 9.5vw, 9.5rem)' }}
            >
              DEV
            </span>
          </motion.div>

          {/* ── Portrait — overlaps both text columns ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.1, ease: EASE }}
            className="shrink-0 relative"
            style={{ zIndex: 10, marginLeft: -56, marginRight: -56 }}
          >
            <div
              style={{
                width: 300,
                height: 420,
                borderRadius: '1.25rem',
                overflow: 'hidden',
                // Feathers outer ~12% of the image on all sides.
                // Replace portrait with transparent PNG for crisp text overlap.
                maskImage:
                  'radial-gradient(ellipse 76% 86% at 50% 44%, black 46%, transparent 86%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 76% 86% at 50% 44%, black 46%, transparent 86%)',
              }}
            >
              <Image
                src="/images/profile/portrait.png"
                alt="Dev Garg"
                fill
                priority
                className="object-cover object-top"
                sizes="300px"
              />
            </div>
          </motion.div>

          {/* ── GARG ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
            className="flex-1 flex justify-start relative"
            style={{ zIndex: 1 }}
          >
            <span
              className="text-[#FAFAFA] font-black leading-none tracking-[-0.03em] uppercase select-none"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(4.5rem, 9.5vw, 9.5rem)' }}
            >
              GARG
            </span>
          </motion.div>

        </div>

        {/* Subtext — centered under the full row */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
          className="mt-10 text-center text-[#6B6B6B] leading-relaxed"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
            fontWeight: 300,
            letterSpacing: '0.04em',
          }}
        >
          AI Engineer building intelligent systems for manufacturing, defense, and automation.
        </motion.p>

      </div>

    </section>
  )
}

/* ── Underline draw-in nav link ── */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      className="relative inline-block text-[#FAFAFA] text-[0.7rem] tracking-[0.18em] uppercase"
      style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
    >
      {children}
      <motion.span
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.35, ease: EASE }}
        className="absolute bottom-0 left-0 h-px w-full bg-[#FAFAFA] block origin-left"
      />
    </motion.a>
  )
}
