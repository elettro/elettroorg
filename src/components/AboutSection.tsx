import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FONT = { fontFamily: "'Instrument Serif', serif" }

const credentials = [
  {
    value: '2011',
    label: 'Founded',
    detail: 'Elettro — full-service creative & digital production agency',
  },
  {
    value: '25+',
    label: 'Years',
    detail: 'Digital innovation, creative production & marketing strategy',
  },
  {
    value: '3',
    label: 'Ventures',
    detail: 'Elettro · Stashbox (music distribution) · Don Pablo Coffee AI',
  },
  {
    value: '∞',
    label: 'Scope',
    detail: 'Web · Video · AI · Audio · Brand · SEO · Strategy',
  },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
    >
      <div className="bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] max-w-6xl mx-auto">

        {/* Label */}
        <motion.p
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.p>

        {/* Section heading */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-20 md:mb-28"
          style={FONT}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Pioneering{' '}
          <em className="italic text-white/60">digital experiences</em> for
          <br className="hidden md:block" />
          {' '}brands that{' '}
          <em className="italic text-white/60">dare to move.</em>
        </motion.h2>

        {/* Dean Palermo — main bio block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-24">

          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-3">
              Founder & Executive Producer
            </p>
            <h3
              className="text-3xl md:text-4xl text-white mb-5 leading-tight"
              style={FONT}
            >
              Dean Palermo
            </h3>
            <div className="w-12 h-px bg-white/20 mb-7" />
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-6">
              With 25+ years at the intersection of creative vision and technical
              execution, Dean founded Elettro in 2011 — a studio where cinematic
              storytelling and digital strategy coexist without compromise.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              From enterprise software and digital TV/film production to senior
              roles at major agencies, Dean's career led to one conclusion: the
              best brands are built where code meets cinema. Elettro is that place.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Beyond Elettro, Dean founded Stashbox — a music production and global
              distribution venture that grew its YouTube channel from 115 to 6,500+
              subscribers in under 6 months while distributing 170+ original songs
              worldwide. He also leads AI strategy at Don Pablo Coffee.
            </p>
          </motion.div>

          {/* Right: credentials grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {credentials.map((item, i) => (
              <motion.div
                key={item.label}
                className="liquid-glass rounded-2xl p-6 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.1 }}
              >
                <span
                  className="text-4xl text-white leading-none"
                  style={FONT}
                >
                  {item.value}
                </span>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Expertise strip */}
        <motion.div
          className="liquid-glass rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/40 text-xs tracking-widest uppercase mb-6">
            Core expertise
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'AI Production',
              'Web Development',
              'SEO & AI Schema',
              'Video Content',
              'Motion Graphics',
              'Social Strategy',
              'Music Production',
              'Brand Systems',
              'Google Ads',
              'Creative Direction',
            ].map((skill) => (
              <span
                key={skill}
                className="liquid-glass rounded-full px-5 py-2 text-white/70 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
