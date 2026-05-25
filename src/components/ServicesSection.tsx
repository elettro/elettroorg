import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import LazyVideo from './LazyVideo'

const FONT = { fontFamily: "'Instrument Serif', serif" }

const services = [
  {
    tag: 'Digital',
    title: 'Web Design & Development',
    description:
      'High-performance digital experiences built with motion design — intentional, asymmetric, and crafted to move beyond the template into full brand narrative.',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
  {
    tag: 'Cinematic',
    title: 'Video & Motion Production',
    description:
      'Cinematic storytelling and motion graphics that capture your brand voice — from concept to delivery, obsessing over every frame to create content that resonates.',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div
        className="max-w-6xl mx-auto bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl md:text-5xl text-white tracking-tight"
            style={FONT}
          >
            What we do
          </h2>
          <p className="text-white/40 text-sm hidden md:block">Our services</p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {/* Video thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                <LazyVideo
                  src={service.video}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/40 text-xs tracking-widest uppercase">
                    {service.tag}
                  </span>
                  <div className="liquid-glass rounded-full p-2">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
                <h3
                  className="text-white text-xl md:text-2xl mb-3 tracking-tight"
                  style={FONT}
                >
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services strip */}
        <motion.div
          className="liquid-glass rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white/40 text-xs tracking-widest uppercase mb-6">
            Also in our toolkit
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { tag: 'Intelligence', title: 'AI Production & Prompting' },
              { tag: 'Sound', title: 'Music & Audio' },
              { tag: 'Identity', title: 'Graphic Design & Brand' },
              { tag: 'Growth', title: 'SEO & Google Ads' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <p className="text-white/30 text-xs tracking-widest uppercase">
                  {item.tag}
                </p>
                <p className="text-white/70 text-sm leading-snug">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
