import React from 'react'
import './Header.css'
import logo from '../../Data/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <section className='h-wrapper'>
     <div className='h-container' style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <img style={{width:'70px', borderRadius:'100px', cursor :'pointer'}} src={logo} alt="" />
        <div className='h-mennu' style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'30px'}}>
            <a style={{listStyle:'none', textDecoration:'none', fontFamily:'sans-serif', color:'white'}} href="">Rasidences</a>
            <a style={{listStyle:'none', textDecoration:'none', fontFamily:'sans-serif', color:'white'}} href="">Our Value</a>
            <a style={{listStyle:'none', textDecoration:'none', fontFamily:'sans-serif', color:'white'}} href="">Contact Us</a>
            <a style={{listStyle:'none', textDecoration:'none', fontFamily:'sans-serif', color:'white'}} href="">Get Start</a>
            <button className='button' style={{backgroundColor:'blue', padding:'6px', cursor:'pointer', color:'white', fontWeight:'bold', borderRadius:'5px'}}>Contact</button>
        </div>
    </div>
   </section>
  )
}

export default Header