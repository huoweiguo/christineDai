import React, { useState } from 'react'
import styles from './ContactUs.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function ContactUs() {

  const [ activeIndex, setactiveIndex ] = useState<number>(0)
  const [ selectIndex, setSelectIndex ] = useState<number>(0)
  
  const bgData: any[] = [
    {
      backgroundImage: 'url('+require('../../assets/images/cu-bg1.jpeg')+')',
    },
    {
      backgroundImage: 'url('+require('../../assets/images/cu-bg2.png')+')',
    },
    {
      backgroundImage: 'url('+require('../../assets/images/cu-bg3.jpeg')+')',
    }
  ] 

  const handleMouseEnter = (index: number) => {
    setactiveIndex(index)
  }

  const openContactForm = (index: number) => {
    setSelectIndex(index)
  }

  return (
    <div className={ styles.contactUs }>
      <Header></Header>
      <div className={ styles['cu-container'] } style={bgData[activeIndex]}>
        <div className={`${styles.itemBox} ${selectIndex && selectIndex != 1 ? styles.narrow : ''}`} onMouseEnter={()=>handleMouseEnter(0)}>
          <div className={`${styles.wrapper} ${selectIndex == 1 ? styles.showWrapper : ''}`}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={`${styles.content } ${selectIndex == 1 ? styles.showContent : ''}`}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']} onClick={()=>openContactForm(1)}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={`${styles.itemBox} ${selectIndex && selectIndex != 2 ? styles.narrow : ''}`} onMouseEnter={()=>handleMouseEnter(1)}>
          <div className={`${styles.wrapper} ${selectIndex == 2 ? styles.showWrapper : ''}`}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={`${styles.content } ${selectIndex == 2 ? styles.showContent : ''}`}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']} onClick={()=>openContactForm(2)}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={`${styles.itemBox} ${selectIndex && selectIndex != 3 ? styles.narrow : ''}`} onMouseEnter={()=>handleMouseEnter(2)}>
          <div className={`${styles.wrapper} ${selectIndex == 3 ? styles.showWrapper : ''}`}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={`${styles.content } ${selectIndex == 3 ? styles.showContent : ''}`}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']} onClick={()=>openContactForm(3)}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={`${styles['contact-form']} ${selectIndex ? styles.enlarge : ''}`}></div>
      </div>
      <Footer></Footer>
    </div>  
  )
}
