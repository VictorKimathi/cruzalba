import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0F1112] border-t border-[#181C1F] py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Cruz Alba</h3>
            <p className="text-[#d1d5db] leading-relaxed">
              Seasoned home & lifestyle writer blending design inspiration with practical, real-life solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-[#d1d5db] hover:text-white transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="block text-[#d1d5db] hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/testimonials" className="block text-[#d1d5db] hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="/resume" className="block text-[#d1d5db] hover:text-white transition-colors">
                Resume
              </Link>
              <Link href="/contact" className="block text-[#d1d5db] hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:albac0656@gmail.com" className="block text-[#d1d5db] hover:text-white transition-colors">
                albac0656@gmail.com
              </a>
              <a href="#" className="block text-[#d1d5db] hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-[#d1d5db] hover:text-white transition-colors">
                Portfolio Archive
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#181C1F] pt-8 text-center">
          <p className="text-[#d1d5db]/70">© {new Date().getFullYear()} Cruz Alba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
