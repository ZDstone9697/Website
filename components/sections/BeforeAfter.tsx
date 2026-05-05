'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useBookingModal } from '@/hooks/useBookingModal'
import Image from 'next/image'

const beforeAfterPairs = [
  { 
    id: 1, 
    before: '/images/before-smile-1.jpg', 
    after: '/images/after-smile-1.jpg', 
    label: 'Smile Transformation',
    beforeLabel: 'Before',
    afterLabel: 'After'
  },
  { 
    id: 2, 
    before: '/images/before-smile-2.jpg', 
    after: '/images/after-smile-2.jpg', 
    label: 'Teeth Whitening',
    beforeLabel: 'Before',
    afterLabel: 'After'
  },
  { 
    id: 3, 
    before: '/images/before-smile-3.jpg', 
    after: '/images/after-smile-3.jpg', 
    label: 'Alignment Fix',
    beforeLabel: 'Before',
    afterLabel: 'After'
  },
]

export function BeforeAfter() {
  const { ref, inView } = useScrollAnimation()
  const [current, setCurrent] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const { openModal } = useBookingModal()

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const nextPair = () => {
    setCurrent((prev) => (prev + 1) % beforeAfterPairs.length)
    setSliderPosition(50)
  }

  const prevPair = () => {
    setCurrent((prev) =>
      prev === 0 ? beforeAfterPairs.length - 1 : prev - 1
    )
    setSliderPosition(50)
  }

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
      id="results"
      ref={ref}
      className="py-16 sm:py-24 bg-[#121212] px-4 sm:px-6 lg:px-8"
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
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              See the Lumina Difference
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Real results from real patients
            </motion.p>
          </div>

          {/* Before/After Slider */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-3xl mx-auto mb-12"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-square sm:aspect-video bg-charcoal rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              {/* Before Image */}
              <Image
                src={beforeAfterPairs[current].before}
                alt={`Before - ${beforeAfterPairs[current].label}`}
                fill
                className="object-cover w-full h-full"
                priority
              />

              {/* After Image Overlay */}
              <div
                className="absolute inset-0 overflow-hidden transition-all duration-75"
                style={{ width: `${100 - sliderPosition}%` }}
              >
                <Image
                  src={beforeAfterPairs[current].after}
                  alt={`After - ${beforeAfterPairs[current].label}`}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Before/After Labels */}
              <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur px-4 py-2 rounded-lg">
                <p className="text-white text-sm font-semibold">
                  {sliderPosition > 50 ? beforeAfterPairs[current].beforeLabel : beforeAfterPairs[current].afterLabel}
                </p>
              </div>

              {/* Slider Handle - Coral Glow */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize transition-all"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-[0_0_20px_rgba(255,111,97,0.8)] flex items-center justify-center border-2 border-white/30 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,111,97,1.0)] transition-all">
                  <div className="flex gap-1.5">
                    <ChevronLeft className="w-5 h-5 text-white" />
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Input Range (invisible, full size) */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                aria-label="Before and after slider"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 px-4">
              <button
                onClick={prevPair}
                className="p-3 hover:bg-white/10 rounded-full transition-all duration-200"
                aria-label="Previous before/after pair"
              >
                <ChevronLeft className="w-6 h-6 text-primary hover:text-white transition-colors" />
              </button>

              {/* Pair Indicators */}
              <div className="flex gap-3">
                {beforeAfterPairs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent(i)
                      setSliderPosition(50)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      i === current 
                        ? 'bg-primary w-8 h-2 shadow-[0_0_15px_rgba(255,111,97,0.6)]' 
                        : 'bg-white/30 w-2 h-2 hover:bg-white/60'
                    }`}
                    aria-label={`Go to pair ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPair}
                className="p-3 hover:bg-white/10 rounded-full transition-all duration-200"
                aria-label="Next before/after pair"
              >
                <ChevronRight className="w-6 h-6 text-primary hover:text-white transition-colors" />
              </button>
            </div>

            {/* Case Label */}
            <div className="text-center mt-6">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
                {beforeAfterPairs[current].label}
              </p>
            </div>

            {/* CTA Overlay Button */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <Button
                onClick={openModal}
                className="btn-coral-premium px-8 py-6 text-lg rounded-lg font-semibold"
              >
                See What&apos;s Possible
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
