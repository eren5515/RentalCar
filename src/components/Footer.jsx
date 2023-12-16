import "@/app/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-section">
          <h1 className="footer-first-h1"><span>CAR</span> Rental</h1>
          <p>
            We offer a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="footer-tel-div">
            <h2>(123) 498-4600</h2>
          </div>
          <div className="footer-mail-div">
            <h2>example@carrental.com</h2>
          </div>
        </div>

        <div className="footer-section">
          <h1>COMPANY</h1>
          <a>New York</a>
          <a>Careers</a>
          <a>Mobile</a>
          <a>Blog</a>
          <a>How we work</a>

        </div>

        <div className="footer-section">
          <h1>WORKING HOURS</h1>

          <h3><span>Mon - Fri:</span> 09:00AM - 09:00PM</h3>
          <h3><span>Sat:</span> 09:00AM - 07:00PM</h3>
          <h3><span>Sun:</span> Closed</h3>

        </div>

        <div className="footer-section">
          <h1>SUBSCRIPTION</h1>

          <p>Subscribe your Email address for latest news & updates.</p>
          <input placeholder="Enter E-mail Adress"></input>
          <button>Submit</button>
        </div>

       
      </div>
    </footer>
  );
}

export default Footer;
