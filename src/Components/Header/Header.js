import React, { useContext } from 'react';
import { AppContext } from 'Context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from 'Components/Header/Header.module.scss';

const Header = () => {
  const { toggleStateActiveMenu } = useContext(AppContext);
  return (
    <>
      <h1 className={styles.title}>Peru Landscapes</h1>
      <header className={styles.header}>
        <div className={styles.header__btn} onClick={toggleStateActiveMenu}>
          <FontAwesomeIcon className={styles.header__icon} icon={faBars} />
        </div>
      </header>
    </>
  );
};

export default Header;
