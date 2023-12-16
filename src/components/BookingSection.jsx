"use client";

import "@/app/styles/Booking.scss";
import { useState, useEffect } from "react";
import { CAR_DATA } from "./Data";

function BookingSection() {
  const [carName, setCarName] = useState("Select Your Car");
  const [pickLocation, setPickLocation] = useState("Select Pick-up Location");
  const [dropLocation, setDropLocation] = useState("Select Drop-off Location");
  const [pickTime, setPickTime] = useState();
  const [dropTime, setDropTime] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);

 useEffect(() => {
  const dialog = document.getElementById("myDialog");
   
 }, [])
 
 
  function handleCarName(e) {
    setCarName(e.target.value);
  }
  function handlePickLocation(e) {
    setPickLocation(e.target.value);
  }
  function handleDropLocation(e) {
    setDropLocation(e.target.value);
  }
  function handlePickTime(e) {
    setPickTime(e.target.value);
  }
  function handleDropTime(e) {
    setDropTime(e.target.value);
  }

  function searchBooking() {
    if (
      carName === "Select Your Car" ||
      pickLocation === "Select Pick-up Location" ||
      dropLocation === "Select Drop-off Location" ||
      !dropTime ||
      !pickTime
    ) {
      console.log("as");

      setAlertVisible(true);
    } else {
      setDialogOpen(true);
      dialog.showModal();
    }
  }

  function handleAlert() {
    setAlertVisible(false);
  }
  function handleClose() {
    dialog.close();
    setDialogOpen(false);
  }

  return (
    <div id="booking" className="booking-wrap">
      <h2>Book a car</h2>
      <div className={alertVisible ? "booking-error-alert" : "alert-disabled"}>
        <h3>Please fill all the fields!</h3>
        <img
          src="https://cdn.discordapp.com/attachments/336171716126572548/1184283431316750386/image-removebg-preview_11.png?ex=658b68e4&is=6578f3e4&hm=430d44f19c30d531f581a377a8e5a3750b50c8d7f205a45f228227229d8c901f&"
          onClick={handleAlert}
          className="alert-close-button close-button"
        ></img>
      </div>
      <div className="booking-grid">
        <div className="grid-item">
          <label for="car">Select Your Car</label>
          <select value={carName} onChange={handleCarName} id="car">
            <option value="Select Your Car">Select Your Car</option>
            <option value={0}>BMW 3.20i</option>
            <option value={1}>Volkswagen Golf</option>
            <option value={2}>Renault Symbol</option>
            <option value={3}>Honda Civic</option>
            <option value={4}>Nissan Qashqai</option>
            <option value={5}>Hyundai i20</option>
          </select>
        </div>
        <div className="grid-item">
          <label for="pick-location">Pick-up Location</label>
          <select
            id="pick-location"
            value={pickLocation}
            onChange={handlePickLocation}
          >
            <option value="Select Pick-up Location">
              Select Pick-up Location
            </option>
            <option value="Istanbul">Istanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="Izmir">Izmir</option>
            <option value="Antalya">Antalya</option>
            <option value="Samsun">Samsun</option>
          </select>
        </div>
        <div className="grid-item">
          <label for="drop-location">Drop-off Location</label>
          <select
            id="drop-location"
            value={dropLocation}
            onChange={handleDropLocation}
          >
            <option value="Select Drop-off Location">
              Select Drop-off Location
            </option>
            <option value="Istanbul">Istanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="Izmir">Izmir</option>
            <option value="Antalya">Antalya</option>
            <option value="Samsun">Samsun</option>
          </select>
        </div>
        <div className="grid-item">
          <label for="pick-time"> Drop-off Date</label>{" "}
          <input
            id="pick-time"
            type="date"
            value={pickTime}
            onChange={handlePickTime}
          ></input>
        </div>
        <div className="grid-item">
          <label for="drop-time"> Drop-off Date</label>
          <input
            id="drop-time"
            type="date"
            value={dropTime}
            onChange={handleDropTime}
          ></input>
        </div>

        <div className="grid-item search-button-cover">
          <button onClick={searchBooking}>Search</button>
        </div>
      </div>

      <dialog id="myDialog" className="modal">
        <div className="dialog-container">
          <div className="dialog-top-div">
            <h1>COMPLETE RESERVATION</h1>
            <img
              onClick={handleClose}
              className="close-button"
              src="https://cdn.discordapp.com/attachments/336171716126572548/1184283431316750386/image-removebg-preview_11.png?ex=658b68e4&is=6578f3e4&hm=430d44f19c30d531f581a377a8e5a3750b50c8d7f205a45f228227229d8c901f&"
            ></img>
          </div>
          <div className="dialog-second-top-div">
            <div className="dialog-h2-and-icon">
              {" "}
              <img src="https://cdn.discordapp.com/attachments/336171716126572548/1184268221369552907/image-removebg-preview_10.png?ex=658b5aba&is=6578e5ba&hm=81b22eb3509efdc6b7422eaa3741e3b803c76d624190927105cf0782c586fa87&"></img>
              <h2>
                Upon completing this reservation enquiry, you will receive:
              </h2>
            </div>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div className="information-div">
            <div className="information-left">
              <h2 className="information-left-h2">Location & Date</h2>

              <div className="information-left-item">
                <div className="information-left-icon-and-text">
                  <img src="https://cdn.discordapp.com/attachments/336171716126572548/1184287910636298360/image-removebg-preview_13.png?ex=658b6d10&is=6578f810&hm=9f3e277c2fd4319f6492e6bd5da2c07cebae02989dc1910f715f4395a56da080&"></img>
                  <h2>Pick-Up Time</h2>
                </div>
                <p>{pickTime}</p>
              </div>

              <div className="information-left-item">
              <div className="information-left-icon-and-text">
                  <img src="https://cdn.discordapp.com/attachments/336171716126572548/1184287910636298360/image-removebg-preview_13.png?ex=658b6d10&is=6578f810&hm=9f3e277c2fd4319f6492e6bd5da2c07cebae02989dc1910f715f4395a56da080&"></img>
                  <h2>Drop-off Time</h2>
                </div>
                <p>{dropTime}</p>
              </div>

              <div className="information-left-item">
              <div className="information-left-icon-and-text">
                  <img src="https://cdn.discordapp.com/attachments/336171716126572548/1184287741773623437/image-removebg-preview_12.png?ex=658b6ce8&is=6578f7e8&hm=360ae7a544a3247f9610d93667d47baeb745b265c7c6eaae02ec65ecd645829f&"></img>
                  <h2>Pick-Up Location</h2>
                </div>
                <p>{pickLocation}</p>
              </div>

              <div className="information-left-item">
              <div className="information-left-icon-and-text">
                  <img src="https://cdn.discordapp.com/attachments/336171716126572548/1184287741773623437/image-removebg-preview_12.png?ex=658b6ce8&is=6578f7e8&hm=360ae7a544a3247f9610d93667d47baeb745b265c7c6eaae02ec65ecd645829f&"></img>
                  <h2>Drop-off Location</h2>
                </div>
                <p>{dropLocation}</p>
              </div>
            </div>
            <div className="information-right">
              <h2 className="information-left-h2">
                {dialogOpen ? "CAR: " + CAR_DATA[carName][0].name : "CAR: "}
              </h2>
              <img src={dialogOpen ? CAR_DATA[carName][0].img : null}></img>
            </div>
          </div>

          <div className="dialog-form-div">
            <h2>PERSONAL INFORMATION</h2>

            <form>
              <div className="form-grid">
                <div className="input-and-label-div">
                  <label for="#firstname">First Name <span>*</span></label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="input-and-label-div">
                  <label for="#lastname">Last Name <span>*</span></label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="input-and-label-div">
                  <label for="#number">Phone Number <span>*</span></label>
                  <input
                    id="number"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="input-and-label-div">
                  <label for="#age">Age <span>*</span></label>
                  <input id="age" type="text" placeholder="Enter your age" />
                </div>

                <div className="input-and-label-div grid-double">
                  <label for="#mail">Email <span>*</span></label>
                  <input
                    id="mail"
                    type="text"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="input-and-label-div grid-double">
                  <label for="#address">Address <span>*</span></label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Enter your street address"
                  />
                </div>

                <div className="input-and-label-div">
                  <label for="#city">City <span>*</span></label>
                  <input id="city" type="text" placeholder="Enter your city" />
                </div>

                <div className="input-and-label-div">
                  <label for="#zipcode">Zip Code <span>*</span></label>
                  <input
                    id="zipcode"
                    type="text"
                    placeholder="Enter your zip code"
                  />
                </div>
              </div>
              <div className="form-bottom-div">
                <button>Reserve Now</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default BookingSection;
