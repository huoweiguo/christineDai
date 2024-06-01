import React, { useState, useEffect } from 'react'
import styles from './WholeVideo.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { getVideoList } from '../../store/modules/video'

interface videoData{
  title: string,
  cover_img: string,
  video_url: string
}
interface classData<T>{
  catname: string,
  list: T[]
}

export default function WholeVideo() {
  const { id } = useParams();
  const [bannerData, setBannerData] = useState({
    title: '',
    word: ''
  }) 
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(`/videoDetail?url=${url}`);
  };

  const [videoData, setVideoData] = useState<classData<videoData>[]>([])

  const getVideoData = (id: string | undefined) => {
    getVideoList({id}).then(res=>{
      if(res.data.code===200){
        console.log(res.data.data);
        
        const { con, title, title_en } = res.data.data
        setVideoData([...con])
        setBannerData({
          title,
          word: title_en
        })
      }
    })
  }
  
  useEffect(()=>{
    getVideoData(id)
  },[id])
  
  return (
    <div className={styles.wholeVideo}>
      <Header titleObj={{title:'品牌视频',name:'VIDEO'}}></Header>
      <div className={styles.banner}>
        <h5>
          <span>{bannerData.word}</span>
          <br/>
          {bannerData.title}
        </h5>
      </div>
      {
        id==='4' ? 
        <div className={styles['wv-main']}>
          { videoData[0]?.list.length > 0 && videoData[0].list.map((em, i)=>(
            <div onClick={()=>handleButtonClick(em.video_url)} className={`${styles.card} ${styles['m-b-4']}`} key={i}>
              <div className={`${styles.imgBox} ${styles['m-b-2']}`}>
                <img src={em.cover_img} alt=""/>
              </div>
              <h5>{em.title}</h5>
            </div>
          )) }
        </div> :
        <div className={styles['wv-container']}>
          { videoData.length > 0?videoData.map((item,index)=>(
            <div className={styles.itemBox} key={index}>
              <div className={styles.title}>{ item.catname }</div>
                <div className={styles.listBox} >
                { item.list.length > 0 ? item.list.map((em, i)=>(
                  <div onClick={()=>handleButtonClick(em.video_url)} className={styles.card2} key={i}>
                    <div className={`${styles.imgBox} ${styles['m-b-2']}`}>
                      <img src={em.cover_img} alt=""/>
                    </div>
                    <h5>{em.title}</h5>
                  </div>
                )): <div  className={styles.card2}>
                <h5>敬请期待</h5>
              </div>}
              </div>
            </div>
          )) :<div className={styles.itemBox}>
          <div className={styles.title}>敬请期待</div>
          </div>}
        </div>
      }
      <Footer></Footer>
    </div>
  )
}
