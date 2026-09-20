'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const LINKS = [
  { label: 'Email', display: 'devg55030@gmail.com', href: 'mailto:devg55030@gmail.com' },
  { label: 'GitHub', display: 'github.com/devgxg', href: 'https://github.com/devgxg' },
  { label: 'LinkedIn', display: 'linkedin.com/in/devgxg', href: 'https://linkedin.com/in/devgxg' },
]

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      initial="rest"
      whileHover="hover"
      className="relative inline-block"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        fontWeight: 300,
        color: 'rgba(255,255,255,0.7)',
        lineHeight: 1.8,
      }}
    >
      {children}
      <motion.span
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.3, ease: EASE }}
        className="absolute bottom-0 left-0 h-px w-full block origin-left"
        style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
      />
    </motion.a>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.15)',
  outline: 'none',
  color: '#FAFAFA',
  fontFamily: 'var(--font-body)',
  fontSize: '0.85rem',
  fontWeight: 300,
  padding: '10px 0',
  transition: 'border-color 0.25s',
}

const ACCESS_KEY = '804b04ef-fa50-459c-80f8-7d319da9a572'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="w-full py-24 px-8 md:px-14"
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
        06 — Contact
      </motion.p>

      {/* ── Closing statement ── */}
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
        className="text-[#FAFAFA] font-black uppercase leading-[1.1] tracking-[-0.02em] mb-16 max-w-3xl"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4.2vw, 3.75rem)',
        }}
      >
        Open to opportunities in AI engineering, computer vision, and
        product-focused AI roles. If you&apos;re building something
        interesting, let&apos;s talk.
      </motion.p>

      {/* ── Two-column layout ── */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-24">

        {/* LEFT — direct links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7, ease: EASE }}
          className="md:w-[38%] flex flex-col gap-6"
        >
          {LINKS.map(link => (
            <div key={link.label}>
              <p
                className="text-[0.55rem] tracking-[0.28em] uppercase mb-1.5"
                style={{ fontFamily: 'var(--font-heading)', color: '#4A4A4A' }}
              >
                {link.label}
              </p>
              <NavLink href={link.href}>{link.display}</NavLink>
            </div>
          ))}
        </motion.div>

        {/* RIGHT — contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
          className="flex-1"
        >
          {status === 'success' ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
            >
              Thanks — I&apos;ll get back to you soon.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={{ ...inputStyle, borderBottomColor: focused === 'name' ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.15)' }}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{ ...inputStyle, borderBottomColor: focused === 'email' ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.15)' }}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={5}
                style={{ ...inputStyle, resize: 'none', borderBottomColor: focused === 'message' ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.15)' }}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />

              {/* Error */}
              {status === 'error' && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>
                  Something went wrong. Please email me directly instead.
                </p>
              )}

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-5 py-2.5 rounded-xl text-[0.7rem] tracking-[0.12em] uppercase font-medium bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#E0E0E0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>

      {/* ── Footer ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[0.6rem] tracking-[0.18em] uppercase"
        style={{ fontFamily: 'var(--font-heading)', color: '#2A2A2A' }}
      >
        © 2026 Dev Garg
      </motion.p>
    </section>
  )
}
