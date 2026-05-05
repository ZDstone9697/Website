'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useBookingModal } from '@/hooks/useBookingModal'
import { motion } from 'framer-motion'
import { Star, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { drBio } from '@/lib/mockData'
import Image from 'next/image'

export function About() {
  const { ref, inView } = useScrollAnimation()
  const { openModal } = useBookingModal()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-24 bg-linen-gradient px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
            >
              Meet Dr. Aris Thorne
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-charcoal max-w-2xl mx-auto"
            >
              15 years of transforming smiles with precision and artistry
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Bio */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-charcoal mb-2">
                  {drBio.name}
                </h3>
                <p className="text-primary font-semibold text-lg mb-6">
                  {drBio.credentials}
                </p>
                <p className="text-charcoal text-lg leading-relaxed">
                  {drBio.bio}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="font-semibold text-charcoal mb-4 text-sm uppercase tracking-wide">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-3">
                  {drBio.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-4 py-2 bg-white border border-border text-charcoal text-sm rounded-full hover:border-primary transition-colors"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-lg border border-border hover:border-primary transition-colors">
                  <Users className="w-6 h-6 text-primary mb-3" />
                  <p className="text-3xl font-bold text-charcoal">
                    {drBio.patients.toLocaleString()}+
                  </p>
                  <p className="text-sm text-charcoal mt-1">Happy Patients</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border hover:border-primary transition-colors">
                  <Award className="w-6 h-6 text-primary mb-3" />
                  <p className="text-3xl font-bold text-charcoal">
                    {drBio.experience}
                  </p>
                  <p className="text-sm text-charcoal mt-1">Experience</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <Button
                  onClick={openModal}
                  className="btn-coral-premium px-8 py-6 text-lg w-full sm:w-auto rounded-lg font-semibold"
                >
                  Schedule Your Visit
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Image & Trust */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Doctor Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Dr. Aris Thorne"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Rating Card */}
              <div className="bg-white p-8 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-charcoal">
                    {drBio.rating}
                  </span>
                </div>
                <p className="text-charcoal font-semibold mb-2">
                  Based on 200+ verified reviews
                </p>
                <p className="text-charcoal">
                  Highly rated for precision, comfort, and exceptional results.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3">
                {[
                  '15-Year Expert',
                  'Master of Prosthodontics',
                  'Premium Results Guarantee',
                  '100% Patient Satisfaction'
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 p-4 bg-white border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="font-medium text-charcoal">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
