import React from 'react'
import './Comments.css'
import { RiArrowGoBackLine } from "react-icons/ri";
import CommentsBox from '../CommentsBox/CommentsBox'
export default function Comments() {
  return (
    <div>
        <div className='container'>
            <p className='mt-4 comments__title display-5 fw-bold'> دیدگاه ها </p>
            <div>
                <CommentsBox />
                <CommentsBox />
                <CommentsBox />
                <p className='btn-mz mt-5 comments__loading'> بارگذاری بیشتر <RiArrowGoBackLine /></p>
            </div>
        </div>
    </div>
  )
}
