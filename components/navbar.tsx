"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tUOCR1b8iA5p0Lw8HovwpgUeqwsYrZ.png"
          alt="Moptimize Logo"
          width={150}
          height={40}
          className="h-8 w-auto"
        />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/agent">Agent</NavLink>
        <NavLink href="/subscriptions">Subscriptions</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button className="bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white" asChild>
          <Link href="/contact">Work With Us</Link>
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/90 border-white/10">
          <nav className="flex flex-col space-y-4 mt-8">
            <NavLink href="/agent" onClick={toggleMenu}>
              Agent
            </NavLink>
            <NavLink href="/subscriptions" onClick={toggleMenu}>
              Subscriptions
            </NavLink>
            <Button className="bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white w-full" asChild>
              <Link href="/contact" onClick={toggleMenu}>
                Work With Us
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </motion.nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-[#8A7FFF] transition-colors relative group" onClick={onClick}>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8A7FFF] transition-all group-hover:w-full" />
    </Link>
  )
}
