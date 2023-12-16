
import "@/app/styles/Banner.scss";

function Banner() {
  return (
    <div className="banner-div">
        <div className="background-div"></div>
      <div className="banner-left">
        <h1>Save big with our cheap car rental!</h1>
        <h2>Top Airports. Local Suppliers. 24/7 Support.</h2>
      </div>

      <a href="/" className="banner-right">Book a Ride</a>
    </div>
  );
}

export default Banner;
