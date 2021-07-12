import React from 'react';
import styles from './header.module.css';

const Header = (props) => {


  return(
    <header className={styles.header}>
      <span className={styles.title}>MinKyu</span>
      <ul className={styles.menus}>
        <li className={styles.menu}><span>Home</span></li>
        <li className={styles.menu}><span>About me</span></li>
        <li className={styles.menu}><span>Tech</span></li>
        <li className={styles.menu}><span>Projects</span></li>
      </ul>
    </header>
  )
}

export default Header;