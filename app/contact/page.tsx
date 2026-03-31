import Navbar from "@/components/navbar"
import ContactForm from "./contact-form"

export const metadata = {
  title: "Contact - Moptimize",
  description: "Get in touch to discuss how we can optimize your marketing operations and GTM strategy.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-white mb-8">Get in Touch</h1>
            <div className="backdrop-blur-sm bg-black/20 rounded-lg overflow-hidden border border-white/10 p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
