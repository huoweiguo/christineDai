import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Nav from '../../components/Nav/Nav'
import { useLocation } from 'react-router-dom';
export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(location.pathname==='/');
  const openChange = (newValue:boolean) => {
    setTimeout(() => {
      setOpen(newValue);
    }, 300);
  };
  return (
    <div className={styles.LayoutBody}>
      <div className={styles.Outlet}>
        <Outlet></Outlet>
      </div>
      {!open?'':<div onClick={()=>{setOpen(false)}} className={styles['burger-cross-box']}>
        {location.pathname==='/'?'':<div className={styles['burger-cross']}></div>}
      </div>}
      <div onClick={()=>setOpen(true)} className={!open?`${styles.leftBody}`:`${styles.leftBody} ${styles.leftBody2}`}>
        <div className={styles['burger-container']}>
          <div className={styles['burger-burger']}></div>
        </div>
        <div className={styles['burger-logo']}>
          C
        </div>
        <div className={styles['burger-text']}>
          艺术珠宝
        </div>
      </div>
      <div className={open?`${styles.rightBody}`:`${styles.rightBody} ${styles.rightBody2}`}>
        <Nav onChange={openChange}></Nav>
      </div>
    </div>
  )
}