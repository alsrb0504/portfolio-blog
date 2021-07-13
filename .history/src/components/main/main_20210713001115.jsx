import React from 'react';
import styles from './main.module.css'

const MainImage = (props) => (
  <main className={styles.main} >
    <img className={styles.image} src="/images/bg.jpg" alt="main_image" />
    <div className={styles.title}>
      태민규의
      <br />
      웹 공부 블로그
    </div>
    <span className={styles.sub_title} >
      안녕하세요
      <br />
      웹 front-end 개발자를 꿈꾸는 태민규입니다.
      <br />
      저의 장점은 느리더라도 꾸준히 해나가는 것입니다.
    </span>
  </main>
)

export default MainImage;