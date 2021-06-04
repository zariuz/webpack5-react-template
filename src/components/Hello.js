import React from 'react';
import styles from './hello.module.css';

const Hello = () => {
  return (
    <div className={styles.hello}>
      <p className={styles.helloRed}>Hello!!!</p>
    </div>
  );
};

export default Hello;
