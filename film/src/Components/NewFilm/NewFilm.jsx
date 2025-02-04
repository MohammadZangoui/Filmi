import React from 'react'
import './NewFilm.css'
import { FaPlay } from "react-icons/fa";
import { useSelector } from 'react-redux';
export default function BoxFilm() {
    const selector = useSelector(state => state.newFilm)   

    return (
        <>
            {selector.map(films => (
                <div key={films.id} className='boxfilm'>
                    <div className='boxfilm__item'>
                        <div className='boxfilm__top overflow-hidden position-relative rounded-4'>
                            <img className='boxfilm__img w-100 h-100 ' src={films.poster} alt="" />
                            <span className='boxfilm__play'><FaPlay className='boxfilm__icon' size={'5rem'} /></span>
                        </div>
                        <div className='boxfilm__bottom'>
                            <p className='fw-bold boxfilm__bottom__title'> {films.title} </p>
                            <div className='film-caption d-flex justify-content-between'>
                                <p className='film-caption__time fw-bold'> فصل دوم </p>
                                <p className='film-caption__genre'> اکشن </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
