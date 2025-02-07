import React from 'react'
import './CommentsBox.css'
import { RiArrowGoBackLine } from "react-icons/ri";
export default function CommentsBox() {
    return (
        <div className='CommentsBox rounded-4'>
            <div className='CommentsBox__Information'>
                <div className='d-flex flex-column CommentsBox__container'>
                    <div className='d-flex align-items-center justify-content-between CommentsBox__title'>
                        <div className='d-flex me-4 align-items-center CommentsBox__doc'>
                            <img src="../public/img/com-1.jpg" className='CommentsBox__img' width={'55rem'} alt="prof" />
                            <p className='ms-3 me-4'> رقیه اسدی </p>
                            <p className=''> 1403/11/8 </p>
                        </div>
                        <div className='CommentsBox__icon d-flex justify-content-center align-items-center'>
                            <RiArrowGoBackLine size={'2.3rem'} />
                        </div>
                    </div>
                    <hr />
                    <div className='CommentsBox__caption'>
                        تنوع زیادی از گذر در دسترس است اما اکثریت به نوعی توسط طنز تزریقی دچار تغییر شده اند کلمات تصادفی غیرقابل شک حتی کمی باورپذیر به نظر می رسند. اگر شما می خواهید از یک پاساژ استفاده کنید، باید مطمئن شوید که وجود ندارد هر چیز شرم آور پنهان در وسط متن. همه ژنراتورها در اینترنت تمایل دارند تکه های از پیش تعریف شده را به عنوان تکرار کنند ضروری است که این اولین مولد واقعی در اینترنت باشد.
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
