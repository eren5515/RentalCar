"use client";

import { CAR_DATA } from "./Data";

import "@/app/styles/CarOptions.scss";
import { useState, useEffect } from "react";

function CarOptions() {
    const [selectedCar, setSelectedCar] = useState(0)
  return (
    <div className="car-options-wrapper">
      <h3>Our Vehicles</h3>
      <h1>Variety of Options</h1>
      <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
      <div className="car-options-container">
        <div className="car-options-div">
          {CAR_DATA.map((car,index) => (
            
              <h2 onClick={() => setSelectedCar(index)} className={selectedCar==index?"active-car":"select-car-item"}>{car[0].name}</h2>
            
          ))}
        </div>
        <img src={CAR_DATA[selectedCar][0].img} alt="" />
        <div className="car-details">
            <div className="car-price"><span>{"$"+CAR_DATA[selectedCar][0].price}</span> / Per day</div>
            <div className="table-row">
                <span className="table-row-left-span">Model</span>
                <span className="table-row-right-span">{CAR_DATA[selectedCar][0].model}</span>
            </div>
            <div className="table-row">
                <span className="table-row-left-span">Mark</span>
                <span className="table-row-right-span">{CAR_DATA[selectedCar][0].mark}</span>
            </div>
            <div className="table-row">
                <span className="table-row-left-span">Year</span>
                <span className="table-row-right-span">{CAR_DATA[selectedCar][0].year}</span>
            </div>
            <div className="table-row">
                <span className="table-row-left-span">Doors</span>
                <span className="table-row-right-span">{CAR_DATA[selectedCar][0].doors}</span>
            </div>
            <div className="table-row">
                <span className="table-row-left-span">AC</span>
                <span className="table-row-right-span">{CAR_DATA[selectedCar][0].air}</span>
            </div>
            <div className="table-row">
                <span className="table-row-left-span">Transmission</span>
                <span className="table-row-right-span">{CAR_DATA[selectedCar][0].transmission}</span>
            </div>
            <div className="table-row">
                <span className="table-row-left-span">Fuel</span>
                <span className="table-row-right-span">{CAR_DATA[selectedCar][0].fuel}</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CarOptions;
