import React, { useState, useEffect } from 'react'
import styles from './Video.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { getVideoCat } from '../../store/modules/video'

type videoType = {
  id: number,
  parent_id: number,
  cover: string,
  title_en: string,
  title: string
}

export default function Video() {
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  const [bgWord, setBgWord] = useState({
    backgroundImage: 'url('+require('../../assets/images/video-gb.png')+')'
  })

  const [videoData, setVideoData] = useState<videoType[]>([])

  useEffect(()=>{
    getVideoCat().then(res=>{
      if(res.data.code===200){
        console.log(res.data.data);
        
        setVideoData([...res.data.data])
      }
    })
  },[])

  return (
    <div className={styles.videoBody}>
      <Header titleObj={{title:'品牌视频',name:'VIDEO'}}></Header>
      <div className={styles.bgVideo}>
        <video className={styles.bgVideo} autoPlay loop muted>
          <source src={require('../../assets/images/v-bg-video.mp4')} type="video/mp4" />
            您的浏览器不支持视频标签。
        </video>
        <figure style={bgWord}></figure>
      </div>
      <div className={styles['video-container']}>
        { videoData.length > 0 && videoData.map((item: videoType,index: number)=>(
          <div onClick={()=>handleButtonClick(`/WholeVideo/${item.id}`)} className={styles.box} key={index}>
            <div className={styles.imgBox}>
              <figure style={{backgroundImage: `url(${item.cover})`}}></figure>
            </div>
            <h3>{item.title}</h3>
            <h4>{item.title_en}</h4>
          </div>
        )) }
      </div>
      <Footer></Footer>
    </div>
  )
}
