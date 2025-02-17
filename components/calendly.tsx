"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"

const CalendlyWidget = dynamic(() => import("react-calendly").then((mod) => mod.InlineWidget), { ssr: false })

export default function Calendly() {
  useEffect(() => {
    // This effect will only run on the client side
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div style={{ height: "700px" }}>
      <CalendlyWidget
        url="https://calendly.com/moptimize/30min"
        styles={{
          height: "100%",
          backgroundColor: "transparent",
        }}
      />
    </div>
  )
}

