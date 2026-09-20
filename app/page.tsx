import Hero from '@/components/hero/Hero'
import WorkIntro from '@/components/sections/WorkIntro'
import WorkSection from '@/components/sections/WorkSection'
import About from '@/components/sections/About'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'
import Leadership from '@/components/sections/Leadership'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkIntro />
      <WorkSection />
      <About />
      <ExperienceTimeline />
      <Leadership />
      <Contact />
    </main>
  )
}
