'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCards from './ProjectCards'
import IMInsight from './IMInsight'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function WorkSection() {
  const [showDiagram, setShowDiagram] = useState(false)

  function handleReveal() {
    setShowDiagram(true)
    // Scroll after the height-expand animation completes (~650ms)
    setTimeout(() => {
      document.getElementById('iminsight-diagram')?.scrollIntoView({ behavior: 'smooth' })
    }, 680)
  }

  return (
    <>
      <ProjectCards onRevealDiagram={handleReveal} />

      <AnimatePresence>
        {showDiagram && (
          <motion.div
            key="iminsight-diagram-wrapper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <IMInsight onCollapse={() => setShowDiagram(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
