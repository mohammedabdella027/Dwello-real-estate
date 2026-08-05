import React from 'react'
import HeroImage from '../../assets/Images/hero-image-1.jpg';
import Location from '../../assets/Icons/location.png'
import Home from '../../assets/Icons/home.png'
import Price from '../../assets/Icons/price.png'

function Hero() {
    return (
        <div 
            className='w-full min-h-screen flex items-center px-6 sm:px-12 md:px-16 bg-[#FBF5F1] relative bg-no-repeat bg-size-[0%] lg:bg-size-[65%_auto] bg-bottom-right'
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        >
            <div className='max-w-125 flex flex-col gap-6 z-10 my-12 ml-4 md:ml-12'>
                <h1 className='text-6xl md:text-7xl font-extrabold text-[#2B1B12] leading-[1.08] tracking-tight'>
                    Find Your <br />Dream Home
                </h1>

                <p className='text-[#4F3527] text-lg font-medium leading-relaxed max-w-105'>
                    Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
                </p>

                <button className='bg-[#2B1B12] text-white text-base font-semibold px-8 py-2 rounded-xl w-fit hover:opacity-95 transition-opacity mt-2 shadow-sm'>
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default Hero
