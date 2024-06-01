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
  created_at: string,
  top?: number
}

export default function GlobalMedia() {
  const navigate = useNavigate();
  const [isFix,setIsFix] = useState<boolean>(false)
  const [navNumber,setNavNumber] = useState<Number>(0)
  let globalListBak: typeData[] = []
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    window.location.href = url
  };
  const [mediaData, setMediaData] = useState<typeData[]>([])
  const [mediaData2, setMediaData2] = useState<typeData[]>([])
  const cutNav = (i:number, top: number) =>{
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
    
    setTimeout(() => {
      setNavNumber(i)
    }, 700)
  }
  const getElementPageY = () => {
    const docUI: HTMLUListElement  = document.querySelector('#docUI') as HTMLUListElement
    const children  = docUI.querySelectorAll('li')
    // 使用Set来存储唯一的offsetTop值
    const seenOffsets = new Set<number>();
    const uniqueChildren: HTMLLIElement[] = [];

    // 遍历children并去重
    children.forEach(child => {
      const offsetTop = child.offsetTop;
      if (!seenOffsets.has(offsetTop)) {
        seenOffsets.add(offsetTop);
        uniqueChildren.push(child);
      }
    });
    // 更新globalListBak
    uniqueChildren.forEach((child, i) => {
      globalListBak[i].top = child.offsetTop + 220;
    });

    setMediaData2(globalListBak)
  }
  const listenerULList = () => {
    const scrollY = window.scrollY
    const len = globalListBak.length
    if(scrollY>300){
      setIsFix(true)
    }else{
      setIsFix(false)
    }
    for (let i = 0; i < len; i++) {
      if (((globalListBak[i].top) as number + 220) >= scrollY) {
        setNavNumber(i)
        return false
      }
    }
  }
  useEffect(()=>{
    getMediaList().then(res=>{
      if(res.data.code===200){
        const list = res.data.data.list
        var screenWidth = window.screen.width;
        console.log(screenWidth,'screenWidth')
        setMediaData(list)
        for (let i = 0; i < list.length; i += 3) {
          globalListBak.push({
            ...list[i],
            top:0
          });
        }
        if(screenWidth<900){

        }else{
          setTimeout(() => {
            getElementPageY()
            window.addEventListener('scroll', listenerULList, false)
          },500)
        }
      }
    })
  },[])
  return (
    <div className={styles.GlobalMedia}>
      <Header></Header>
      <div className={styles.banner}>
        <h5>
          <span>GLOBAL EVENTS</span>
          <br/>
          全球媒体
        </h5>
      </div>
      <div className={styles['gw-container']}>
      <div className={isFix?styles['global-nav-fix']:styles['global-nav']}>
        <div className={styles['nav-line']}></div>
          <ul className={styles['nav-list']}>
            {mediaData2.map((item,index)=>{
              return(<li onClick={()=>cutNav(index, item.top as number)} className={navNumber === index?styles.active:styles.navItem} key={item.id}>
                <div className={styles.activeText} dangerouslySetInnerHTML={{ __html: item.title }}></div>
              </li>)
            })}
          </ul>
        </div>
        <div className={styles['w-1400']}>
          <ul className={styles['content-box']} id="docUI">
            { mediaData.length > 0 && mediaData.map(item=>(
              <li onClick={()=>handleButtonClick(item.linkurl)} className={styles.card} key={item.id}>
                <div className={styles.imgBox}>
                  <img src={item.media_img} alt=""/>
                </div>
                <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}