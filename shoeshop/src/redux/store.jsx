import { configureStore } from '@reduxjs/toolkit'
// Import file Reducer mới có chứa cấu trúc userProfile
import UserReducer from './reducers/UserReducer' 

export const store = configureStore({
  reducer: {
    // Key này phải khớp với useSelector ở trang Profile
    userReducer: UserReducer, 
  },
})