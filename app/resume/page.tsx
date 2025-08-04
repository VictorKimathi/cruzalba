import { ResumeDownload } from "@/components/resume-download"
import { SkillsSection } from "@/components/skills-section"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0F1112] pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">📄 Download My Resume</h1>
          <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
            Get the complete overview of my experience, skills, and achievements in home & lifestyle writing.
          </p>
        </div>
        <ResumeDownload />
        <SkillsSection />
      </div>
    </main>
  )
}
