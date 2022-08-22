import React from 'react';
import styles from 'Components/Loader/Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__icon}></div>
    </div>
  );
};

export default Loader;
