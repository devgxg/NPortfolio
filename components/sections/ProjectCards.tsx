'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


interface Project {
  id: string
  title: string
  summary: string
  tech: string[]
  liveUrl: string | null
  githubUrl: string | null
  note: string | null
  ctaType: 'breakdown' | 'live' | 'github'
}

const PROJECTS: Project[] = [
  {
    id: 'iminsight',
    title: 'IMInsight',
    summary:
      'Defense-grade AI surveillance system — object detection, anomaly recognition, and multi-class classification in satellite and surveillance imagery.',
    tech: ['YOLOv8', 'BLIP', 'CLIP', 'Flask', 'Python'],
    liveUrl: null,
    githubUrl: 'https://github.com/devgxg/IMInsight',
    note: 'Not hosted live — GPU inference pipeline too resource-heavy for free hosting.',
    ctaType: 'breakdown',
  },
  {
    id: 'gigscore',
    title: 'GigScore',
    summary:
      "AI-powered alternative credit scoring platform for India's gig economy — generates a dynamic score up to 850 by analyzing payouts, transaction trends, and expense ratios.",
    tech: ['React', 'Vite', 'TailwindCSS', 'Flask', 'GROQ AI', 'Pandas'],
    liveUrl: 'https://gigloan.netlify.app/',
    githubUrl: null,
    note: null,
    ctaType: 'live',
  },
  {
    id: 'bitewise',
    title: 'BiteWise',
    summary:
      'Multimodal AI food monitoring assistant — analyzes food images via Gemini LLM vision to deliver health scores, allergen detection, and disease-risk insights.',
    tech: ['Python', 'React', 'Flask', 'Gemini LLM', 'SQLite'],
    liveUrl: 'https://bitewiseee.netlify.app/',
    githubUrl: null,
    note: null,
    ctaType: 'live',
  },
  {
    id: 'heartdisease',
    title: 'Heart Disease Detective',
    summary:
      'End-to-end ML classification pipeline for heart disease risk prediction using clinical patient data — cholesterol, blood pressure, ECG features.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    liveUrl: null,
    githubUrl: 'https://github.com/devgxg/HeartDiseaseDetective',
    note: null,
    ctaType: 'github',
  },
]

const TOTAL = PROJECTS.length

// Container: triggers stagger when it scrolls into view
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
}

// Each card fades + rises
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

function TechPill({ label }: { label: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-full text-[0.6rem] tracking-[0.1em] uppercase font-medium"
      style={{
        fontFamily: 'var(--font-heading)',
        backgroundColor: 'rgba(255,255,255,0.07)',
        color: 'rgba(255,255,255,0.6)',
        border: '1px solid rgba(255,255,255,0.22)',
      }}
    >
      {label}
    </span>
  )
}

interface ProjectCardsProps {
  onRevealDiagram: () => void
}

export default function ProjectCards({ onRevealDiagram }: ProjectCardsProps) {
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const selectedProject = PROJECTS.find(p => p.id === selected) ?? null

  function handleBreakdown() {
    setSelected(null)
    onRevealDiagram()
  }

  return (
    <section
      className="w-full py-24 px-8 md:px-14"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* ── Heading block ── */}
      <div className="mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#9A9A9A] text-[0.62rem] tracking-[0.28em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          01 — Case Studies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-[#0A0A0A] font-black uppercase leading-none tracking-[-0.025em]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
          }}
        >
          My Work
        </motion.h2>
      </div>

      {/* ── Card grid — stagger container ── */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            variants={cardVariants}
            // Explicit animate overrides inherited variant when card is selected (hides it in grid)
            animate={selected === project.id ? { opacity: 0 } : undefined}
            onClick={() => setSelected(project.id)}
            whileHover={selected === project.id ? {} : { scale: 1.02, y: -4 }}
            className="relative cursor-pointer rounded-2xl p-7 flex flex-col gap-4 overflow-hidden min-w-0"
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 2px 24px rgba(0,0,0,0.14)',
            }}
          >
            {/* Subtle radial glow — top-right corner, barely perceptible */}
            <div
              aria-hidden
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: 220,
                height: 220,
                background:
                  'radial-gradient(circle at top right, rgba(255,255,255,0.045) 0%, transparent 68%)',
              }}
            />

            {/* Index label */}
            <span
              className="text-[#3A3A3A] text-[0.58rem] tracking-[0.22em] uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {String(i + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
            </span>

            <motion.h3
              layoutId={`title-${project.id}`}
              className="text-[#FAFAFA] font-black uppercase tracking-[-0.01em] leading-none"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
              }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              layoutId={`summary-${project.id}`}
              className="leading-[1.7]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              {project.summary}
            </motion.p>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.tech.map(t => <TechPill key={t} label={t} />)}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Overlay ── */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-40"
              style={{
                backgroundColor: 'rgba(0,0,0,0.72)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="relative pointer-events-auto rounded-2xl p-8 md:p-10 flex flex-col gap-6 overflow-hidden"
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 28px 80px rgba(0,0,0,0.55)',
                  width: 'min(600px, 92vw)',
                  maxHeight: '82vh',
                  overflowY: 'auto',
                }}
              >
                {/* Corner glow in overlay too */}
                <div
                  aria-hidden
                  className="absolute top-0 right-0 pointer-events-none"
                  style={{
                    width: 280,
                    height: 280,
                    background:
                      'radial-gradient(circle at top right, rgba(255,255,255,0.04) 0%, transparent 65%)',
                  }}
                />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[#555] hover:text-[#FAFAFA] transition-colors"
                  aria-label="Close"
                  style={{ fontSize: '1rem' }}
                >
                  ✕
                </button>

                <motion.h2
                  layoutId={`title-${selectedProject.id}`}
                  className="text-[#FAFAFA] font-black uppercase tracking-[-0.02em] leading-none pr-10"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  }}
                >
                  {selectedProject.title}
                </motion.h2>

                <motion.p
                  layoutId={`summary-${selectedProject.id}`}
                  className="leading-[1.8]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  {selectedProject.summary}
                </motion.p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => <TechPill key={t} label={t} />)}
                </div>

                {selectedProject.note && (
                  <p
                    className="text-[0.72rem] leading-[1.6] border-l border-[#2A2A2A] pl-3"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.28)',
                    }}
                  >
                    {selectedProject.note}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-2">
                  {selectedProject.ctaType === 'breakdown' && (
                    <>
                      <button
                        onClick={handleBreakdown}
                        className="px-5 py-2.5 rounded-xl text-[0.7rem] tracking-[0.12em] uppercase font-medium bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#E0E0E0] transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        See Full Breakdown ↓
                      </button>
                      <a
                        href={selectedProject.githubUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#555] hover:text-[#FAFAFA] text-[0.7rem] tracking-[0.12em] uppercase transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        View on GitHub
                      </a>
                    </>
                  )}

                  {selectedProject.ctaType === 'live' && (
                    <a
                      href={selectedProject.liveUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-[0.7rem] tracking-[0.12em] uppercase font-medium bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#E0E0E0] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      View Live
                    </a>
                  )}

                  {selectedProject.ctaType === 'github' && (
                    <a
                      href={selectedProject.githubUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-[0.7rem] tracking-[0.12em] uppercase font-medium bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#E0E0E0] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
