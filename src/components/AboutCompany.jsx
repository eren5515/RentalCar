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
            <img src="https://github.com/eren5515/asd/blob/main/output-onlinepngtools_2.png?raw=true" ></img>
            <div className="icon-item-bottom">
              <h1 className="icon-h1">20</h1>
              <p className="icon-p">Car Types</p>
            </div>
          </div>

          <div className="about-icon-item">
            <img src="https://github.com/eren5515/asd/blob/main/output-onlinepngtools_4.png?raw=true"></img>
            <div className="icon-item-bottom">
              <h1 className="icon-h1">85</h1>
              <p className="icon-p">Rental Outlets</p>
            </div>
          </div>

          <div className="about-icon-item">
            <img className="about-last-icon" src="https://github.com/eren5515/asd/blob/main/output-onlinepngtools_5.png?raw=true"></img>
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
