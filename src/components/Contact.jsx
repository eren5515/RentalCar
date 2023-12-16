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
              src="https://cdn.discordapp.com/attachments/336171716126572548/1185024435040833596/image-removebg-preview_14.png?ex=658e1b02&is=657ba602&hm=d21cbc0bdd0d5c55780c917c51c28adc43d5550735206e4a93d8eb70a12ba591&"
              alt=""
            />
            <h2>(562) 498-4600</h2>
          </div>
          <div className="contact-icon-item">
            <img
              src="https://cdn.discordapp.com/attachments/336171716126572548/1185024846724354068/image-removebg-preview_15.png?ex=658e1b64&is=657ba664&hm=ec56e5f0d876326ab0ed22e2ece15d5c10a214543cd8d045ef2f4449aa93cff7&"
              alt=""
            />
            <h2>xyz@carrental.com</h2>
          </div>
          <div className="contact-icon-item">
            <img
              src="https://cdn.discordapp.com/attachments/336171716126572548/1185025834042531951/image-removebg-preview_17.png?ex=658e1c4f&is=657ba74f&hm=2c04a37c4e81b517c23e0d3b9a5fa21441d52a7b86c46e14b606dbc6e82f3716&"
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
