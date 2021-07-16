import React from 'react';
import styles from './profile.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMapMarkedAlt, faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => (

  <section class={styles.container}>
    <h1 className={styles.title}>Profile</h1>
    <ul className={styles.ul}>
      <li className={styles.list}>
        <div>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </div>
        <div className={styles.info}>
          <span>이름</span>
          <span>태민규</span>
        </div>
      </li>
      <li className={styles.list}>
        <FontAwesomeIcon icon={faMapMarkedAlt} className={styles.icon} />
        <div className={styles.info}>
          <span >주소</span>
          <span>경기도 오산시</span>      
        </div>
      </li>
      <li className={styles.list}>
        <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
        <div className={styles.info}>
          <span>연락처</span>
          <span>010-XXXX-XXXX</span>  
        </div>
      </li>
      <li className={styles.list}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <div className={styles.info}>
          <span>이메일</span>
          <span>alsrb8442@naver.com</span>    
        </div>
      </li>
    </ul>
  </section>
);

export default Profile;