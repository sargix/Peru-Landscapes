import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import styles from 'Content/Atractions/Atractions.module.scss';
import { atractionsInf as atractionsInfo } from 'Data/atractionsInf';

const Atractions = () => {
  const sliderClick = (id) => {
    const elements = document.getElementsByClassName(styles.atractions__articleSlider);
    const arrows = document.getElementsByClassName(styles.atractions__articleIcon);

    if (id % 2 === 0) {
      elements[id - 1].classList.toggle(styles.atractions__articleSliderActiveEven);
      arrows[id - 1].classList.toggle(styles.atractions__articleIconActiveEven);
    } else {
      elements[id - 1].classList.toggle(styles.atractions__articleSliderActiveOdd);
      arrows[id - 1].classList.toggle(styles.atractions__articleIconActiveOdd);
    }
  };

  const articleSliderClassName = (index) => {
    if (index % 2 === 0) return `${styles.atractions__articleSlider} + ' ' + ${styles.atractions__articleSliderEven}`;
    else return `${styles.atractions__articleSlider} + ' ' + ${styles.atractions__articleSliderOdd}`;
  };

  const articles = atractionsInfo.map((atraction, index) => (
    <div className={styles.atractions__article} key={atraction.title}>
      <div className={articleSliderClassName(index)}>
        <p className={styles.atractions__descriptionArticle}>{atraction.description}</p>
      </div>
      <div className={styles.atractions__articleWrap}>
        <h2 className={styles.atractions__titleArticle}>{atraction.title}</h2>

        <div className={styles.atractions__articleArrow}>
          <FontAwesomeIcon
            className={styles.atractions__articleIcon}
            icon={index % 2 === 0 ? faArrowCircleRight : faArrowCircleLeft}
            onClick={() => sliderClick(atraction.id)}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <section id="atractions" className={styles.atractions}>
      <h1 className={styles.atractions__title}>Atrakcje turystyczne</h1>
      <article className={styles.atractions__articles}>{articles}</article>
    </section>
  );
};

export default Atractions;
