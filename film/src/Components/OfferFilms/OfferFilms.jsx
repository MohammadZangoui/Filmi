import React from 'react'
import './OfferFilms.css'
import { Link } from 'react-router-dom'
import { SiGradleplaypublisher } from "react-icons/si";
import { LiaStarSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';
export default function BoxFilm() {
    const selector = useSelector(state => state.offerFilm)
    console.log(selector);

    return (
        <>
            {
                selector.map(data => (
                    <div key={data.id} className='offerfilms'>
                        <Link className='text-decoration-none' to={'/movie-show'}>
                            <div className='offerfilms__item'>
                                <div className='offerfilms__top overflow-hidden position-relative rounded-4'>
                                    <img className='offerfilms__img w-100 h-100 ' src={data.poster} alt="poster" />
                                    <span className='offerfilms__lmdb d-flex justify-content-center text-white align-items-center rounded'>{data.imdb_rating}<LiaStarSolid className='text-warning me-2' /></span>
                                    <span className='offerfilms__play'><SiGradleplaypublisher className='offerfilms__icon' size={'8rem'} /></span>
                                </div>
                                <div className='offerfilms__bottom'>
                                    <p className='fw-bold offerfilms__bottom__title text-white'> {data.title} </p>
                                    <div className='film-caption d-flex justify-content-between'>
                                        <p className='film-caption__time fw-bold'> {data.year} </p>
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
