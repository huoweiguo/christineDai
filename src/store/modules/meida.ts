import http from '../../utils/http'

export const getMediaList = () => {
  return http.get('/media-list', {})
}