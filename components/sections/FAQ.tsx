'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useBookingModal } from '@/hooks/useBookingModal'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqItems } from '@/lib/mockData'

export function FAQ() {
  const { ref, inView } = useScrollAnimation()
  const { openModal } = useBookingModal()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="py-16 sm:py-24 bg-linen-gradient px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-charcoal"
            >
              Everything you need to know before your visit
            </motion.p>
          </div>

          {/* 3-Column Grid (3x2) */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border border-[#E8E6E1] rounded-lg overflow-hidden hover:border-primary transition-all duration-300 bg-[#F5F4F1] shadow-premium hover:shadow-md h-full"
              >
                <Accordion type="single" collapsible className="w-full flex flex-col h-full">
                  <AccordionItem
                    value={`item-${item.id}`}
                    className="border-none flex flex-col flex-1"
                  >
                    <AccordionTrigger className="hover:no-underline px-6 py-4 text-left font-semibold text-foreground data-[state=open]:text-primary hover:bg-[#EFEFEC] transition-colors">
                      <span className="flex items-start gap-3 w-full text-charcoal">
                        <span className="text-primary font-bold text-lg flex-shrink-0 mt-0.5">
                          +
                        </span>
                        <span className="text-sm">{item.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal text-sm px-6 pb-4 pt-2 flex-1 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-charcoal mb-6">
              Still have questions? Our team is ready to help.
            </p>
            <Button
              onClick={openModal}
              className="btn-coral-premium px-8 py-6 text-lg rounded-lg font-semibold"
            >
              Book a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


