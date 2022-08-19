import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/all';
import { titles } from 'Data/titles';
import styles from 'Content/Start/Start.module.scss';

const Start = () => {
  const [activeTitle, setActiveTitle] = useState('');
  const titleRef = useRef();

  useEffect(() => {
    setActiveTitle(titles[Math.floor(Math.random() * titles.length)].name);
    setInterval(() => {
      const index = Math.floor(Math.random() * titles.length);
      setActiveTitle(titles[index].name);
      gsap.fromTo(titleRef.current, { opacity: '0', duration: 2 }, { opacity: '1', duration: 2 });
    }, 4000);
  }, []);

  const bgImages = titles.map((image) => <div key={image.id} className={styles.start__bg_image}></div>);

  return (
    <section id="start" className={styles.start}>
      {bgImages}
      <div className={styles.start__wrap}>
        <h1 className={styles.start__title} ref={titleRef}>
          {activeTitle}
        </h1>
      </div>
    </section>
  );
};

export default Start;
