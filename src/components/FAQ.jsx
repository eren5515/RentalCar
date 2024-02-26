"use client"
import "@/app/styles/FAQ.scss";
import { useState } from "react";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  function handleClick(id) {

    setOpenQuestion(openQuestion == id ? 0:id);
  }
  return (
    <div className="faq-wrapper">
      <h2>FAQ</h2>
      <h1>Frequently Asked Questions</h1>
      <p>
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </p>

      <div className="questions-div">
        <div className="question-div">
          <div className={openQuestion== 1 ? "question-top active-question":"question-top"} onClick={() => handleClick(1)}>
            <h4>1. What is special about comparing rental car deals?</h4>
            <img src={openQuestion!=1?"https://github.com/eren5515/asd/blob/main/image-removebg-preview_8.png?raw=true":"https://github.com/eren5515/asd/blob/main/image-removebg-preview_9.png?raw=true"}></img>
          </div>
          <div
            className={
              openQuestion != 1
                ? "question-answer"
                : "question-answer answer-active"
            }
          >
            <p>
              {" "}
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
        </div>

        <div className="question-div">
          <div className={openQuestion== 2 ? "question-top active-question":"question-top"} onClick={() => handleClick(2)}>
            <h4>2. How do I find the car rental deals?</h4>
            <img src={openQuestion!=2?"https://github.com/eren5515/asd/blob/main/image-removebg-preview_8.png?raw=true":"https://github.com/eren5515/asd/blob/main/image-removebg-preview_9.png?raw=true"}></img>
          </div>
          <div
            className={
              openQuestion != 2
                ? "question-answer"
                : "question-answer answer-active"
            }
          >
            <p>
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>
        </div>

        <div className="question-div">
          <div className={openQuestion== 3 ? "question-top active-question":"question-top"} onClick={() => handleClick(3)}>
            <h4>3. How do I find such low rental car prices?</h4>
            <img src={openQuestion!=3?"https://github.com/eren5515/asd/blob/main/image-removebg-preview_8.png?raw=true":"https://github.com/eren5515/asd/blob/main/image-removebg-preview_9.png?raw=true"}></img>
          </div>
          <div
            className={
              openQuestion != 3
                ? "question-answer"
                : "question-answer answer-active"
            }
          >
            <p>
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
