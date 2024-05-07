import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Nav from '../../components/Nav/Nav'
import { useLocation,matchRoutes } from 'react-router-dom';
import { routes } from '../../router'


export let MyContext:any;
export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(location.pathname==='/');
  const [name, setName] = useState<string>('');

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
    if(location.pathname === '/'){
      setOpen(true);
    }  
    const matchs = matchRoutes(routes, location)
    if (Array.isArray(matchs)) {
      const title = matchs[matchs.length - 1].route.meta?.title as string
      setName(title)
    } 
  }, [location, location.pathname])
  return (
    <div className={styles.LayoutBody}>
      <div className={styles.Outlet}>  
        <MyContext.Provider value={{ myMethod }}>
          <Outlet></Outlet>
        </MyContext.Provider>   
      </div>
      {!open?'':<div onClick={()=>{setOpen(false)}} className={styles['burger-cross-box']}>
        {location.pathname==='/'?'':<div className={styles['burger-cross']}></div>}
      </div>}
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
      <div className={open?`${styles.rightBody}`:`${styles.rightBody} ${styles.rightBody2}`}>
        <Nav onChange={openChange}></Nav>
      </div>
    </div>
  )
}