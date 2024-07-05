import { ReactElement } from 'react'

interface EmailTemplateProps {
  firstName: string
}

export const EmailTemplate = ({
  firstName,
}: Readonly<EmailTemplateProps>): ReactElement => (
  <div>
    <h1>Thanks for the message, {firstName}!</h1>
  </div>
)
