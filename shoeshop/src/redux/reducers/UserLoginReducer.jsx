import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogin: null, // Lưu thông tin user sau khi login thành công
}

const UserLoginReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    }
  }
});

export const { setUserLogin } = UserLoginReducer.actions
export default UserLoginReducer.reducer