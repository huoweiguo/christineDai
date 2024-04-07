import React,{useState,useEffect} from 'react'
import styles from './Documentary.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { getBrandEvent } from '../../store/modules/home'
export default function Documentary() {
  interface RuleData {
    title: string
    intro: string
    brand_img: string
    brief:string
    founder_title:string
    founder_intro:string
    founder_img:string
    founder_message:string
    bottom_img:string
  }
  const [homeData, setHomeData] = useState<RuleData>({
    title: '',
    intro: '',
    brand_img: '',
    brief:'',
    founder_title:'',
    founder_intro:'',
    founder_img:'',
    founder_message:'',
    bottom_img:''
  })
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
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
        <div className={styles['doc-nav']}>
          <div className={styles['nav-line']}></div>
          <ul className={styles['nav-list']}>
            <li className={styles.active}>
              <div className={styles.activeText}>2024</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.activeText}>2024</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.activeText}>2024</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.activeText}>2024</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.activeText}>2024</div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.activeText}>2024</div>
            </li>
          </ul>
        </div>
        <ul className={styles['doc-list']}>
          <li onClick={()=>handleButtonClick('/layout/mediaDetail')} className={styles['doc-item']}>
            <div className={styles['doc-left']}>
              <img src={require('../../assets/images/docImg.jpg')} alt="" />
            </div>
            <div className={styles['doc-right']}>
               <p>2022-08</p>
               <div>CHRISTINE DAI 巴黎博物馆</div>
               <div>
                    CHRISTINE DAI  Musée des Arts Décoratifs in Paris
                </div>
                <img className={styles['doc-icon']} src={require('../../assets/images/rightIcon.png')} alt="" />
            </div>
          </li>
          <li onClick={()=>handleButtonClick('/layout/mediaDetail')} className={styles['doc-item']}>
            <div className={styles['doc-left']}>
              <img src={require('../../assets/images/docImg.jpg')} alt="" />
            </div>
            <div className={styles['doc-right']}>
               <p>2022-08</p>
               <div>CHRISTINE DAI 巴黎博物馆</div>
               <div>
                    CHRISTINE DAI  Musée des Arts Décoratifs in Paris
                </div>
                <img className={styles['doc-icon']} src={require('../../assets/images/rightIcon.png')} alt="" />
            </div>
          </li>
          <li onClick={()=>handleButtonClick('/layout/mediaDetail')} className={styles['doc-item']}>
            <div className={styles['doc-left']}>
              <img src={require('../../assets/images/docImg.jpg')} alt="" />
            </div>
            <div className={styles['doc-right']}>
               <p>2022-08</p>
               <div>CHRISTINE DAI 巴黎博物馆</div>
               <div>
                    CHRISTINE DAI  Musée des Arts Décoratifs in Paris
                </div>
                <img className={styles['doc-icon']} src={require('../../assets/images/rightIcon.png')} alt="" />
            </div>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
}
