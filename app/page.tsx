import HeroSection from '@/app/components/HeroSection'
import NavBar from '@/app/components/NavBar/index'
import AboutSection from '@/app/components/AboutSection'
import EmailSection from '@/app/components/EmailSection'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black">
      <NavBar />
      <div className="container px-12 py-4 mx-auto mt-20">
        <HeroSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
