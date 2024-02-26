import "@/app/styles/SecondBanner.scss";

function SecondBanner() {
  return (
    <div className="second-banner-div">
      <div className="second-banner-background-div"></div>
      <h1 className="second-banner-left">
        Book a car by getting in touch with us
      </h1>

      <div className="second-banner-right">
        <div className="flex flex-row justify-center">
          <img
            src="https://github.com/eren5515/asd/blob/main/resim_2023-12-15_032331935-fotor-bg-remover-2023121532341.png?raw=true"
            alt=""
          />
          <h3>Call to book</h3>
        </div>
        <h1>(562) 498-4600</h1>
      </div>
    </div>
  );
}

export default SecondBanner;
