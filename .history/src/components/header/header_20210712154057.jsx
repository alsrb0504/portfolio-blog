import React from 'react';
import styles from './header.module.css';

const Header = (props) => {


  return(
    <header className={styles.header}>
      <h2 className={styles.title}>MinKyu</h2>
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