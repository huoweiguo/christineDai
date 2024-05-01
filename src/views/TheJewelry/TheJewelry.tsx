import React,{ useEffect, useState } from 'react'
import styles from './TheJewelry.module.scss'
import Header from '../../components/Header/Header'
import { useNavigate,useParams } from 'react-router-dom';
import { getProductCat } from '../../store/modules/jewelry'
import Footer from '../../components/Footer/Footer'
export default function TheJewelry() {
  interface DataItem {
    id: string,
    title:string,
    title_en: string
  }
  const [leftObj, setLeftObj] = useState<DataItem>({
    id: '',
    title:'',
    title_en: ''
  })
  const [RightObj, setRightObj] = useState<DataItem>({
    id: '',
    title:'',
    title_en: ''
  })
  const { id } = useParams();
  const navigate = useNavigate();
  const handleButtonClick = (url:string) => {
    // 使用 navigate() 方法进行路由跳转
    navigate(url);
  };
  useEffect(() => {
    getProductCat(id as string).then(res => {
      if (res.data.code === 200) {
        if(res.data.data[0]){
          const {id,title,title_en} = res.data.data[0]
          setLeftObj({id,title,title_en})
        }else{
          setLeftObj({id:'',title:'',title_en:''})
        }
        if(res.data.data[1]){
          const {id,title,title_en} = res.data.data[1]
          setRightObj({id,title,title_en})
        }else{
          setRightObj({id:'',title:'',title_en:''})
        } 
      } 
    })
  }, [id])
  return (
    <div>
      <Header type></Header>
      <div className={styles.TheJewelry}>
        <div className={id==='3'?styles['theJewelry-left2']:styles['theJewelry-left']}>
          <div onClick={()=>handleButtonClick(`/JewelryList/${leftObj.id}`)} className={styles['theJewelry-txt']}>
            <h3>{leftObj.title_en}</h3>
            <h4>{leftObj.title}</h4>
          </div>
        </div>
        <div className={styles['theJewelry-right']}>
          <div onClick={()=>handleButtonClick(`/JewelryList/${RightObj.id}`)} className={styles['theJewelry-txt']}>
            <h3>{RightObj.title_en}</h3>
            <h4>{RightObj.title}</h4>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
