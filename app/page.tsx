'use client'

import { Navbar } from '@/components/header/Navbar'
import { Hero } from '@/components/header/Hero'
import { About } from '@/components/sections/About'
import { Membership } from '@/components/sections/Membership'
import { Testimonials } from '@/components/sections/Testimonials'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { FAQ } from '@/components/sections/FAQ'
import { BookingModal } from '@/components/booking/BookingModal'
import { Footer } from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Membership />
      <Testimonials />
      <BeforeAfter />
      <FAQ />
      <Footer />
      <BookingModal />
    </main>
  )
}
