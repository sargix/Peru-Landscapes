import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { peruInf as peruData } from 'Data/peruInf';
import styles from 'Content/Informations/Informations.module.scss';

const Informations = () => {
  const showInfoDetails = (id) => {
    const iconsOut = document.getElementsByClassName(styles.informations__iconOut);
    const iconsIn = document.getElementsByClassName(styles.informations__iconIn);
    const infoProp = document.getElementsByClassName(styles.informations__property);
    const infoValue = document.getElementsByClassName(styles.informations__value);

    iconsOut[id - 1].classList.toggle(styles.informations__iconOutActive);
    iconsIn[id - 1].classList.toggle(styles.informations__iconInActive);
    infoProp[id - 1].classList.toggle(styles.informations__propertyActive);
    infoValue[id - 1].classList.toggle(styles.informations__valueActive);
  };

  const valueValid = (element) => {
    if (element.constructor === Array) {
      const list = element.map((item, index) => (
        <li className={styles.informations_li} key={index}>
          {item}
        </li>
      ));
      return <ul className={styles.informations__ul}>{list}</ul>;
    } else return element;
  };
  const infoArticles = peruData.map((item, index) => (
    <div className={styles.informations__info} key={item.id} onClick={() => showInfoDetails(item.id)}>
      <div className={styles.informations__iconOut}>
        <FontAwesomeIcon className={styles.informations__iconIn} icon={item.icon} />
      </div>
      <div className={styles.informations__wrap}>
        <h2 className={styles.informations__property}>{item.property}</h2>
        <h2 className={styles.informations__value}>{valueValid(item.value)}</h2>
      </div>
    </div>
  ));
  return (
    <section id="informations" className={styles.informations}>
      <h1 className={styles.informations__title}>Informacje</h1>
      <article className={styles.informations__main}>{infoArticles}</article>
    </section>
  );
};

export default Informations;
