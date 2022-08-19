import React, { useState } from 'react';
import Photo from 'Components/Photo/Photo';
import styles from 'Content/Landscapes/Landscapes.module.scss';
import { photos } from 'Data/photos';

const Landscapes = () => {
  const [photoNr, setPhotoNr] = useState(null);
  const [isVisiblePhoto, setIsVisiblePhoto] = useState(false);

  const showPhoto = (id) => {
    setPhotoNr(id);
    setIsVisiblePhoto(true);
  };

  const hidePhoto = () => {
    setIsVisiblePhoto(false);
  };

  const changePhoto = (id, direction) => {
    if (id >= 1 && id <= photos.length) setPhotoNr(id);
    else if (id < 1) setPhotoNr(photos.length);
    else if (id > photos.length) setPhotoNr(1);
  };

  const photosItems = photos.map((photo, index) => <div key={index} onClick={() => showPhoto(index + 1)} className={styles.landscapes__photo}></div>);
  return (
    <section id="landscapes" className={styles.landscapes}>
      <div className={styles.landscapes__wrap}></div>
      <h1 className={styles.landscapes__title}>Galeria</h1>
      <article className={styles.landscapes__gallery}>{photosItems}</article>
      <Photo photoNr={photoNr} isVisible={isVisiblePhoto} onClose={hidePhoto} onChange={changePhoto} photos={photos} />
    </section>
  );
};

export default Landscapes;
