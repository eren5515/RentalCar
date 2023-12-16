"use client";

import Link from "next/link";
import "@/app/styles/Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="nav-container">
      <Link href={"/"} className="brand-div">
        <img src="https://cdn.discordapp.com/attachments/336171716126572548/1184999132033724546/output-onlinepngtools_1.png?ex=658e0371&is=657b8e71&hm=b1a7396cce3d0a00624c71b5c3f3f260dd0c44a942c9790c5a577507109a2a54&"></img>
      </Link>

      <label for="drop" class="toggle-for-nav">
        <img
          onClick={() => setNavOpen(!navOpen)}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt=""
        />
      </label>
      <input type="checkbox" id="drop" />

      <div className="menus-div">
        <Link href="/">
          <h2>Home</h2>
        </Link>
        <Link href="/about">
          <h2>About</h2>
        </Link>
        <Link href="/vehicles">
          <h2>Vehicles</h2>
        </Link>

        <Link href="/contact">
          <h2>Contact</h2>
        </Link>
        <Link href="/testimonials">
          <h2>Testimonials</h2>
        </Link>
        <Link href="/our-team">
          <h2>Our Team</h2>
        </Link>
      </div>

      <div
        className={navOpen ? "mobile-menus-div nav-open" : "mobile-menus-div"}
      >
        <img
        onClick={() =>setNavOpen(!navOpen)}
          src="https://cdn.discordapp.com/attachments/336171716126572548/1184283431316750386/image-removebg-preview_11.png?ex=658b68e4&is=6578f3e4&hm=430d44f19c30d531f581a377a8e5a3750b50c8d7f205a45f228227229d8c901f&"
          alt=""
        />
        <Link onClick={() =>setNavOpen(!navOpen)}  href="/">
          <h2>Home</h2>
        </Link>
        <Link onClick={() =>setNavOpen(!navOpen)} href="/about">
          <h2>About</h2>
        </Link>
        <Link onClick={() =>setNavOpen(!navOpen)} href="/vehicles">
          <h2>Vehicles</h2>
        </Link>

        <Link onClick={() =>setNavOpen(!navOpen)} href="/contact">
          <h2>Contact</h2>
        </Link>
        <Link onClick={() =>setNavOpen(!navOpen)} href="/testimonials">
          <h2>Testimonials</h2>
        </Link>
        <Link onClick={() =>setNavOpen(!navOpen)} href="/our-team">
          <h2>Our Team</h2>
        </Link>
      </div>

      <div className="login-buttons-div">
        <button className="signin-button">Sign In</button>
        <button className="register-button">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
