export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    title: 'Entrepreneur',
    quote:
      'The 15-minute guarantee gave me confidence. I was nervous, but Dr. Thorne was incredibly professional. My smile has never looked better.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James L.',
    title: 'Business Executive',
    quote:
      'No insurance hassles? Yes, please. The team handled everything seamlessly. Worth every penny.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena R.',
    title: 'Creative Director',
    quote:
      "I can't believe the attention to detail. Dr. Thorne didn't just fix my teeth—they transformed my confidence.",
    rating: 5,
  },
]

export const faqItems = [
  {
    id: 1,
    question: 'Is the experience truly pain-free?',
    answer:
      'Yes. We use the latest pain-management techniques and premium anesthetics. Our 15-minute guarantee means if you experience discomfort at any point, we stop and address it immediately.',
  },
  {
    id: 2,
    question: 'How does the Lumina Collective handle insurance?',
    answer:
      'We work with most major insurance plans and handle all the paperwork for you, so there are no hassles. If you prefer self-pay, we offer flexible financing options tailored to your needs.',
  },
  {
    id: 3,
    question: 'What defines the 15-Minute Wait Guarantee?',
    answer:
      'If at any point during your procedure you feel anxious or uncomfortable, we pause and address your concerns. Your comfort is our priority, and we never proceed without your full confidence.',
  },
  {
    id: 4,
    question: 'Longevity: How long will my results stay brilliant?',
    answer:
      'Results vary by treatment. Cosmetic procedures like whitening typically last 6-12 months with proper care. We provide detailed aftercare instructions for every service to maximize your results.',
  },
  {
    id: 5,
    question: 'Downtime: What is the recovery time like?',
    answer:
      'Most procedures have minimal downtime. You can return to your normal routine immediately. We will provide specific post-procedure instructions tailored to your treatment.',
  },
  {
    id: 6,
    question: 'Preview: Can I see my results before we begin?',
    answer:
      'Absolutely. We use advanced digital smile design technology to show you a preview of your results before any procedure begins. You have complete control over your transformation.',
  },
]

export const services = [
  { value: 'consultation', label: 'Initial Consultation' },
  { value: 'cleaning', label: 'Professional Cleaning' },
  { value: 'cosmetic', label: 'Cosmetic Teeth' },
  { value: 'other', label: 'Other Service' },
]

export const timeSlots = ['09:00', '11:00', '14:00', '16:00']

export const drBio = {
  name: 'Dr. Aris Thorne',
  credentials: 'DDS, Master of Prosthodontics',
  experience: '15 Years',
  bio: 'Dr. Aris Thorne is a highly skilled cosmetic dentist with 15 years of experience transforming smiles. With a Master\'s degree in Prosthodontics from the University of California, Dr. Thorne combines scientific precision with artistic vision to create natural-looking, beautiful results.',
  specialties: [
    'Cosmetic Dentistry',
    'Prosthodontics',
    'Smile Design',
    'Invisible Aligners',
    'Teeth Whitening',
  ],
  patients: 1000,
  rating: 4.9,
}

export const membership = [
  {
    id: 1,
    name: 'Standard',
    price: '$199',
    description: 'Perfect for routine care',
    features: [
      'Bi-annual cleanings',
      'Annual exams',
      '10% discount on treatments',
      'Emergency support',
    ],
    mostPopular: false,
  },
  {
    id: 2,
    name: 'Lumina Pro',
    price: '$399',
    description: 'Our most popular choice',
    features: [
      'Quarterly cleanings',
      'Bi-annual exams with imaging',
      '20% discount on all treatments',
      '24/7 emergency support',
      'Complimentary annual whitening',
    ],
    mostPopular: true,
  },
  {
    id: 3,
    name: 'Premium+',
    price: '$599',
    description: 'The ultimate experience',
    features: [
      'Monthly cleanings',
      'Quarterly exams with advanced imaging',
      '30% discount on all treatments',
      'Dedicated concierge service',
      'Complimentary quarterly whitening',
      'Priority scheduling',
    ],
    mostPopular: false,
  },
]
