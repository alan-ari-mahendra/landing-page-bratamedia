'use client'

import { useState } from 'react'

export type FAQItem = {
  q: string
  a: string
}

type Props = {
  faqs: FAQItem[]
  defaultOpenIndex?: number
}

export default function FAQAccordion({ faqs, defaultOpenIndex = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex)

  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => (
        <div key={i} className={i === 0 ? 'py-8' : 'border-t border-[#E3E5E1] py-8'}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex justify-between items-center text-left"
          >
            <span
              className="font-bold text-[#1a1c1c]"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
            >
              {faq.q}
            </span>
            <span
              className={`material-symbols-outlined text-sm opacity-50 flex-shrink-0 ml-4 transition-transform duration-300 ease-in-out ${
                openIndex === i ? 'rotate-180' : 'rotate-0'
              }`}
            >
              expand_more
            </span>
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <p
                className="text-[#6E766F] text-[15px] leading-[24px] mt-6"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
