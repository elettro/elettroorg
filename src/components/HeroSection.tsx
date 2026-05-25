import { useRef, useCallback, useState } from 'react'
import { ArrowRight, Instagram, Twitter, Globe } from 'lucide-react'

const ELETTRO_LOGO = 'https://raw.githubusercontent.com/elettro/elettro/main/images/Elettro-logo-white.png'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

const FONT = { fontFamily: "'Instrument Serif', serif" }

export default function HeroSection({ onEmailCapture }: { onEmailCapture?: (email: string) => void }) {
  const [email, setEmail] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const isFadingOut = useRef(false)

  const animateOpacity = useCallback(
    (el: HTMLVideoElement, from: number, to: number, duration: number, onDone?: () => void) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        el.style.opacity = String(from + (to - from) * t)
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          rafRef.current = null
          onDone?.()
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    },
    [],
  )

  const handleCanPlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    isFadingOut.current = false
    v.play().then(() => animateOpacity(v, 0, 1, 500))
  }, [animateOpacity])

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current
    if (!v || !v.duration || isFadingOut.current) return
    const remaining = v.duration - v.currentTime
    if (remaining <= 0.55) {
      isFadingOut.current = true
      const current = parseFloat(v.style.opacity) || 1
      animateOpacity(v, current, 0, 500)
    }
  }, [animateOpacity])

  const handleEnded = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    isFadingOut.current = false
    v.style.opacity = '0'
    setTimeout(() => {
      v.currentTime = 0
      v.play().then(() => animateOpacity(v, 0, 1, 500))
    }, 100)
  }, [animateOpacity])

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col">
      {/* Background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={ELETTRO_LOGO}
              alt="Elettro"
              className="h-7 w-auto object-contain"
            />
            <div className="hidden md:flex items-center gap-8 ml-10">
              {['Work', 'Services', 'About'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="hidden sm:block text-white text-sm font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#contact"
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight mb-10 leading-tight overflow-wrap-anywhere min-w-0"
          style={{ ...FONT, overflowWrap: 'anywhere' }}
        >
          Design. Brand.{' '}
          <em className="italic">Produce.</em>
        </h1>

        {/* Email / contact input */}
        <div className="max-w-xl w-full mb-6">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email to connect"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm outline-none min-w-0"
            />
            <button
              onClick={() => {
                onEmailCapture?.(email)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors flex-shrink-0"
              aria-label="Scroll to contact"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <p className="text-white/70 text-sm leading-relaxed px-4 max-w-md mb-8">
          Cinematic storytelling meets high-performance code. 20+ years building
          digital presences that move people and reshape industries.
        </p>

        <a
          href="#work"
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          View Our Work
        </a>
      </div>

      {/* Social footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://elettro.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Website"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe size={20} />
        </a>
      </div>
    </section>
  )
}
