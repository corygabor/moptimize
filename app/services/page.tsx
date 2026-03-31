import Navbar from "@/components/navbar"
import ServiceCategories from "@/components/service-categories"

export const metadata = {
  title: "Services - Moptimize",
  description: "Marketing operations services: foundation setup, GTM operations, and AI-first operations to streamline your go-to-market strategy.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceCategories />
    </main>
  )
}

