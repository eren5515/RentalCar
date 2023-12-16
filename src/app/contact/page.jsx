import Contact from "@/components/Contact";
import CurrentPage from "@/components/CurrentPage";
import SecondBanner from "@/components/SecondBanner";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <CurrentPage page={"Contact"}></CurrentPage>
      <Contact></Contact>
      <SecondBanner></SecondBanner>
    </div>
  );
}
