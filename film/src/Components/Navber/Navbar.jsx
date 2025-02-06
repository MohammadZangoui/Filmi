import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import './Navbar.css'

export default function Navbar() {
    const [fix, setFix] = useState(false)
    const [open, setOpen] = useState(false)

    const fixed = () => {
        if (window.scrollY >= 80) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener('scroll', fixed)
    return (
        <div className={fix ? 'navbar navbar__activ-top' : 'navbar'} >
            <div className='container'>
                <div className='navbar__box w-100 py-4 d-flex justify-content-between align-items-center'>
                    <div>
                        <img src="./public/img/logo.png" width={'175px'} alt="logo" />
                    </div>
                    <div>
                        <ul className=' d-flex gap-4'>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none navbar__activ' href="#"> خانه <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <div className="navbar__item__sub-box d-flex">
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href="#">ژانر <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <div className='navbar__item__sub-box d-flex'>
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> اکشن </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> انیمیشن </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> ماجراجویی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> بیوگرافی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> کمدی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> جنایی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> مستند </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> درام </a></li>
                                    </ul>
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> خانوادگی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> فانتزی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تاریخچه </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> ترسناک </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> ورزشی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> اساطیر </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> موسیقی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> معمایی </a></li>
                                    </ul>
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> اخبار </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> عاشقانه </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> علمی تخیلی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> ریلی شو </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> هیجان انگیز </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> نمایش تلوزیونی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> جنگ </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> راز الود </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href='#'> کشور <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <div className="navbar__item__sub-box d-flex">
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> ایران </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> استرالیا </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> اتریش </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> بلژیک </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> برزیل </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> کانادا </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> چین </a></li>
                                    </ul>
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> فنلایند </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> فرانسه </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> المان </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> مجارستان </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> ایرلند </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> ایتالیا </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> انگلستان </a></li>
                                    </ul>
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> هلند </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> نروز </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> لهستان </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> رمانی </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> روسیه </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تایلند </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> بریتانیا </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href='#'> صفحات <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <div className="navbar__item__sub-box d-flex">
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> درباره ما </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> تیم ما </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> وبلاگ </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> حساب کاربری </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> تماس با ما </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> نظرات </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> بزودی </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href="#"> فیلم ها  <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <div className="navbar__item__sub-box d-flex">
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> فیلم یک </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> فیلم دو </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> فیلم سه </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> فیلم تک یک </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> فیلم تک دو </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> دسته بندی فیلم ها </a></li>
                                    </ul>
                                </div>
                                <div className="navbar__item__sub-box d-flex"></div>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href="#">تلوزیون <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <div className='navbar__item__sub-box d-flex'>
                                    <ul className='navbar-sub'>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تلوزیون 1 </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تلوزیون 2 </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تلوزیون 3 </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تلوزیون تک یک </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تلوزیون تک دو </a></li>
                                        <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href="#"> تلوزیون لیست </a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar__btn'>
                        <FaSearch className='ms-5' onClick={() => setOpen(!open)} size={'2rem'} />
                        <a className='navbar__btn-text text-decoration-none' href="#" ><FaArrowRightToBracket /> ثبت نام </a>
                    </div>
                    <div className={!open ? 'box-search' : "box-search box-search__open"}>
                        <input className='box-search__input box-search__open' type="search" placeholder='دنبال چیز خاص میگردید؟' />
                    </div>
                </div>
            </div>
        </div>
    )
}
