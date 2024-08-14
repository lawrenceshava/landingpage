export const metadata = {
  title: 'ShieldSight',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'

export default async function Home() {

  return (
    <> 
      <Hero />
      <Features />
      <Zigzag />
    </>
  );
}
