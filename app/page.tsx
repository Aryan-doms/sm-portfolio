import { Navbar } from '@/components/Navbar'
import { Section } from '@/components/Section'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />

      {/* Hero */}
      <section id="home" className="container mx-auto px-4 pt-24 pb-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">I'm Aryan Patel</h1>
        <p className="mt-3 text-gray-300">Engineering nerd passionate about social media and marketing strategy</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#bettercallthrift" className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-white hover:opacity-90 text-sm">Bettercallthrift</a>
          <a href="#side-quest" className="inline-flex items-center rounded-md border border-gray-700 px-4 py-2 text-gray-100 hover:bg-gray-800 text-sm">Side Quest</a>
        </div>
      </section>

    <Section id="bettercallthrift" title="Section 1 - BetterCallThrift">
        
  <p className="mt-6 mb-6 max-w-2xl mx-auto text-gray-300 text-center">Giving BetterCallThrift the cool vibe it deserves.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center justify-center h-64 rounded-lg border border-gray-800 bg-gray-900/40">
        <img src="/images/b1.webp" alt="BCT 1" className="h-full w-full object-contain" loading="lazy" decoding="async" />
        </div>
        <div className="flex items-center justify-center h-64 rounded-lg border border-gray-800 bg-gray-900/40">
        <img src="/images/b2.webp" alt="BCT 2" className="h-full w-full object-contain" loading="lazy" decoding="async" />
        </div>
        <div className="flex items-center justify-center h-64 rounded-lg border border-gray-800 bg-gray-900/40">
        <img src="/images/b3.webp" alt="BCT 3" className="h-full w-full object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </Section>

          {/* Section 2: Side Quest with 2 rows x 4 columns placeholders */}
          <Section id="side-quest" title="Section 2 - Side Quest" background="dark">
<p className="mt-6 mb-6 max-w-2xl mx-auto text-gray-300 text-center">Random Stuff i did.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['a1.webp','a2.webp','a3.webp','a4.webp'].map((file, i) => (
            <div
              key={`row1-${i}`}
              className="flex items-center justify-center aspect-square rounded-lg border border-gray-800 bg-gray-900/40"
            >
              <img
          src={`/images/${file}`}
          alt={`Photo ${i + 1}`}
          className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Row 2 (4 columns) — Instagram Reels (9:16 vertical) */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="overflow-hidden aspect-[9/16] rounded-lg border border-gray-800 bg-gray-900/40">
            <img src="/images/r1.mp4" alt="Reel 1" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden aspect-[9/16] rounded-lg border border-gray-800 bg-gray-900/40">
            <img src="/images/reel-cover-2.webp" alt="Reel 2" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden aspect-[9/16] rounded-lg border border-gray-800 bg-gray-900/40">
            <img src="/images/r3.mp4" alt="Reel 3" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden aspect-[9/16] rounded-lg border border-gray-800 bg-gray-900/40">
            <img src="/images/r4.mp4" alt="Reel 4" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
        </div>
      </Section>
    </main>
  )
}
