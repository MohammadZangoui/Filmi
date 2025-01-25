import './App.css'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'
import Navbar from './Components/Navber/Navbar'
import { addTodoListAdd } from './Redux/HomeSlier/HomeSlier'
import { useDispatch } from 'react-redux'
function App() {
  let ApiKey = '&apy_key=56d90e76db8349e3250c8d139b077694'
  const routs = useRoutes(routers)
  const dispach = useDispatch()
  console.log(dispach);
  useEffect(() => {
    dispach(addTodoListAdd('https://api.themoviedb.org/3/account/21718557/lists/&apy_key=56d90e76db8349e3250c8d139b077694'))
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
      </div>
    </>
  )
}

export default App