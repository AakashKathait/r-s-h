"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logo from "../../assets/RSH-logo.GIF";
import Image from "next/image";

function Navbar() {
  const currentPage = usePathname();

  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    // Ensure the code only runs in the browser
    if (typeof window === "undefined") return;

    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < 20) {
        setShowNav(true);
      } else if (lastScroll < window.scrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScroll = window.scrollY;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowNav]);

  return (
    <div className={showNav ? "navbar-container" : "hide navbar-container"}>
      <div className="navbaar font-barlow">
        <div
          className={toggleNavbar ? "hamburger toggler" : "hamburger"}
          onClick={() => {
            setToggleNavbar((oldState) => !oldState);
          }}
        >
          <div className="line first-line"></div>
          <div className="line second-line"></div>
        </div>
        <Link className="logo-container" href="/">
          <Image className="logo" src={logo} />
          <h1 className="logo-head">Royal Seoul House</h1>
        </Link>
        <div className="links">
          <ul style={{ top: toggleNavbar ? "0" : "-100vh" }}>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${1 / 7 + 0.2}s`
                  : "",
              }}
            >
              <Link
                onClick={() => {
                  setToggleNavbar((oldState) => !oldState);
                }}
                className={currentPage === "/" ? "active" : "nav-link"}
                href="/"
              >
                Home
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${2 / 7 + 0.2}s`
                  : "",
              }}
            >
              <Link
                onClick={() => {
                  setToggleNavbar((oldState) => !oldState);
                }}
                className={
                  currentPage === "/reservation" ? "active" : "nav-link"
                }
                href="https://www.yelp.com/reservations/royal-seoul-house-korean-restaurant-vancouver-2/widget?color-scheme=&orientation=vertical&microsite-widget-redirect=True"
              >
                Reservation
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${3 / 7 + 0.2}s`
                  : "",
              }}
            >
              <Link
                onClick={() => {
                  setToggleNavbar((oldState) => !oldState);
                }}
                className={currentPage === "/OO" ? "active" : "nav-link"}
                href="https://www.bestfoodtodayorder.com/ordering/restaurant/menu?restaurant_uid=bd2bd132-e79b-404f-ae3d-25f87d1505e6"
              >
                Order
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${4 / 7 + 0.2}s`
                  : "",
              }}
            >
              <Link
                onClick={() => {
                  setToggleNavbar((oldState) => !oldState);
                }}
                className={currentPage === "/gallery" ? "active" : "nav-link"}
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${5 / 7 + 0.2}s`
                  : "",
              }}
            >
              <Link
                onClick={() => {
                  setToggleNavbar((oldState) => !oldState);
                }}
                className={currentPage === "/about" ? "active" : "nav-link"}
                href="/about"
              >
                About
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${6 / 7 + 0.2}s`
                  : "",
              }}
            >
              <Link
                onClick={() => {
                  setToggleNavbar((oldState) => !oldState);
                }}
                className={currentPage === "/find" ? "active" : "nav-link"}
                href="/find"
              >
                Find Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
