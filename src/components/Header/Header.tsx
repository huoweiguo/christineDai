import React from 'react'
import styles from './Header.module.scss'
interface HeaderProps {
  type?:Boolean
}
export default function Hrader(props:HeaderProps) {
  let { type } = props;
  return (
    <div className={type?`${styles.headerBody}`:`${styles.headerBody} ${styles.onFix}`}>
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
