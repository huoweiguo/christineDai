import React, { useState, useEffect } from 'react'
import styles from './ContactUs.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Col, Row, Button, Form, Input, Checkbox } from 'antd';
import { log } from 'console';

const { TextArea } = Input;

export default function ContactUs() {

  const [ activeIndex, setactiveIndex ] = useState<number>(0)
  const [ selectIndex, setSelectIndex ] = useState<number|null>(null)
  
  const bgData: any[] = [
    require('../../assets/images/cu-bg1.jpeg'),
    require('../../assets/images/cu-bg2.png'),
    require('../../assets/images/cu-bg3.jpeg')
  ] 

  const handleMouseEnter = (index: number) => {
    setactiveIndex(index)
  }

  const openContactForm = (index: number) => {
    setSelectIndex(index)
  }

  const onBack = () => {
    setSelectIndex(0)
  }

  const preloadImage = (src: string) => {  //预加载图片，防止切换背景图片出现空白情况
    const img = new Image();
    img.src = src;
  };

  useEffect(() => {
    bgData.forEach((item)=>{
      preloadImage(item)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={ styles.contactUs }>
      <Header titleObj={{title:'联系我们',name:'CONTACT US'}}></Header>
      <div className={ styles['cu-container'] } style={{backgroundImage: 'url('+bgData[activeIndex]+')'}}>
        <div className={`${styles.itemBox} ${selectIndex && selectIndex !== 1 ? styles.narrow : ''}`} onMouseEnter={()=>handleMouseEnter(0)}>
          <div className={`${styles.wrapper} ${selectIndex === 1 ? styles.showWrapper : ''}`}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={`${styles.content } ${selectIndex === 1 ? styles.showContent : ''}`}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']} onClick={()=>openContactForm(1)}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={`${styles.itemBox} ${selectIndex && selectIndex !== 2 ? styles.narrow : ''}`} onMouseEnter={()=>handleMouseEnter(1)}>
          <div className={`${styles.wrapper} ${selectIndex === 2 ? styles.showWrapper : ''}`}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={`${styles.content } ${selectIndex === 2 ? styles.showContent : ''}`}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']} onClick={()=>openContactForm(2)}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={`${styles.itemBox} ${selectIndex && selectIndex !== 3 ? styles.narrow : ''}`} onMouseEnter={()=>handleMouseEnter(2)}>
          <div className={`${styles.wrapper} ${selectIndex === 3 ? styles.showWrapper : ''}`}>
            <div className={styles.title}>
              巴黎<br/>Paris
            </div>
            <div className={`${styles.content } ${selectIndex === 3 ? styles.showContent : ''}`}>
              <p>Art Jewelry Appreciation Room</p>
              <p>Reservation Appreciation</p>
              <p className={styles['mg-25']}>Email:official@christine-dai.com</p>
              <p className={styles['c-btn']} onClick={()=>openContactForm(3)}>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={`${styles['contact-form']} ${selectIndex ? styles.enlarge : (selectIndex === 0 ? styles['enlarge-leave'] : '')}`}>
          <div className={styles.title}>联络我们 <span onClick={()=>onBack()}>返回上一页</span></div>
          <Form name="trigger" style={{ padding: 20 }} layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="姓名"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="姓名" className={styles.txt} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="电子邮箱"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="电子邮箱" className={styles.txt} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="电话"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="电话" className={styles.txt} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="地区"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="地区" className={styles.txt} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="您的留言"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
              </Form.Item>
            </Col>
            <Col span={24} className={styles.cbox}>
              <Checkbox value="1">我已阅读并接受CHRISTINE DAI网站的隐私权条款</Checkbox>
              <span className={styles.sub}>发送</span>
            </Col>
          </Row>
          </Form>
        </div>
      </div>
      <Footer></Footer>
    </div>  
  )
}
