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
            <img src="https://cdn.discordapp.com/attachments/336171716126572548/1183743742629400616/image-removebg-preview_5.png?ex=65897245&is=6576fd45&hm=7b34b9b1c58c1633be0a490a05e8138dea010b449011ccb835560020c0b0c586&"></img>
          <h2 className="plan-flex-item-h2">Select a Car</h2>

          <p className="plan-flex-item-p">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className="plan-flex-item">
            <img src="https://cdn.discordapp.com/attachments/336171716126572548/1183741766311100478/image-removebg-preview_2.png?ex=6589706d&is=6576fb6d&hm=a1ae2bc57462456a22988c2ad67fa6b4a7c88c0fec43cbdb8806f2d51def0d49&"></img>
          <h2 className="plan-flex-item-h2">Contact Us</h2>

          <p className="plan-flex-item-p">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className="plan-flex-item">
            <img src="https://cdn.discordapp.com/attachments/336171716126572548/1183742966028828682/image-removebg-preview_3.png?ex=6589718b&is=6576fc8b&hm=c58f70827ff21cf0f2da332c20610d18f6c8a839e5923cef195694adf802c1ba&"></img>
          <h2 className="plan-flex-item-h2">Enjoy Your Ride</h2>

          <p className="plan-flex-item-p">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
      </div>
    </div>
  );
}

export default Plan;
