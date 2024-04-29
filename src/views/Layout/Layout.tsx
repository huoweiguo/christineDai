import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
import styles from './Layout.module.scss'
import { serialize } from 'v8';

export default function Layout() {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(true)
    },200)
  },[])
  return (
    <div className={styles.LayoutBody}>
      <Home/>
      {open?'':<div onClick={()=>{setOpen(true)}} className={styles['burger-cross-box']}>
        <div className={styles['burger-cross']}></div>
      </div>}
      <div onClick={()=>setOpen(false)} className={open?`${styles.leftBody}`:`${styles.leftBody} ${styles.leftBody2}`}>
        <div className={styles['burger-container']}>
          <div className={styles['burger-burger']}></div>
        </div>
        <div className={styles['burger-text']}>
          艺术珠宝
        </div>
      </div>
      <div className={open?`${styles.rightBody}`:`${styles.rightBody} ${styles.rightBody2}`}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
