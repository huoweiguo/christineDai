import React, { useState, useEffect } from 'react'
import styles from './GlobalMedia.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { getMediaList } from '../../store/modules/meida'

interface typeData{
  id: number,
  title: string,
  media_img: string,
  linkurl: string,
  created_at: string
}

export default function GlobalMedia() {
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    // navigate(url);
    window.location.href = url
  };
  const [mediaData, setMediaData] = useState<typeData[]>([])
  useEffect(()=>{
    getMediaList().then(res=>{
      if(res.data.code===200){
        setMediaData([...res.data.data.list])
      }
    })
  },[])
  return (
    <div className={styles.GlobalMedia}>
      <Header go></Header>
      <div className={styles.banner}>
        <h5>
          全球媒体<br/>
          GLOBAL EVENTS
        </h5>
      </div>
      <div className={styles['gw-container']}>
        <div className={styles['w-1400']}>
          <div className={styles['content-box']}>
            { mediaData.length > 0 && mediaData.map(item=>(
              <div onClick={()=>handleButtonClick(item.linkurl)} className={styles.card} key={item.id}>
                <div className={styles.imgBox}>
                  <img src={item.media_img} alt=""/>
                </div>
                <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
