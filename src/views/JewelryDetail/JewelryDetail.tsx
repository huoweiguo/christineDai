import React,{ useState,useEffect }from 'react'
import styles from './JewelryDetail.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams,useNavigate } from 'react-router-dom';
import { getProductInfo,getProductList } from '../../store/modules/jewelry'
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
interface DataItem {
  current_page: string,
  total: number,
  total_page: number,
  list: {
    id: number,
    title: string,
    title_en: string,
    cat_id: number,
    is_line: number
  }[]
  catname: string
}
export default function JewelryDetail() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id') as string;
  const lcid = searchParams.get('lcid') as string;
  const [listData, setListData] = useState<DataItem>({
    current_page: '',
    total: 0,
    total_page: 0,
    list: [],
    catname: ''
  })
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
          <img src={obj.image[0]} alt="" />
        </div>
      </div>
    )
  }
  const DetailDemo2 = (obj:TempItem)=>{
    return(
      <div className={styles['detail-demo1']}>
        <div className={styles['demo1-imgBox']}>
          <img src={obj.image[0]} alt="" />
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
            <img src={obj.image[0]} alt="" />
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
          <img src={obj.image[0]} alt="" />
        </div>
        <div className={styles['demo3-txtBox']}>
        <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
        <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
        </div>
        </div>
        <div className={styles['demo3-right']}>
          <img src={obj.image[1]} alt="" />
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
          <img src={obj.image[0]} alt="" />
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
          <img src={obj.image[0]} alt="" />
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
          <img src={obj.image[0]} alt="" />
        </div>
        <div className={styles['demo4-txtBox']}>
        <div className={styles['title']} dangerouslySetInnerHTML={{ __html: obj.title }}></div>
        <div className={styles['des']} dangerouslySetInnerHTML={{ __html: obj.content }}>
        </div>
        </div>
        <div className={styles['demo4-down']}>
          <img src={obj.image[1]} alt="" />
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
  const NextPage =()=>{ //下一页
    if(listData.list.length <= 1) return 
    const index = listData.list.findIndex((item:any)=>item.id === Number(id))
    let addNum = index + 1
    if(addNum >= listData.list.length){
      addNum = 0
    }
    navigate(`/layout/JewelryDetail?id=${listData.list[addNum].id}&lcid=${lcid}`);
  }
  const PrevPage =()=>{ //上一页
    if(listData.list.length <= 1) return 
    const index = listData.list.findIndex((item:any)=>item.id === Number(id))
    let addNum = index - 1
    if(addNum < 0){
      addNum = listData.list.length-1
    }
    navigate(`/layout/JewelryDetail?id=${listData.list[addNum].id}&lcid=${lcid}`);
  }
  useEffect(() => {
    getProductInfo(id as string).then(res => {
      if (res.data.code === 200) {
        let { temp,catname,title,brief,is_bg,header_img,priv,next} = res.data.data
        temp = temp.map((item:TempItem)=>({
          ...item,
          component:arr.filter(itcm=>itcm.type === item.template)[0]?.component || Default
        }))
        setDetailData({
          temp,catname,title,brief,is_bg,header_img,priv,next
        })
      } 
    })
    getProductList(lcid as string).then(res => {
      if (res.data.code === 200) {
        const { current_page,total,total_page,list,catname} = res.data.data
        setListData({
          current_page,total,total_page,list,catname
        })
      } 
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <div className={styles.detailBody}>
      <Header go></Header>
      <div className={styles['detail-top2']}>
        {DetailData.header_img?<img className={styles['detail-img']}  src={DetailData.header_img} alt="" />:
         ''}
        {listData.list.length <= 1?'':<div onClick={()=>PrevPage()} className={styles['detail-prevBtn']}>
          上一页
        </div>}
        {listData.list.length <= 1?'':<div onClick={()=>NextPage()} className={styles['detail-nextBtn']}>
          下一页
        </div>}
        <div className={styles['detail-txtBox']}>
            {DetailData.catname}
            <br/>      
            {DetailData.title}
            {DetailData.header_img?<div className={styles['detail-text-brief']} dangerouslySetInnerHTML={{ __html: DetailData.brief }}></div>:''}
        </div>
      </div>
      <div className={styles['detail-box']}>
        {DetailData.header_img?'':<div className={styles['detail-brief']} dangerouslySetInnerHTML={{ __html: DetailData.brief }}></div>}
        {DetailData.temp.length === 0?DetailData.catname?Default():'':DetailData.temp.map((item,index)=>{
          return (<div key={index}>{item.component(item)}</div>)
        })}
      </div>
      <Footer></Footer>
    </div>
  )
}
