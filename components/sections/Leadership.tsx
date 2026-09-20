'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const COLUMNS = [
  {
    label: 'Leadership',
    items: [
      'President, MLSAxAUH Tech Society',
      'Microsoft Learn Student Ambassador (Beta)',
      'Hosted multiple tech events and workshops',
      'Mentored students in AI, ML, and web development',
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
      'Volunteered at NGOs',
    ],
  },
]

const PHOTOS = [
  { src: '/images/profile/president mlsaxauh.jpeg', alt: 'President, MLSAxAUH Tech Society', pos: 'center center' },
  { src: '/images/profile/google office.jpeg',      alt: 'Google Office visit',              pos: 'center 75%'   },
  { src: '/images/profile/Google.jpeg',             alt: 'Google',                           pos: 'center center' },
  { src: '/images/profile/hackverse Hackathon.jpeg', alt: 'Hackverse Hackathon',             pos: 'center top'   },
  { src: '/images/profile/Host.jpeg',               alt: 'Hosting',                          pos: 'center center' },
  { src: '/images/profile/MLSA beta.jpeg',          alt: 'MLSA Beta',                        pos: 'center center' },
  { src: '/images/profile/Microsoft.jpeg',          alt: 'Microsoft',                        pos: 'center 20%'   },
  { src: '/images/profile/Tech Event host.jpeg',    alt: 'Tech Event Host',                  pos: 'center center' },
]

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
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="flex-shrink-0 rounded-full mt-[7px]"
                    style={{ width: 3, height: 3, backgroundColor: '#8A8A8A' }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: '#2A2A2A',
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </span>
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

      {/* ── Photo marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="overflow-hidden"
      >
        {/* Track: two copies side-by-side, animates x 0 → -50% for seamless loop */}
        <motion.div
          className="flex gap-5"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {[...PHOTOS, ...PHOTOS].map((photo, i) => (
            <motion.div
              key={`${photo.src}-${i}`}
              className="relative flex-shrink-0 rounded-xl overflow-hidden"
              style={{
                width: 220,
                aspectRatio: '4 / 3',
                filter: 'grayscale(100%)',
              }}
              whileHover={{ scale: 1.04, filter: 'grayscale(35%)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                style={{ objectPosition: photo.pos }}
                sizes="220px"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
