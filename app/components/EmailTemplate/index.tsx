import { ReactElement } from 'react'

interface EmailTemplateProps {
  email: string
  message: string
}

export const EmailTemplate = ({
  email,
  message,
}: Readonly<EmailTemplateProps>): ReactElement => (
  <div>
    <h1>Contact Request</h1>
    <p>New message from {email}</p>
    <p>Subject:</p>
    <p>{message}</p>
  </div>
)
