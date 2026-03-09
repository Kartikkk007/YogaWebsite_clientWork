import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ProgramsSection from '../components/sections/ProgramsSection'
import ScheduleSection from '../components/sections/ScheduleSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ScheduleSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
