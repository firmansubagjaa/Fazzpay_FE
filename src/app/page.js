'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NonAuth from '@/components/nonAuth'
import HeroBanner1 from '@/components/herobanner1'
import HeroBanner2 from '@/components/herobanner2'
import HeroBanner3 from '@/components/herobanner3'
import SponsorBanner from '@/components/sponsorBanner'
import Testimony from '@/components/testimony2'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NonAuth />
      <HeroBanner1 />
      <SponsorBanner />
      <HeroBanner2 />
      <HeroBanner3 />
      <Testimony />
      <Footer />

    </>
  )
}
