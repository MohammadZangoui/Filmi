import { configureStore } from '@reduxjs/toolkit'
import newFilmsReducer from './Store/NewFilms'
import OffersFilmsReducer from './Store/OfferFilm'
import fullPlayFilmsReducer from './Store/FullPlayFilms'
const store = configureStore({
  reducer: {
    newFilm : newFilmsReducer,
    offerFilm : OffersFilmsReducer,
    fullPlay: fullPlayFilmsReducer
  },
})

export default store