import React from 'react'
import { OurPopularResidences } from '../../mockData/data'

function SectionFour() {
    return (
        <div className='mt-20'>
        <h1 className='font-extrabold text-4xl text-center text-[#2B1B12]'>Our Popular Residences</h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {OurPopularResidences.map((item) => {
                return (
                    <div key={item.id} className=''>
                        <div className='w-82 lg:w-78 h-120 rounded-[18px] bg-[#DDC7BB] my-16 m-auto hover:scale-105 hover:duration-300 duration-200'>
                            <div><img src={item.placeImg} alt={item.placeImg} className='rounded-t-[18px]'/></div>

                            <div className='flex p-3 gap-2 items-center'>
                                <img src={item.locationImage} alt={item.locationImage} className='w-6 h-6'/>
                                <p className='font-bold text-[20px] text-[#2B1B12]'>{item.placeName}</p>
                            </div>

                            <div className='flex gap-3 py-2 items-center'>
                                <div className='flex px-3 gap-2 items-center'>
                                <img src={item.roomsIcon} alt={item.roomsIcon} className='w-6 h-6 bg-white rounded-sm' />
                                <p className='font-semibold text-[18px] text-[#4F3527]'>{item.roomsCount}</p>
                                </div>

                                <div className='flex px-3 gap-2 items-center'>
                                <img src={item.sizeIcon} alt={item.sizeIconIcon} className='w-6 h-6 bg-white rounded-sm' />
                                <p className='font-semibold text-[18px] text-[#4F3527]'>{item.sizeNumber}</p>
                                </div>
                            </div>

                            <div className='flex p-3 gap-18'>
                                <button className='bg-[#2B1B12] text-white text-base font-semibold rounded-xl w-24 h-10 hover:opacity-90 hover:scale-105 hover:duration-300 duration-200 transition-opacity shadow-sm'>
                                Sign up
                                </button>
                                <p className='font-bold text-[22px] text-[#4F3527]'>{item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

        </div>
    )
}

export default SectionFour
