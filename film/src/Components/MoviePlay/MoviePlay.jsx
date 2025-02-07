import React from 'react'
import './MoviePlay.css'
import { FaEye } from "react-icons/fa";
export default function Preview() {
  return (
    <div className='movieplay'>
      <div className='container'>
        <div clasName='movieplay__container'>
          <video controls width={'100%'} src="https://dl1.highspeedlinkk.com/Series/2017/Blue_Planet_II/S01/Blue_Planet_II_S01E01_720p_BluRay.mp4" poster='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'></video>
        </div>
        <div className='movie__caption d-flex justify-content-between'>
          <div className='movie__caption__server'>
            <ul className='d-flex movie__list'>
              <li className='movie__item'> سرور یک </li>
              <li className='movie__item'> سرور دو </li>
              <li className='movie__item'> سرور سه </li>
            </ul>
          </div>
          <div className='movie__eye'>
            <div className='d-flex movie__eye__box'>
              <span className='ms-3'><FaEye /></span>
              <p>۲۵.۵k بازدید</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
