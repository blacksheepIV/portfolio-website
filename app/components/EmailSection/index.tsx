'use client'
import { useState, FormEvent } from 'react'
import Link from 'next/link'

import { Github } from '@/app/components/Icons/index'
import { Linkedin } from '@/app/components/Icons/index'
import { Stackoverflow } from '@/app/components/Icons/index'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, subject, message } = e.currentTarget

    const data = {
      email: email.value,
      subject: subject.value,
      message: message.value,
    }
    const JSONdata: string = JSON.stringify(data)

    const endpoint = '/api/send'

    const options = {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    //const resData = await response.json()

    if (response.status === 200) {
      setEmailSubmitted(true)
    }
  }

  return (
    <section
      className="grid md:grid-cols-2 my-4 md:my-12  py-2 md:py-24 gap-4"
      id="contact"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row align-middle gap-3">
          <Link
            href="https://github.com/blacksheepIV"
            target="_blank"
            className="transition-all hover:scale-150"
          >
            <Github
              width={50}
              height={50}
              color="white"
              className="hover:fill-indigo-700"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/foroogh-fallahfar/"
            target="_blank"
            className="transition-all hover:scale-150"
          >
            <Linkedin
              width={50}
              height={50}
              color="white"
              className="hover:fill-indigo-700"
            />
          </Link>

          <Link
            href="https://stackoverflow.com/users/1932617/blacksheep"
            target="_blank"
            className="transition-all hover:scale-150"
          >
            <Stackoverflow
              width={50}
              height={50}
              color="white"
              className="hover:fill-indigo-700"
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="blahblah@blah..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's Connect!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500  hover:bg-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default EmailSection
