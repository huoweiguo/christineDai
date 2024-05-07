import React,{ useState, useEffect }from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
  type?:Boolean,
  go?:Boolean,
  titleObj?:{
    title:string,
    name:string
  }
}
export default function Hrader(props:HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
    // window.location.reload();
  };
  const BackUrl = ()=>{
    navigate(-1);
  }
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = document.documentElement.scrollTop;
  //     setIsScrolled(scrollTop > 50); // 设置滚动高度的阈值
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  let { type,titleObj,go} = props;
  return (
    <div className={(type&&!isScrolled)||!isScrolled?`${styles.headerBody}`:`${styles.headerBody} ${styles.onFix}`}>
        <img onClick={()=>handleButtonClick('/')} className={styles['header-logo']} src={require('../../assets/images/header-logo.png')} alt="" />
        <div className={styles['header-right']}>
           {go?<div onClick={()=>BackUrl()} className={styles.retBtn}>
            返回上一页
            <br/>
            Return
           </div>:''}
           <div className={styles['header-nav']}>
            <p className={styles['header-menu']}></p>
           </div>
        </div>
    </div>
  )
}