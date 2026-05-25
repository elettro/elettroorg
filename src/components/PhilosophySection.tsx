import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LazyVideo from './LazyVideo'

const PHILOSOPHY_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const FONT = { fontFamily: "'Instrument Serif', serif" }

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
          style={{ ...FONT, overflowWrap: 'anywhere', minWidth: 0 }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Cinema{' '}
          <em className="italic text-white/40">×</em>{' '}
          Strategy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left: video */}
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LazyVideo
              src={PHILOSOPHY_VIDEO}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: text blocks */}
          <motion.div
            className="flex flex-col justify-center gap-10"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                The Vision
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every meaningful brand breakthrough begins at the intersection of
                disciplined strategy and remarkable creative vision. Elettro operates
                at that crossroads — turning bold thinking into tangible outcomes
                that move people and reshape how industries show up online.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                The Method
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                We believe the best work emerges when curiosity meets conviction.
                Our process uncovers hidden opportunities and translates them into
                cinematic digital experiences — from discovery through final
                deliverable, scoped with clear timelines and zero template thinking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
