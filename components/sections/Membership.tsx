'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useBookingModal } from '@/hooks/useBookingModal'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { membership } from '@/lib/mockData'

export function Membership() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="membership"
      ref={ref}
      className="py-16 sm:py-24 bg-[#121212] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={cardVariants}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Choose Your Membership
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Flexible plans designed for your smile&apos;s unique needs
            </motion.p>
          </div>

          {/* Membership Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {membership.map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`relative rounded-xl transition-all duration-300 overflow-hidden ${
                  plan.mostPopular
                    ? 'md:scale-105 bg-white border-2 border-primary shadow-xl'
                    : 'bg-white/95 border border-white/20 hover:border-primary hover:bg-white'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.mostPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-charcoal">
                      {plan.price}
                    </span>
                    <span className="text-charcoal/70 text-sm ml-2">/month</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA - at bottom */}
                  <Button
                    onClick={openModal}
                    className={`w-full py-6 rounded-lg font-semibold transition-all ${
                      plan.mostPopular
                        ? 'btn-coral-premium'
                        : 'bg-charcoal hover:bg-primary text-white hover:text-white hover:border-primary'
                    }`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center"
          >
            <p className="text-white/80 mb-6">
              Ready to invest in your smile?
            </p>
            <Button
              onClick={openModal}
              className="btn-coral-premium px-8 py-6 text-lg"
            >
              Book Your Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
