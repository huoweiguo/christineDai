import React, { useState, useEffect} from 'react'
import styles from './ContactUs.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Col, Row, Button, Form, type FormProps, type CheckboxProps, Input, Checkbox, Select } from 'antd';
import { getContactUs, getMessage, getCityList, type ruleData } from '../../store/modules/contactUs'

const { TextArea } = Input;
const { Option } = Select;

interface typeData{
  id: number,
  title: string,
  content: string,
  contact: string,
  bg_cover: string,
  created_at: string,
  updated_at: string,
  length?: number
}

interface typeCityData{
  city_id: number,
  name: string,
  parent_id: number
}

export default function ContactUs() {
  const [form] = Form.useForm();

  const [ activeIndex, setactiveIndex ] = useState<number>(0)
  const [ selectIndex, setSelectIndex ] = useState<number|null>(null)
  const [isCheck, setIsCheck] = useState<boolean>(false)
  
  const [bgData, setBgData] = useState<typeData[]>([])

  const [cityData, setCityData] = useState<typeCityData[]>([])

  const [col, setCol] = useState(12);
  const [sw, setSw] = useState(true)
  const [loading, setLoading] = useState(false)
 
  const handleWindowSizeChange = () => { //监听页面大小变化
    setCol(window.innerWidth > 750 ? 12 : 24)
    !selectIndex && setSw(window.innerWidth > 750 ? true : false)
  };

  const handleMouseEnter = (index: number) => {
    setactiveIndex(index)
  }

  const openContactForm = (index: number) => {
    form.resetFields();
    setSelectIndex(index)
    col===24 && setSw(true)
  }

  const onBack = () => {
    setSelectIndex(0)
  }

  const checkData = (val: ruleData): Boolean=>{
    if(!val.email){
      alert('电子邮箱不能为空')
      setLoading(false)
      return false
    }else if(!val.name){
      alert('姓名不能为空')
      setLoading(false)
      return false
    }else if(!val.phone){
      alert('电话不能为空')
      setLoading(false)
      return false
    }else if(!val.province){
      alert('地区不能为空')
      setLoading(false)
      return false
    }else if(!val.msg){
      alert('留言不能为空')
      setLoading(false)
      return false
    }else{
      return true
    }
  }

  const onFinish: FormProps<ruleData>["onFinish"] = (values) => {
    setLoading(true)
    if(isCheck){
      checkData(values) && getMessage(values).then(res=>{
        if(res.data.code===200){
          alert('发送成功！')
          setSelectIndex(0)
          setSw(false)
        }else{
          alert(res.data.message)       
        }
      }).finally(()=>{
        setLoading(false)
      })
    }else{
      alert('请勾选阅读隐私权条款')
      setLoading(false)
    }
  };

  const onGenderChange = (val: string)=>{}

  const onChangeCheck: CheckboxProps['onChange'] = (e) => {
    setIsCheck(e.target.checked)
  }

  const divForm = () => {
    return (
      <Form name="trigger" 
          style={{ padding: 20 }} 
          layout="vertical" 
          autoComplete="off"
          labelCol={{ span: 8 }}
          onFinish={onFinish}
          >
          <Row gutter={16}>
            <Col span={col}>
              <Form.Item
                label="姓名*"
                name="name"
                rules={[{ max: 10 }]}
                validateTrigger="onBlur"
              >
                <Input placeholder="姓名" className={styles.txt} />
              </Form.Item>
            </Col>
            <Col span={col}>
              <Form.Item
                label="电子邮箱*"
                name="email"
                validateTrigger="onBlur"
                rules={[
                  {
                    type: 'email',
                    message: '输入的邮箱格式不正确!',
                  }
                ]}
              >
                <Input placeholder="电子邮箱" className={styles.txt} />
              </Form.Item>
            </Col>
            <Col span={col}>
              <Form.Item
                label="电话*"
                name="phone"
                validateTrigger="onBlur"
                rules={[
                  {
                    pattern: /^1[3-9]\d{9}$/,
                    message: '手机号码格式不正确!',
                  },
                ]}
              >
                <Input placeholder="电话" className={styles.txt} />
              </Form.Item>
            </Col>
            <Col span={col}>
              <Form.Item
                label="地区*"
                name="province"
                validateTrigger="onBlur"
              >
                <Select
                  placeholder="地区"
                  onChange={onGenderChange}
                  allowClear
                >
                  { cityData.length > 0 && cityData.map(item=>(
                    <Option className={styles['option-size']} value={item.city_id} key={item.city_id}>{item.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="您的留言*"
                name="msg"
                validateTrigger="onBlur"
                rules={[{ max: 100 }]}
              >
                <TextArea rows={4} placeholder="" maxLength={200} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <div  className={styles.cbox}>
                  <Checkbox  onChange={onChangeCheck} checked={isCheck}>我已阅读并接受CHRISTINE DAI网站的隐私权条款</Checkbox>
                  <Button loading={loading} htmlType="submit" className={`${styles['c-btn']} ${styles.sub}`}>发送</Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
    )
  }

  useEffect(() => {
    getContactUs().then(res=>{
      if(res.data.code===200){
        setBgData([...res.data.data])
      }
    })
    getCityList().then(res=>{
      if(res.data.code===200){
        setCityData([...res.data.data])
      }
    })
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className={ styles['contactUs-body'] }>
       <Header titleObj={{title:'联系我们',name:'CONTACT US'}}></Header>
       <div className={ `${styles.contactUs} ${!selectIndex ? styles.hide : ''}` }>
      { bgData.length > 0 && <div className={ `${styles['cu-container']} ${ selectIndex ? styles['cu-narrow'] : ''}` } style={{backgroundImage: 'url('+bgData[activeIndex]?.bg_cover+')'}}>
        { bgData.map((item,index)=>(
          <div className={`${styles.itemBox} ${selectIndex && selectIndex !== index+1 ? styles.narrow : ''}`} key={index} onMouseEnter={()=>handleMouseEnter(index)}>
            { col===24 && <div className={styles.bgBox} style={{backgroundImage: 'url('+item.bg_cover+')'}}></div>}
            <div className={`${styles.wrapper} ${selectIndex === index+1 ? styles.showWrapper : ''}`}>
              <div className={styles.title}  dangerouslySetInnerHTML={{ __html: item.title }}></div>
              <div className={`${styles.content } ${selectIndex === index+1 ? styles.showContent : ''}`}>
                <div className={`${styles.txt} ${selectIndex ? styles.showWarp : styles.hideWarp}`} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                <p className={styles['c-btn']} onClick={()=>openContactForm(index+1)}>{item.contact}</p>
              </div>
            </div>
          </div>
        ))
        }
        { col===12 && <div className={`${styles['contact-form']} ${selectIndex ? styles.enlarge : (selectIndex === 0 ? styles['enlarge-leave'] : '')}`}>
          <div className={styles.title}>联络我们 <span onClick={()=>onBack()}>返回上一页</span></div>
          { divForm() }
        </div>}
      </div>}
      { bgData.length > 0 && col===24 && <div className={`${styles['contact-form']} ${selectIndex ? styles.enlarge : (selectIndex === 0 ? styles['enlarge-leave'] : '')} ${ selectIndex ? styles.showForm : '' }`}>
        <div className={styles.title}>联络我们 <span onClick={()=>onBack()}>返回上一页</span></div>
        { divForm() }
      </div>}
      </div>
      <Footer></Footer>
    </div>  
  )
}
