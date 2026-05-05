'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { testimonials } from '@/lib/mockData'

export function Testimonials() {
  const { ref, inView } = useScrollAnimation()
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

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
    <section className="py-16 sm:py-24 bg-linen-gradient px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
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
              What Our Patients Say
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-charcoal max-w-2xl mx-auto"
            >
              Real stories from real patients
            </motion.p>
          </div>

          {/* Testimonial Carousel */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="relative bg-white p-8 sm:p-12 lg:p-16 rounded-xl shadow-premium border border-border hover:shadow-md transition-shadow"
          >
            {/* Testimonial Content */}
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote with decorative quotation marks */}
              <div className="mb-8">
                <span className="text-6xl text-charcoal/20 font-serif">"</span>
                <p className="text-lg sm:text-xl text-charcoal font-medium leading-relaxed px-4 sm:px-8 -mt-8">
                  {testimonials[current].quote}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-8">
                <p className="font-semibold text-charcoal text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-charcoal text-sm mt-1">
                  {testimonials[current].title}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-6 mt-12">
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="p-3 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              {/* Dots */}
              <div className="flex gap-3 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all rounded-full ${
                      i === current 
                        ? 'bg-primary w-8 h-2' 
                        : 'bg-charcoal/20 w-2 h-2 hover:bg-charcoal/40'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrent((prev) => (prev + 1) % testimonials.length)
                }
                className="p-3 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
