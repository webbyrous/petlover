import React from 'react'
import HeroImage from '../assets/hero-img.jpg'
import vectorImage from '../assets/vector-hero.jpg'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 shadow-lg'>
        <div className='font-montserrat  order-2 md:order-1 flex flex-col justify-center items-center gap-2 bg-cover bg-center pb-6' style={{backgroundImage:`url(${vectorImage})`}}>
            <h1 className= 'font-bold text-4xl md:text-5xl lg:text-6xl text-center px-10 lg:px-20 py-6 leading-15 lg:leading-20 text-gray-800'>Find Your Best Friend</h1>
            <p className='text-center px-4 text-base sm:text-lg lg:text-xl text-gray-strong leading-8 lg:leading-10'> Discover hundreds of animals waiting for a loving home. <br />Every adoption changes two lives: theirs and yours.</p>
            <button className='bg-orange text-white text-bold py-2 px-4 md:py-3 md:px-6 max-w-max rounded cursor-pointer transition-all duration-300 hover:bg-orange/80 hover:scale-105 hover:shadow-lg text-lg md:text-xl mt-6' onClick={() => navigate("/search")}>Adopt</button>
        </div>
        <img src={HeroImage} alt="Brown dog with its tongue out looking forward" className='order-1 md:order-2 w-full h-80 md:h-full object-cover object-top' />
    </div>
  )
}

export default Hero