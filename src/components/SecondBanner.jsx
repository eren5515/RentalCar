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
            src="https://cdn.discordapp.com/attachments/336171716126572548/1185014356400930867/resim_2023-12-15_032331935-fotor-bg-remover-2023121532341.png?ex=658e119f&is=657b9c9f&hm=b0fa611b703e71e77adcb1a244d16f56602d66140ac381c5453dacbd77978b1b&"
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
