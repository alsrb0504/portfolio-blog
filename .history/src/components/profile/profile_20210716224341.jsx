import React from 'react';
import styles from './profile.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => (

  <section class={styles.container}>
    <h1>Profile</h1>
    <ul>
      <li>
        <FontAwesomeIcon icon="trash-alt"/>
        <span>이름</span>
        <span>태민규</span>
      </li>
      <li>
        <span>주소</span>
        <span>경기도 오산시</span>
      </li>
      <li>
        <span>연락처</span>
        <span>010-XXXX-XXXX</span>
      </li>
      <li>
        <span>이메일</span>
        <span>alsrb8442@naver.com</span>
      </li>
    </ul>
  </section>


);

export default Profile;