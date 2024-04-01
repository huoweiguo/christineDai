import React, { useState, useEffect } from 'react'
import styles from './WholeVideo.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function WholeVideo() {
  const { name } = useParams();
  const [bannerData, setBannerData] = useState({
    title: '',
    word: ''
  }) 
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };

  const [videoData, setVideoData] = useState([
    {
      title: '印象⼤师 Master of Impressionism',
      children: [
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        },
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        },
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        },
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        }
      ]
    },
    {
      title: '瑰丽蝴蝶 Magenificent Butterfly',
      children: [
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        },
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        }
      ]
    },
    {
      title: '瑰丝汀花园 Christine Garden',
      children: [
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        },
        {
          imgUrl: require('../../assets/images/v1.jpeg'),
          name: '印象大师·睡莲',
          content: 'Master of Impressionism·Water lily',
          word: 'FIGARO'
        }
      ]
    }
  ])
  
  useEffect(()=>{
    switch(name){
      case 'product':
        setBannerData({
          title: '作品视频',
          word: 'PRODUCT HIGHLIGHT'
        })
        break;
      case 'magazine':
        setBannerData({
          title: '纪事视频',
          word: 'EVENT'
        })
        break;
      case 'media':
        setBannerData({
          title: '媒体视频',
          word: 'PRESS'
        })
        break;
    default:
        break;
    }
  },[name])
  
  return (
    <div className={styles.wholeVideo}>
      <Header></Header>
      <div className={styles.banner}>
        <h5>
          {bannerData.title}<br/>
          {bannerData.word}
        </h5>
      </div>
      {
        name==='media' ? 
        <div className={styles['wv-main']}>
          { videoData[0].children && videoData[0].children.map((em, i)=>(
            <div onClick={()=>handleButtonClick('/layout/videoDetail')} className={`${styles.card} ${styles['m-b-4']}`} key={i}>
              <div className={`${styles.imgBox} ${styles['m-b-2']}`}>
                <img src={em.imgUrl} alt=""/>
              </div>
              <h4>{ em.word }</h4>
              <h5 className={styles.center}>{ em.name }<br/>{ em.content }</h5>
            </div>
          )) }   
        </div> :
        <div className={styles['wv-container']}>
          { videoData.length && videoData.map((item,index)=>(
            <div className={styles.itemBox} key={index}>
              <div className={styles.title}>{ item.title }</div>
                <div className={styles.listBox} >
                { item.children && item.children.map((em, i)=>(
                  <div onClick={()=>handleButtonClick('/layout/videoDetail')} className={styles.card} key={i}>
                    <div className={styles.imgBox}>
                      <img src={em.imgUrl} alt=""/>
                    </div>
                    <h5>{ em.name }<br/>{ em.content }</h5>
                  </div>
                )) }   
              </div>
            </div>
          )) }
        </div>
      }
      <Footer></Footer>
    </div>
  )
}
