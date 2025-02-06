import React from 'react'
import "./Home.css"
import HeroSlider from '../../Components/Slider/HeroSlider'
import OffersFilms from '../../Components/OfferFilms/OfferFilms'
import BoxFilm from '../../Components/BoxFilm/BoxFilm'
import { FaAnglesLeft } from "react-icons/fa6";
import NewFilm from '../../Components/NewFilm/NewFilm'
import { LuMonitorPlay } from "react-icons/lu";
import { BsCollectionPlay } from "react-icons/bs";
import BoxPricing from '../../Components/BoxPricing/BoxPricing';
import NewFrends from '../../Components/NewFrends/NewFrends';
import Copyright from '../../Components/Copyright/Copyright';
import FullPlayFilms from '../../Components/FullPlayFilms/FullPlayFilms'
export default function Home() {
  return (
    <>
      <div className='container'>
        <HeroSlider />
        <div className='Suggestions'>
          <div className='py-5 d-flex justify-content-between'>
            <h3 className='h1 fw-bold'> پیشنهادات </h3>
            <a className='btn-mz text-decoration-none d-flex align-items-center justify-content-center'> مشاهده همه <FaAnglesLeft /></a>
          </div>
          <div className='gap-4 d-flex flex-wrap justify-content-between '>
            <OffersFilms/>
          </div>
        </div>
        <div className='new-film'>
          <div className='py-5 d-flex justify-content-between'>
            <h3 className='h1 fw-bold'> جدیدترین فیلم ها </h3>
            <a className='btn-mz text-decoration-none d-flex align-items-center justify-content-center'> مشاهده همه <FaAnglesLeft /></a>
          </div>
          <div className='gap-4 d-flex flex-wrap justify-content-between '>
              <NewFilm />
          </div>
        </div>
        <div className='new-film'>
          <div className='py-5 d-flex justify-content-between'>
            <h3 className='h1 fw-bold'> فیلم های پر بازدید </h3>
            <a className='btn-mz text-decoration-none d-flex align-items-center justify-content-center'> مشاهده همه <FaAnglesLeft /></a>
          </div>
          <div className='gap-4 d-flex flex-wrap justify-content-between '>
            <FullPlayFilms />
          </div>
        </div>
      </div>

      <div className='choose'>
        <div className='container'>
          <div className='choose__box d-flex'>
            <div className='choose__caption'>
              <div>
                <p className='text-primary fw-bold display-6'> چرا ما را انتخاب کنید ؟ </p>
                <p className='fw-bold display-4'> ما به رضایت <span className='text-primary fw-bold'> مشتریان </span> خود اهمیت <br /> می دهیم </p>
                <p className='choose__caption__Description'>
                  انواع مختلفی از معابر موجود است اما اکثریت آن ها را دارند با تزریق طنز واژگان تصادفی به شکلی دچار تغییر شده است که اینطور نیست نگاه حتی تمایل به تکرار از پیش تعریف شده کمی باورپذیر است.
                </p>
              </div>
              <div className='platform mt-5'>
                <div className='d-flex platform__top'>
                  <div className='platform__box-icon'>
                    <LuMonitorPlay size={'3.5rem'} />
                  </div>
                  <div className='platform__caption'>
                    <p className='fw-bold display-6'>  بهترین پلتفرم استریمینگ </p>
                    <p className='platform__caption__Description'> تنوع زیادی از معابر در دسترس اکثریت وجود دارد دچار تغییر شوخ طبعی تزریق شده اند. </p>
                  </div>
                </div>
                <hr />
                <div className='d-flex platform__botton mt-3'>
                  <div className='platform__box-icon'>
                    <BsCollectionPlay size={'3.5rem'} />
                  </div>
                  <div className='platform__caption'>
                    <p className='fw-bold display-6'> پخش جریانی بدون وقفه </p>
                    <p className='platform__caption__Description'> تنوع‌های زیادی از قسمت‌ها وجود دارد که اکثر آنها در دسترس هستند دچار تغییر طنز تزریق شده اند. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='choose__logo'>
              <div className='choose__logo__box-img'>
                <img className='choose__logo__img w-100 h-100' src="/public/img/01_1.jpg" alt="choose img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='BoxPricing'>
        <div className="container">
          <div className='BoxPricing__cont'>
            <div className='BoxPricing__top text-center mt-5'>
              <p className='boxpricing__title fw-bold'>پلن های ما</p>
              <h3 className='display-4 fw-bold'>  پلن اشتراک خود را <span className='boxpricing__choice'>انتخاب کنید</span>  </h3>
            </div>
            <div className='d-flex mt-5 gap-5 flex-wrap justify-content-between mt-5'>
              <BoxPricing />
              <BoxPricing />
              <BoxPricing />
              <BoxPricing />
            </div>
          </div>
        </div>
      </div>

    <NewFrends />
    </>
  )
}
