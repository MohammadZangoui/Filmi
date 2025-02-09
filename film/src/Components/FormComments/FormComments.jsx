import React from 'react'
import './FormComments.css'
import { FiSend } from "react-icons/fi";
export default function FormComments() {
    return (
        <div className='formcomments mt-5'>
            <div className='container'>
                <div className='formcomments__box'>
                    <p> ارسال دیدگاه </p>
                    <form action="#">
                        <div className='d-flex justify-content-between gap-4 mt-4'>
                            <div className='w-100'><input className='form__input' type="text" placeholder='نام و نام خانوادگی*' /></div>
                            <div className='w-100'><input className='form__input' type="email" placeholder='ایمیل شما*' /></div>
                        </div>
                        <div className='mt-4'>
                            <textarea placeholder='نظر شما*' className='w-100 form__input' name="" id="#"></textarea>
                        </div>
                        <button className='btn-mz'> ارسال نظر <FiSend /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
