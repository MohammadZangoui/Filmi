import React from 'react'
import HeroSlider from '../../Components/Slider/HeroSlider'
import BoxFilm from '../../Components/BoxFilm/BoxFilm'
export default function Home() {
  return (
    <>
      <div className='container'>
        <HeroSlider />
        <div className='Suggestions'>
          <div className='py-5 d-flex justify-content-between'>
          <h3 className='h1'> پیشنهادات </h3>
          <a className='btn-mz'> مشاهده همه </a>
          </div>
          <div className='gap-4 d-flex flex-wrap justify-content-between '>
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
            <BoxFilm />
          </div>
        </div>
      </div>
    </>
  )
}
