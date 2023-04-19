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
        state.isLoggedIn = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
 export const selectLoggedInState = (state: any) =>state.login.isLoggedIn;

 export const { setLoginState } = loginSlice.actions

export default loginSlice.reducer