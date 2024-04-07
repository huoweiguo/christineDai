import http from '../../utils/http'

export const getContactUs = () => {
  return http.get('/contact-us', {})
}