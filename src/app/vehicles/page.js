import CurrentPage from "@/components/CurrentPage";
import VehicleList from "@/components/VehicleList";
import { CAR_DATA } from "@/components/Data";
import Banner from "@/components/Banner";
import Plan from "@/components/Plan";
import SecondBanner from "@/components/SecondBanner";


export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <CurrentPage page={"Vehicles"}></CurrentPage>
      <VehicleList cars={CAR_DATA}></VehicleList>
      <Banner></Banner>
      <Plan></Plan>
      <SecondBanner></SecondBanner>
    </div>
  )
}
