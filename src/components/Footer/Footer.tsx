import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Footer.module.scss'
import type { RootState } from '../../store'
export default function Footer() {
  const year = useSelector((state: RootState) => state.story.year)
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
        <div className={styles['footer-soc']}>
          <img src={require('../../assets/images/wb.png')} alt='微博'/>
          <img src={require('../../assets/images/wx.png')} alt='微信'/>
          <img src={require('../../assets/images/xhs.png')} alt='小红书'/>
          <img src={require('../../assets/images/instagram.png')} alt=''/>
        </div>
      </div>
      <div className={styles['footer-copy']}>
        <span>沪ICP备2022010059号-1</span>
        <span className={styles['footer-line']}>|</span>
        Copyright © {year} Chirstine Dai
      </div>
    </div>
  )
}
