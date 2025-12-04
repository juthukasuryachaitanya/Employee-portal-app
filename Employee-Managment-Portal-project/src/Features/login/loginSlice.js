import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   username: " ",
   role: " ",
}
var loginSlice = createSlice({
   name: "login",
   initialState,
   reducers: {
      updatecredentials: (state, { payload: { data } }) => { 
         state.username=data.username
         state.role = data.role
         if (data.token) {
            window.localStorage.setItem('token', data.token)
         }
      },
      logout: (state, { payload }) => {
         state.username = ""
         state.role = ""
         window.localStorage.removeItem("token")
      }
   }
})
export const { updatecredentials, logout } = loginSlice.actions
var loginSlicereducer = loginSlice.reducer
export default loginSlicereducer