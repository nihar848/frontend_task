import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
 message : string,
 isLoggedIn : boolean,
 userToken : any,
 userInfo : object,
}

const initialState: LoginState = {
  message: '',
  isLoggedIn : false,
  userToken: null,
  userInfo : {}
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginState: (state, action)=>{
        const {userInfo, userToken} = action.payload
        state.userInfo = userInfo
        state.userToken = userToken
        state.isLoggedIn = action.payload;
    },
    logout : (state, action) => {
      state.userInfo = {}
      state.userToken = null
    }
  }
})

// Action creators are generated for each case reducer function
 export const selectLoggedInState = (state: any) =>state.login.isLoggedIn;
 export const selectUserInfo = (state: any) =>state.login.userInfo;
 export const selectUserToken = (state: any) =>state.login.userToken;

 export const { setLoginState, logout } = loginSlice.actions

export default loginSlice.reducer

