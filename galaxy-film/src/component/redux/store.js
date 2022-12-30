import { configureStore } from '@reduxjs/toolkit'
import filmReducer  from './reducers/filmSlice'
export const store = configureStore({
  reducer: {
    film: filmReducer,
    
  },
})