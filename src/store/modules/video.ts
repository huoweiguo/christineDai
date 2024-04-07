import http from '../../utils/http'

type InfosParams = {
  id: string | number | undefined
}

export const getVideoCat = () => {
  return http.get('/video-cat', {})
}


export const getVideoList = (data: InfosParams) => {
  return http.get('/video-list', data)
}