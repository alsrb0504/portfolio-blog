import React from 'react';
import styles from './profile.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMapMarkedAlt, faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => (

  <section class={styles.container}>
    <h1>Profile</h1>
    <ul>
      <li>
      <FontAwesomeIcon icon={faUser} className="search" />
        <span>이름</span>
        <span>태민규</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faMapMarkedAlt} className="search" />
        <span>주소</span>
        <span>경기도 오산시</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faMobileAlt} className="search" />
        <span>연락처</span>
        <span>010-XXXX-XXXX</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} className="search" />
        <span>이메일</span>
        <span>alsrb8442@naver.com</span>
      </li>
    </ul>
  </section>


);

export default Profile;