import React, { useState } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from 'components/Modal/Modal';

export const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div>
      <ul className="ImageGallery">
        {images.map((image, index) => (
          <ImageGalleryItem
            key={index}
            image={image}
            onImageClick={() => openModal(image)}
          />
        ))}
      </ul>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          imageUrl={selectedImage.url}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
