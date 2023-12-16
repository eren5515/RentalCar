"use client";
import "@/app/styles/ScrollUpButton.scss";
import { useEffect, useState } from "react";

function ScrollUpButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  function scrollToTop() {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  }

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={
        isScrolled
          ? "scroll-up-button-div scroll-button-active"
          : "scroll-up-button-div"
      }
    >
      ^
    </div>
  );
}

export default ScrollUpButton;
