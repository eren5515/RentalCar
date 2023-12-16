import Banner from '@/components/Banner'
import BookingSection from '@/components/BookingSection'
import CarOptions from '@/components/CarOptions'
import ChooseUs from '@/components/ChooseUs'
import CurrentPage from '@/components/CurrentPage'
import DownloadApp from '@/components/DownloadApp'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import OurTeam from '@/components/OurTeam'
import Plan from '@/components/Plan'
import SecondBanner from '@/components/SecondBanner'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import { TEAM_DATA } from '@/components/TeamData'

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
        <CurrentPage page={"Our Team"}></CurrentPage>
        <OurTeam team={TEAM_DATA}></OurTeam>
        <Testimonials></Testimonials>
        <SecondBanner></SecondBanner>
    </div>
  )
}
