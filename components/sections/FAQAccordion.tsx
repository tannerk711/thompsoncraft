'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { FAQAccordionProps } from '@/types';

export default function FAQAccordion({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
  variant = 'light',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const borderColor = variant === 'dark' ? 'border-white/20' : 'border-slate-200';
  const summaryColor = variant === 'dark' ? 'text-white' : 'text-charcoal';
  const answerColor = variant === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const hoverBg = variant === 'dark' ? 'hover:bg-white/5' : 'hover:bg-slate-50';

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <SectionHeading title={title} subtitle={subtitle} variant={variant} />

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border ${borderColor} rounded-xl overflow-hidden transition-colors ${
                isOpen ? 'border-bronze' : ''
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left ${hoverBg} transition-colors`}
                aria-expanded={isOpen}
              >
                <span className={`font-semibold ${summaryColor}`}>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    className={`w-5 h-5 ${isOpen ? 'text-bronze' : summaryColor}`}
                  />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className={`px-6 pb-5 ${answerColor} leading-relaxed`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
