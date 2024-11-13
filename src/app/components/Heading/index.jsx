import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const index = ({ heading }) => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-barlow heading-size text-base-content">
          {heading}
        </h1>
        <div className="socials-container text-neutral-content">
          <span>
            <a href="https://g.co/kgs/ypmb2kj" target="_blank" rel="noreferrer">
              <FaGoogle size={30} className="socials" />
            </a>
            <a
              href="https://www.instagram.com/royalseoulhouse/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} className="socials" />
            </a>
          </span>
        </div>
      </div>
      <hr className="mb-8" />
    </>
  );
};

export default index;
