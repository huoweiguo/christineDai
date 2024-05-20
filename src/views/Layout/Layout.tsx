import React,{useRef,useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Nav from '../../components/Nav/Nav'
import { useLocation,matchRoutes } from 'react-router-dom';
import { routes } from '../../router'


export let MyContext:any;
export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(location.pathname==='/');
  const [open2, setOpen2] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const divRef = useRef<HTMLDivElement>(null);
  interface MethodsFunc {
    myMethod: Function
  }
  const myMethod = () => {
    setOpen(true);
  }

  MyContext = React.createContext<MethodsFunc>({ myMethod });

  const openChange = (newValue:boolean) => {
    setTimeout(() => {
      setOpen(newValue);
    }, 300);
  };
  
  useEffect(() => {  
    let time:any= undefined
    if (divRef.current) {
      // 修改样式
      divRef.current.style.opacity = '1';
    }
    if(location.pathname === '/'){
      setOpen(true);
      setOpen2(false)
    }else{
      time = setTimeout(()=>{
        if (divRef.current) {//把Nav组件变成none
          // 修改样式
          divRef.current.style.opacity = '0';
        }
        setOpen2(true)
      },1000) //一秒后Nav组件从宽为0改成高为0
    } 
    const matchs = matchRoutes(routes, location)
    if (Array.isArray(matchs)) {
      const title = matchs[matchs.length - 1].route.meta?.title as string
      setName(title)
    }
    return () => {
      clearTimeout(time)
    }
  }, [location, location.pathname])
  return (
    <div className={styles.LayoutBody}>
      <div className={styles.Outlet}>  
        <Outlet></Outlet>
      </div>
      {/* {!open?'':<div onClick={()=>{setOpen(false)}} className={styles['burger-cross-box']}>
        {location.pathname==='/'?'':<div className={styles['burger-cross']}></div>}
      </div>} */}
      {/* <div onClick={()=>setOpen(true)} className={!open?`${styles.leftBody}`:`${styles.leftBody} ${styles.leftBody2}`}>
        <div className={styles['burger-container']}>
          <div className={styles['burger-burger']}></div>
        </div>
        <div className={styles['burger-logo']}>
          C
        </div>
        <div className={styles['burger-text']}>
          {name}
        </div>
      </div> */}
      <div ref={divRef} className={open?`${styles.rightBody}`:open2?`${styles.rightBody} ${styles.rightBody2}`:`${styles.rightBody} ${styles.rightBody3}`}>
        <Nav onChange={openChange}></Nav>
      </div>
    </div>
  )
}