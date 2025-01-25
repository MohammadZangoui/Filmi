import { configureStore } from '@reduxjs/toolkit'
import homeslire from './HomeSlier/HomeSlier'
const store = configureStore({
  reducer: {
    HomeSlier : homeslire
  },
})

export default store