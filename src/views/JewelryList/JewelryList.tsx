import React from 'react'
import styles from './JewelryList.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
export default function JewelryList() {
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  return (
    <div className={styles.listBody}>
      <Header titleObj={{title:'艺术珠宝',name:'ART JEWEL'}}></Header>
      <div className={styles['jewelry-top']}>
      </div>
      <div className={styles['jewelry-brandVid']}>
        <div className={styles['jewelry-box']}>
          <div className={styles['jewelry-year']}>     
            GEMSTONE
          </div>
          <ul className={styles['jewelry-listBox']}>
            <li onClick={()=>handleButtonClick('/layout/JewelryDetail')}>
              <h5>Opera Red·Rudy</h5>
            </li>
            <li onClick={()=>handleButtonClick('/layout/JewelryDetail')}>
              <h5>Secret Green·Emerald</h5>
            </li>
            <li onClick={()=>handleButtonClick('/layout/JewelryDetail')}>
              <h5>Amazing Blue·Sapphire</h5>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
