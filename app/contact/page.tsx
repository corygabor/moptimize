import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import ContactForm from "./contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8A7FFF"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                
                
              </div>
              <div className="backdrop-blur-sm bg-black/20 rounded-lg overflow-hidden border border-white/10 p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
