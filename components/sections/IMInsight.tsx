'use client'

import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const NODES = [
  { top: 'Satellite /', bottom: 'Surveillance Image' },
  { top: 'YOLOv8', bottom: 'Detection' },
  { top: 'CLIP + BLIP', bottom: 'Captioning' },
  { top: 'Structured', bottom: 'Intelligence Summary' },
]

// Sequential: each line starts when the previous finishes
// Line draws for 0.65s. Nodes appear just ahead of arriving line.
const LINE_DELAYS  = [0.6,  1.4,  2.2 ]
const NODE_DELAYS  = [0.15, 1.1, 1.9, 2.7]

/* ── Single pipeline node ── */
function FlowNode({ top, bottom, delay }: { top: string; bottom: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.5, ease: EASE }}
      className="shrink-0 flex flex-col items-center gap-2.5 px-5 py-4 rounded-xl text-center"
      style={{
        minWidth: 148,
        border: '1px solid rgba(10,10,10,0.18)',
        backgroundColor: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Dot marker */}
      <span className="block w-1.5 h-1.5 rounded-full bg-[#0A0A0A] opacity-60" />
      {/* Label */}
      <p
        className="text-[#0A0A0A] text-[0.72rem] font-medium leading-snug"
        style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.03em' }}
      >
        {top}<br />{bottom}
      </p>
    </motion.div>
  )
}

/* ── Animated connecting line ──
   viewBox "0 0 1 1" + preserveAspectRatio="none" stretches the
   path to fill the container. vectorEffect keeps stroke at 1px. */
function ConnectingLine({ delay }: { delay: number }) {
  return (
    <div className="flex-1 flex items-center" style={{ minWidth: 48, padding: '0 6px' }}>
      <svg
        width="100%"
        height="16"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        style={{ overflow: 'visible', display: 'block' }}
      >
        {/* Main line */}
        <motion.path
          d="M0,0.5 L1,0.5"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay, duration: 0.65, ease: 'easeInOut' }}
        />
        {/* Chevron tip — appears after line finishes */}
        <motion.path
          d="M0.86,0.18 L1,0.5 L0.86,0.82"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: delay + 0.62, duration: 0.2 }}
        />
      </svg>
    </div>
  )
}

export default function IMInsight() {
  return (
    <section
      className="w-full py-24 md:py-32 px-8 md:px-14"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* ── Label ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#9A9A9A] text-[0.62rem] tracking-[0.28em] uppercase mb-5"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Selected Work — 01
      </motion.p>

      {/* ── Heading ── */}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.8, ease: EASE }}
        className="text-[#0A0A0A] font-black leading-none tracking-[-0.025em] uppercase"
        style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 7vw, 6rem)' }}
      >
        IMInsight
      </motion.h2>

      {/* ── Subhead ── */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.18, duration: 0.8, ease: EASE }}
        className="mt-3 mb-20 text-[#6B6B6B]"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
          fontWeight: 300,
        }}
      >
        Defense-grade surveillance image analysis
      </motion.p>

      {/* ── Flow diagram ── */}
      <div className="overflow-x-auto -mx-2 px-2 pb-2">
        <div
          className="flex items-center"
          style={{ minWidth: 680 }}
        >
          {NODES.map((node, i) => (
            <span key={node.bottom} className="contents">
              <FlowNode top={node.top} bottom={node.bottom} delay={NODE_DELAYS[i]} />
              {i < NODES.length - 1 && (
                <ConnectingLine delay={LINE_DELAYS[i]} />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Supporting copy ── */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.8, ease: EASE }}
        className="mt-20 text-[#4A4A4A] leading-[1.8] max-w-2xl"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.82rem, 1.15vw, 0.93rem)',
          fontWeight: 300,
        }}
      >
        Built during an AI/ML internship with WESEE, Indian Navy. Fine-tuned YOLOv8 and CNN
        models for detecting ships, personnel, radar, and aircraft in surveillance imagery.
        Integrated CLIP and BLIP for contextual captioning, with an NLP layer converting
        visual output into structured intelligence summaries. Designed for offline/edge
        deployment in defense environments — evaluated against low-resolution and
        partially occluded targets.
      </motion.p>
    </section>
  )
}
