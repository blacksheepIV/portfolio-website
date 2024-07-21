import { EmailTemplate } from '@/app/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail: string = process.env.FROM_EMAIL as string
export async function POST() {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['foroogh.fallahfar@gmail.com'],
      subject: 'Contact Request',
      react: EmailTemplate({ firstName: 'John' }),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
