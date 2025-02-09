import React from 'react'
import './NewFilm.css'
import { Link } from 'react-router-dom';
import { SiGradleplaypublisher } from "react-icons/si";
import { LiaStarSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';
export default function BoxFilm() {
    const selector = useSelector(state => state.newFilm)

    return (
        <>
            {selector.map(data => (
                <div key={data.id} className='newfilms'>
                    <Link className=' text-decoration-none' to={'/movie-show'}>
                        <div className='newfilms__item'>
                            <div className='newfilms__top overflow-hidden position-relative rounded-4'>
                                <img className='newfilms__img w-100 h-100 ' src={data.poster} alt="poster" />
                                <span className='newfilms__lmdb d-flex justify-content-center align-items-center text-white rounded'>{data.imdb_rating}<LiaStarSolid className='text-warning me-2' /></span>
                                <span className='newfilms__play'><SiGradleplaypublisher className='newfilms__icon' size={'9rem'} /></span>
                            </div>
                            <div className='newfilms__bottom'>
                                <p className='fw-bold newfilms__bottom__title text-white'> {data.title} </p>
                                <div className='film-caption d-flex justify-content-between'>
                                    <p className='film-caption__time fw-bold'> {data.year} </p>
                                    <p className='film-caption__genre'> {data.genres[0]} </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}
