'use client'

import { useBookingModal } from '@/hooks/useBookingModal'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { timeSlots } from '@/lib/mockData'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { addDays, isBefore, startOfToday } from 'date-fns'

export function BookingStep2() {
  const { formData, updateFormData, nextStep, prevStep } = useBookingModal()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(formData.date)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    updateFormData({ date })
  }

  const handleTimeSelect = (time: string) => {
    updateFormData({ time })
  }

  const canProceed = !!selectedDate && !!formData.time

  // Only allow booking 5 days ahead
  const disabledDates = (date: Date) => {
    const today = startOfToday()
    const maxDate = addDays(today, 5)
    return isBefore(date, today) || isBefore(maxDate, date)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-charcoal mb-2">Select date & time</h2>
      <p className="text-text-secondary text-sm mb-6">Choose your preferred appointment slot.</p>

      <div className="space-y-6">
        {/* Calendar */}
        <div className="border border-border rounded-lg p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={disabledDates}
            className="w-full"
          />
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <Label className="text-sm font-semibold text-charcoal mb-3 block">Available times</Label>
            <RadioGroup value={formData.time || ''} onValueChange={handleTimeSelect}>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <div key={time} className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:border-primary hover:bg-secondary transition-all cursor-pointer">
                    <RadioGroupItem value={time} id={time} />
                    <Label htmlFor={time} className="cursor-pointer flex-1 text-charcoal">
                      {time}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-8">
        <Button
          variant="outline"
          onClick={prevStep}
          className="flex-1 border-border text-charcoal hover:bg-secondary"
        >
          Back
        </Button>
        <Button
          onClick={nextStep}
          disabled={!canProceed}
          className="flex-1 bg-primary hover:bg-charcoal text-white hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step
        </Button>
      </div>
    </motion.div>
  )
}
