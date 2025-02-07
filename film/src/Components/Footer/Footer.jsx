import React from 'react'
import './Footer.css'
import { FiSend } from "react-icons/fi";
export default function Footer() {
    return (
        <div className='footer mt-4'>
            <div className='container'>
                <div className="footer__box d-flex justify-content-between mt-5">
                    <div className='footer__right'>
                        <h2 className='footer__title'>Ifimi</h2>
                        <p className='mt-4'> ما انواع مختلفی از معابر موجود داریم<br /> که اکثریت آنها دچار تغییر شده اند به<br /> نوعی با تزریق کلمات طنز باورپذیر. </p>
                    </div>
                    <div className='footer__center d-flex'>
                        <div className='footer__list-box'>
                            <p className='fw-bold footer__list__caption'> موپلی  </p>
                            <ul className='footer__list'>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> درباره ما </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> شاهدات </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> باما تماس بگیرید </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> شرایط خدمات </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> اخبار به روزرسانی </a></li>
                            </ul>
                        </div>

                        <div className='footer__list-box'>
                            <p className='fw-bold footer__list__caption'> ژانر </p>
                            <ul className='footer__list'>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> اکشن </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> بیوگرافی </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> مستند </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> ماجراجویی </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> ریلی تایم </a></li>
                            </ul>
                        </div>

                        <div className='footer__list-box'>
                            <p className='fw-bold footer__list__caption'> پشتیبانی </p>
                            <ul className='footer__list'>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> مرکز راهنمایی </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href="">  حساب من  </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href="">درخواست فیلم </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> پشتیبانی </a></li>
                                <li className='footer__list__item'><a className='footer__list-box__item-link text-decoration-none' href=""> مرکز رسانه </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__left d-flex flex-column">
                        <p>برای دریافت آخرین به روز رسانی و<br /> اخبار، در خبرنامه ما مشترک شوید</p>
                        <input className='footer__left__input' placeholder='ایمیل ادرس' type="text" />
                        <button className='text-decoration-none mt-4 btn-mz footer__left__Button' href="#"><FiSend /> عضویت </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
