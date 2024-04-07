import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../utils/http'

export const getHomeInfos = () => {
  return http.get('/get-index-setting', {})
}


export const getBrandInfos = () => {
  return http.get('/brand-info', {})
}


export const getBrandEvent = () => {
  return http.get('/brand-event', {})
}
