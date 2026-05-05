'use client'

import { useBookingModal } from '@/hooks/useBookingModal'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openModal } = useBookingModal()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-lg font-bold text-charcoal hidden sm:inline">
              Lumina Dental
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-charcoal hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#membership"
              className="text-sm font-medium text-charcoal hover:text-primary transition-colors"
            >
              Membership
            </a>
            <a
              href="#results"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Results
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <Button
            onClick={openModal}
            className="hidden sm:inline-flex btn-coral-premium rounded-lg py-2 px-6"
          >
            Book My Visit
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#about"
                className="text-sm font-medium text-charcoal hover:text-primary transition-colors px-0"
              >
                About
              </a>
              <a
                href="#membership"
                className="text-sm font-medium text-charcoal hover:text-primary transition-colors px-0"
              >
                Membership
              </a>
              <a
                href="#results"
                className="text-sm font-medium text-charcoal hover:text-primary transition-colors px-0"
              >
                Results
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-charcoal hover:text-primary transition-colors px-0"
              >
                FAQ
              </a>
              <Button
                onClick={() => {
                  openModal()
                  setMobileMenuOpen(false)
                }}
                className="w-full btn-coral-premium rounded-lg"
              >
                Book My Visit
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
