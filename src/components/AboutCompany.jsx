import "@/app/styles/AboutCompany.scss";

function AboutCompany() {
  return (
    <div className="about-container">
      <img className="about-left" src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/about_image.jpg" />
      <div className="about-right">
        <h2 className="about-right-h2">About Company</h2>
        <h1 className="about-right-h1">You start the engine and your adventure begins</h1>

        <p className="about-right-p">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </p>
        <div className="about-icons-and-numbers">
          <div className="about-icon-item">
            <img src="https://cdn.discordapp.com/attachments/336171716126572548/1185000646722727996/output-onlinepngtools_2.png?ex=658e04da&is=657b8fda&hm=27cdd7080dc9fe0c910ef1fcd4676e579f8d5adbffa35c631f1535a23fe12792&" ></img>
            <div className="icon-item-bottom">
              <h1 className="icon-h1">20</h1>
              <p className="icon-p">Car Types</p>
            </div>
          </div>

          <div className="about-icon-item">
            <img src="https://cdn.discordapp.com/attachments/336171716126572548/1185007866986377266/output-onlinepngtools_4.png?ex=658e0b93&is=657b9693&hm=504e6c05747a094e5954ceb67a414b04c8252c6d67b39227a2c2b125609b1dca&"></img>
            <div className="icon-item-bottom">
              <h1 className="icon-h1">85</h1>
              <p className="icon-p">Rental Outlets</p>
            </div>
          </div>

          <div className="about-icon-item">
            <img className="about-last-icon" src="https://cdn.discordapp.com/attachments/336171716126572548/1185008026399293510/output-onlinepngtools_5.png?ex=658e0bb9&is=657b96b9&hm=32b58a4296f3daa7fabbca787f609b6904174fc661bd6f1502e8ce1efb9fab6f&"></img>
            <div className="icon-item-bottom">
              <h1 className="icon-h1">75</h1>
              <p className="icon-p">Repair Shop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
