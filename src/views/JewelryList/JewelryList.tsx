import React, { useEffect, useState } from 'react'
import styles from './JewelryList.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate,useParams } from 'react-router-dom';
import { getProductList } from '../../store/modules/jewelry'
export default function JewelryList() {
  const { id } = useParams();
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
  const [listData, setListData] = useState<DataItem>({
    current_page: '',
    total: 0,
    total_page: 0,
    list: [],
    catname: ''
  })
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  useEffect(() => {
    getProductList(id as string).then(res => {
      if (res.data.code === 200) {
        const { current_page,total,total_page,list,catname} = res.data.data
        setListData({
          current_page,total,total_page,list,catname
        })
      } 
    })
  }, [id])
  return (
    <div className={styles.listBody}>
      <Header titleObj={{title:'艺术珠宝',name:'ART JEWEL'}}></Header>
      <div className={styles['jewelry-top']}>
      </div>
      <div className={styles['jewelry-brandVid']}>
        <div className={styles['jewelry-box']}>
          <div className={styles['jewelry-year']}>     
            {listData.catname}
          </div>
          <ul className={styles['jewelry-listBox']}>
            {listData.list.length>0?listData.list.map(item=>{
              return(
                <li onClick={()=>handleButtonClick(`/layout/JewelryDetail/${item.id}`)}>
                  <h5>{item.title}·{item.title_en}</h5>
                </li>
              )
            }):listData.catname?<li>
                <h5>敬请期待</h5>
              </li>:''
            }
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
