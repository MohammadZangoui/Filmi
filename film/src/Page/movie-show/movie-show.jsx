import React from 'react'
import './movie-show.css'
import MoviePlay from '../../Components/MoviePlay/MoviePlay'
import Comments from '../../Components/Comments/Comments'
import FullPlayFilms from '../../Components/FullPlayFilms/FullPlayFilms'
import Related from '../../Components/Related/Related'
import FormComments from '../../Components/FormComments/FormComments'
export default function Preview() {
  return (
    <>
      <div>
        <MoviePlay/>
        <Comments />
        <FormComments />
        <Related />
      </div>
    </>
  )
}
