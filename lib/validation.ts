import { z } from 'zod'

export const bookingFormSchema = z.object({
  service: z.enum(['consultation', 'cleaning', 'cosmetic', 'other'], {
    errorMap: () => ({ message: 'Please select a service' }),
  }),
  date: z.date({ errorMap: () => ({ message: 'Please select a date' }) }),
  time: z.enum(['09:00', '11:00', '14:00', '16:00'], {
    errorMap: () => ({ message: 'Please select a time' }),
  }),
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: 'Phone must be 10 digits (no dashes)' }),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>
