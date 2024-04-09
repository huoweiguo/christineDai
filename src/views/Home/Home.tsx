import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'
import { getHomeInfos } from '../../store/modules/home'
import { useAppDispatch } from '../../store'
import type { RootState } from '../../store'
import { useNavigate } from 'react-router-dom';
export default function Home() {

  interface RuleData {
    bg_video: string
    logo_img: string
    placard: string
    weibo:string
    xiaohongshu:string
    ins:string
    wxqr:string
  }
  const year = useSelector((state: RootState) => state.story.year)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [homeData, setHomeData] = useState<RuleData>({
    bg_video: '',
    logo_img: '',
    placard: '',
    weibo:'',
    xiaohongshu:'',
    ins:'',
    wxqr:''
  })
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  
  useEffect(() => {
    getHomeInfos().then(res => {
      if (res.data.code === 200) {
        const { bg_video, placard, logo_img,weibo,xiaohongshu,ins,wxqr} = res.data.data
        setHomeData({
          bg_video, logo_img, placard,weibo,xiaohongshu,ins,wxqr
        })
      } 
    })
  }, [])

  return (
    <div className={styles.homeBody}>
      <video className={styles.bgVideo} autoPlay loop muted>
      <source src={'http://web.chris-dai.com/uploads/video/182280c43648cc4dfd22d616cdd95967mp4'} type="video/mp4"/>
        您的浏览器不支持视频标签。
      </video>
      <div className={styles['home-container']}>
        <div className={styles['home-content']}>
          <div className={styles['home-inner']}>
            <div className={styles['intro-left']}>
              <div className={styles['intro-logo']}><img src={require('../../assets/images/logo.png')} alt=""/></div>
              <div className={styles['intro-head']} dangerouslySetInnerHTML={{ __html: homeData.placard }} />
                {/* <span>
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
                </span> */}
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
            <a href={homeData.weibo} target="_blank" rel="noreferrer">
             <img src={require('../../assets/images/wb.png')} alt='微博'/>
            </a>
            <div className={styles['home-wx']}>
             <img src={require('../../assets/images/wx.png')} alt='微信'/>
             <div className={styles['home-ewm']}>
              <img src={homeData.wxqr} alt="" />
             </div>
            </div>
            <a href={homeData.xiaohongshu} target="_blank" rel="noreferrer">
             <img src={require('../../assets/images/xhs.png')} alt='小红书'/>
            </a>
            <a href={homeData.ins} target="_blank" rel="noreferrer">
            <img src={require('../../assets/images/instagram.png')} alt=''/>
            </a>
          </div>
          <span>沪ICP备2022010059号-1 | Copyright © {year} Chirstine Dai</span>
        </div>
      </div>
    </div>
  )
}
