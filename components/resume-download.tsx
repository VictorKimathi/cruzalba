import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, QrCode } from "lucide-react"

export function ResumeDownload() {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <Card className="bg-[#181C1F] border-[#181C1F]">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Complete Professional Resume</h3>
            <p className="text-[#d1d5db] mb-8">
              Download my comprehensive resume featuring detailed work history, achievements, and professional
              references.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-white text-black hover:bg-[#d1d5db] px-8 py-3 rounded-full font-semibold">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
            </Button>
            <Button
              variant="outline"
              className="border-[#181C1F] text-[#d1d5db] hover:text-white hover:border-white px-8 py-3 rounded-full bg-transparent"
            >
              <QrCode className="mr-2 h-4 w-4" />
              QR Code
            </Button>
          </div>

          <p className="text-sm text-[#d1d5db]/70 mt-6">Last updated: December 2024 • PDF Format • 2 pages</p>
        </CardContent>
      </Card>
    </div>
  )
}
