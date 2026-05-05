'use client'

import { useBookingModal } from '@/hooks/useBookingModal'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { services } from '@/lib/mockData'
import { motion } from 'framer-motion'

export function BookingStep1() {
  const { formData, updateFormData, nextStep } = useBookingModal()

  const handleServiceSelect = (service: string) => {
    updateFormData({ service: service as any })
  }

  const canProceed = !!formData.service

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-charcoal mb-2">What service interests you?</h2>
      <p className="text-text-secondary text-sm mb-8">Choose the treatment you&apos;d like to explore.</p>

      <RadioGroup value={formData.service || ''} onValueChange={handleServiceSelect}>
        <div className="space-y-3">
          {services.map((service) => (
            <div key={service.value} className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-secondary transition-all cursor-pointer">
              <RadioGroupItem value={service.value} id={service.value} />
              <Label
                htmlFor={service.value}
                className="flex-1 cursor-pointer font-medium text-charcoal"
              >
                {service.label}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>

      <div className="flex gap-3 mt-8">
        <Button
          variant="outline"
          onClick={() => {}} // Will close modal - handled elsewhere
          className="flex-1 border-border text-charcoal hover:bg-secondary"
        >
          Cancel
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
