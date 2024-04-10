import React, { useEffect,useState }from 'react'
import { useSelector } from 'react-redux'
import styles from './Footer.module.scss'
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store'
import {HomeKey,getCachedObject} from '../../utils/auth'
export default function Footer() {
  interface RuleData {
    bg_video: string
    logo_img: string
    placard: string
    weibo:string
    xiaohongshu:string
    ins:string
    wxqr:string
  }
  const [footerData, setFooterData] = useState<RuleData>({
    bg_video: '',
    logo_img: '',
    placard: '',
    weibo:'',
    xiaohongshu:'',
    ins:'',
    wxqr:''
  })
  useEffect(() => {
    if(getCachedObject(HomeKey)){
      const footerObject = getCachedObject(HomeKey); 
      setFooterData(footerObject)
    }
  }, [])
  const toUrl = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    window.open(url)
  };
  const year = useSelector((state: RootState) => state.story.year)
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  return (
    <div className={styles.footerBody}>
      <div className={styles['footer-top']}>
        <div className={styles['footer-nav']}>
          <ul>
            <li onClick={()=>handleButtonClick('/')}>首页</li>
            <li onClick={()=>handleButtonClick('/layout/story')}>品牌故事</li>
            <li onClick={()=>handleButtonClick('/layout/jewelry')}>艺术珠宝</li>
            <li onClick={()=>handleButtonClick('/layout/documentary')}>品牌纪事</li>
            <li onClick={()=>handleButtonClick('/layout/video')}>视频</li>
            <li onClick={()=>handleButtonClick('/layout/globalMedia')}>全球媒体</li>
            <li onClick={()=>handleButtonClick('/layout/contactUs')}>联系我们</li>
          </ul>
        </div>
        <div className={styles['footer-soc']}>
          <img onClick={(()=>toUrl(footerData.weibo))} src={require('../../assets/images/wb.png')} alt='微博'/>
          <div className={styles['footer-wx']}>
             <img src={require('../../assets/images/wx.png')} alt='微信'/>
             <div className={styles['footer-ewm']}>
              <img src={footerData.wxqr} alt="" />
             </div>
            </div>
          <img onClick={(()=>toUrl(footerData.xiaohongshu))} src={require('../../assets/images/xhs.png')} alt='小红书'/>
          <img onClick={(()=>toUrl(footerData.ins))} src={require('../../assets/images/instagram.png')} alt=''/>
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
