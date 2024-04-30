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
    // window.location.reload();
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
      Home
    </div>
  )
}