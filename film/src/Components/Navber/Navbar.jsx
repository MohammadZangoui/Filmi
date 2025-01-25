import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRightToBracket } from "react-icons/fa6";
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navber'>
            <div className='container'>
                <div className='navbar__box py-4 d-flex justify-content-between align-items-center'>
                    <div>
                        <img src="./public/img/logo.png" width={'175px'} alt="logo" />
                    </div>
                    <div>
                        <ul className='navbar d-flex gap-4'>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href=""> خانه <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <ul className='navbar-sub'>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                </ul>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href="">ژانر <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <ul className='navbar-sub'>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                </ul>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href=''> کشور <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <ul className='navbar-sub'>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                </ul>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href=''> صفحات <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <ul className='navbar-sub'>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                </ul>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href=""> فیلم ها  <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <ul className='navbar-sub'>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                </ul>
                            </li>
                            <li className='navbar__item'><a className='navbar__item__link text-decoration-none' href="">تلوزیون <RiArrowDropDownLine size={'2.5rem'} /></a>
                                <ul className='navbar-sub'>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                    <li className='navbar-sub__item'><a className='navbar-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                </ul>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='navbar__btn'>
                        <a className='navbar__btn-text text-decoration-none' href="#" ><FaArrowRightToBracket /> ثبت نام </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
