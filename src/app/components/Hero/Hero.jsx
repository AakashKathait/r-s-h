import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen backgroundImage">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <br /> Royal Seoul House
          </h1>
          <p className="mb-5">
            Ever Since it was founded in 1990, Royal Seoul House Korean BBQ
            Restaurant has maintained its original quality of Korean cuisine for
            over 30 years
          </p>
          <button className="btn btn-primary font-mont">
            <Link href="https://www.bestfoodtodayorder.com/ordering/restaurant/menu?restaurant_uid=bd2bd132-e79b-404f-ae3d-25f87d1505e6">
              Order Here
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
