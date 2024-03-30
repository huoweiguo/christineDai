import React,{ useState, useEffect }from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
  type?:Boolean
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
  let { type,titleObj} = props;
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
           <div>
            <p className={styles['header-menu']}></p>
           </div>
        </div>
    </div>
  )
}
