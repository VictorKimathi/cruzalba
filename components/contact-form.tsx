"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="bg-[#181C1F] border-[#181C1F]">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-[#d1d5db] mb-2 block">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#0F1112] border-[#181C1F] text-white placeholder:text-[#d1d5db]/50"
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-[#d1d5db] mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#0F1112] border-[#181C1F] text-white placeholder:text-[#d1d5db]/50"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="subject" className="text-[#d1d5db] mb-2 block">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#0F1112] border-[#181C1F] text-white placeholder:text-[#d1d5db]/50"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-[#d1d5db] mb-2 block">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-[#0F1112] border-[#181C1F] text-white placeholder:text-[#d1d5db]/50 resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-[#d1d5db] py-3 rounded-full font-semibold"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
