import HeroSection from "@/components/HeroSection"
import ProjectShowcase from "@/components/ProjectShowcase"
import AboutMe from "@/components/AboutMe"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import StickyNavbar from "@/components/StickyNavbar"

export default function Home() {
  return (
    <main>
     <HeroSection/>
     <StickyNavbar/>
     <ProjectShowcase/>
     <AboutMe/>
     <ContactSection/>
     <Footer/>
    </main>
  )

}
