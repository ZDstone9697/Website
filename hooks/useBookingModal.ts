import { create } from 'zustand'

interface BookingStep {
  service?: string
  date?: Date
  time?: string
  name?: string
  email?: string
  phone?: string
}

interface BookingModalState {
  isOpen: boolean
  currentStep: 1 | 2 | 3
  formData: BookingStep
  openModal: () => void
  closeModal: () => void
  nextStep: () => void
  prevStep: () => void
  updateFormData: (data: Partial<BookingStep>) => void
  resetModal: () => void
}

export const useBookingModal = create<BookingModalState>((set) => ({
  isOpen: false,
  currentStep: 1,
  formData: {},
  openModal: () => set({ isOpen: true, currentStep: 1 }),
  closeModal: () => set({ isOpen: false }),
  nextStep: () =>
    set((state) => ({
      currentStep: (state.currentStep + 1) as 1 | 2 | 3,
    })),
  prevStep: () =>
    set((state) => ({
      currentStep: (state.currentStep - 1) as 1 | 2 | 3,
    })),
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetModal: () =>
    set({
      isOpen: false,
      currentStep: 1,
      formData: {},
    }),
}))
