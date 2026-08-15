import React from 'react'
import Image from '../../assets/Images/mask-group.png';

function SectionTwo() {
    return (
        <div className='mt-70 lg:mt-40 lg:flex w-[90%] m-auto lg:gap-18'>
            <div className='w-100 m-auto pb-4 hover:scale-105 hover:duration-300 duration-200'>
                <img src={Image} alt="Image" />
            </div>

            <div className='w-100 m-auto'>
                <h1 className='font-extrabold text-[35px] leading-[150%] pb-3'>We Help You To Find <br />Your Dream Home</h1>

                <p className='font-bold text-[16px] text-[#4F3527] py-2 '>From cozy cottages to luxurious estates, our <br />dedicated team guides you through every step of the <br />journey, ensuring your dream home becomes a reality</p>

                <div className='font-semibold text-[#4F3527] text-[16px] flex py-2 gap-8' >
                    <p><span className='font-bold text-5xl'>8K+</span> <br />Houses Available</p>

                    <p><span className='font-bold text-5xl'>6K+</span> <br />Houses Sold</p>

                    <p><span className='font-bold text-5xl'>2K+</span> <br />Trusted Agents</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
