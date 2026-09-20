'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const BADGE = 48 // badge diameter in px — spine is centered at BADGE/2

function ShimmerBorder() {
  return (
    <motion.span
      className="absolute inset-0 rounded-xl pointer-events-none"
      animate={{
        boxShadow: [
          '0 0 0px 0px rgba(255,255,255,0)',
          '0 0 12px 2px rgba(255,255,255,0.12)',
          '0 0 0px 0px rgba(255,255,255,0)',
        ],
        borderColor: [
          'rgba(255,255,255,0.06)',
          'rgba(255,255,255,0.32)',
          'rgba(255,255,255,0.06)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
    />
  )
}

interface Entry {
  id: string
  role: string
  company: string
  duration: string
  location: string
  logo: string
  bullets: string[]
}

const ENTRIES: Entry[] = [
  {
    id: 'wesee',
    role: 'AI/ML Intern',
    company: 'WESEE, Indian Navy',
    duration: 'June 2025 – August 2025',
    location: 'New Delhi — On-site',
    logo: '/images/logos/Indian navy logo.png',
    bullets: [
      'Built IMInsight — open-source, offline-capable AI image analysis system (React, Flask) for naval officers — object detection, threat identification, and anomaly detection in defense surveillance imagery.',
      'Fine-tuned YOLOv8 and CNN-based models for ship, personnel, radar, and aircraft detection; integrated CLIP and BLIP for contextual image captioning.',
      'Implemented NLP pipelines converting visual outputs into structured intelligence summaries for military-grade use cases.',
    ],
  },
  {
    id: 'dee',
    role: 'AI Engineer',
    company: 'Dee Development Engineering Ltd',
    duration: 'March 2026 – Present',
    location: 'Faridabad, Haryana — On-site',
    logo: '/images/logos/Dee logo.png',
    bullets: [
      'Engineered the Automated Inventory Code Allocation (AICD) system — full-stack AI app (FastAPI, React, LLM) matching MTO requirements against unallocated inventory using ASME B36.10/B36.19 logic, thickness interpolation, and step-down dimension algorithms.',
      'Building an end-to-end AI pipeline extracting structured BOM from isometric piping drawing PDFs using Claude Vision API, pdf2image, and openpyxl.',
      'Developed an ICD Code Generator — automated 19-character piping component code lookup via LLM-based tool and deterministic master sheet querying, reducing hours of manual Excel work to seconds.',
    ],
  },
]

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  function toggle(id: string) {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <section
      id="experience"
      className="w-full py-24 md:py-32 px-8 md:px-14"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* ── Heading block ── */}
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#4A4A4A] text-[0.62rem] tracking-[0.28em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          04 — Work History
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.85, ease: EASE }}
          className="text-[#FAFAFA] font-black uppercase leading-none tracking-[-0.025em]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
          }}
        >
          Experience
        </motion.h2>
      </div>

      {/* ── Spine + entries — centered ── */}
      <div className="relative max-w-2xl mx-auto">

        {/*
          Vertical spine — bisects the badge column.
          BADGE/2 = 24px from left edge centers the 1px line on the 48px badge.
          No overflow:hidden needed — scaleY collapse doesn't escape the element's
          bounds, and removing it avoids any potential stacking-context clipping issues.
        */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: BADGE / 2, width: 1 }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              transformOrigin: 'top',
              backgroundColor: 'rgba(255,255,255,0.18)',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.6, ease: EASE }}
          />
        </div>

        {/* ── Entry list ── */}
        <div className="flex flex-col gap-10">
          {ENTRIES.map((entry, i) => {
            const isExpanded = expandedId === entry.id

            return (
              <div key={entry.id} className="relative flex items-start gap-6">


                {/* ── Badge column — width = BADGE so spine bisects it ── */}
                <div
                  className="flex-shrink-0 relative flex justify-center"
                  style={{ width: BADGE }}
                >
                  {/* Pulse ring on active entry */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        key="pulse"
                        className="absolute rounded-full pointer-events-none"
                        style={{
                          width: BADGE,
                          height: BADGE,
                          border: '1.5px solid rgba(255,255,255,0.4)',
                        }}
                        animate={{ scale: [1, 1.6], opacity: [0.55, 0] }}
                        transition={{ duration: 1.9, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Logo badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.55 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + i * 0.3, duration: 0.45, ease: EASE }}
                    className="relative overflow-hidden rounded-full"
                    style={{
                      width: BADGE,
                      height: BADGE,
                      flexShrink: 0,
                      backgroundColor: '#1C1C1C',
                      border: isExpanded
                        ? '1.5px solid rgba(255,255,255,0.28)'
                        : '1.5px solid rgba(255,255,255,0.1)',
                      transition: 'border-color 0.25s',
                    }}
                  >
                    <Image
                      src={entry.logo}
                      alt={entry.company}
                      fill
                      className="object-contain p-[9px]"
                      sizes={`${BADGE}px`}
                    />
                  </motion.div>
                </div>

                {/* ── Card ── */}
                <motion.div
                  layout
                  onClick={() => toggle(entry.id)}
                  transition={{ layout: { duration: 0.38, ease: EASE } }}
                  className={[
                    'relative flex-1 min-w-0 cursor-pointer rounded-xl p-5 md:p-6',
                    !isExpanded
                      ? '[@media(hover:hover)]:hover:scale-[1.01]'
                      : '',
                  ].join(' ')}
                  style={{
                    backgroundColor: '#111111',
                    transition: 'transform 0.2s',
                  }}
                >
                  <ShimmerBorder />
                  {/* Always-visible header */}
                  <motion.div layout="position" className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3
                        className="text-[#FAFAFA] font-black uppercase leading-none mb-2"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {entry.role}
                      </h3>
                      <p
                        className="text-[#6B6B6B] text-[0.78rem] leading-snug mb-1.5"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                      >
                        {entry.company}
                      </p>
                      <p
                        className="text-[#3A3A3A] text-[0.58rem] tracking-[0.14em] uppercase"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {entry.duration}
                      </p>
                    </div>

                    {/* + rotates 45° into × on expand */}
                    <motion.span
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.22, ease: EASE }}
                      className="flex-shrink-0 text-[#3A3A3A] text-[1.2rem] leading-none select-none mt-0.5"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </motion.div>

                  {/* Expanded detail — layout prop handles height, AnimatePresence handles fade */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div
                          className="mt-5 pt-5"
                          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                        >
                          <p
                            className="text-[#3D3D3D] text-[0.58rem] tracking-[0.16em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {entry.location}
                          </p>

                          <ul className="flex flex-col gap-3.5">
                            {entry.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex gap-3 items-start">
                                <span
                                  className="flex-shrink-0 rounded-full mt-[7px]"
                                  style={{
                                    width: 4,
                                    height: 4,
                                    backgroundColor: 'rgba(255,255,255,0.18)',
                                  }}
                                />
                                <span
                                  className="leading-[1.78]"
                                  style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.82rem',
                                    fontWeight: 300,
                                    color: 'rgba(255,255,255,0.55)',
                                  }}
                                >
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
