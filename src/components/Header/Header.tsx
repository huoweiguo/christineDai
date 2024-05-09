import React,{ useState, useEffect }from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../views/Layout/Layout'
interface HeaderProps {
  type?:Boolean,
  go?:Boolean,
  titleObj?:{
    title:string,
    name:string
  }
}

interface RuleContext {
  [key: string]: unknown
  myMethod: () => void
}

export default function Hrader(props:HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const context = React.useContext(MyContext) as RuleContext;
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
    // window.location.reload();
  };
  const goback = () => {
    navigate(-1);
  }
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
        <div className={styles['header-top']} >
           <img onClick={()=>handleButtonClick('/')} className={styles['header-return']} src={require('../../assets/images/return.png')} alt="" />
           <img onClick={()=>handleButtonClick('/')} className={styles['header-logo']} src={require('../../assets/images/header-logo.png')} alt="" />
        </div>
        <div className={styles['header-right']}>
           {go?<div onClick={()=>BackUrl()} className={styles.retBtn}>
            返回上一页
            <br/>
            Return
           </div>:''}
           <div className={styles['header-nav']}>
            <p onClick={goback} className={styles['header-menu']}></p>
           </div>
        </div>
    </div>
  )
}