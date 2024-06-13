import React, { useState } from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import FoodData from '../../Food/FoodData.jsx'

const Residencies = () => {
  const [fooddata, setfooddata] = useState(FoodData)
  return (
    <div style={{ backgroundColor: 'wheat', width: '250px', height: '270px', borderRadius:'20px' }} className='swipper'>
      <Swiper>
        {
          fooddata.map((food) => (
            <SwiperSlide>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img style={{ width: '240px', height: '240px', borderRadius: '50px' }} src={food.img} alt="" />
              </div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span>{food.price}</span>
                <span>{food.name}</span>
              </div>
              <span>{food.details}</span>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Residencies