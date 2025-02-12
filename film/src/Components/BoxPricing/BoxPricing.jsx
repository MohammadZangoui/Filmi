import React from 'react'
import { useEffect } from 'react';
import './BoxPricing.css'
import { CiMoneyCheck1 } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import 'aos/dist/aos.css';
import Aos from 'aos'

export default function BoxPricing() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div data-aos="fade-up" className='boxpricing rounded-4'>
            <div className='boxpricing__top'>
                <div className='boxpricing__logo-box text-center'>
                    <span className='boxpricing__logo'> <CiMoneyCheck1 className='boxpricing__logo__react-icon m-2' size={'7rem'} /> </span>
                </div>
                <h2 className=' boxpricing__price text-center display-1 fw-bold mt-4'> ۲۵۰,۰۰۰/ </h2>
                <p className='boxpricing__timing fw-bold mt-4'> ماهانه </p>
            </div>
            <hr />
            <div className='boxpricing__botton'>
                <ul className='boxpricing__list'>
                    <li className='boxpricing__list__item'>
                        <TiTickOutline className='boxpricing__list__icon' />
                        جریان یک ماهه
                    </li>
                    <li className='boxpricing__list__item'>
                        <TiTickOutline className='boxpricing__list__icon' />
                        رزولوشن 1080 HD
                    </li>
                    <li className='boxpricing__list__item'>
                        <TiTickOutline className='boxpricing__list__icon' />
                        فیلم‌ها، نمایش‌های <br /> تلویزیونی، تلویزیون زنده
                    </li>
                    <li className='boxpricing__list__item'>
                        <TiTickOutline className='boxpricing__list__icon' />
                        درخواست سفارشی
                    </li>
                    <li className='boxpricing__list__item'>
                        <TiTickOutline className='boxpricing__list__icon' />
                        پشتیبانی ۲۴ ساعته
                    </li>
                </ul>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <div className='boxpricing__btn' >
                    <a className='btn-mz text-decoration-none' href="#"> انتخاب پلن </a>
                </div>
            </div>
        </div>
    )
}
