import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar/index'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black">
      <NavBar />
      <div className="container px-12 py-4 mx-auto mt-20">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
}
