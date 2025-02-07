import React from 'react'
import './movie-show.css'
import MoviePlay from '../../Components/MoviePlay/MoviePlay'
import Comments from '../../Components/Comments/Comments'
export default function Preview() {
  return (
    <>
      <div>
        <MoviePlay/>
        <Comments />
      </div>
    </>
  )
}
