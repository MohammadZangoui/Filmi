import React from 'react'
import './OfferFilms.css'
import { FaPlay } from "react-icons/fa";
import { useSelector } from 'react-redux';
export default function BoxFilm() {
    const selector = useSelector(state => state.offerFilm)
    return (
        <>
        {
            selector.map(data => (
            <div key={data.id} className='boxfilm'>
                <div className='boxfilm__item'>
                    <div className='boxfilm__top overflow-hidden position-relative rounded-4'>
                        <img className='boxfilm__img w-100 h-100 ' src={data.poster} alt="" />
                        <span className='boxfilm__play'><FaPlay className='boxfilm__icon' size={'5rem'} /></span>
                    </div>
                    <div className='boxfilm__bottom'>
                        <p className='fw-bold'> {data.title} </p>
                        <div className='film-caption d-flex justify-content-between'>
                            <p className='film-caption__time fw-bold'> فصل دوم </p>
                            <p className='film-caption__genre'> اکشن </p>
                        </div>
                    </div>
                </div>
            </div>
            ))
        }
        </>
    )
}
