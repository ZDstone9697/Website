import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    ...options,
  })

  return {
    ref,
    inView,
  }
}
