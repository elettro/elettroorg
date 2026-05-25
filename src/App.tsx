import { useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import PhilosophySection from './components/PhilosophySection'
import ServicesSection from './components/ServicesSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'

export default function App() {
  const [heroEmail, setHeroEmail] = useState('')

  return (
    <main className="bg-black">
      <HeroSection onEmailCapture={setHeroEmail} />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <WorkSection />
      <ContactSection initialEmail={heroEmail} />
    </main>
  )
}
