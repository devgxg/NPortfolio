'use client'

import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const COLUMNS = [
  {
    label: 'Leadership',
    items: [
      'President, MLSAxAUH Tech Society',
      'Microsoft Learn Student Ambassador (Beta)',
    ],
  },
  {
    label: 'Hackathons',
    items: [
      'Top 10 — Hackverse, IILM University',
      'Finalist — MasterX Hackathon',
      'Top 50 — Triwizardathon',
    ],
  },
  {
    label: 'Community',
    items: [
      'Launched a fundraising campaign for Pawzz Animal Welfare',
    ],
  },
]

const PLACEHOLDERS = [1, 2, 3, 4, 5]

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="w-full py-24 px-8 md:px-14"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* ── Label ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#9A9A9A] text-[0.62rem] tracking-[0.28em] uppercase mb-4"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        05 — Leadership
      </motion.p>

      {/* ── Heading ── */}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.85, ease: EASE }}
        className="text-[#0A0A0A] font-black uppercase leading-none tracking-[-0.025em] mb-16"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        }}
      >
        Leadership &amp; Extracurriculars
      </motion.h2>

      {/* ── Three columns ── */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-20">
        {COLUMNS.map((col, i) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: EASE }}
            className="flex-1"
          >
            <p
              className="text-[0.55rem] tracking-[0.28em] uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: '#8A8A8A' }}
            >
              {col.label}
            </p>
            <ul className="flex flex-col gap-3">
              {col.items.map(item => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: '#2A2A2A',
                    lineHeight: 1.65,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ── Filmstrip caption ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-5 text-[0.6rem] tracking-[0.18em] uppercase"
        style={{ fontFamily: 'var(--font-heading)', color: '#9A9A9A' }}
      >
        Moments from MLSAxAUH events and hackathons
      </motion.p>

      {/* ── Photo filmstrip ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
        className="flex flex-row gap-5 overflow-x-auto pb-2"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {PLACEHOLDERS.map((n, i) => (
          /* Scroll-in wrapper */
          <motion.div
            key={n}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 + i * 0.06, duration: 0.5 }}
            className="flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Hover target */}
            <motion.div
              className="relative flex items-center justify-center rounded-xl overflow-hidden"
              style={{
                width: 180,
                aspectRatio: '4 / 3',
                backgroundColor: '#D8D6CE',
                filter: 'grayscale(100%)',
                cursor: 'default',
              }}
              whileHover={{ scale: 1.03, filter: 'grayscale(40%)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Placeholder graphic */}
              <div className="flex flex-col items-center gap-2 pointer-events-none select-none">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(0,0,0,0.22)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2.5" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.52rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(0,0,0,0.22)',
                    textTransform: 'uppercase',
                  }}
                >
                  Photo {n}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
