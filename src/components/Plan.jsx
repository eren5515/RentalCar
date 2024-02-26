import Link from "next/link";
import "@/app/styles/Plan.scss";
import carIcon from "../images/plan/car-icon.png";

function Plan() {
  return (
    <div className="plan-container">
      <h3 className="plan-div-h3">Book your ride now</h3>
      <h1 className="plan-div-h1">Fast, easy, affordable car rental</h1>
      <div className="plan-flex-div">
        <div className="plan-flex-item">
            <img src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_5.png?raw=true"></img>
          <h2 className="plan-flex-item-h2">Select a Car</h2>

          <p className="plan-flex-item-p">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className="plan-flex-item">
            <img src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_2.png?raw=true"></img>
          <h2 className="plan-flex-item-h2">Contact Us</h2>

          <p className="plan-flex-item-p">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className="plan-flex-item">
            <img src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_3.png?raw=true"></img>
          <h2 className="plan-flex-item-h2">Enjoy Your Ride</h2>

          <p className="plan-flex-item-p">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
      </div>
    </div>
  );
}

export default Plan;
