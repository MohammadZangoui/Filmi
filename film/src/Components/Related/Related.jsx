import React from 'react'
import FullPlayFilms from '../FullPlayFilms/FullPlayFilms'
import { FaAnglesLeft } from "react-icons/fa6";
export default function Related() {
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-between mt-5'>
                    <p className='display-5 fw-bold'> مرتبط </p>
                    <a href="#" className='btn-mz text-decoration-none'>مشاهده همه <FaAnglesLeft /></a>
                </div>
                <div className='d-flex flex-wrap gap-4 justify-content-between mt-5'>
                    <FullPlayFilms />
                </div>
            </div>
        </div>
    )
}
