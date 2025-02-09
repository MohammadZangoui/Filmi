import React from 'react'
import './FullPlayFilms.css'
import { Link } from 'react-router-dom';
import { SiGradleplaypublisher } from "react-icons/si";
import { LiaStarSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';
export default function FullPlayFilms() {
    const selector = useSelector(state => state.fullPlay)
    return (
        <>
            {
                selector.map(data => (
                    <div key={data.id} className='fullfilms'>
                        <Link className='text-decoration-none' to={'/movie-show'}>
                            <div className='fullfilms__item'>
                                <div className='fullfilms__top overflow-hidden position-relative rounded-4'>
                                    <img className='fullfilms__img w-100 h-100 ' src={data.poster} alt="poster" />
                                    <span className='fullfilms__lmdb d-flex justify-content-center align-items-center rounded text-white'>{data.imdb_rating}<LiaStarSolid className='text-warning me-2' /></span>
                                    <span className='fullfilms__play'><SiGradleplaypublisher className='fullfilms__icon' size={'9rem'} /></span>
                                </div>
                                <div className='fullfilms__bottom'>
                                    <p className='fw-bold fullfilms__bottom__title text-white'> {data.title} </p>
                                    <div className='film-caption d-flex justify-content-between'>
                                        <p className='film-caption__time fw-bold'> {data.year}</p>
                                        <p className='film-caption__genre'>{data.genres[0]}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}
