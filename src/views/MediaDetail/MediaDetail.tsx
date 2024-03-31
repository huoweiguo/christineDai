import React, { useState, useEffect } from 'react'
import styles from './MediaDetail.module.scss'
import { Popover } from 'antd';

export default function MediaDetail() {

  const [pcShow, setPcShow] = useState(true)

  const content = (
    <div className={styles.profile_inner}>
      <div className={styles.left}>
        <img src={require('../../assets/images/wx-1.bmp')} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.profile_name}>CHRISTINE DAI 艺术珠宝</div>
        <div className={styles.profile_meta}>
          <span className={styles.label}>微信号</span>
          <span className={styles.val}>gh_0a5ef2c4f94a</span>
        </div>
        <div className={styles.profile_meta}>
          <span className={styles.label}>功能介绍</span>
          <span className={styles.val}>Christine Dai致力于“自然绮境，瑰丽典藏”的艺术珠宝，将光影感、雕塑感、生命力诠释于作品之中。宝石的瑰影塑造出雕塑的质感，这是继承与创作的交融，生长与生命的延续，Christine Dai的作品呈现着艺术的无限可能性。</span>
        </div>
      </div>
    </div>
  );

  const handleWindowResize = () => {
    setPcShow(window.innerWidth < 1024 ? false : true)
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize); //监听页面变化控制显示隐藏
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className={styles.mediaDetail}>
      <div className={styles.container}>
        <div className={styles.title}>巴黎时装周｜CHRISTINE DAI 艺术珠宝再续璀璨篇章</div>
        <div className={styles.info}>
          <span className={styles.meta}>CHRISTINE DAI</span>
          { pcShow ? 
            <Popover placement="bottom" content={content} trigger="click">
              <span className={`${styles.richName}`}>CHRISTINE DAI 艺术珠宝</span>
            </Popover> : 
            <span className={`${styles.richName}`}>CHRISTINE DAI 艺术珠宝</span>
          }
          <span className={styles.meta}>2023-10-04 21:00</span>
          <span className={styles.meta}>上海</span>
        </div>
        <div className={styles.content}></div>
        { pcShow && <div className={styles['wx-fixed']}>
          <img src={require('../../assets/images/wx-2.bmp')} alt=""/>
          <p>
          微信扫一扫<br/>
          关注该公众号</p>
        </div> }
      </div>
    </div>
  )
}
