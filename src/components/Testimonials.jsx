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
              <img className="person-img" src="https://cdn.discordapp.com/attachments/336171716126572548/1183908498870894612/image.png?ex=658a0bb6&is=657796b6&hm=60aadb12f1b76c4ca852e3d16b9b38ce3b2f048e742d23f68ef9032f9e5d1b96&"></img>
              <div>
                <h1>Berk Yılmaz</h1>
                <h3>Istanbul</h3>
              </div>
            </div>
            <img className="quote-img" src="https://cdn.discordapp.com/attachments/336171716126572548/1183907408414773328/image-removebg-preview_7.png?ex=658a0ab2&is=657795b2&hm=632dd32fee4aa518c0a04777e3ea24f2ec1ca7d90f553aca27391ef3f0b45df9&"></img>
          </div>
        </div>
        <div className="testimonial-card">
          <h2>
          "The car was in great condition and made our trip even better. Prices was very affordable. Highly recommend for this car rental website!"
          </h2>
          <div className="testimonial-card-bottom">
            <div className="testimonial-card-bottom-left">
              <img className="person-img" src="https://cdn.discordapp.com/attachments/336171716126572548/1183910749412790292/image.png?ex=658a0dce&is=657798ce&hm=7e414c5b552a6602b79f2d2ce1d84155fdaea586bc353570a0b22b9351910c35&"></img>
              <div>
                <h1>Selin Aydın</h1>
                <h3>Izmir</h3>
              </div>
            </div>
            <img className="quote-img" src="https://cdn.discordapp.com/attachments/336171716126572548/1183907408414773328/image-removebg-preview_7.png?ex=658a0ab2&is=657795b2&hm=632dd32fee4aa518c0a04777e3ea24f2ec1ca7d90f553aca27391ef3f0b45df9&"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
