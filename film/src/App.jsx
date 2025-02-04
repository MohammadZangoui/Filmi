import './App.css'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'
import Navbar from './Components/Navber/Navbar'
import { addNewFilms } from './Redux/Store/NewFilms'
import { useDispatch } from 'react-redux'
import Footer from './Components/Footer/Footer'
import Copyright from './Components/Copyright/Copyright'
import { addFilmOffers } from './Redux/Store/OfferFilm'
import { addFullPlayFilms } from './Redux/Store/FullPlayFilms'
function App() {
  let ApiKey = '&apy_key=56d90e76db8349e3250c8d139b077694'
  const routs = useRoutes(routers)
  const dispach = useDispatch()

  useEffect(() => {
    dispach(addFilmOffers('https://moviesapi.ir/api/v1/movies?page=1'))
    dispach(addNewFilms('https://moviesapi.ir/api/v1/movies?page=2'))
    dispach(addFullPlayFilms('https://moviesapi.ir/api/v1/movies?page=3'))
  }, [])
  return (
    <>
      <div className='app'>
        <div>
          <Navbar />
        </div>
        <div>
          {routs}
        </div>
        <Footer />
        <Copyright />
      </div>
    </>
  )
}

export default App