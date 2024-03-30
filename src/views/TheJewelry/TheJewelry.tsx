import React from 'react'
import styles from './TheJewelry.module.scss'
import Header from '../../components/Header/Header'

export default function TheJewelry() {
  return (
    <div>
      <Header type></Header>
      <div className={styles.TheJewelry}>
        <div className={styles['theJewelry-left']}>
          <div className={styles['theJewelry-txt']}>
            <h3>GEMSTONE</h3>
            <h4>彩宝系列</h4>
          </div>
        </div>
        <div className={styles['theJewelry-right']}>
          <div className={styles['theJewelry-txt']}>
            <h3>GEMSTONE</h3>
            <h4>彩宝系列</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
