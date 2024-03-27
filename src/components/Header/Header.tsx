import React from 'react'
import styles from './Header.module.scss'
export default function Hrader() {
  return (
    <div className={styles.headerBody}>
        <img className={styles['header-logo']} src={require('../../assets/images/header-logo.png')} alt="" />
        <div className={styles['header-right']}>
           <p className={styles['header-name']}>
            品牌故事<br/>
            <span>BRAND STORY</span>
           </p>
           <div>
            <p className={styles['header-menu']}></p>
           </div>
        </div>
    </div>
  )
}
