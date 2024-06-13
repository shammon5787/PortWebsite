import React from 'react'
import './Hero.css'
import img from '../../Data/6.png'
import { MdLocationOn } from "react-icons/md";
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section style={{ height: '70vh' }} className="hero-wrapper">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '200px' }} className="padding innerWidth hero-container flexCenter">
        <div className='hero-left'>
          {/* <h1 style={{ color: 'red', position: 'fixed', top: '100px', left: '375px', fontSize: '30px', zIndex: '1' }}>⨀</h1> */}
          <h1 style={{ fontFamily: 'sans-serif' }}>Discover <br /> More Suitable <br />Property</h1>
          <p style={{ fontFamily: 'sans-serif', color: 'gray' }}>Find the verity of properties thaat suit your <br />Requirements fulfill in a manner</p>
          <div style={{ marginTop: '10px', backgroundColor: 'white', padding: '10px', borderRadius: '5px', alignItems: 'center', justifyContent: 'space-between', display: 'flex' }}>
            <MdLocationOn style={{ color: 'blue', position: 'absolute' }} />
            <input style={{ padding: '3px', outline: 'none', border: 'none', marginLeft: '13px' }} type="text" name="" id="" />
            <button style={{ backgroundColor: 'blue', padding: '3px', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>search</button>
          </div>
          <div className='flexCenter states' style={{marginTop:'20px'}}>
            <div className="flexColStart state" style={{display:"flex", alignItems:'center', justifyContent:'space-between'}}>
              <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap:'3px' }}>
                <CountUp
                  start={-875.039}
                  end={160527.012}
                  duration={5}
                />
                <h1 style={{color:'red', fontWeight:'bold'}}>+</h1>
              </span>
              <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap:'3px' }}>
                <CountUp start={-875.039} end={160527.012} duration={5}
                />
                <h1 style={{color:'red', fontWeight:'bold'}}>+</h1>
              </span>
              <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap:'3px' }}>
                <CountUp start={-875.039} end={160527.012} duration={5}
                />
                <h1 style={{color:'red', fontWeight:'bold'}}>+</h1>
              </span>
            </div>
          </div>
        </div>
        <div className='flexCenter hero-right'>
          <div className="image-container">
            <img style={{ width: '350px', height: '400px', borderTopRightRadius: '100%', borderTopLeftRadius: '100%', border: '1px solid white' }} src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero