import React from 'react'
import styles from './Jewelry.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default function Jewelry() {
  return (
    <div className={styles.Jewelry}>
      <Header></Header>
      <div className={styles.JewelryBody}>
        <div className={styles['jewe-box']}>
           <ul className={styles['jewe-list']}>
            <li className={styles['jewe-item']}>
              <h5>High Jewel</h5>
              <div className={styles['jewe-down']}>
                <div>
                  即刻探索
                </div>
                <div className={styles['jewe-line']}></div>
                <div><span className={styles['jewe-txt']}>Series</span>collection</div>
              </div>
            </li>
            <li className={styles['jewe-item']}>
              <h5>Art Jewel</h5>
              <div className={styles['jewe-down']}>
                <div>
                  即刻探索
                </div>
                <div className={styles['jewe-line']}></div>
                <div><span className={styles['jewe-txt']}>Series</span>collection</div>
              </div>
            </li>
            <li className={styles['jewe-item']}>
              <h5>Fien Jewel</h5>
              <div className={styles['jewe-down']}>
                <div>
                  即刻探索
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
