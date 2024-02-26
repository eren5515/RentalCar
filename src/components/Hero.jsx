import "@/app/styles/Hero.scss";

function Hero() {


  return (

   <div className="hero-wrapper">
    <div className="hero-container">
    <img className="hero-bg-img" src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_18_1.png?raw=true"></img>

        <div className="hero-left">
            <h3>Rent a car now</h3>
            <h1>Save {<span>big</span>} with our car rental</h1>
            <p>From compact to luxury, find your perfect ride. Easy, affordable, and reliable</p>
            <div className="hero-buttons">
                <a href="#booking"><button className="book-button w-full">Book a Ride</button></a>
                <button className="learn-button">Learn More</button>

            </div>

        </div>
        <div className="hero-right">
            <img src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-sydney-cars-automobile-dealership-bahrain-5.png"></img>
        </div>
    </div>
   </div>


  )
    
}

export default Hero;