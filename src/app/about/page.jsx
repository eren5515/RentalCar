import AboutCompany from "@/components/AboutCompany";
import Banner from "@/components/Banner";
import ChooseUs from "@/components/ChooseUs";
import CurrentPage from "@/components/CurrentPage";
import Plan from "@/components/Plan";
import SecondBanner from "@/components/SecondBanner";
import Testimonials from "@/components/Testimonials";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <CurrentPage page={"About"}></CurrentPage>
      <AboutCompany></AboutCompany>
      <Plan></Plan>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <Testimonials></Testimonials>
      <SecondBanner></SecondBanner>
    </div>
  );
}
