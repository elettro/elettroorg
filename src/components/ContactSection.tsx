import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Instagram, Twitter, Globe, Mail, Phone } from 'lucide-react'

const FONT = { fontFamily: "'Instrument Serif', serif" }

// Paste your Web3Forms access key here (web3forms.com → enter dpalermo@elettro.com → get key)
const WEB3FORMS_KEY = 'a7d7be80-45b7-4c10-aef4-a51b874a1341'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || state === 'loading') return
    setState('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Project Inquiry — Elettro.com',
          from_name: form.name || 'Website Visitor',
          email: form.email,
          message: form.message || '(no message)',
        }),
      })
      const data = await res.json()
      setState(data.success ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.p
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-16 md:mb-20"
          style={FONT}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Start something{' '}
          <em className="italic text-white/60">worth making.</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {state === 'success' ? (
              <div className="liquid-glass rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
                <p className="text-white/40 text-xs tracking-widest uppercase">Message sent</p>
                <p className="text-white text-3xl md:text-4xl leading-tight" style={FONT}>
                  We'll be in touch <em className="italic text-white/60">soon.</em>
                </p>
                <button
                  onClick={() => { setState('idle'); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-4 text-white/40 hover:text-white text-sm transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : state === 'error' ? (
              <div className="liquid-glass rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
                <p className="text-white/40 text-xs tracking-widest uppercase">Something went wrong</p>
                <p className="text-white text-2xl leading-tight" style={FONT}>
                  Please try again or email us <em className="italic text-white/60">directly.</em>
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-4 text-white/40 hover:text-white text-sm transition-colors"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="liquid-glass rounded-2xl px-6 py-4">
                  <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-transparent text-white placeholder:text-white/30 text-sm outline-none"
                  />
                </div>

                {/* Email */}
                <div className="liquid-glass rounded-2xl px-6 py-4">
                  <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-transparent text-white placeholder:text-white/30 text-sm outline-none"
                  />
                </div>

                {/* Message */}
                <div className="liquid-glass rounded-2xl px-6 py-4">
                  <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-transparent text-white placeholder:text-white/30 text-sm outline-none resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={state === 'loading'}
                  className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-medium flex items-center justify-center gap-3 hover:bg-white/5 transition-colors disabled:opacity-50"
                  whileHover={{ scale: state === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: state === 'loading' ? 1 : 0.98 }}
                >
                  {state === 'loading' ? 'Sending…' : 'Send message'}
                  <span className="bg-white rounded-full p-2 text-black">
                    <ArrowRight size={16} />
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right: contact info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Direct contact */}
            <div className="liquid-glass rounded-3xl p-8 flex flex-col gap-6">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                Direct contact
              </p>

              <a
                href="mailto:contact@elettrocom"
                className="flex items-center gap-4 group"
              >
                <div className="liquid-glass rounded-full p-3">
                  <Mail size={18} className="text-white/70" />
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Email</p>
                  <p className="text-white text-sm group-hover:text-white/70 transition-colors">
                    contact@elettrocom
                  </p>
                </div>
              </a>

              <a
                href="tel:3104086687"
                className="flex items-center gap-4 group"
              >
                <div className="liquid-glass rounded-full p-3">
                  <Phone size={18} className="text-white/70" />
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Phone</p>
                  <p className="text-white text-sm group-hover:text-white/70 transition-colors">
                    310.408.6687
                  </p>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="liquid-glass rounded-3xl p-8 flex flex-col gap-6">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                Follow along
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="liquid-glass rounded-full p-4 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="liquid-glass rounded-full p-4 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://elettro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="liquid-glass rounded-full p-4 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>

            {/* Tagline card */}
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Based in South Florida
              </p>
              <p
                className="text-white/70 text-lg md:text-xl leading-snug"
                style={FONT}
              >
                "We design. We brand.{' '}
                <em className="italic text-white/40">We produce.</em>"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer strip */}
        <motion.div
          className="mt-20 md:mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src="https://raw.githubusercontent.com/elettro/elettro/main/images/Elettro-logo-white.png"
            alt="Elettro"
            className="h-5 w-auto opacity-60"
          />
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Elettro. All rights reserved.
          </p>
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="text-white/30 hover:text-white text-xs transition-colors"
          >
            Back to top ↑
          </a>
        </motion.div>
      </div>
    </section>
  )
}
