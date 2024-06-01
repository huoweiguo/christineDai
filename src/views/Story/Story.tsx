import React,{useState,useEffect} from 'react'
import styles from './Story.module.scss'
import { getBrandInfos } from '../../store/modules/home'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SlideInFromBottom from '../../components/SlideInFromBottom/SlideInFromBottom'

export default function Story() {
  interface RuleData {
    title: string
    intro: string
    brand_img: string
    brief:string
    founder_title:string
    founder_intro:string
    founder_img:string
    founder_message:string
    bottom_img:string
  }
  const [storyData, setStoryData] = useState<RuleData>({
    title: '',
    intro: '',
    brand_img: '',
    brief:'',
    founder_title:'',
    founder_intro:'',
    founder_img:'',
    founder_message:'',
    bottom_img:''
  })
  useEffect(() => {
    getBrandInfos().then(res => {
      if (res.data.code === 200) {
        const { title, intro, brand_img,brief,founder_title,founder_intro,founder_img,founder_message,bottom_img} = res.data.data
        setStoryData({
          title, intro, brand_img,brief,founder_title,founder_intro,founder_img,founder_message,bottom_img
        })
      } 
    })
  }, [])
  // const [isVisible, setIsVisible] = useState(false);
  // setTimeout(()=>{
  //   setIsVisible(true)
  // },2000)
  return (
    <div className={styles.storyBody}>
      <Header titleObj={{title:'品牌故事',name:'BRAND STORY'}}></Header>
      <div className={styles['story-banner']}>
        <h5>
          <span>BRAND STORY</span>
          <br/>
          品牌故事
        </h5>
      </div>
      <div className={styles['story-warp']}>
        <SlideInFromBottom isVisible={true}>
          <div className={styles['story-brand']}>
              <div className={styles['brand-text']}>
                  <div className={styles['brand-title']}>
                      <h1 dangerouslySetInnerHTML={{ __html: storyData.title }}>
                      </h1>
                      <h2>
                        品牌故事<br/>
                        BRAND STORY
                      </h2>
                  </div>
              </div>
              <div className={styles['brand-btn']}>
                <div className={styles['btn-img']}>
                  <img src={storyData.brand_img} alt="" />
                </div>
                <div className={styles['btn-txtBox']}>
                  <p dangerouslySetInnerHTML={{ __html: storyData.intro }}>
                  </p>
                  {/* <p>
                    Christine Dai的珠宝艺术品，融合了古董珠宝的玫瑰切割工艺和18世纪欧洲传统的古典蜡雕技术。无论是在金属的质感、宝石的色彩还是镶嵌结构上，都彰显出Christine Dai对于珠宝艺术的极致追求。
                  </p>
                  <p>
                    Christine Dai’s jewelry artworks integrate the rose-cut techniques of antique jewelry with the traditional wax carving techniques of 18th-century Europe. Whether in metal texture, gem’s colors, or the structure of the setting, they all reflect Christine Dai’s ultimate pursuit of jewelry art.
                  </p>
                  <p>
                    Christine Dai汲取传统和当代的艺术文化之美，跨越时间和空间的边界，将宝石的魅力以更饱满的艺术形式呈现。所创造的每一件珠宝作品都具有独特的生命力和艺术灵性，成为承载着历史、文化与美的典藏艺术品。
                  </p>
                  <p>
                    Christine Dai draws on the aesthetics of traditional and contemporary art, and culture and crosses the boundaries of time and space to present the charm of gemstones in a more comprehensive art form. With unique vitality and artistic spirituality, each piece of jewelry of her creation has turned into a collectable artwork and carrier of history, culture, and aesthetics.
                  </p>
                  <p>
                    在全球珠宝界中，Christine Dai凭借着独特的艺术风格和至臻工艺，备受艺术品藏家的关注。无论是在艺术的广度还是工艺深度上，Christine Dai的珠宝都展现出瑰丽典藏、隽永于世的价值。
                  </p>
                  <p>
                  Across the global jewelry art field, Christine Dai is highly sought after by art collectors for her unique artistic style and craftsmanship. In terms of artistic breadth and depth, Christine Dai’s jewelry comprises a magnificent collection of timeless value.
                  </p> */}
                </div>
              </div>
            </div>
        </SlideInFromBottom>
        <div className={styles['story-word']} dangerouslySetInnerHTML={{ __html: storyData.brief }}>
        </div>
        <div className={styles['story-art']}>
          <div className={styles['art-text']}>
              <div className={styles['art-title']}>
                  <h1 dangerouslySetInnerHTML={{ __html: storyData.founder_title }}>
                  </h1>
                  <h2>
                    艺术家<br/>
                    ARTIST
                  </h2>
              </div>
          </div>
          <div className={styles['art-btn']}>
            <div className={styles['art-btn-img']}>
              <img src={storyData.founder_img || require('../../assets/images/art.jpg')} alt="" />
            </div>
            <div className={styles['art-txtBox']} dangerouslySetInnerHTML={{ __html: storyData.founder_intro }}>
              {/* <p>
                Christine Dai,一位宝石艺术家,出生于中国香港。自幼沉浸于艺术氛围的熏陶。她深感艺术的力量，以宝石多维度的美传递了生命的张力。为了表达对自然与艺术之美的追求，她以宝石为载体，呈现艺术的无限可能性。
              </p>
              <p>
                Born in Hong Kong, China, Christine Dai is a gemstone art who has grown up in an artistic atmosphere. She deeply believes in the power of art to transmit the multi-dimensional beauty of gemstones and the tension of life. To express the pursuit of beauty in nature and art, she uses gemstones as a vehicle to present the infinite possibilities of art.
              </p>
              <p>
                Christine Dai巧妙地将这些自然魅力融入到宝石创作之中。她善于运用材料的质感，探索并突破多种精湛工艺，关注每一颗宝石的生长结构。以宝石为画笔，诠释着自己对艺术和生命的理解。Christine Dai的作品融合了古朴的玫瑰切割工艺和18世纪欧洲传统的古典蜡雕技术。无论是在金属的质感、宝石的色彩还是镶嵌结构上，都呈现了作品的光影感、雕塑感和生命力。
              </p>
              <p>
                Christine Dai skillfully incorporates the charms of nature into her gemstone creations. She uses the texture of the material, explores and breaks through the various techniques, and pays attention to the growth structure of each gemstone. Using gemstones as a brush to interpret her understanding of art and life, Christine Dai's work combines the rose-cut techniques of antique jewelry with the classical wax carving techniques of 18th century European tradition. Whether in the texture of the metal, the color of the gemstones or the structure of the setting, the pieces present a sense of light, sculpture and life.
              </p>
              <p>
                2021年，Christine Dai开设了中国大陆第间艺术珠宝私人鉴赏室，为热爱艺术的人们提供了沉浸式感官体验，近距离欣赏珠宝艺术之绮华绚丽。
              </p>
              <p>
                In 2021, Christine Dai opened the first Art Jewellery Private Appreciation Room in Mainland China, offering art lovers an immersive sensory experience and a close-up view of the splendour of jewellery art.
              </p> */}
            </div>
          </div>
          <div className={styles['art-intr']}>
            <div className={styles['intr-txt']}>
              <p dangerouslySetInnerHTML={{ __html: storyData.founder_message }}>
              </p>
              <div className={styles['intr-name']}>
              —<div dangerouslySetInnerHTML={{ __html: storyData.founder_title }}></div>
              </div>
              <p>
                <br/>
              </p>
            </div>
          </div>
        </div>
        <div className={styles['story-bom']}>
          <img src={storyData.bottom_img} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
