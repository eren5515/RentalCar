"use client";

import "@/app/styles/ChooseUs.scss";

function ChooseUs() {
  return (
    <div className="choose-us-wrapper">
      <img src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/display_car_image-1024x449.png"></img>
      <div className="choose-us-container">
        <div className="choose-us-left">
          <h3>Why Choose Us</h3>
          <h1>Best valued deals you will ever find</h1>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <a href="#booking">Find Deals</a>
        </div>
        <div className="choose-us-right">
          <div className="choose-right-item">
            <h2>Cross Country Drive</h2>
            <p>
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </p>
          </div>
          <div className="choose-right-item">
            <h2>All Inclusive Pricing</h2>
            <p>
              Get everything you need in one convenient, transparent price with
              our all-inclusive pricing policy.
            </p>
          </div>
          <div className="choose-right-item">
            <h2>No Hidden Charges</h2>
            <p>
              Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
