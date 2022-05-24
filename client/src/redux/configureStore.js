import { configureStore } from '@reduxjs/toolkit'

import userSlice from './userState';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  }
})

export default store;