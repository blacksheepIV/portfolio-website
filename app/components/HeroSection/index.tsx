'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
  const animationSequence: Array<string | number> = [
    'Foroogh',
    1100,
    'A Frontend Developer',
  ]
  const router = useRouter()
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })

      // Update the URL without reloading the page
      router.push(`#${sectionId}`, undefined)
    }
  }
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 grid-flow-dense">
        <div className="col-span-7 place-self-center text-center sm:text-left animate-emerge">
          <h1 className="text-white text-4xl sm:text-5l lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600 ">
              Howdy, I&apos;m
            </span>
            <br />
            <div className="h-[100px] lg:h-[250px] pt-5">
              <TypeAnimation
                sequence={animationSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Hailing from the vibrant city of Istanbul, Turkey. With more than 5
            years of coding under my belt, I&apos;m all about bringing web
            interfaces to life! Reach out if you&apos;d like to know more!
          </p>
          <div>
            <button
              className="text-white rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1"
              onClick={() => scrollToSection('contact')}
            >
              <span className="block rounded-full bg-[#121212] hover:bg-slate-800 px-6 py-3">
                Contact me
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 animate-emerge">
          <div className="rounded-full shadow-custom w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-white">
            <Image
              src="/images/hero-image.png"
              alt="Hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
