import React from 'react'
import hero from '../../Assets/Images/herotitle.png'
// import heroheader from '../../Assets/Images/hero-svg.svg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='herosection py-5'>
      <div className='container content text-center '>
        <img className='hero-img w-75 my-3' src={hero} alt='hero'/>
        <p>faster than a <span>Gust</span> of wind</p>
      </div>
    </div>
  )
}

export default Hero
