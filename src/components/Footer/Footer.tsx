import React from 'react'
import styles from './Footer.module.scss'
export default function Footer() {
  return (
    <div className={styles.footerBody}>
      <div className={styles['footer-top']}>
        <div className={styles['footer-nav']}>
          <ul>
            <li>首页</li>
            <li>品牌故事</li>
            <li>艺术珠宝</li>
            <li>品牌纪事</li>
            <li>视频</li>
            <li>全球媒体</li>
            <li>联系我们</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
