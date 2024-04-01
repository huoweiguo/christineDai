import React from 'react'
import styles from './VideoDetail.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function VideoDetail() {
  return (
    <div>
       <Header></Header>
       <div className={styles.videoDetail}>
         <div className={styles.videoPlay}>
         <video controls>
            <source src={require('../../assets/images/chrisDai-bg-video.mp4')} />
              您的浏览器不支持视频标签。
          </video>
         </div>
         <h3>
          “瑰丽蝴蝶”启幕｜巴黎装饰博物馆
          <br/>
          CHRISTINE DAI's "Magnificent Butterfly"
          <br/>
          exhibition ｜Musee des arts decoratifs
         </h3>
       </div>
       <Footer></Footer>
    </div>
  )
}
