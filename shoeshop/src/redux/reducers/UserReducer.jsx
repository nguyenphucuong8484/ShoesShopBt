import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userProfile: {
    email: '',
    password: '',
    name: '',
    phone: '',
    gender: true // true là Male, false là Female
  }
}

const UserReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    // Action dùng chung cho cả Login và Update
    updateUserProfile: (state, action) => {
      state.userProfile = { ...state.userProfile, ...action.payload };
    }
  }
});

export const { updateUserProfile } = UserReducer.actions
export default UserReducer.reducer