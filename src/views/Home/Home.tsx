import React from 'react'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'
import { getStoryInfos, setTitle } from '../../store/modules/story'
import { useAppDispatch } from '../../store'
import type { RootState } from '../../store'
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const year = useSelector((state: RootState) => state.story.year)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  dispatch(getStoryInfos({ id: 1 })).then(res => {
    console.log(res)
  })
  dispatch(setTitle('CHRISTINE DAI'))
  return (
    <div className={styles.homeBody}>
      <video className={styles.bgVideo} autoPlay loop muted>
      <source src={require('../../assets/images/chrisDai-bg-video.mp4')} type="video/mp4" />
        您的浏览器不支持视频标签。
      </video>
      <div className={styles['home-container']}>
        <div className={styles['home-content']}>
          <div className={styles['home-inner']}>
            <div className={styles['intro-left']}>
              <div className={styles['intro-logo']}><img src={require('../../assets/images/logo.png')} alt=""/></div>
              <div className={styles['intro-head']}>
                <span>
                  <b>光影感</b>
                  <i>LUMINOSITY</i>
                </span>
                <span>
                  <b>雕塑感</b>
                  <i>SCULPTURE</i>
                </span>
                <span>
                  <b>⽣命⼒</b>
                  <i>VITALITY</i>
                </span>
              </div>
            </div>

            <div className={styles['intro-right']}>
              <div onClick={()=>handleButtonClick('/layout/story')}><b>品牌故事</b><i>BRAND STORY</i></div>
              <div onClick={()=>handleButtonClick('/layout/jewelry')}><b>艺术珠宝</b><i>ART JEWEL</i></div>
              <div onClick={()=>handleButtonClick('/layout/documentary')}><b>品牌纪事</b><i>BRAND HERITAGE</i></div>
              <div onClick={()=>handleButtonClick('/layout/video')}><b>视频</b><i>VIDEO</i></div>
              <div onClick={()=>handleButtonClick('/layout/globalMedia')}><b>全球媒体</b><i>GLOBAL EVENTS</i></div>
              <div onClick={()=>handleButtonClick('/layout/contactUs')}><b>联系我们</b><i>CONTACT US</i></div>
            </div>
          </div>
        </div>
        <div className={styles['home-bottom']}>
          <div className={styles.shortlink}>
            <img src={require('../../assets/images/wb.png')} alt='微博'/>
            <img src={require('../../assets/images/wx.png')} alt='微信'/>
            <img src={require('../../assets/images/xhs.png')} alt='小红书'/>
            <img src={require('../../assets/images/instagram.png')} alt=''/>
          </div>
          <span>沪ICP备2022010059号-1 | Copyright © {year} Chirstine Dai</span>
        </div>
      </div>
    </div>
  )
}
