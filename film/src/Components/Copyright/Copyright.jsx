import React from 'react'
import './Copyright.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaVk } from "react-icons/fa6";
export default function Copyright() {
    return (
        <div className='copyright mt-5'>
            <div className='container'>
                <div className='d-flex justify-content-between flex-wrap align-items-center'>
                    <div className='fw-bold'>© حق کلی و رایت 2025 همه حقوق سایت. </div>
                    <div>
                        <ul className='copyright__list  d-flex'>
                            <li className='copyright__item'><FaFacebookSquare className='copyright__icon' size={'23px'} /></li>
                            <li className='copyright__item'><FaInstagramSquare className='copyright__icon' size={'23px'} /></li>
                            <li className='copyright__item'><FaVimeo className='copyright__icon' size={'23px'} /></li>
                            <li className='copyright__item'><AiFillTikTok className='copyright__icon' size={'23px'} /></li>
                            <li className='copyright__item'><FaVk className='copyright__icon' size={'23px'} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
