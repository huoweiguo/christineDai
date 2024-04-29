import React,{useState,useEffect} from 'react'
import styles from './Documentary.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { getBrandEvent } from '../../store/modules/home'
export default function Documentary() {
  interface DataItem {
    id: number;
    event_date: string;
    title: string;
    brand_img: string;
    linkurl: string;
    created_at: string;
    updated_at: string;
    top?: number
  }
  const [docList, setDocList] = useState<DataItem[]>([])
  const [navNumber,setNavNumber] = useState<Number>(0)
  const [isFix,setIsFix] = useState<boolean>(false)
  const navigate = useNavigate();
  let docListBak: DataItem[] = []

  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  const toUrl = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    window.location.href = url
  };
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
    const len = children.length
    for (let i = 0; i < len; i++ ) {
      docListBak[i].top = children[i].offsetTop + 220
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
      if (((docListBak[i].top) as number + 220) >= scrollY) {
        setNavNumber(i)
        return false
      }
    }
  }

  useEffect(() => {
    getBrandEvent().then(res => {
      if (res.data.code === 200) {
        const list = res.data.data
        docListBak = list
        setDocList(list)
        getElementPageY()
        window.addEventListener('scroll', listenerULList, false)
      } 

      return () => {
        window.removeEventListener('scroll', listenerULList, false)
      }
    })
  }, [])
  return (
    <div>
      <Header></Header>
      <div className={styles['doc-banner']}>
        <h5>
          MAISON
          <br/>
          印象大师 · Master Of Impressionism
        </h5>
      </div>
      <div className={styles.DocBody}>
        <div className={isFix?styles['doc-nav-fix']:styles['doc-nav']}>
          <div className={styles['nav-line']}></div>
          <ul className={styles['nav-list']}>
            {docList.map((item,index)=>{
              return(<li onClick={()=>cutNav(index, item.top as number)} className={navNumber === index?styles.active:styles.navItem} key={item.id}>
                <div className={styles.activeText}>{item.event_date}</div>
              </li>)
            })}
          </ul>
        </div>
        <ul className={styles['doc-list']} id="docUI">
        {docList.map((item)=>{
            return(<li onClick={()=>toUrl(item.linkurl)} className={styles['doc-item']} key={item.id}>
            <div className={styles['doc-left']}>
              <img src={item.brand_img} alt="" />
            </div>
            <div className={styles['doc-right']}>
               <p className={styles['doc-date']}>{item.event_date}</p>
               <div className={styles['doc-title']} dangerouslySetInnerHTML={{ __html: item.title }}></div>
               <img className={styles['doc-icon']} src={require('../../assets/images/rightIcon.png')} alt="" />
            </div>
          </li>)
          })}
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
}
