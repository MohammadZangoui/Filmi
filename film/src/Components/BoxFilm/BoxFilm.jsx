import React from 'react'
import './BoxFilm.css'
import { FaPlay } from "react-icons/fa";
export default function BoxFilm() {
  return (
    <div className='boxfilm'>
      <div className='boxfilm__item'>
        <div className='boxfilm__top overflow-hidden position-relative rounded-4'>
          <img className='boxfilm__img w-100 h-100 ' src="https://devhostco.xyz/moplay/images/s1.jpg" alt="" />
          <span className='boxfilm__play'><FaPlay className='boxfilm__icon' size={'5rem'} /></span>
        </div>
        <div className='boxfilm__bottom'>
          <p className='fw-bold'> لوکی </p>
          <div className='film-caption d-flex justify-content-between'>
            <p className='film-caption__time fw-bold'> فصل دوم </p>
            <p className='film-caption__genre'> اکشن </p>
          </div>
        </div>
      </div>
    </div>
  )
}
