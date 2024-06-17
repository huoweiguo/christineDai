import React, { useState, useEffect } from 'react'
import styles from './WholeVideo.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { getVideoList,getVideoEventList } from '../../store/modules/video'
import { Console } from 'console'

interface videoData{
  title: string,
  title_en:string,
  cover_img: string,
  video_url: string,
  event_date?:string,
  top?: number
}
interface classData<T>{
  catname: string,
  list: T[],
  top?: number
}

export default function WholeVideo() {
  const { id } = useParams();
  const [docList, setDocList] = useState<classData<videoData>[]>([])
  const [docList2, setDocList2] = useState<videoData[]>([])
  const [eventList, setEventList] = useState<videoData[]>([])
  const [navNumber,setNavNumber] = useState<Number>(0)
  const [isFix,setIsFix] = useState<boolean>(false)
  const [bannerData, setBannerData] = useState({
    title: '',
    word: ''
  }) 
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(`/videoDetail?url=${url}`);
  };

  let docListBak: classData<videoData>[] = []
  let docListBak2: videoData[] = []

  const [videoData, setVideoData] = useState<classData<videoData>[]>([])

  const cutNav = (i:number, top: number) =>{
    console.log(i,top,'top')
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
    
    setTimeout(() => {
      setNavNumber(i)
    }, 700)
  }
  
  const getElementPageY = () => {
    const docUI: HTMLUListElement  = document.querySelector('#containerUI') as HTMLUListElement
    console.log(docUI, 'docUI')
    const children  = docUI.querySelectorAll('li')
    for (let i = 0; i < children.length; i++ ) {
      docListBak[i].top = children[i].offsetTop + 200
    }
    setDocList(docListBak)
  }

  const listenerULList = () => {
    const scrollY = window.scrollY
    const len = docListBak.length
    if(scrollY>300){
      setIsFix(true)
    }else{
      setIsFix(false)
    }
    for (let i = 0; i < len; i++) {
      if (((docListBak[i].top) as number + 200) >= scrollY) {
        setNavNumber(i)
        return false
      }
    }
  }

  const getElementPageY2 = () => {
    const docUI: HTMLUListElement  = document.querySelector('#containerUI2') as HTMLUListElement
    const children  = docUI.querySelectorAll('li')
    for (let i = 0; i < children.length; i++ ) {
      docListBak2[i].top = children[i].offsetTop + 200
    }

    setDocList2(docListBak2)
  }

  const listenerULList2 = () => {
    const scrollY = window.scrollY
    const len = docListBak2.length
    if(scrollY>300){
      setIsFix(true)
    }else{
      setIsFix(false)
    }
    for (let i = 0; i < len; i++) {
      if (((docListBak2[i].top) as number + 200) >= scrollY) {
        setNavNumber(i)
        return false
      }
    }
  }

  const ContainerBody = () =>{
    return (
      <div className={styles.ContainerBody}>
        <div className={isFix?styles['doc-nav-fix']:styles['doc-nav']}>
          <div className={styles['nav-line']}></div>
          <ul className={styles['nav-list']}>
            {docList.map((item,index)=>{
              return(<li onClick={()=>cutNav(index, item.top as number)} key={index} className={navNumber === index?styles.active:styles.navItem}>
                <div className={styles.activeText}>{item.catname}</div>
              </li>)
            })}
          </ul>
        </div>
        <ul className={styles['wv-container']} id="containerUI"> 
          { videoData.length > 0?videoData.map((item,index)=>(
            <li className={styles.itemBox} key={index}>
              <div className={styles.title}>{ item.catname }</div>
                <div className={styles.listBox} >
                { item.list.length > 0 ? item.list.map((em, i)=>(
                  <div onClick={()=>handleButtonClick(em.video_url)} className={styles.card2} key={i}>
                    <div className={`${styles.imgBox} ${styles['m-b-2']}`}>
                      <img src={em.cover_img} alt=""/>
                    </div>
                    <h5>{em.title}</h5>
                    <h5>{em.title_en}</h5>
                  </div>
                )): <div  className={styles.card2}>
                  <h5>敬请期待</h5>
                </div>}
              </div>
            </li>
          )) :<li className={styles.itemBox}>
          <div className={styles.title}>敬请期待</div>
          </li>}
        </ul>

      </div>
    ) 
  };

  const RecordBody = () =>{ //纪事视频
    console.log(navNumber,'navNumber')
    return (
      <div className={styles.ContainerBody}>
        <div className={isFix?styles['doc-nav-fix']:styles['doc-nav']}>
          <div className={styles['nav-line']}></div>
          <ul className={styles['nav-list']}>
            {docList2.map((item,index)=>{
              return(<li onClick={()=>cutNav(index, item.top as number)} key={index} className={navNumber === index?styles.active:styles.navItem}>
                <div className={styles.activeText}>{item.event_date}</div>
              </li>)
            })}
          </ul>
        </div>
        <ul className={styles['wv-container2']} id="containerUI2">
          { eventList.length > 0?eventList.map((item,index)=>(
            <li onClick={()=>handleButtonClick(item.cover_img)} className={styles.itemBox} key={index}>
              <div className={styles['doc-left']}>
                <img src={item.cover_img} alt="" />
              </div>
              <div className={styles['video-right']}>
                <p className={styles['video-date']}>{item.event_date}</p>
                <div className={styles['video-title']} dangerouslySetInnerHTML={{ __html: item.title }}></div>
                <img className={styles['video-icon']} src={require('../../assets/images/rightIcon.png')} alt="" />
              </div>
            </li>
          )) :
          <li className={styles.itemBox}>
              <div className={styles.title}>敬请期待</div>
          </li>}
        </ul>
      </div>
    ) 
  };

  
  useEffect(()=>{
    if(id==='3'){
      getVideoEventList().then(res=>{
        const {data} = res.data || []
        docListBak2 = [...data]
        setDocList2([...data])
        setEventList([...data])
        setTimeout(() => {
          getElementPageY2()
          window.addEventListener('scroll', listenerULList2, false)
        })
      })
    }else{
      getVideoList({id}).then(res=>{
        if(res.data.code===200){
          const { con, title, title_en } = res.data.data
          docListBak = [...con]
          setDocList([...con])
          setVideoData([...con])
          setBannerData({
            title,
            word: title_en
          })
          if(id==='1'){
            setTimeout(() => {
              getElementPageY()
              window.addEventListener('scroll', listenerULList, false)
            })
          }
        }
      })
    }
    return () => {
      window.removeEventListener('scroll', listenerULList, false)
    }
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
              <h5>{em.title_en}</h5>
            </div>
          )) }
        </div> :
        id==='1'?ContainerBody():RecordBody()
      }
      <Footer></Footer>
    </div>
  )
}
