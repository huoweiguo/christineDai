import React from 'react'
import styles from './Story.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Story() {
  return (
    <div className={styles.StoryBody}>
      <Header></Header>
      Story
      <Footer></Footer>
    </div>
  )
}
