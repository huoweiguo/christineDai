import React from 'react'
import styles from './JewelryDetail.module.scss'
import Header from '../../components/Header/Header'

export default function JewelryDetail() {
  return (
    <div>
      <Header></Header>
      <div className={styles['detail-top']}>
        <div className={styles['detail-prevBtn']}>
          上一页
        </div>
        <div className={styles['detail-nextBtn']}>
          下一页
        </div>
        <div className={styles['detail-txtBox']}>
            GEMSTONE
            <br/>      
            Secret Green·Emerald
        </div>
      </div>
    </div>
  )
}
