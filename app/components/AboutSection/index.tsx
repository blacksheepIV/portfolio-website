'use client'

import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-1 py-8 items-center sm:py-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 mt-4 md:mt-0">About me</h2>
          <p className="text-base md:text-lg text-left animate-emerge">
            I&apos;ve been doing front-end development for about 5 years now,
            and I&apos;ve dabbled in full-stack stuff for about a year and a
            half on top of that. Basically, I know my way around web development
            pretty well. I&apos;m all about JavaScript, TypeScript, React,
            Next.js, Node.js, MongoDB, Git, HTML, CSS, and SCSS. Although
            I&apos;ve mostly focused on the front-end, I&apos;m also curious
            about the backend side of things. I&apos;m always learning and
            keeping up with what&apos;s new in the tech world. But more than
            just keeping up, I like to think of new ways to make the online
            experience cooler for users. My big goal is to make digital stuff
            that really wows people and keeps them hooked.
          </p>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
