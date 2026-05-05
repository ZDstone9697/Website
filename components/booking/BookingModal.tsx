'use client'

import { useBookingModal } from '@/hooks/useBookingModal'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { BookingStep1 } from './BookingStep1'
import { BookingStep2 } from './BookingStep2'
import { BookingStep3 } from './BookingStep3'
import { BookingConfirm } from './BookingConfirm'
import { useState } from 'react'

export function BookingModal() {
  const { isOpen, closeModal, currentStep } = useBookingModal()
  const [isConfirming, setIsConfirming] = useState(false)

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const contentVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 300 } },
    exit: { scale: 0.95, opacity: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closeModal}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors z-10"
              aria-label="Close booking modal"
            >
              <X className="w-6 h-6 text-charcoal" />
            </button>

            {/* Progress Bar */}
            <div className="h-1 bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '33%' }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="p-8 pt-12">
              {isConfirming ? (
                <BookingConfirm onClose={() => {
                  setIsConfirming(false)
                  closeModal()
                }} />
              ) : (
                <>
                  {currentStep === 1 && <BookingStep1 />}
                  {currentStep === 2 && <BookingStep2 />}
                  {currentStep === 3 && <BookingStep3 onConfirming={() => setIsConfirming(true)} />}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
