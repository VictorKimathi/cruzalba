import { ProfileSection } from "@/components/profile-section"
import { CareerTimeline } from "@/components/career-timeline"
import { ExpertiseCards } from "@/components/expertise-cards"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F1112] pt-20">
      <div className="container mx-auto px-6 py-16">
        <ProfileSection />
        <CareerTimeline />
        <ExpertiseCards />
      </div>
    </main>
  )
}
