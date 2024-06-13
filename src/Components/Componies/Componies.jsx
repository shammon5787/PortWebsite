import React from 'react'
import './Componies.css'
import l1 from '../../Data/logo1.png'
import l2 from '../../Data/logo2.jpg'
import l3 from '../../Data/logo3.jpg'
import l4 from '../../Data/logo.png'
const Componies = () => {
  return (
    <section className="c-wrapper">
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'100px', marginTop:'40px'}} className="paddings innerWidth flexCenter c-container">
            <img style={{width:'150px', height:'150px', borderRadius:'100px'}} src= {l1} alt="" />
            <img style={{width:'150px', height:'150px', borderRadius:'100px'}} src={l2} alt="" />
            <img style={{width:'150px', height:'150px', borderRadius:'100px'}} src={l3} alt="" />
            <img style={{width:'150px', height:'150px', borderRadius:'100px'}} src={l4} alt="" />
        </div>
    </section>
  )
}

export default Componies