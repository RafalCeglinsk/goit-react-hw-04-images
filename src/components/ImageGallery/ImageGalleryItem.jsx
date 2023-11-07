import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { useModal } from 'Hooks/ModalContext';

export const ImageGalleryItem = ({ image }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { webformatURL, tags } = image;
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} onClick={() => openModal(image)} />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          imageUrl={webformatURL}
          alt={tags}
          onClose={closeModal}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
