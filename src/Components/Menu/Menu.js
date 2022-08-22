import React, { useContext, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from 'Context/AppContext';
import { menuItems } from 'Components/Menu/menuItems';
import styles from 'Components/Menu/Menu.module.scss';

const Menu = () => {
  const { isActiveMenu, toggleStateActiveMenu } = useContext(AppContext);
  const menuRef = useRef();

  const menuListItems = menuItems.map((item) => (
    <li key={item.id}>
      <Link onClick={toggleStateActiveMenu} className={styles.menu__item} smooth="true" to={item.path}>
        {item.title}
      </Link>
    </li>
  ));

  if (isActiveMenu) gsap.to(menuRef.current, { top: '0vh' });
  else gsap.to(menuRef.current, { top: '-100vh' });

  return (
    <nav className={styles.menu} ref={menuRef}>
      <ul className={styles.menu__list}>{menuListItems}</ul>
      <div className={styles.menu__btn} onClick={toggleStateActiveMenu}>
        <FontAwesomeIcon className={styles.menu__icon} icon={faTimesCircle} />
      </div>
    </nav>
  );
};

export default Menu;
