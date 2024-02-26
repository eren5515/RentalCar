import "@/app/styles/Contact.scss";

function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-left">
        <h1>Need additional information?</h1>
        <p>
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <div className="contact-left-icons">
          <div className="contact-icon-item">
            <img
              src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_14.png?raw=true"
              alt=""
            />
            <h2>(562) 498-4600</h2>
          </div>
          <div className="contact-icon-item">
            <img
              src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_15.png?raw=true"
              alt=""
            />
            <h2>xyz@carrental.com</h2>
          </div>
          <div className="contact-icon-item">
            <img
              src="https://github.com/eren5515/asd/blob/main/image-removebg-preview_17.png?raw=true"
              alt=""
              className="contact-img-last"
            />
            <h2>Istanbul, Turkey</h2>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-right-item">
          <label for="#contact-name">
            Full Name <span>*</span>
          </label>
          <input type="text" placeholder="Enter your name" id="contact-name" />
        </div>

        <div className="contact-right-item">
          <label for="#contact-mail">
            Email <span>*</span>
          </label>
          <input type="text" placeholder="Enter your name" id="contact-mail" />
        </div>

        <div className="contact-right-item">
          <label for="#contact-text">
            Tell us about it <span>*</span>
          </label>
          <textarea
            placeholder="Write here..."
            id="contact-text"
            rows="4"
          ></textarea>
        </div>

        <button>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
