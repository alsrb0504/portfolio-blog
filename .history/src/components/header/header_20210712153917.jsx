import React from 'react';
import styles from './header.module.css';

const Header = (props) => {


  return(
    <header className={styles.header}>
      <span className={styles.}>MinKyu</span>
      <ul className={styles.}>
        <li className={styles.}><span>Home</span></li>
        <li className={styles.}><span>About me</span></li>
        <li className={styles.}><span>Tech</span></li>
        <li className={styles.}><span>Projects</span></li>
      </ul>
    </header>
  )
}

export default Header;