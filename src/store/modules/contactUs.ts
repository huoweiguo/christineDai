import http from '../../utils/http'

export type ruleData = {
  province: string,
  name: string,
  email: string,
  phone: string,
  msg: string
}

export const getContactUs = () => {
  return http.get('/contact-us', {})
}

export const getMessage = (data: ruleData) => {
  return http.post('/message', data)
}

export const getCityList = () => {
  return http.post('/get-city', {})
}