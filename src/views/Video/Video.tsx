import React, { useState } from 'react'
import styles from './Video.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';

type videoType = {
  backgroundImage: string,
  word: string,
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

  const [videoData, setVideoData] = useState<videoType[]>([
    {
      backgroundImage: 'url('+require('../../assets/images/video-b1.jpeg')+')',
      word: 'PRODUCT HIGHLIGHT',
      title: '作品视频'
    },
    {
      backgroundImage: 'url('+require('../../assets/images/video-b2.png')+')',
      word: 'EVENT',
      title: '纪事视频'
    },
    {
      backgroundImage: 'url('+require('../../assets/images/video-b3.jpeg')+')',
      word: 'PRESS',
      title: '媒体视频'
    }
  ])

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
        { videoData.length && videoData.map((item: videoType,index: number)=>(
          <div onClick={()=>handleButtonClick('/layout/WholeVideo/media')} className={styles.box} key={index}>
            <div className={styles.imgBox}>
              <figure style={{backgroundImage: item.backgroundImage}}></figure>
            </div>
            <h3>{item.title}</h3>
            <h4>{item.word}</h4>
          </div>
        )) }
      </div>
      <Footer></Footer>
    </div>
  )
}
