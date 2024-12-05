import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { TbClockHour3 } from "react-icons/tb";
import front from "../assets/front.jpg";
import Image from "next/image";
import Heading from "../components/Heading/Heading.jsx";
import Coords from "../components/Coords/Coords.jsx";

const Find = () => {
  const email = "royalseoulhouse@gmail.com";
  const phone = "(604) 739-9001";
  const address = "1215 West Broadway, Vancouver, BC, V6H 1G7";

  return (
    <div className="w-full min-h-screen relative flex justify-center text-neutral-content ">
      <div className="container pt-5 pb-8 ">
        <Heading heading="Find Us" />
        <div className="contact">
          <div className="contact-info font-mont">
            <div className="flex">
              <IoLocationOutline size={25} className="mr-2" />{" "}
              <a
                className="contact-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                1215 West Broadway <br /> Vancouver, BC, V6H 1G7,
              </a>
            </div>
            <div className="flex">
              <IoMdCall size={25} className="mr-2" />
              <a
                className="contact-link"
                href={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phone}
              </a>
            </div>
            <div className="flex">
              <MdOutlineEmail size={25} className="mr-2" />
              <a
                className="contact-link"
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </a>
            </div>
            <div className="flex">
              <TbClockHour3 size={25} className="mr-2" />
              Monday: 11:30 am –10 pm <br /> Tuesday: 11:30 am –10  pm <br />
              Wednesday: 11:30 am –10 pm <br /> Thursday: 11:30 am –10 pm
              <br /> Friday: 11:30 am –12 am
              <br /> Saturday: 11:30 am –12 am <br /> Sunday: 11:30 am –12 am
              <br /> <br /> *Closed for lunch <br />
              from 3:30 pm to 4:30 pm*
            </div>
          </div>
          <div className="front-img">
            <Image
              src={front}
              alt="Front of the restaurant"
              className="front-image"
            />
          </div>
        </div>
        <hr className="my-12" />
        <div className="map-container">
          <Coords />
        </div>
      </div>
    </div>
  );
};
export const metadata = {
  title: "Contact Us - Royal Seoul House",
  description:
    "Get in touch with Royal Seoul House for reservations, inquiries, or catering. Visit us at 1215 West Broadway, Vancouver.",
};

export default Find;
