import React,{Suspense} from 'react'
import { useLocation, matchRoutes, Navigate } from 'react-router-dom'
import { routes } from '../../router'
import styles from './BeforeEach.module.scss'

interface BeforeEachProps {
  children?: React.ReactNode
}
export default function BeforeEach(props: BeforeEachProps) {
  const location = useLocation()
  const matchs = matchRoutes(routes, location)
  // if (Array.isArray(matchs)) {
  //   const meta = matchs[matchs.length - 1].route.meta
  //   if(meta?.auth) {
  //    return <Navigate to="/"></Navigate>
  //   }
  // }
  const ReactNode = ()=>{
    return (
      <div className={styles.ReactNode}>
        <img className={styles.ReactImg} src={require('../../assets/images/header-logo.png')} alt="" />
      </div>
    )

  }
  return (
    <>
    <Suspense fallback={ReactNode()}>
      <div>
      { props.children }
      </div>
    </Suspense>
    </>
  )
}
