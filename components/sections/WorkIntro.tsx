'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const NeuralField = dynamic(() => import('@/components/NeuralField'), { ssr: false })

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const TAGS = ['Computer Vision', 'AI Agents', 'Automation Pipelines']


export default function WorkIntro() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-14 py-24"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* ── Neural field ambient background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.13 }}
        aria-hidden
      >
        <NeuralField />
      </div>

      {/* ── Content stack ── */}
      <div className="relative z-10 flex flex-col">

        {/* ── "WHAT I BUILD" label — fade+rise + underline draw-in ── */}
        <div className="mb-10">
          {/* Label text: opacity+y — reliable across all scroll contexts */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-[#FAFAFA] font-black uppercase leading-none tracking-[0.28em] mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            }}
          >
            What I Build
          </motion.p>

          {/* Underline draws in 300ms after text appears */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.3, duration: 0.55, ease: EASE }}
            className="block h-px bg-[#FAFAFA] origin-left"
            style={{ width: 'clamp(120px, 18vw, 220px)', opacity: 0.35 }}
          />
        </div>

        {/* ── Statement heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.22, duration: 1, ease: EASE }}
          className="text-[#FAFAFA] font-black leading-[1.08] tracking-[-0.02em] uppercase max-w-4xl"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4.2vw, 3.75rem)',
          }}
        >
          Architecting systems where computer vision, retrieval, and automation
          become one — for enterprise workflows, manufacturing and defense.
        </motion.h2>

        {/* ── Tag row — safe horizontal placement below heading ── */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10">
          {TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
              className="text-[#3D3D3D] text-[0.6rem] tracking-[0.22em] uppercase select-none"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  )
}
