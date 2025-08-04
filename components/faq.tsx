"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqItems = [
  {
    question: "Do you accept freelance projects?",
    answer:
      "Yes! I'm always open to discussing new freelance opportunities, especially in the home and lifestyle space. I work with both established publications and emerging brands looking to create compelling content.",
  },
  {
    question: "Can you write for brand campaigns?",
    answer:
      "Absolutely. I have experience creating branded content that maintains editorial integrity while meeting marketing objectives. I specialize in authentic storytelling that resonates with audiences while supporting brand goals.",
  },
  {
    question: "What's your typical turnaround time?",
    answer:
      "Turnaround times vary based on project scope and complexity. For standard articles (800-1500 words), I typically deliver within 5-7 business days. Rush projects can often be accommodated with advance notice.",
  },
  {
    question: "Do you provide SEO optimization?",
    answer:
      "Yes, all my content is optimized for search engines while maintaining readability and engagement. I incorporate keyword research, meta descriptions, and SEO best practices into every piece.",
  },
  {
    question: "Can you work with our existing brand voice?",
    answer:
      "Definitely! I pride myself on being able to adapt my writing style to match your brand's unique voice and tone while bringing my expertise in home and lifestyle content to the table.",
  },
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-[#d1d5db]">Common questions about working together and my services.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <Card key={index} className="bg-[#181C1F] border-[#181C1F]">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full p-6 text-left justify-between hover:bg-[#1a1f22] rounded-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-white font-medium">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-[#d1d5db]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#d1d5db]" />
                )}
              </Button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-[#d1d5db] leading-relaxed">{item.answer}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
