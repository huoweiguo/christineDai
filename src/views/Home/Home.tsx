import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'
import { getHomeInfos } from '../../store/modules/home'
import { useAppDispatch } from '../../store'
import type { RootState } from '../../store'
import { useNavigate } from 'react-router-dom';
import {HomeKey,cacheObject,getCachedObject} from '../../utils/auth'
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
  const [hoveredIndex, setHoveredIndex] = useState<null|number>(null);
  const handleMouseEnter = (index:number) => {
    setHoveredIndex(index);
  };
 
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
    window.location.reload();
  };
  
  useEffect(() => {
    if(getCachedObject(HomeKey)){
      const homeObject = getCachedObject(HomeKey);
      setHomeData(homeObject)
    }
    getHomeInfos().then(res => {
      if (res.data.code === 200) {
        const { bg_video, placard, logo_img,weibo,xiaohongshu,ins,wxqr} = res.data.data
        cacheObject(HomeKey,{
          bg_video, logo_img, placard,weibo,xiaohongshu,ins,wxqr
        })
        // 获取缓存的对象
        const homeObject = getCachedObject(HomeKey);
        setHomeData(homeObject)
      } 
    })
  }, [])

  return (
    <div className={styles.homeBody}>
      <video src={homeData.bg_video} className={styles.bgVideo} autoPlay loop muted>
      <source type="video/mp4"/>
        您的浏览器不支持视频标签。
      </video>
      <div className={styles['home-container']}>
        <div className={styles['home-content']}>
          <div className={styles['home-inner']}>
            <div className={styles['intro-left']}>
              <div className={styles['intro-logo']}><img src={homeData.logo_img} alt=""/></div>
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
              <div
              className={ hoveredIndex !== 1&&hoveredIndex !== null?styles['right-hide']:''} 
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave()} 
              onClick={()=>handleButtonClick('/layout/story')}
              ><b>品牌故事</b><i>BRAND STORY</i></div>
              <div 
              className={ hoveredIndex !== 2&&hoveredIndex !== null?styles['right-hide']:''} 
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={()=>handleButtonClick('/layout/jewelry')}
              ><b>艺术珠宝</b><i>ART JEWEL</i></div>
              <div 
              className={ hoveredIndex !== 3&&hoveredIndex !== null?styles['right-hide']:''} 
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={()=>handleButtonClick('/layout/documentary')}
              ><b>品牌纪事</b><i>BRAND HERITAGE</i></div>
              <div 
              className={ hoveredIndex !== 4&&hoveredIndex !== null?styles['right-hide']:''} 
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={()=>handleButtonClick('/layout/video')}
              ><b>视频</b><i>VIDEO</i></div>
              <div 
              className={ hoveredIndex !== 5&&hoveredIndex !== null?styles['right-hide']:''} 
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={()=>handleButtonClick('/layout/globalMedia')}
              ><b>全球媒体</b><i>GLOBAL EVENTS</i></div>
              <div 
              className={ hoveredIndex !== 6&&hoveredIndex !== null?styles['right-hide']:''} 
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={()=>handleButtonClick('/layout/contactUs')}
              ><b>联系我们</b><i>CONTACT US</i></div>
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
