'use client'

const Footer = () => {
  const messages = [
    'This portfolio was inspired by a video on YouTube ¯\\_ʘᗜʘ_/¯',
    'It was made under the heavy influence of lofi music and coffee and indefinite amount of summertime sadness. ╥﹏╥',
    'The cat shown in the photos resembles my own cat Zakaria =^._.^=  ',
    'They say Devin is going to take my place ༼☯﹏☯༽',
    'But untill then, please hire me! (❁´◡`❁)',
  ]
  return (
    <footer className="footer w-screen border border-t-[#33353f] border-b-transparent border-l-transparent flex flex-col justify-start align-middle overflow-hidden">
      <div className="container flex gap-16 py-4 animate-scroll">
        {messages.map(message => (
          <div className="whitespace-nowrap">{message}</div>
        ))}
      </div>
    </footer>
  )
}
export default Footer
