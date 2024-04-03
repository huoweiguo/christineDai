import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../utils/http'

export const getHomeInfos = () => {
  return http.get('/get-index-setting', {})
}
