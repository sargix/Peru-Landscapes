import React, { useRef, useState } from 'react';
import { gsap } from 'gsap/all';
import styles from 'Content/Location/Location.module.scss';

const Location = () => {
  const locationImg1Ref = useRef();
  const locationImg2Ref = useRef();

  const [isHidden, setIsHidden] = useState(true);

  const handleClickBtn = () => {
    if (isHidden) {
      gsap.to(locationImg1Ref.current, { opacity: 0, duration: 1 });
      gsap.to(locationImg2Ref.current, { opacity: 1, duration: 1 });
    } else {
      gsap.to(locationImg1Ref.current, { opacity: 1, duration: 1 });
      gsap.to(locationImg2Ref.current, { opacity: 0, duration: 1 });
    }
    setIsHidden(!isHidden);
  };

  return (
    <section id="location" className={styles.location}>
      <h1 className={styles.location__title}>Lokalizacja</h1>
      <div className={styles.location__map_1} ref={locationImg1Ref}></div>
      <div className={styles.location__map_2} ref={locationImg2Ref}></div>
      <button className={styles.location__btn} onClick={handleClickBtn}>
        {isHidden ? 'Pokaż' : 'Ukryj'} na mapie
      </button>
    </section>
  );
};

export default Location;
