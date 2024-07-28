'use client'
import { useEffect, useRef } from 'react'
import './footer.css'

const Footer = () => {
  const messages = [
    'This portfolio was inspired by a video on YouTube ¯\\_ʘᗜʘ_/¯',
    'It was made under the heavy influence of lofi music and coffee and indefinite amount of summertime sadness. ╥﹏╥',
    'The cat shown in the photos resembles my own cat Zakaria =^._.^=  ',
    'They say Devin is going to take my place ༼☯﹏☯༽',
    'But untill then, please hire me! (❁´◡`❁)',
  ]
  const subtitleWrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const subtitleWrapperElement = subtitleWrapper.current

    if (subtitleWrapperElement) {
      const newsItemCount = subtitleWrapperElement.childElementCount
      const newsItemWidth =
        (subtitleWrapperElement.firstChild as HTMLElement)?.offsetWidth || 0

      // Calculate total width of all news items
      const totalWidth = newsItemCount * newsItemWidth

      // Set the width of the news-items container
      subtitleWrapperElement.style.width = `${totalWidth}px`

      // Set the animation duration dynamically
      const scrollTime = totalWidth / 100 // Adjust the divisor to control speed

      subtitleWrapperElement.style.setProperty('--scroll-time', `${scrollTime}`)
    }
  }, [])
  return (
    <footer className="footer w-screen border border-t-[#33353f] border-b-transparent border-l-transparent flex flex-col justify-start align-middle overflow-hidden">
      <div
        ref={subtitleWrapper}
        className="subtitle__wrapper container w-screen flex gap-3 md:gap-6 py-4"
      >
        {messages.map((message, index) => (
          <div key={index} className="subtitle__fact whitespace-nowrap">
            {message}
          </div>
        ))}
      </div>
    </footer>
  )
}
export default Footer
