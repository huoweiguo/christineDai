import React, { useState } from 'react'
import styles from './ContactUs.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function ContactUs() {

  const [ activeIndex, setactiveIndex ] = useState<number>(0)
  
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

  return (
    <div className={ styles.contactUs }>
      <Header></Header>
      <div className={ styles['cu-container'] } style={bgData[activeIndex]}>
        <div className={styles.itemBox} onMouseEnter={()=>handleMouseEnter(0)}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={styles.content}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={styles.itemBox} onMouseEnter={()=>handleMouseEnter(1)}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={styles.content}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={styles.itemBox} onMouseEnter={()=>handleMouseEnter(2)}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={styles.content}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']}>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>  
  )
}
