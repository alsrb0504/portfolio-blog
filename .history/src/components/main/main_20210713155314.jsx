import React from 'react';
import styles from './main.module.css'

const MainImage = (props) => (
  <div className={styles.main} >
    <div className={styles.text_part} style={{ backgroundImage: "url(/images/bg.jpg)" }} >
      <div className={styles.title}>
        태민규의
        <br />
        웹 공부 블로그
      </div>
      <div className={styles.sub_title} >
        안녕하세요
        <br />
        웹 front-end 개발자를 꿈꾸는 태민규입니다.
        <br />
        저의 장점은 원하는 것이 무엇이든 꾸준히 해나가 성취하는 것 입니다.
      </div>
    </div>
  </div>
)

export default MainImage;