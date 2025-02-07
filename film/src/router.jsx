import Home from "./Page/Home/Home"
import Movieshow from "./Page/movie-show/movie-show"

const routers = [
    {path: '/', element: <Home/>},
    {path: '/movie-show', element: <Movieshow />}
]

export default routers