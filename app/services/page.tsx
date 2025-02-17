import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import ServiceCategories from "@/components/service-categories"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Ambient background with moving particles */}
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
        <ServiceCategories />
      </div>
    </main>
  )
}

