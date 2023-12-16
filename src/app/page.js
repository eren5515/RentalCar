import Banner from '@/components/Banner'
import BookingSection from '@/components/BookingSection'
import CarOptions from '@/components/CarOptions'
import ChooseUs from '@/components/ChooseUs'
import DownloadApp from '@/components/DownloadApp'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Plan from '@/components/Plan'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-32">
     <Hero></Hero>
     <BookingSection></BookingSection>
     <Plan></Plan>
     <CarOptions></CarOptions>
     <Banner></Banner>
     <ChooseUs></ChooseUs>
     <Testimonials></Testimonials>
     <FAQ></FAQ>
     <DownloadApp></DownloadApp>
    </main>
  )
}
