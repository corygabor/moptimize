"use client"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tUOCR1b8iA5p0Lw8HovwpgUeqwsYrZ.png"
                alt="Moptimize Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted partner in optimizing operations and driving a seamless go-to-market strategy.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/subscriptions" className="text-gray-400 hover:text-[#8A7FFF] transition-colors">
                  Subscriptions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/subscriptions" className="text-gray-400 hover:text-[#8A7FFF] transition-colors">
                  Foundation Setup
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className="text-gray-400 hover:text-[#8A7FFF] transition-colors">
                  GTM Operations
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className="text-gray-400 hover:text-[#8A7FFF] transition-colors">
                  AI-First Operations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:cory@moptimize.agency" className="hover:text-[#8A7FFF] transition-colors">
                  cory@moptimize.agency
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Moptimize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
