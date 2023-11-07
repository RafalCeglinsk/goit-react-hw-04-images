import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from './Button/button';
import Loader from './Loader/Loader';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ModalProvider } from 'Hooks/ModalContext';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const apiKey = '39327877-cfcae8ebaa5cb1597dd56f6f0';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
    axios
      .get(url)
      .then(response => {
        setImages(response.data.hits);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [query, currentPage]);
  const handleSubmit = query => {
    setQuery(query);
    setIsLoading(true);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <ModalProvider>
        <SearchBar onSubmit={handleSubmit} />
        <ImageGallery images={images} selectedImage={selectedImage} />
        <Button onClick={handleLoadMore} />
        <Loader loading={isLoading} />
      </ModalProvider>
    </div>
  );
};
