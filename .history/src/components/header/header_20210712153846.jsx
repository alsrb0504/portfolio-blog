import React from 'react';
import styles from './header.module.css';

const Header = (props) => {


  return(
    <header>
      <span>MinKyu</span>
      <ul>
        <li><span>Home</span></li>
        <li><span>About me</span></li>
        <li><span>Tech</span></li>
        <li><span>Projects</span></li>
      </ul>
    </header>
  )
}

export default Header;