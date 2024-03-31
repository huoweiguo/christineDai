import React, { useState } from 'react'
import styles from './GlobalMedia.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
export default function GlobalMedia() {
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  return (
    <div className={styles.GlobalMedia}>
      <Header></Header>
      <div className={styles.banner}>
        <h5>
          全球媒体<br/>
          GLOBAL EVENTS
        </h5>
      </div>
      <div className={styles['gw-container']}>
        <div className={styles['w-1400']}>
          <div className={styles['content-box']}>
            <div onClick={()=>handleButtonClick('/layout/mediaDetail')} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={require('../../assets/images/m-1.jpeg')} alt=""/>
              </div>
              <h5>
              FIGARO封面故事｜关之琳：丝光缎影<br/>
              Amour Reverie
              </h5>
            </div>
            <div onClick={()=>handleButtonClick('/layout/mediaDetail')} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={require('../../assets/images/m-2.png')} alt=""/>
              </div>
              <h5>
              FIGARO封面故事｜关之琳：丝光缎影<br/>
              Amour Reverie
              </h5>
            </div>
            <div onClick={()=>handleButtonClick('/layout/mediaDetail')} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={require('../../assets/images/m-3.jpeg')} alt=""/>
              </div>
              <h5>
              FIGARO封面故事｜关之琳：丝光缎影<br/>
              Amour Reverie
              </h5>
            </div>
            <div onClick={()=>handleButtonClick('/layout/mediaDetail')} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={require('../../assets/images/m-4.jpeg')} alt=""/>
              </div>
              <h5>
              FIGARO封面故事｜关之琳：丝光缎影<br/>
              Amour Reverie
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
