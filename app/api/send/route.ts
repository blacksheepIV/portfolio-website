import { EmailTemplate } from '@/app/components/EmailTemplate'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail: string = process.env.FROM_EMAIL as string

export async function POST(req: Request) {
  const data = await req.json()
  const { email, message, subject } = data

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['foroogh.fallahfar@gmail.com'],
      subject: subject,
      react: EmailTemplate({ email, message }),
    })

    return NextResponse.json(
      { message: 'Data received successfully' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    )
  }
}
