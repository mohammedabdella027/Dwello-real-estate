import React from 'react'
import { whatPeopleSayAboutDwello } from '../../mockData/data'
import rightArrow from '../../assets/Icons/right-arrow-btn.png'
import leftArrow from '../../assets/Icons/left-arrow-btn.png'

function SectionFive() {
    return (
        <div className='mt-20 pb-15 bg-[#FEF7F2]'>
            <h1 className='font-extrabold text-4xl text-center text-[#2B1B12] pt-15 leading-[140%]'>What People Say <br />About Dwello</h1>

            <div className='lg:flex lg:w-250 gap-10 justify-center m-auto'>
                {whatPeopleSayAboutDwello.map((item) => {
                    return (
                        <div key={item.id} className='bg-[#DDC7BB] w-95 h-95 my-15 rounded-[18px] m-auto hover:scale-105 hover:duration-300 duration-200'>
                            <div>
                                <img src={item.homeImage} alt={item.homeImage} className='rounded-t-[18px]'/>
                            </div>

                            <div className='flex items-center pt-6 px-4'>
                                <div>
                                    <img src={item.peopleImage} alt={item.peopleImage} className='w-14 h-14 lg:w-12 lg:h-12 rounded-full' />
                                </div>

                                <div className='pl-3'>
                                    <h3 className='text-[#2B1B12] font-bold text-[20px] lg:text-[14px]'>{item.peopleName}</h3>
                                    <p className='text-[#2B1B12] font-semibold text-[16px] lg:text-[12px]'>{item.peopleCity}</p>
                                </div>

                                <div className='bg-white w-15 h-6 lg:w-13 lg:h-5 rounded-sm flex items-center p-1 gap-2 ml-10'>
                                    <img src={item.ratingStar} alt={item.ratingStar} className='w-5 h-5 lg:w-4 lg:h-4' />
                                    <p className='font-semibold text-[16px] lg:text-[14px]'>{item.ratingNumber}</p>
                                </div>
                            </div>

                            <div className='px-6 py-2 lg:py-4'>
                                <p className='text-[#4F3527] font-semibold text-[16px] leading-[130%]'>
                                    {item.peopleSays}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='justify-center gap-8 hidden lg:flex'>
                <button><img src={leftArrow} alt="leftArrow" className='' /></button>
                <button><img src={rightArrow} alt="rightArrow" /></button>
            </div>
        </div>
    )
}

export default SectionFive
