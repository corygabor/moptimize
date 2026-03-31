import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Reviews from "@/components/reviews"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
    </main>
  )
}
