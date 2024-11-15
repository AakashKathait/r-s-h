import Image from "next/image";
import Heading from "../components/Heading/Heading.jsx";
import Modal from "../components/Modal/Modal.jsx";

const images = [];
for (let i = 1; i <= 58; i++) {
  images.push(require(`../assets/PICS/image (${i}).jpg`));
}

const Gallery = () => {
  // Click handler for images
  const handleClick = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };
  return (
    <div className="w-full flex justify-center p-4">
      <div className="mt-32 w-11/12">
        <Heading heading="Gallery" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <Image
                className="h-auto max-w-full rounded-lg object-cover object-center cursor-pointer"
                src={image.default}
                alt={`image-${index}`}
                onClick={() => handleClick(image.default)}
              />
            </div>
          ))}
        </div>
        <Modal />
      </div>
    </div>
  );
};

export const metadata = {
  title: "Gallery - Royal Seoul House",
  description:
    "Discover our vibrant gallery of authentic Korean BBQ dishes and dining experiences at Royal Seoul House in Vancouver.",
};
export default Gallery;
