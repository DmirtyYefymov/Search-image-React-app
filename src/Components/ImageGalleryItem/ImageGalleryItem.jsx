import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, tags } = image;

  return (
    <li id={image.id} onClick={openModal} className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
