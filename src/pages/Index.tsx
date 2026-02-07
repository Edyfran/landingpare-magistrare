import { Hero } from '@/components/landing/Hero'
import { Differentials } from '@/components/landing/Differentials'
import { Benefits } from '@/components/landing/Benefits'
import { Stats } from '@/components/landing/Stats'
import { Pricing } from '@/components/landing/Pricing'
import { CallToAction } from '@/components/landing/CallToAction'

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Differentials />
      <Benefits />
      <Stats />
      <Pricing />
      <CallToAction />
    </div>
  )
}

export default Index
