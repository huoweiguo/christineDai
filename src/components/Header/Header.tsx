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
  };
  const BackUrl = ()=>{
    navigate(-1);
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50); // 设置滚动高度的阈值
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  let { type,titleObj,go} = props;
  return (
    <div className={(type&&!isScrolled)||!isScrolled?`${styles.headerBody}`:`${styles.headerBody} ${styles.onFix}`}>
        <img onClick={()=>handleButtonClick('/')} className={styles['header-logo']} src={require('../../assets/images/header-logo.png')} alt="" />
        <div className={styles['header-right']}>
           {
            titleObj?
              <p className={styles['header-name']}>
                {titleObj.title}<br/>
                <span>{titleObj.name}</span>
              </p>:''
           }
           {go?<div onClick={()=>BackUrl()} className={styles.retBtn}>
            返回上一页
            <br/>
            Return
           </div>:''}
           <div className={styles['header-nav']}>
            <p className={styles['header-menu']}></p>
            <ul className={styles['nav-ul']}>
              <li onClick={()=>handleButtonClick('/layout/story')}>品牌故事</li>
              <li onClick={()=>handleButtonClick('/layout/jewelry')}>艺术珠宝</li>
              <li onClick={()=>handleButtonClick('/layout/documentary')}>品牌纪事</li>
              <li onClick={()=>handleButtonClick('/layout/video')}>视频</li>
              <li onClick={()=>handleButtonClick('/layout/globalMedia')}>全球媒体</li>
              <li onClick={()=>handleButtonClick('/layout/contactUs')}>联系我们</li>
            </ul>
           </div>
        </div>
    </div>
  )
}
