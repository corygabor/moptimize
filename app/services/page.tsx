import Navbar from "@/components/navbar"
import ServiceCategories from "@/components/service-categories"

export const metadata = {
  title: "Services - Moptimize",
  description: "AI agents for MOps, platform migrations, data enrichment pipelines, and campaign automation. Technical marketing operations built for modern GTM teams.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceCategories />
    </main>
  )
}

