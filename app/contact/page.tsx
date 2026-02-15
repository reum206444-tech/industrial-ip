// app/contact/page.tsx
import ContactForm from './ContactForm'

export const dynamic = 'force-dynamic'

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { ip?: string }
}) {
  const presetIP = typeof searchParams?.ip === 'string' ? searchParams.ip : ''
  return <ContactForm presetIP={presetIP} />
}