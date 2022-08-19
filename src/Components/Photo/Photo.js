import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import styles from 'Components/Photo/Photo.module.scss';

const Photo = ({ photoNr, isVisible = false, onClose, onChange, photos }) => {
  return (
    <div className={styles.photo} style={{ display: isVisible ? 'block' : 'none' }}>
      <div className={`${styles.photo__x} ${styles.photo__nav}`} onClick={onClose}>
        <FontAwesomeIcon className={styles.header__icon} icon={faTimesCircle} />
      </div>
      <div className={`${styles.photo__arrows} ${styles.photo__arrows___prev} ${styles.photo__nav}`} onClick={() => onChange(photoNr - 1, 'prev')}>
        <FontAwesomeIcon className={styles.header__icon} icon={faArrowCircleLeft} />
      </div>
      <div className={`${styles.photo__arrows} ${styles.photo__arrows___next} ${styles.photo__nav}`} onClick={() => onChange(photoNr + 1, 'next')}>
        <FontAwesomeIcon className={styles.header__icon} icon={faArrowCircleRight} />
      </div>
      <div className={styles.photo__wrap}>
        <div className={styles.photo__img} style={{ backgroundImage: 'url(' + photos[photoNr - 1] + ')' }}></div>
      </div>
    </div>
  );
};

export default Photo;
