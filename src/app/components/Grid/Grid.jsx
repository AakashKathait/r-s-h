"use client";
import React, { useState } from "react";
import Image from "next/image";

const Grid = () => {
  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Click handler for images
  const handleClick = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  // Close handler for the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const images = [];
  const imagesMenu = [];
  for (let i = 1; i <= 36; i++) {
    images.push(require(`../../assets/PICS/image (${i}).jpg`));
  }
  for (let i = 37; i <= 49; i++) {
    imagesMenu.push(require(`../../assets/PICS/image (${i}).jpg`));
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 ">
        {imagesMenu.map((image, index) => (
          <div key={index} className="p-2 relative">
            <Image
              className="w-full h-auto object-cover rounded-lg "
              src={image.default}
              alt={`image-${index}`}
              onClick={() => handleClick(image.default)}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {images.map((image, index) => (
          <div key={index} className="p-2 relative">
            <Image
              className="w-full h-auto object-cover rounded-lg"
              src={image.default}
              alt={`image-${index}`}
              onClick={() => handleClick(image.default)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 flex justify-center items-center"
          onClick={closeModal} // Close modal when background is clicked
        >
          <span
            className="absolute top-4 right-8 text-white text-2xl cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <Image
            className="max-w-full max-h-full object-contain"
            src={selectedImage}
            alt="Selected"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
        </div>
      )}
    </>
  );
};

export default Grid;
