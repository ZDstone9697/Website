'use client'

import { useBookingModal } from '@/hooks/useBookingModal'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const { openModal } = useBookingModal()
  const { ref, inView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      ref={ref}
      className="relative min-h-[600px] sm:min-h-screen flex items-center justify-center bg-[#121212] overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-white mb-4 leading-tight"
        >
          Premium Dental Care That Feels Like Art
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/80 mb-8 text-balance max-w-2xl mx-auto"
        >
          15-minute guarantee. No insurance hassles. Lumina results.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={openModal}
            className="btn-coral-premium px-8 py-6 text-lg w-full sm:w-auto"
          >
            Schedule Your First Visit Today
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
