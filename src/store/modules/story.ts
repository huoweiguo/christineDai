import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import http from '../../utils/http'

type title = string
type year = string
type Infos = {
  [key: string]: unknown
}
export type RuleStory = {
  title: title
  infos: Infos
  year: year
}

type InfosParams = {
  id: string | number
}

const storySlice = createSlice({
  name: 'story',
  initialState: {
    title: '',
    year: new Date().getFullYear().toString(),
    infos: {}
  } as RuleStory,
  reducers: {
    setTitle(state, action: PayloadAction<title>) {
      state.title = action.payload
    },
    updateInfos(state, action: PayloadAction<Infos>) {
      state.infos = action.payload
    },
    clearTitle(state) {
      state.title = ''
    }
  }
})

export const getStoryInfos = createAsyncThunk('story/getInfos', async (payload: InfosParams) => {
  const ret = await http.get('/captchaImage')
  return ret
})

export const { setTitle, updateInfos, clearTitle } = storySlice.actions
export default storySlice.reducer
