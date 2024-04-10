import React,{ useState,useEffect }from 'react'
import styles from './JewelryDetail.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom';
import { getProductInfo } from '../../store/modules/jewelry'
interface TempItem {
  template: number,
  title: string,
  content: string,
  image: string,
  component: Function
}
interface RuleData {
  temp: TempItem[],
  catname: string,
  title: string,
  brief: string,
  is_bg: number,
  header_img: string,
  priv: number,
  next: number
}
export default function JewelryDetail() {
  const { id } = useParams();
  let [num, setNum] = useState(0);
  const [isObj, setIsObj] = useState<TempItem>({
    template: 0,
    title:'',
    content: '',
    image: '',
    component:()=>{
      return('')
    }
  });
  const [DetailData, setDetailData] = useState<RuleData>({
    temp: [],
    catname: '',
    title: '',
    brief: '',
    is_bg: 0,
    header_img: '',
    priv: 0,
    next: 0
  })
  const DetailDemo1 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo1']}>
        <div className={styles['demo1-txtBox']}>
          {/* <div className={styles['en']}>RurikoinTemple· Maple</div>
          <h5 className={styles['title']}>琉璃光院·枫 手镯</h5> */}
          <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
          <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
          </div>
        </div>
        <div className={styles['demo1-imgBox']}>
          <img src={obj.image} alt="" />
        </div>
      </div>
    )
  }
  const DetailDemo2 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo1']}>
        <div className={styles['demo1-imgBox']}>
          <img src={obj.image} alt="" />
        </div>
        <div className={styles['demo1-txtBox']}>
        <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
        <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
        </div>
        </div>
      </div>
    )
  }
  const DetailDemo3 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo5']}>
        <div className={styles['demo5-top']}>
            <img src={obj.image} alt="" />
          </div>
        <div className={styles['demo5-txtBox']}>
          <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
          <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
          </div>
        </div>
      </div>
    )

  }
  const DetailDemo4 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo3']}>
        <div className={styles['demo3-left']}>
          <img src={obj.image} alt="" />
        </div>
        <div className={styles['demo3-txtBox']}>
        <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
        <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
        </div>
        </div>
        <div className={styles['demo3-right']}>
          <img src={obj.image} alt="" />
        </div>
      </div>
    )
  }
  const DetailDemo5 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo7']}>
        <div className={styles['demo7-left']}>
         <div className={styles['demo7-txtBox']}>
            <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
            <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
            </div>
          </div>
        </div>
        <div className={styles['demo7-right']}>
          <img src={obj.image} alt="" />
        </div>
      </div>
    )
  }
  const DetailDemo6 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo5']}>
        <div className={styles['demo5-txtBox']}>
        <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
        </div>
        <div className={styles['demo5-top']}>
          <img src={obj.image} alt="" />
        </div>
        <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
        </div>
      </div>
    )

  }
  const DetailDemo7 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo4']}>
        <div className={styles['demo4-top']}>
          <img src={obj.image} alt="" />
        </div>
        <div className={styles['demo4-txtBox']}>
        <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
        <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
        </div>
        </div>
        <div className={styles['demo4-down']}>
          <img src={obj.image} alt="" />
        </div>
      </div>
    )
  }
  const Default = ()=>{
    return(
      <div className={styles.Default}>
        <div className={styles['default-box']}>
          <h5>敬请期待</h5>
          <p>Please stay tuned</p>
        </div>
      </div>
    )
  }
  const arr = [
    {
      type:1,
      component:DetailDemo1
    },
    {
      type:2,
      component:DetailDemo2
    },
    {
      type:3,
      component:DetailDemo3
    },
    {
      type:4,
      component:DetailDemo4
    },
    {
      type:5,
      component:DetailDemo5
    },
    {
      type:6,
      component:DetailDemo6
    },
    {
      type:7,
      component:DetailDemo7
    },
    {
      type:0,
      component:Default
    },
  ]
  // const NextPage =()=>{ //下一页
  //  if(DetailData.temp.length === 0) return 
  //     let addNum = num + 1
  //     if(addNum >= DetailData.temp.length){
  //       setNum(0)
  //       addNum = 0
  //     }else{
  //       setNum(num+1)
  //     }
  //     setIsObj(DetailData.temp[addNum])
  //   }
  // const PrevPage =()=>{ //上一页
  //   if(DetailData.temp.length === 0) return 
  //     let addNum = num - 1
  //     if(num === 0){
  //       setNum(DetailData.temp.length-1)
  //       addNum = DetailData.temp.length-1
  //     }else{
  //       setNum(num-1)
  //     }
  //     console.log(addNum,'addNum')
  //     setIsObj(DetailData.temp[addNum])
  // }
  useEffect(() => {
    getProductInfo(id as string).then(res => {
      if (res.data.code === 200) {
        let { temp,catname,title,brief,is_bg,header_img,priv,next} = res.data.data
        temp = temp.map((item:TempItem)=>({
          ...item,
          component:arr.filter(itcm=>itcm.type === item.template)[0].component
        }))
        setDetailData({
          temp,catname,title,brief,is_bg,header_img,priv,next
        })
      } 
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <div className={styles.detailBody}>
      <Header go></Header>
      <div className={styles['detail-top']}>
        <div className={styles['detail-prevBtn']}>
          上一页
        </div>
        <div className={styles['detail-nextBtn']}>
          下一页
        </div>
        <div className={styles['detail-txtBox']}>
            {DetailData.catname}
            <br/>      
            {DetailData.title}
        </div>
      </div>
      <div className={styles['detail-box']}>
        <div className={styles['detail-brief']} dangerouslySetInnerHTML={{ __html: DetailData.brief }}></div>
        {DetailData.temp.map(item=>{
          return (item.component(item))
        })}
      </div>
      <Footer></Footer>
    </div>
  )
}
