import { useState } from 'react';
import './NavbarMobile.css'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { VscListSelection } from "react-icons/vsc";
function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <VscListSelection onClick={handleShow} size={'2.5rem'} className='mobileicon' />
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <div>
                    <img width={'150rem'} className='me-3 mt-2 mb-2' src="./public/img/logo.png" alt="" />
                </div>
                <Offcanvas.Body color='black'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <span className='display-6 fw-bold'>خانه</span> </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> خانه1 </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> خانه2 </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> خانه3 </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> خانه4 </a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> <span className='display-6 fw-bold'> ژانر </span></Accordion.Header>
                            <Accordion.Body>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> اکشن </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> انیمیشن </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> ماجراجویی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> بیوگرافی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> کمدی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> جنایی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> مستند </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> درام </a></li>
                                </ul>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> خانوادگی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> فانتزی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> تاریخچه </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> ترسناک </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> ورزشی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> اساطیر </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> موسیقی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> معمایی </a></li>
                                </ul>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> اخبار </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> عاشقانه </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> علمی تخیلی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> ریلی شو </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> هیجان انگیز </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> نمایش تلوزیونی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> جنگ </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> راز الود </a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <span className='display-6 fw-bold'> کشور </span> </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> ایران </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> استرالیا </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> اتریش </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> بلژیک </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> برزیل </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> کانادا </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> چین </a></li>
                                </ul>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> فنلایند </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> فرانسه </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> المان </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> مجارستان </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> ایرلند </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> ایتالیا </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> انگلستان </a></li>
                                </ul>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> هلند </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> نروز </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> لهستان </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> رمانی </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> روسیه </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> تایلند </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href="#"> بریتانیا </a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> <span className='display-6 fw-bold'> صفحات </span> </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> درباره ما </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> تیم ما </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> وبلاگ </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> حساب کاربری </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> تماس با ما </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> نظرات </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> بزودی </a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header> <span className='display-6 fw-bold'> فیلم </span> </Accordion.Header>
                            <Accordion.Body>
                                <ul className='navmob-sub'>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> فیلم یک </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> فیلم دو </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> فیلم سه </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> فیلم تک یک </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> فیلم تک دو </a></li>
                                    <li className='navmob-sub__item'><a className='navmob-sub__link text-decoration-none' href=""> دسته بندی فیلم ها </a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <button className='btn-mz mt-3 w-100'>ثبت نام</button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;