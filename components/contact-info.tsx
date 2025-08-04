import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="bg-[#181C1F] border-[#181C1F]">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-white" />
              <div>
                <p className="text-[#d1d5db] font-medium">Email</p>
                <a href="mailto:albac0656@gmail.com" className="text-white hover:text-[#d1d5db] transition-colors">
                  albac0656@gmail.com
                </a>
              </div>
            </div>
        
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#181C1F] border-[#181C1F]">
        <CardContent className="p-8">
          <h4 className="text-xl font-semibold text-white mb-4">Response Time</h4>
          <p className="text-[#d1d5db] mb-4">
            I typically respond to inquiries within 24-48 hours during business days.
          </p>
          <p className="text-sm text-[#d1d5db]/70">
            For urgent projects or time-sensitive opportunities, please mention "URGENT" in your subject line.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
