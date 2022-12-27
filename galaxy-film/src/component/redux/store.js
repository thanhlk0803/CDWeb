import { configureStore, createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
    name: 'detail',
  reducer: {
    addToDetail(state, action) {
        const {
          idFood,
         
        } = action.payload
  
        
      },
  


  },
})
export const { addToDetail } =
  detailSlice.actions

const Detail = detailSlice.reducer

export default Detail
