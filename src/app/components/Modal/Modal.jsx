"use client";
import React, { useState } from "react";

const Modal = () => {
  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close handler for the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
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

export default Modal;
