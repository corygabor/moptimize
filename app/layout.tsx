import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SparklesCore } from "@/components/sparkles"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moptimize - Marketing Operations as a Service",
  description: "Your trusted partner in optimizing operations and driving a seamless go-to-market strategy.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ApmqmYS9jHkMKohCdmt6yV4hMWEyPt.png",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black/[0.96] antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          <div className="fixed inset-0 z-0">
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
          <div className="relative z-10 bg-grid-white/[0.02] flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'