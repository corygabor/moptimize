"use client"

import dynamic from "next/dynamic"

const Calendly = dynamic(() => import("@/components/calendly"), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading calendar...</p>,
})

export default function CalendlyWrapper() {
  return <Calendly />
}
