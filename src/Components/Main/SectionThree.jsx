import React from 'react'
import { WhyChooseUs } from '../../mockData/data'

function SectionThree() {
    return (
        <div className='mt-30 lg:mt-20 w-[90%] m-auto lg:gap-18'>
            <div>
                <h1 className='font-extrabold text-4xl text-center text-[#2B1B12] pb-4'>Why Choose Us</h1>

                <p className='font-bold text-[16px] text-[#4F3527] text-center'>Elevating Your Home Buying Experience with Expertise, Integrity, <br />and Unmatched Personalized Service</p>
            </div>

            <div className='lg:flex lg:gap-8 items-center'>
                {WhyChooseUs.map((item) => {
                    return (
                        <div key={item.id} className='bg-[#DDC7BB] my-8 lg:w-68.7 w-68 m-auto h-67 rounded-2xl pt-0.5'>
                            <div className='w-20 lg:h-20 lg:mt-7 ml-6 pl-3 pb-4 bg-[#FBF5F1] rounded-xl'>
                            <img src={item.img} className='mt-7 lg:mt-0 pt-4' />
                            </div>
                            <h3 className='font-bold text-[18px] text-[#2B1B12] pl-6 py-3 pb-0'>{item.title}</h3>
                            <p className='font-semibold text-[16px] text-[#4F3527] px-6 py-3'>{item.para}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SectionThree
