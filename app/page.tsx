import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Reviews from "@/components/reviews"
import AgentCTA from "@/components/agent-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AgentCTA />
      <Services />
      <Reviews />
    </main>
  )
}
