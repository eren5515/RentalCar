import "@/app/styles/VehicleList.scss";

function VehicleList({ cars }) {
  return (
    <div className="vehicle-list-container">
      {cars.map((car) => (
        <div className="vehicle-list-item">
          <img
            className="vehicle-list-item-car-img"
            src={car[0].listimg}
            alt=""
          />

          <div className="vehicle-title-and-price-div">
            <div className="vehicle-title-and-price-div-left">
              <h1>{car[0].name}</h1>
              <img
                src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/07/start.png"
                alt=""
              />
            </div>
            <div className="vehicle-title-and-price-div-right">
              <h1>
                <span>$</span>
                {car[0].price}
              </h1>
              <p>per day</p>
            </div>
          </div>
          <div className="vehicle-list-item-information">
            <div className="vehicle-list-item-information-left">
              <h2>{car[0].type}</h2>
              <h2>{car[0].transmission}</h2>
            </div>
            <div className="vehicle-list-item-information-right">
              <h2>5 Seats</h2>
              <h2>{car[0].fuel}</h2>
            </div>
          </div>
          <hr />
          <div className="vehicle-list-item-bottom">
          <button>Book Ride</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default VehicleList;
