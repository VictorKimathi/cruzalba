import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { FAQ } from "@/components/faq"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0F1112] pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Work Together</h1>
          <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
            Ready to bring your home & lifestyle content to life? Get in touch to discuss your next project.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
        <FAQ />
      </div>
    </main>
  )
}
