'use client'

import { useBookingModal } from '@/hooks/useBookingModal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingFormSchema, type BookingFormData } from '@/lib/validation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Spinner } from '@/components/ui/spinner'

interface BookingStep3Props {
  onConfirming: () => void
}

export function BookingStep3({ onConfirming }: BookingStep3Props) {
  const { formData, updateFormData, prevStep } = useBookingModal()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      service: formData.service,
      date: formData.date,
      time: formData.time,
    },
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    updateFormData(data)

    // Mock API call
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        onConfirming()
      }
    } catch (error) {
      console.error('Booking error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-charcoal mb-2">Complete your booking</h2>
      <p className="text-text-secondary text-sm mb-6">We&apos;ll use this info to confirm your appointment.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-charcoal mb-2 block">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register('name')}
            className={`border-border focus:border-primary ${errors.name ? 'border-error' : ''}`}
          />
          {errors.name && (
            <p className="text-error text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-charcoal mb-2 block">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className={`border-border focus:border-primary ${errors.email ? 'border-error' : ''}`}
          />
          {errors.email && (
            <p className="text-error text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-charcoal mb-2 block">
            Phone (10 digits)
          </Label>
          <Input
            id="phone"
            placeholder="5551234567"
            {...register('phone')}
            maxLength={10}
            className={`border-border focus:border-primary ${errors.phone ? 'border-error' : ''}`}
          />
          {errors.phone && (
            <p className="text-error text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex gap-3 mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={isSubmitting}
            className="flex-1 border-border text-charcoal hover:bg-secondary disabled:opacity-50"
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-primary hover:bg-charcoal text-white hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <Spinner className="w-4 h-4" />
                Booking...
              </div>
            ) : (
              'Confirm Booking'
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
