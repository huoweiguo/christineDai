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
  }
  const [DocList, setDocList] = useState<DataItem[]>([])
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  const toUrl = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    window.location.href = url
  };
  useEffect(() => {
    getBrandEvent().then(res => {
      if (res.data.code === 200) {
        const list = res.data.data
        setDocList(list)
      } 
    })
  }, [])
  return (
    <div>
      <Header go></Header>
      <div className={styles['doc-banner']}>
        <h5>
          品牌纪事<br/>
          BRAND HERITAGE
        </h5>
      </div>
      <div className={styles.DocBody}>
        {/* <div className={styles['doc-nav']}>
          <div className={styles['nav-line']}></div>
          <ul className={styles['nav-list']}>
            {DocList.map((item)=>{
              return(<li className={styles.navItem} key={item.id}>
                <div className={styles.activeText}>{item.event_date}</div>
              </li>)
            })}
          </ul>
        </div> */}
        <ul className={styles['doc-list']}>
        {DocList.map((item)=>{
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
