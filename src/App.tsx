import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import PhilosophySection from './components/PhilosophySection'
import ServicesSection from './components/ServicesSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </main>
  )
}
