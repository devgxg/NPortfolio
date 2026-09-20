'use client'

import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Border that breathes — opacity pulses gently, glow swells and recedes
function ShimmerBorder() {
  return (
    <motion.span
      className="absolute inset-0 rounded-[0.75rem] pointer-events-none"
      animate={{
        boxShadow: [
          '0 0 0px 0px rgba(255,255,255,0)',
          '0 0 12px 2px rgba(255,255,255,0.12)',
          '0 0 0px 0px rgba(255,255,255,0)',
        ],
        borderColor: [
          'rgba(255,255,255,0.15)',
          'rgba(255,255,255,0.45)',
          'rgba(255,255,255,0.15)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
    />
  )
}

const SKILLS = [
  {
    category: 'Generative AI & LLMs',
    items: 'Claude, OpenAI, Gemini, Ollama, Prompt Engineering, RAG, LangChain, AI Agents',
    prominent: true,
  },
  {
    category: 'Machine Learning & Deep Learning',
    items: 'Neural Networks (ANN), PyTorch, TensorFlow',
    prominent: true,
  },
  {
    category: 'Data Analysis',
    items: 'Scikit-learn, Pandas, NumPy, exploratory data analysis, statistical modeling',
    prominent: true,
  },
  {
    category: 'Computer Vision',
    items: 'YOLOv8, CLIP, BLIP, OpenCV, CNNs',
    prominent: true,
  },
  {
    category: 'Systems & Deployment',
    items: 'Python, FastAPI, REST APIs, MySQL, MongoDB, Docker',
    prominent: true,
  },
  {
    category: 'Also',
    items: 'JavaScript, TailwindCSS, Git & GitHub',
    prominent: true,
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-8 md:px-14"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* ── Label ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#4A4A4A] text-[0.62rem] tracking-[0.28em] uppercase mb-5"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        03 — About
      </motion.p>

      {/* ── Statement + watermark ── */}
      <div className="relative mb-14">
        {/* Watermark — behind statement, sized to be background texture not headline */}
        <span
          aria-hidden
          className="hidden md:block absolute bottom-0 right-0 font-black select-none pointer-events-none"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 7.5vw, 8rem)',
            lineHeight: 1,
            color: '#FAFAFA',
            opacity: 0.92,
            letterSpacing: '-0.04em',
            zIndex: 0,
            whiteSpace: 'nowrap',
          }}
        >
          ABOUT ME
        </span>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.95, ease: EASE }}
          className="relative max-w-2xl text-[#FAFAFA] leading-[1.65]"
          style={{
            zIndex: 10,
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
          }}
        >
          Self-taught AI Engineer who went from defense surveillance systems
          to industrial AI pipelines — now exploring research, testing new models, and building
          toward production-grade AI products. Active across hackathons, conferences, and
          workshops along the way.
        </motion.p>
      </div>

      {/* ── Hairline bridge ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
        className="w-full h-px origin-left mb-14"
        style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
      />

      {/* ── Two-column row — items-start prevents stretch ── */}
      <div className="flex flex-col md:flex-row md:items-start gap-4">

        {/* COLUMN 1 — EDUCATION, left-aligned, no border */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1, duration: 0.75, ease: EASE }}
          className="relative md:w-[38%] p-6 md:p-8"
          style={{ borderRadius: '0.75rem' }}
        >
          <ShimmerBorder />
          <p
            className="text-[#8A8A8A] text-[0.62rem] tracking-[0.28em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Education
          </p>

          <div className="mb-0.5">
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.73rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '0.01em' }}>
              B.Tech CSE (AI/ML), Minor in Economics
            </span>
          </div>
          <div className="mb-0.5">
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>
              Amity University Haryana
            </span>
          </div>
          <div className="mb-1.5">
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>
              2022–2026 · 8.12 CGPA
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 300, color: 'rgba(255,255,255,0.2)' }}>
            Class XII — 90.8%&ensp;·&ensp;Class X — 94.6%
          </span>



          <div className="mt-7">
            <p className="text-[#8A8A8A] text-[0.55rem] tracking-[0.24em] uppercase mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>
              Certifications
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                'SWAYAM — Python Programming',
                'NPTEL — Foundations of VR & AR',
                'HackerRank — SQL (Intermediate)',
              ].map(cert => (
                <li key={cert} style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* COLUMN 2 — TECHNICAL SKILLS, no border */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.25, duration: 0.75, ease: EASE }}
          className="relative md:w-[62%] p-6 md:p-8"
          style={{ borderRadius: '0.75rem' }}
        >
          <ShimmerBorder />
          <p
            className="text-[#8A8A8A] text-[0.62rem] tracking-[0.28em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Technical Skills
          </p>

          <div className="flex flex-col gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.5, ease: EASE }}
                style={skill.prominent ? {
                  borderLeft: '2px solid rgba(255,255,255,0.55)',
                  paddingLeft: '10px',
                } : { paddingLeft: 0 }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.73rem',
                    fontWeight: 700,
                    color: skill.prominent ? '#FAFAFA' : '#4A4A4A',
                    letterSpacing: '0.01em',
                  }}
                >
                  {skill.category}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.73rem',
                    fontWeight: 300,
                    color: skill.prominent ? '#9A9A9A' : '#383838',
                  }}
                >
                  {' — '}{skill.items}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
