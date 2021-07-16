import React from 'react';
import styles from './profile.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMapMarkedAlt, faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => (

  <section class={styles.container}>
    <h1 className={styles.title}>Profile</h1>
    <ul className={styles.ul}>
      <li className={styles.list}>
      <FontAwesomeIcon icon={faUser} className="icon" />
        <span>이름</span>
        <span>태민규</span>
      </li>
      <li className={styles.list}>
        <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
        <span>주소</span>
        <span>경기도 오산시</span>
      </li>
      <li className={styles.list}>
        <FontAwesomeIcon icon={faMobileAlt} className="icon" />
        <span>연락처</span>
        <span>010-XXXX-XXXX</span>
      </li>
      <li className={styles.list}>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <span>이메일</span>
        <span>alsrb8442@naver.com</span>
      </li>
    </ul>
  </section>


);

export default Profile;