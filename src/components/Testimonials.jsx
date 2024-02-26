import "@/app/styles/Testimonials.scss";

function Testimonials() {
  return (
    <div className="testimonials-wrapper">
      <h3>Reviewed by People</h3>
      <h1>Client's Testimonials</h1>
      <p>
        Discover the positive impact we've made on the our clients by reading
        through their testimonials. Our clients have experienced our service and
        results, and they're eager to share their positive experiences with you.
      </p>
      <div className="testimonials-div">
        <div className="testimonial-card">
          <h2>
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </h2>
          <div className="testimonial-card-bottom">
            <div className="testimonial-card-bottom-left">
              <img className="person-img" src="https://github.com/eren5515/asd/blob/main/image.png?raw=true"></img>
              <div>
                <h1>Berk Yılmaz</h1>
                <h3>Istanbul</h3>
              </div>
            </div>
            <img className="quote-img" src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_7.png?raw=true"></img>
          </div>
        </div>
        <div className="testimonial-card">
          <h2>
          "The car was in great condition and made our trip even better. Prices was very affordable. Highly recommend for this car rental website!"
          </h2>
          <div className="testimonial-card-bottom">
            <div className="testimonial-card-bottom-left">
              <img className="person-img" src="https://github.com/eren5515/asd/blob/main/image%20(1).png?raw=true"></img>
              <div>
                <h1>Selin Aydın</h1>
                <h3>Izmir</h3>
              </div>
            </div>
            <img className="quote-img" src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_7.png?raw=true"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
