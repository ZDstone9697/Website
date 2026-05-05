# Lumina Dental Studio - Implementation Kickstart Guide

## Executive Summary
This document outlines the complete implementation strategy for the Lumina Dental Studio landing page. The project prioritizes conversion through strategic CTA placement, premium visual design, and a seamless booking experience.

---

## 1. Design Token System

### Color Palette
```css
/* Primary Brand Colors */
--color-primary: #FF6F61;           /* Action Coral */
--color-primary-hover: rgba(255, 111, 97, 0.05);  /* 5% Opacity Coral for hover states */
--color-neutral-dark: #1A1A1B;      /* Charcoal - Primary backgrounds, headings, footer */
--color-neutral-light: #F8FAFC;     /* Light neutral - Secondary backgrounds */
--color-neutral-white: #FFFFFF;     /* White - Content cards, body text on dark bg */
--color-divider: #E2E8F0;           /* Slate-200 - Dividers and borders */
--color-text-primary: #1A1A1B;      /* Charcoal text on light backgrounds */
--color-text-secondary: #64748B;    /* Slate-500 - Secondary text */
--color-text-inverse: #FFFFFF;      /* White text on dark backgrounds */
--color-success: #10B981;           /* For confirmation messages */
--color-error: #EF4444;             /* For error states */
```

### Typography Scale
```css
/* Font Family */
--font-sans: 'Geist Sans';

/* Headings */
--text-h1: 4rem / 1.1;             /* Bold, 64px */
--text-h2: 2.25rem / 1.2;          /* Bold, 36px */
--text-h3: 1.875rem / 1.2;         /* Bold, 30px */
--text-h4: 1.5rem / 1.3;           /* Bold, 24px */

/* Body Text */
--text-body: 1.125rem / 1.6;       /* Regular, 18px - Primary body */
--text-body-sm: 1rem / 1.5;        /* Regular, 16px - Secondary body */
--text-body-xs: 0.875rem / 1.5;    /* Regular, 14px - Captions, labels */

/* Special */
--text-button: 1rem / 1.4;         /* Bold, 16px - Button text */
--text-label: 0.75rem / 1.5;       /* Bold, 12px - Form labels, badges */
```

### Spacing & Radius
```css
/* Spacing Scale (Tailwind-aligned) */
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */

/* Border Radius */
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.75rem;   /* 12px - Standard */
--radius-lg: 1rem;      /* 16px - Large buttons, cards */
--radius-full: 9999px;  /* Full rounded (pills) */
```

### Shadow System
```css
/* Premium Shadows */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-premium: 0 25px 50px -12px rgba(0, 0, 0, 0.15); /* Diffused for cards */
```

---

## 2. CTA Strategy & Placement

### Primary CTA: "Book My Visit"
Strategic placement ensures multiple conversion opportunities without overwhelming users.

#### CTA Placement Map
| Location | Component | Priority | Behavior |
|----------|-----------|----------|----------|
| 1. Sticky Header | Navigation Bar | High | Fixed, always visible on scroll |
| 2. Hero Section | Below headline/tagline | High | Large, prominent, primary action |
| 3. Membership Cards Footer | Below all 3 cards | High | Secondary button, drives conversions |
| 4. FAQ Section | Bottom of FAQ panel | Medium | Captures users after objection resolution |
| 5. Before/After Slider | Overlay button | Medium | Positioned over image comparison |
| 6. Footer | CTA before footer info | Medium | Last-chance conversion point |

### CTA Styling
- **Primary State**: Coral background (#FF6F61), white text, bold
- **Hover State**: Charcoal background, Coral text, smooth transition
- **Active State**: Slightly darker Coral, subtle shadow elevation
- **Disabled State**: Slate-300 background, Slate-500 text

### CTA Text Variations
- Standard: "Book My Visit"
- Hero: "Schedule Your First Visit Today"
- Footer: "Ready? Book Now"
- FAQ: "Still Have Questions? Book a Free Consultation"

---

## 3. Project Structure

```
lumina-dental-studio/
├── app/
│   ├── layout.tsx              # Root layout with design tokens
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Global styles + design tokens
│   ├── api/
│   │   └── bookings/
│   │       └── route.ts        # Mock booking API endpoint
│   └── fonts/                  # Geist Sans font files (if local)
├── components/
│   ├── header/
│   │   ├── Navbar.tsx          # Sticky header with CTA
│   │   └── Hero.tsx            # Hero section
│   ├── sections/
│   │   ├── About.tsx           # About Dr. Aris Thorne
│   │   ├── Membership.tsx      # 3-tier membership cards
│   │   ├── BeforeAfter.tsx     # Before/After image slider
│   │   ├── Testimonials.tsx    # Social proof carousel
│   │   ├── FAQ.tsx             # FAQ accordion with CTA
│   │   └── CTA.tsx             # CTA footer section
│   ├── booking/
│   │   ├── BookingModal.tsx    # Main booking modal container
│   │   ├── BookingStep1.tsx    # Service selection
│   │   ├── BookingStep2.tsx    # Date/time selection
│   │   ├── BookingStep3.tsx    # Confirmation form
│   │   └── BookingConfirm.tsx  # Success state
│   └── shared/
│       ├── Button.tsx          # Custom button component
│       ├── Card.tsx            # Reusable card wrapper
│       └── Badge.tsx           # "Most Popular" badge
├── hooks/
│   ├── useBookingModal.ts      # Booking modal state management
│   └── useScrollAnimation.ts   # Fade-in-up scroll animations
├── lib/
│   ├── mockData.ts             # Testimonials, FAQ, availability
│   ├── validation.ts           # Zod schemas
│   └── utils.ts                # Helper functions
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg         # Abstract clinical luxury aesthetic
│   │   ├── before-1.jpg        # Before/After slider images
│   │   ├── after-1.jpg
│   │   └── avatars/            # Circular testimonial avatars
│   └── icons/                  # Lucide React used; SVG fallbacks if needed
└── scripts/
    └── mockAvailability.ts     # Generate hardcoded booking slots
```

---

## 4. Component Breakdown & Requirements

### 4.1 Navbar / Sticky Header
**File**: `components/header/Navbar.tsx`
- Fixed positioning on scroll
- Logo + Navigation links
- "Book My Visit" CTA button (primary)
- Responsive burger menu for mobile
- Backdrop blur effect on dark background

### 4.2 Hero Section
**File**: `components/header/Hero.tsx`
- Full-viewport height (or minimum 600px)
- Background: Abstract clinical luxury image (AI-generated or stock)
- Headline: "Premium Dental Care That Feels Like Art"
- Subheadline: "15-minute guarantee. No insurance hassles. Lumina results."
- CTA Button: "Schedule Your First Visit Today" (secondary/outline style)
- Scroll indicator animation (fade-in-up)

### 4.3 About Section
**File**: `components/sections/About.tsx`
- Dr. Aris Thorne bio with professional credentials
- Trust badges: "15-Year Expert", "1000+ Happy Patients"
- 4.9/5 star rating with review count
- Image: Professional headshot or clinical photography

### 4.4 Membership Cards Section
**File**: `components/sections/Membership.tsx`
- 3-tier card layout: Standard, Lumina Pro (featured), Premium+
- "Most Popular" ribbon on Lumina Pro card
- Featured card: 2px Coral border, slight elevation/shadow
- Per-card features list with checkmarks
- CTA below all cards: "Choose Your Plan" → opens booking modal
- Responsive: Stack on mobile, row on desktop

### 4.5 Before/After Image Slider
**File**: `components/sections/BeforeAfter.tsx`
- Draggable or arrow-based image comparison slider
- 5 before/after pairs with labels
- Overlay CTA: "See What's Possible"
- Smooth transitions, prefers-reduced-motion support

### 4.6 Testimonials Carousel
**File**: `components/sections/Testimonials.tsx`
- Circular avatars (placeholder or real images)
- 3 testimonials: Sarah M., James L., Elena R.
- Quote text, name, title
- Navigation arrows or dot indicators
- Auto-advance every 5 seconds (pause on hover/interaction)

### 4.7 FAQ Section
**File**: `components/sections/FAQ.tsx`
- Accordion component with 5 strategic questions:
  1. "Will it hurt?" (Pain anxiety)
  2. "Do you accept insurance?" (Cost concern)
  3. "What is the 15-minute guarantee?" (Service guarantee)
  4. "How long do results last?" (Durability concern)
  5. "What's the recovery time?" (Downtime concern)
- Smooth expand/collapse animation
- CTA footer: "Still Have Questions? Book a Free Consultation"

### 4.8 Booking Modal (Multi-step Form)
**File**: `components/booking/BookingModal.tsx` + step components

**Step 1 - Service Selection**
- Radio buttons or card selection: Initial Consultation, Cleaning, Cosmetic Teeth, Other
- Next button to advance

**Step 2 - Date & Time Selection**
- shadcn/ui Calendar component
- Hardcoded availability: 5 days × 4 slots (9AM, 11AM, 2PM, 4PM)
- Selected time display
- Mock API call (1s delay) showing Skeleton loader

**Step 3 - Contact Information**
- Fields: Name (min 2), Email (valid format), Phone (10 digits)
- Form validation via zod + react-hook-form
- Submit button with loading state (Spinner)

**Confirmation State**
- Success message with checkmark icon
- Booking details summary
- "Back to Home" button

### 4.9 CTA Footer Section
**File**: `components/sections/CTA.tsx`
- Heading: "Ready to Transform Your Smile?"
- Subtext with key value prop
- "Book My Visit" primary button
- Alternative: "Call Us: (555) 123-4567"

### 4.10 Footer
**File**: `components/footer/Footer.tsx`
- Charcoal background
- Logo, contact info, hours, location
- Social media links (placeholders)
- Copyright notice

---

## 5. Form Validation Schema

### Zod Schema (lib/validation.ts)
```typescript
const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  service: z.enum(['consultation', 'cleaning', 'cosmetic', 'other']),
  date: z.date(),
  time: z.enum(['09:00', '11:00', '14:00', '16:00']),
});
```

---

## 6. Animation Specifications

### Scroll-triggered Animations (Framer Motion)
- **Fade-in-up**: All sections fade in with 20px upward translation
- **Duration**: 0.6s ease-out
- **Stagger**: 0.1s between child elements
- **prefers-reduced-motion**: Disabled (instant visibility)

### Hover Animations
- **Button hover**: Slight background color shift + subtle shadow increase
- **Card hover**: Subtle lift (2-4px elevation) + shadow enhance
- **Link underline**: Smooth color transition on hover

### Modal Animations
- **Open**: Fade-in overlay + scale-up modal (95% → 100%)
- **Close**: Reverse animation
- **Duration**: 0.3s ease-out

---

## 7. Technical Stack & Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-accordion": "^1.0.0",
    "embla-carousel-react": "^7.1.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^19.0.0"
  }
}
```

### Key Libraries
- **shadcn/ui**: Provides base components (Calendar, Skeleton, etc.)
- **Framer Motion**: Scroll animations and modal transitions
- **Lucide React**: Icons throughout (CheckCircle2, ArrowRight, Menu, etc.)
- **Embla Carousel**: Testimonials carousel and Before/After slider

---

## 8. Implementation Phases

### Phase 1: Foundation (2-3 days)
- [ ] Setup Next.js project with Tailwind + shadcn/ui
- [ ] Create design tokens in globals.css + tailwind.config.ts
- [ ] Build base layout (Navbar, Hero, Footer)
- [ ] Setup custom Button and Card components
- [ ] Integrate Geist Sans typography

### Phase 2: Core Sections (3-4 days)
- [ ] About section with trust badges
- [ ] Membership cards (static, no interactions yet)
- [ ] Testimonials carousel (Embla setup)
- [ ] Before/After image slider
- [ ] FAQ accordion

### Phase 3: Booking & CTAs (3-4 days)
- [ ] Booking modal with multi-step form
- [ ] Form validation (react-hook-form + zod)
- [ ] Mock API endpoint (/api/bookings)
- [ ] Implement all CTA placements (×6 locations)
- [ ] Loading and confirmation states

### Phase 4: Polish & Animation (2-3 days)
- [ ] Scroll animations (Framer Motion, fade-in-up)
- [ ] Button/card hover effects
- [ ] Modal transitions
- [ ] prefers-reduced-motion compliance
- [ ] Mobile responsiveness refinement

### Phase 5: Testing & Deployment (1-2 days)
- [ ] Cross-browser testing
- [ ] Mobile/tablet testing
- [ ] Accessibility audit (keyboard nav, screen readers)
- [ ] Performance optimization
- [ ] Deploy to Vercel

---

## 9. Responsive Design Breakpoints

| Breakpoint | Usage |
|-----------|-------|
| Mobile | < 640px (sm) |
| Tablet | 640px - 1024px (md, lg) |
| Desktop | > 1024px (xl, 2xl) |

**Mobile-First Approach**:
1. Single-column layout (mobile)
2. At md breakpoint: 2-column layouts, horizontal navigation
3. At lg/xl breakpoint: Full 3-column grids, expanded spacing

---

## 10. SEO & Meta Configuration

```typescript
// app/layout.tsx metadata
export const metadata = {
  title: 'Lumina Dental Studio | Premium Dental Care',
  description: 'Premium dental care with a 15-minute guarantee. Experience art-level dentistry with Dr. Aris Thorne.',
  openGraph: {
    title: 'Lumina Dental Studio',
    description: 'Transform your smile with premium dental care.',
    image: '/images/og-image.jpg',
  },
};
```

---

## 11. Environment Variables (If Needed)

```
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: API integrations
# SENDGRID_API_KEY=xxx
# CALENDLY_API_KEY=xxx
```

---

## 12. Success Criteria & KPIs

- [ ] Landing page loads in < 3 seconds
- [ ] All CTAs functional and trackable
- [ ] Booking modal submission flow complete
- [ ] Mobile responsiveness (100% Lighthouse score)
- [ ] Accessibility: WCAG AA compliance
- [ ] SEO: Proper meta tags, OG images, structured data
- [ ] Form validation working (all error states visible)
- [ ] Animations smooth at 60fps (no jank)

---

## 13. Known Constraints & Assumptions

1. **Booking Availability**: Hardcoded 5 days × 4 slots (no real calendar sync)
2. **Form Submission**: Mock API with 1-second delay (no actual email/database)
3. **Images**: Placeholder paths; replace with actual assets during content delivery
4. **Testimonials**: Use provided names; avatars are placeholder circles
5. **Mobile First**: Tailwind mobile-first approach ensures baseline mobile UX
6. **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge latest)

---

## 14. Next Steps

1. **Environment Setup**: Initialize Next.js project with all dependencies
2. **Design Token Integration**: Add all tokens to globals.css and tailwind.config.ts
3. **Component Development**: Build components following the hierarchy above
4. **CTA Integration**: Implement booking modal trigger logic across all 6 locations
5. **Testing & Refinement**: Cross-browser, mobile, accessibility tests
6. **Content Delivery**: Replace placeholders with actual images, copy, testimonials
7. **Deployment**: Push to GitHub, deploy to Vercel with custom domain

---

## 15. File Checklist

Essential files to create/modify:

- [ ] `app/layout.tsx` - Root layout with metadata and design tokens
- [ ] `app/globals.css` - Design tokens and global styles
- [ ] `tailwind.config.ts` - Tailwind theme extensions
- [ ] `components/header/Navbar.tsx` - Sticky navigation
- [ ] `components/header/Hero.tsx` - Hero section
- [ ] `components/sections/About.tsx` - Doctor bio section
- [ ] `components/sections/Membership.tsx` - 3-tier cards
- [ ] `components/sections/BeforeAfter.tsx` - Image slider
- [ ] `components/sections/Testimonials.tsx` - Carousel
- [ ] `components/sections/FAQ.tsx` - Accordion
- [ ] `components/sections/CTA.tsx` - CTA footer
- [ ] `components/booking/BookingModal.tsx` - Modal container
- [ ] `components/booking/BookingStep1.tsx` - Service selection
- [ ] `components/booking/BookingStep2.tsx` - Date/time picker
- [ ] `components/booking/BookingStep3.tsx` - Contact form
- [ ] `components/shared/Button.tsx` - Custom button
- [ ] `components/shared/Card.tsx` - Card wrapper
- [ ] `hooks/useBookingModal.ts` - Modal state hook
- [ ] `hooks/useScrollAnimation.ts` - Scroll animation hook
- [ ] `lib/mockData.ts` - Static testimonials, FAQ, availability
- [ ] `lib/validation.ts` - Zod schemas
- [ ] `app/api/bookings/route.ts` - Mock API endpoint

---

## Conclusion

This implementation plan provides a comprehensive roadmap for building the Lumina Dental Studio landing page. Follow the phases sequentially, prioritize CTA conversion funnels, and ensure all animations respect accessibility preferences. Deploy to Vercel for optimal performance.

**Ready to build? Start with Phase 1: Foundation.**
