'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BookingConfirmProps {
  onClose: () => void
}

export function BookingConfirm({ onClose }: BookingConfirmProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
        className="flex justify-center mb-6"
      >
        <CheckCircle2 className="w-16 h-16 text-success" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-charcoal mb-2">Booking Confirmed!</h3>
        <p className="text-text-secondary mb-6">
          Your appointment has been confirmed. You&apos;ll receive a confirmation email shortly with all the details.
        </p>

        <div className="bg-secondary p-4 rounded-lg mb-6 text-left">
          <p className="text-sm text-text-secondary mb-2">Appointment Details:</p>
          <ul className="space-y-1 text-sm text-charcoal">
            <li>✓ Date and time confirmed</li>
            <li>✓ Confirmation sent to your email</li>
            <li>✓ Reminder: 24 hours before appointment</li>
          </ul>
        </div>

        <Button
          onClick={onClose}
          className="w-full bg-primary hover:bg-charcoal text-white hover:text-primary py-6 rounded-lg"
        >
          Back to Home
        </Button>
      </motion.div>
    </motion.div>
  )
}
