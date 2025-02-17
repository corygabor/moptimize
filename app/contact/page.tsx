import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"

const Calendly = dynamic(() => import("@/components/calendly"), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading calendar...</p>,
})

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
              <h1 className="text-3xl font-bold text-center text-white mb-8">Schedule a Call</h1>
              <div
                className="backdrop-blur-sm bg-black/20 rounded-lg overflow-hidden border border-white/10"
                style={{ height: "700px" }}
              >
                <Calendly />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

