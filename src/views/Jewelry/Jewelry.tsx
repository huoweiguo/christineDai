import React from 'react'
import styles from './Jewelry.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
export default function Jewelry() {
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  return (
    <div className={styles.Jewelry}>
      <Header></Header>
      <div className={ styles['jewe-top'] }></div>
      <div className={styles.JewelryBody}>
        <div className={styles['jewe-box']}>
           <ul className={styles['jewe-list']}>
            <li className={styles['jewe-item']}>
              <div onClick={()=>handleButtonClick('/theJewelry/1')} className={styles['jewe-text']}>
                <p className={styles['jewe-the']}>The</p>
                <h5>High Jewel</h5>
              </div>
              <div onClick={()=>handleButtonClick('/theJewelry/1')} className={styles['jewe-down']}>
                <div className={styles['jewe-icon']}>
                  即刻探索
                  <img src={require('../../assets/images/rightIcon.png')} alt="" />
                </div>
                <div className={styles['jewe-line']}></div>
                <div><span className={styles['jewe-txt']}>Series</span>collection</div>
              </div>
            </li>
            <li className={styles['jewe-item']}>
              <div onClick={()=>handleButtonClick('/theJewelry/3')} className={styles['jewe-text']}>
                <p className={styles['jewe-the']}>The</p>
                <h5>Art Jewel</h5>
              </div>
              <div onClick={()=>handleButtonClick('/theJewelry/3')} className={styles['jewe-down']}>
                <div className={styles['jewe-icon']}>
                  即刻探索
                  <img src={require('../../assets/images/rightIcon.png')} alt="" />
                </div>
                <div className={styles['jewe-line']}></div>
                <div><span className={styles['jewe-txt']}>Series</span>collection</div>
              </div>
            </li>
            <li className={styles['jewe-item']}>
              <div onClick={()=>handleButtonClick('/theJewelry/4')} className={styles['jewe-text']}>
                <p className={styles['jewe-the']}>The</p>
                <h5>Fine Jewel</h5>
              </div>
              <div onClick={()=>handleButtonClick('/theJewelry/4')} className={styles['jewe-down']}>
                <div className={styles['jewe-icon']}>
                  即刻探索
                  <img src={require('../../assets/images/rightIcon.png')} alt="" />
                </div>
                <div className={styles['jewe-line']}></div>
                <div><span className={styles['jewe-txt']}>Series</span>collection</div>
              </div>
            </li>
           </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}