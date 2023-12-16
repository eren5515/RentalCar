import AboutCompany from "@/components/AboutCompany";
import CurrentPage from "@/components/CurrentPage";
import SecondBanner from "@/components/SecondBanner";
import Testimonials from "@/components/Testimonials";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
        <CurrentPage page={"Testimonials"}></CurrentPage>
      <Testimonials></Testimonials>
      <AboutCompany></AboutCompany>
      <SecondBanner></SecondBanner>
    </div>
  );
}
