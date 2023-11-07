import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'Hooks/ModalContext';

export const ImageGallery = ({ images }) => {
  const { isModalOpen, openModal, closeModal, selectedImage } = useModal();

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
          imageUrl={selectedImage.webformatURL}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
