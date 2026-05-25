import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const FONT = { fontFamily: "'Instrument Serif', serif" }

interface Project {
  client: string
  title: string
  tags: string[]
  description: string
  image: string | null
  gradient?: string
  href: string
  featured?: boolean
}

const projects: Project[] = [
  {
    client: 'City of West Palm Beach, FL',
    title: 'VisitWPB.org',
    tags: ['Web Development', 'SEO', 'AI Schema'],
    description:
      'Full digital presence for the City of West Palm Beach — built for tourism, optimized for search, and structured for AI-era discovery.',
    image: 'https://dl.dropboxusercontent.com/scl/fi/vbfu37o22w6gxdzpobob5/visit-west-palm-beach-web-development-case-study.png?rlkey=bajq2ezs5xxrowojlfwvt39la&st=uyguq8uj',
    href: 'https://visitwpb.org',
    featured: true,
  },
  {
    client: 'Cassie Magrath',
    title: 'Actor Press Site',
    tags: ['Web Design', 'Branding'],
    description:
      'Actress press site with reel, credits, and editorial imagery — designed to stop casting directors mid-scroll.',
    image: 'https://dl.dropboxusercontent.com/scl/fi/f2opg7u92oa7z750ru471/cassie-magrath-portfolio-web-development-case-study.png?rlkey=qyadzst3ti4xj22njw1l6cxr2&st=olepzdt7',
    href: 'https://cassiemagrath.com',
  },
  {
    client: 'Jon Phillips / Silverback Management',
    title: 'Festival Concert LED Video',
    tags: ['Video Production', 'Motion Graphics'],
    description:
      'Stadium-scale LED visuals and full motion graphics package for festival live performance.',
    image: 'https://img.youtube.com/vi/twa-yI5loAQ/maxresdefault.jpg',
    href: 'https://youtu.be/twa-yI5loAQ',
  },
  {
    client: 'Stashbox',
    title: 'YouTube Growth & Music Distribution',
    tags: ['Video Production', 'Graphics', 'Tech'],
    description:
      '115 → 6,500+ subscribers in under 6 months. 170+ original songs distributed globally across all major platforms.',
    image: 'https://raw.githubusercontent.com/elettro/elettro/main/images/Stashbox-Does-Dylan-Artwork-Distrokid-1024x1024-FINAL.jpg',
    href: 'https://stashbox.com',
  },
  {
    client: 'Nadja Atwal',
    title: 'NadjaAtwal.net',
    tags: ['Web Design', 'Branding'],
    description:
      'Editorial site for podcaster and PR specialist — personal brand meets portfolio platform.',
    image: 'https://nadjaatwal.net/images/nadja-wallstreet.jpg',
    href: 'https://nadjaatwal.net',
  },
  {
    client: 'Pink Palm Puff',
    title: 'E-Commerce Product Video',
    tags: ['Video Production', 'E-Commerce'],
    description:
      'High-conversion product video from product photography for a premium fashion brand.',
    image: 'https://img.youtube.com/vi/ATbfh4fptQI/maxresdefault.jpg',
    href: 'https://youtu.be/ATbfh4fptQI',
  },
  {
    client: 'LongPole4Life',
    title: 'Non-Profit Awareness Platform',
    tags: ['Web Design', 'Non-Profit'],
    description:
      'Awareness and donation platform for a lacrosse-based non-profit — clean, mission-first, conversion-focused.',
    image: 'https://dl.dropboxusercontent.com/scl/fi/0phqumexybp90xautsf54/longpole-4-life-nonprofit-web-development-case-study.png?rlkey=u7bqsglk4d0l2dpwk7jwwj5fy&st=5drfou4e',
    href: 'https://longpole4life.com',
  },
  {
    client: "Florida's #1 Sand Sculpturist",
    title: 'Artist Promo Video',
    tags: ['Video Production', 'Arts & Culture'],
    description:
      'Artist promo shot on the Florida coastline — craft, personality, and the spectacle of sand sculpture on camera.',
    image: 'https://img.youtube.com/vi/Qub62f2kJCc/maxresdefault.jpg',
    href: 'https://youtu.be/Qub62f2kJCc',
  },
  {
    client: 'The Blue Card Fund',
    title: 'Message That Matters',
    tags: ['Web Design', 'Non-Profit'],
    description:
      'Digital platform for a foundation supporting Holocaust survivors — purposeful design in service of a mission that matters.',
    image: 'https://dl.dropboxusercontent.com/scl/fi/5puek6bk1k2cusuisbyr9/blue-card-fund-message-that-matters-case-study.png?rlkey=n8licq9tu74o6777rufgahzxl&st=poep5m5s',
    href: 'https://bluecardfund.org',
  },
  {
    client: 'Seascape Resort & Marina',
    title: 'Brand · Web · Video',
    tags: ['Branding', 'Web Development', 'Video'],
    description:
      'Complete brand overhaul and digital buildout for a Florida waterfront resort and marina.',
    image: 'https://dl.dropboxusercontent.com/scl/fi/cxxfdl8a80af34hz96xct/seascape-resort-marina-web-development-case-study.png?rlkey=pmn2ssxxh73v9yz32k01hki0v&st=dquarzxo',
    href: 'https://elettro.github.io/seascaperesortmarina',
  },

  {
    client: 'WeightLossDavie.com',
    title: 'Website Redesign',
    tags: ['Web Design', 'Healthcare'],
    description:
      'Modern website redesign for a South Florida medical weight loss practice — clean, conversion-focused, mobile-first.',
    image: 'https://dl.dropboxusercontent.com/scl/fi/mwgdoa2xb40xo67ag9sfp/weight-loss-davie-web-development-case-study.png?rlkey=4k7392mprmns8lyjwb0r4vl9v&st=ufqu0qtx',
    href: 'https://weightlossdavie.com',
  },
]

function ProjectCard({
  project,
  delay,
  featured,
}: {
  project: Project
  delay: number
  featured?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`liquid-glass rounded-3xl overflow-hidden group block ${featured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {/* Image / gradient area */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/7]' : 'aspect-video'}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            style={{ background: project.gradient }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Tags floating on image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass rounded-full px-3 py-1 text-white/70 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 md:p-8 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
            {project.client}
          </p>
          <h3
            className={`text-white tracking-tight mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}
            style={FONT}
          >
            {project.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
        </div>

        <div className="liquid-glass rounded-full p-2 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>
    </motion.a>
  )
}

export default function WorkSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' })

  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="work" className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef}>
          <motion.p
            className="text-white/40 text-sm tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.p>
          <motion.div
            className="flex items-end justify-between mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]"
              style={FONT}
            >
              Work that{' '}
              <em className="italic text-white/60">moves.</em>
            </h2>
            <a
              href="https://elettro.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
            >
              Full portfolio
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Featured card */}
        <div className="mb-6 md:mb-8">
          <ProjectCard project={featured} delay={0} featured />
        </div>

        {/* Grid: remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rest.map((project, i) => (
            <ProjectCard key={project.href} project={project} delay={i * 0.08} />
          ))}
        </div>

        {/* Full portfolio CTA */}
        <motion.div
          className="flex justify-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.a
            href="https://elettro.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-10 py-4 text-white text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View full portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
