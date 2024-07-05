import { EmailTemplate } from '@/app/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Four <foroogh.fallahfar@gmail.com>',
      to: ['foroogh.fallahfar+website@gmail.com'],
      subject: 'Contact Request',
      react: EmailTemplate({ firstName: 'John' }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
