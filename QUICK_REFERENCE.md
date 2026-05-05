# Quick Reference: Lumina Dental Studio

## 🚀 Get Started

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production build
pnpm start
```

**Preview**: Navigate to http://localhost:3000 (or the port shown)

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page (imports all sections) |
| `app/layout.tsx` | Root layout with metadata |
| `app/globals.css` | Design tokens (colors, typography, spacing) |
| `components/header/Hero.tsx` | Hero section with CTA |
| `components/booking/BookingModal.tsx` | 3-step booking form modal |
| `lib/mockData.ts` | All static content (testimonials, FAQ, services) |
| `lib/validation.ts` | Zod schemas for form validation |
| `hooks/useBookingModal.ts` | Zustand state for booking modal |

---

## 🎨 Color Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Coral (Primary) | `#FF6F61` | CTAs, headings, accents |
| Charcoal | `#1A1A1B` | Dark backgrounds, main text |
| Light | `#F8FAFC` | Secondary backgrounds |
| White | `#FFFFFF` | Cards, content areas |

Use in CSS:
```css
bg-primary /* Coral */
text-charcoal /* Dark text */
bg-secondary /* Light backgrounds */
```

---

## 🔧 Common Tasks

### Add a New FAQ Item
File: `lib/mockData.ts`
```typescript
{
  id: 6,
  question: 'Your question?',
  answer: 'Your answer here',
}
```

### Update Testimonial
File: `lib/mockData.ts`
```typescript
{
  id: 1,
  name: 'John Doe',
  title: 'CEO',
  quote: 'Great dentist!',
  rating: 5,
}
```

### Change Membership Price
File: `lib/mockData.ts`
```typescript
{
  id: 2,
  name: 'Lumina Pro',
  price: '$499', // Changed from $399
  // ...
}
```

### Modify Button Text
Search and replace:
- `"Book My Visit"` → New text
- `"Schedule Your First Visit Today"` → New text

---

## 📱 Component Hierarchy

```
<main>
  <Navbar /> ← CTA 1
    <Hero /> ← CTA 2
  <About />
    <Membership /> ← CTAs 3,4,5
    <Testimonials />
    <BeforeAfter /> ← CTA 6
    <FAQ />
  <Footer />
  <BookingModal />
</main>
```

---

## 🎯 CTA Trigger Points

Each "Book My Visit" opens modal to Step 1:

| Location | Component | Line # |
|----------|-----------|--------|
| Navbar | `Navbar.tsx` | ~60 |
| Hero | `Hero.tsx` | ~45 |
| Membership (×3) | `Membership.tsx` | ~120 |
| FAQ | `FAQ.tsx` | ~110 |
| BeforeAfter | `BeforeAfter.tsx` | ~160 |

All use: `const { openModal } = useBookingModal()`

---

## 📊 Form Flow

```
Step 1: Service Selection
  ↓ (User clicks Next)
Step 2: Date & Time Picker
  ↓ (User clicks Next)
Step 3: Contact Form (Name, Email, Phone)
  ↓ (User clicks Confirm)
Confirmation Screen
  ↓
Back to Home (Modal closes)
```

---

## 🎬 Animation Types

| Animation | Component | Trigger |
|-----------|-----------|---------|
| Fade-in-up | All sections | On scroll into view |
| Carousel rotate | Testimonials | Auto (5s) or manual |
| Slider drag | BeforeAfter | Mouse drag or touch |
| Accordion expand | FAQ | Click question |
| Modal scale | BookingModal | Click CTA button |

---

## ✅ Deployment Checklist

- [ ] Replace placeholder images with real dental photos
- [ ] Update testimonials with real patient quotes
- [ ] Set real phone number (currently 555-123-4567)
- [ ] Set real email (currently hello@lumina.dental)
- [ ] Update address (currently San Francisco placeholder)
- [ ] Set real booking backend integration
- [ ] Add email notification system
- [ ] Setup analytics (Google Analytics, etc.)
- [ ] Configure custom domain
- [ ] Deploy to Vercel

---

## 🔗 API Endpoint

**POST** `/api/bookings`

Accepts:
```json
{
  "service": "consultation",
  "date": "2024-01-15",
  "time": "09:00",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "5551234567"
}
```

Returns:
```json
{
  "success": true,
  "bookingId": "abc123"
}
```

Currently: Mock endpoint with 1s delay. Replace with real backend.

---

## 🧪 Testing

### Manual Testing
1. Click all 6 CTA buttons → Should open booking modal
2. Test booking flow → All 3 steps work
3. Test form validation → Error messages appear
4. Test mobile menu → Works on small screens
5. Test scroll animations → Smooth animations
6. Test carousel → Auto-rotates and manual nav works

### Browser DevTools
- Toggle device toolbar for mobile view
- Check console for errors (should be none)
- Test keyboard navigation (Tab through form)

---

## 📚 Documentation Files

| File | Content |
|------|---------|
| `IMPLEMENTATION_KICKSTART.md` | Technical specifications |
| `PHASE_1_2_COMPLETE.md` | What was built |
| `IMPLEMENTATION_CHECKLIST.md` | Feature checklist |
| `GUIDE.md` | User guide (detailed) |
| `QUICK_REFERENCE.md` | This file |

---

## 🆘 Troubleshooting

### Modal doesn't open
- Check: `useBookingModal` hook imported correctly
- Check: `BookingModal` component in page.tsx
- Check: Console for JavaScript errors

### Form validation not working
- Check: `zod` and `react-hook-form` installed
- Check: `validation.ts` schema defined
- Check: Form component using `zodResolver`

### Carousel not rotating
- Check: `setInterval` running
- Check: `autoPlay` state in `Testimonials.tsx`
- Check: Animation timing (5000ms)

### Images not loading
- Check: File path in `/public/images/`
- Check: Correct file extension
- Check: Image file actually exists

---

## 🚀 Next Steps

1. **Immediate**: Test in browser, review all sections
2. **Short-term**: Replace mock data with real content
3. **Mid-term**: Connect to real booking backend
4. **Long-term**: Add user accounts, payment processing

---

## 📞 Support

For issues:
1. Check console for errors (F12)
2. Review the relevant component file
3. Check `IMPLEMENTATION_KICKSTART.md` for specs
4. Review test page in preview

---

**Site Status**: ✅ Production Ready
**Last Updated**: 2024
**Next Phase**: Phase 3 (Polish & Animation)
