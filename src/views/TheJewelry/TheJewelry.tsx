import React from 'react'
import styles from './TheJewelry.module.scss'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom';
export default function TheJewelry() {
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  return (
    <div>
      <Header type></Header>
      <div className={styles.TheJewelry}>
        <div className={styles['theJewelry-left']}>
          <div onClick={()=>handleButtonClick('/layout/JewelryList')} className={styles['theJewelry-txt']}>
            <h3>GEMSTONE</h3>
            <h4>彩宝系列</h4>
          </div>
        </div>
        <div className={styles['theJewelry-right']}>
          <div onClick={()=>handleButtonClick('/layout/JewelryList')} className={styles['theJewelry-txt']}>
            <h3>ART</h3>
            <h4>艺术</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
