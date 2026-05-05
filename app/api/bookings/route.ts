import { bookingFormSchema } from '@/lib/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = bookingFormSchema.parse(body)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, this would save to a database or send an email
    console.log('Booking received:', validatedData)

    return Response.json(
      {
        success: true,
        message: 'Booking confirmed',
        bookingId: Math.random().toString(36).substring(7),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return Response.json(
      { success: false, message: 'Failed to process booking' },
      { status: 400 }
    )
  }
}
