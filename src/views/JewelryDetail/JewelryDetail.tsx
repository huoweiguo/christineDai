import React from 'react'
import styles from './JewelryDetail.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default function JewelryDetail() {
  const DetailDome1 = ()=>{
    return(
      <div className={styles['detail-dome1']}>
        <div className={styles['dome1-imgBox']}>
          <img src={require('../../assets/images/detailimg.jpg')} alt="" />
        </div>
        <div className={styles['dome1-txtBox']}>
          <div className={styles['en']}>RurikoinTemple· Maple</div>
          <h5 className={styles['title']}>琉璃光院·枫 手镯</h5>
          <div className={styles['des']}>
          日本京都琉璃光院的枫叶
          <br/>
          被秋风镀成金灿灿的景色
          <br/>
          阳光也被切成无数的光影
          <br/>
          层层叠叠，落入室内
          <br/>
          自然的诗情在此刻燃烧
          <br/>
          <br/>
          Maple leaves at the Rurikouin Temple in Kyoto
          <br/>
          Are Gilded golden by the autumn breeze.
          <br/>
          The sunlight is scattered into countless shades of light,
          <br/>
          Shinning the room in multiple layers,
          <br/>
          Breeding a poetic mood of nature.
          <br/>
          <br/>
          在经典歌剧《蝴蝶夫人》中
          <br/>
          便以灿漫的枫叶为舞台美学代表
          <br/>
          伴随着一声声深沉高昂的咏叹
          <br/>
          瑰丽自然与人文力量在此刻共融
          <br/>
          人们震撼于难以名状的艺术魅力之中
          <br/>
          琉璃光院·枫的创作灵感也油然而生
          <br/>
          <br/>
          In the classic music Madame Butterfly,
          <br/>
          The brilliant maple leaves represent stage aesthetics.
          <br/>
          With a sonorous and deep aria,
          <br/>
          The magnificent nature and the humanistic power merge in a moment.
          <br/>
          In the awe of the unexplainable artistic charm.
          <br/>
          The inspiration for Rurikoin Temple—Maple arises.
          </div>
        </div>
      </div>
    )
  }
  const DetailDome2 = ()=>{
    return(
      <div className={styles['detail-dome1']}>
        <div className={styles['dome1-txtBox']}>
          <div className={styles['en']}>RurikoinTemple· Maple</div>
          <h5 className={styles['title']}>琉璃光院·枫 手镯</h5>
          <div className={styles['des']}>
          日本京都琉璃光院的枫叶
          <br/>
          被秋风镀成金灿灿的景色
          <br/>
          阳光也被切成无数的光影
          <br/>
          层层叠叠，落入室内
          <br/>
          自然的诗情在此刻燃烧
          <br/>
          <br/>
          Maple leaves at the Rurikouin Temple in Kyoto
          <br/>
          Are Gilded golden by the autumn breeze.
          <br/>
          The sunlight is scattered into countless shades of light,
          <br/>
          Shinning the room in multiple layers,
          <br/>
          Breeding a poetic mood of nature.
          <br/>
          <br/>
          在经典歌剧《蝴蝶夫人》中
          <br/>
          便以灿漫的枫叶为舞台美学代表
          <br/>
          伴随着一声声深沉高昂的咏叹
          <br/>
          瑰丽自然与人文力量在此刻共融
          <br/>
          人们震撼于难以名状的艺术魅力之中
          <br/>
          琉璃光院·枫的创作灵感也油然而生
          <br/>
          <br/>
          In the classic music Madame Butterfly,
          <br/>
          The brilliant maple leaves represent stage aesthetics.
          <br/>
          With a sonorous and deep aria,
          <br/>
          The magnificent nature and the humanistic power merge in a moment.
          <br/>
          In the awe of the unexplainable artistic charm.
          <br/>
          The inspiration for Rurikoin Temple—Maple arises.
          </div>
        </div>
        <div className={styles['dome1-imgBox']}>
          <img src={require('../../assets/images/detailimg.jpg')} alt="" />
        </div>
      </div>
    )
  }
  const DetailDome3 = ()=>{
    return(
      <div className={styles['detail-dome3']}>
        <div className={styles['dome3-left']}>
          <img src={require('../../assets/images/detailimg2.jpg')} alt="" />
        </div>
        <div className={styles['dome3-txtBox']}>
          <div className={styles['en']}>YELLOW DIAMOND AND DIAMOND RING</div>
          <h5 className={styles['title']}>黄钻钻石戒指</h5>
          <div className={styles['des']}>
              GIA,Yellow Diamond, Report
              <br/>
              No.2221364126:12.11carat,
              <br/>
              Fancy Intense Yellow,IF,N,2EX
              <br/>
              Diamond Weight:1.01carat,1.00carat
              <br/>
              D/VS1
          </div>
        </div>
        <div className={styles['dome3-right']}>
          <img src={require('../../assets/images/detailimg3.jpg')} alt="" />
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header></Header>
      <div className={styles['detail-top']}>
        <div className={styles['detail-prevBtn']}>
          上一页
        </div>
        <div className={styles['detail-nextBtn']}>
          下一页
        </div>
        <div className={styles['detail-txtBox']}>
            GEMSTONE
            <br/>      
            Secret Green·Emerald
        </div>
      </div>
      <div className={styles['detail-box']}>
        {DetailDome1()}
        {DetailDome2()}
        {DetailDome3()}
      </div>
      <Footer></Footer>
    </div>
  )
}
