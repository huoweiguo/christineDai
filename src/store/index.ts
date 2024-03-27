import { configureStore } from '@reduxjs/toolkit'
import storyReducer from './modules/story'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux'
import type { RuleStory } from './modules/story'
import type { PersistPartial } from 'redux-persist/es/persistReducer'
import type { Reducer, UnknownAction } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['infos']
}

const store = configureStore({
  reducer: {
    story: persistReducer(persistConfig, storyReducer) as Reducer<RuleStory & PersistPartial, UnknownAction>
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware({
      serializableCheck: false
    })
})

persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
