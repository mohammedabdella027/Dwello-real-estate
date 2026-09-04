import React from 'react'
import Location from '../../assets/Icons/location.png'
import Home from '../../assets/Icons/home.png'
import Price from '../../assets/Icons/price.png'

function SectionOne() {
    return (
        <div className='bg-[#FBF5F1] h-44 lg:h-15'> 
        <div className='bg-[#DDC7BB] w-86 h-88 m-auto rounded-2xl lg:flex lg:w-230 lg:h-30 py-10 lg:m-auto items-center'>

            <div className="relative w-48 h-12 bg-[#FBF5F1] rounded-lg flex items-center -mt-1.25 ml-20 my-8 lg:m-auto">
            <input type="text" placeholder="Location" className="w-full h-full bg-transparent pl-4 pr-10 text-sm font-bold outline-none placeholder:text-[#695346]"/>
            <button className="absolute right-3">
            <img src={Location} alt="Location" className="w-5 h-5" />
            </button>
            </div>

            <div className="relative w-48 h-12 bg-[#FBF5F1] rounded-lg flex items-center -mt-1.25 ml-20 my-8 lg:m-auto">
            <input type="text" placeholder="Type" className="w-full h-full bg-transparent pl-4 pr-10 text-sm font-bold outline-none placeholder:text-[#695346]"/>
            <button className="absolute right-3">
            <img src={Home} alt="Location" className="w-5 h-5" />
            </button>
            </div>

            <div className="relative w-48 h-12 bg-[#FBF5F1] rounded-lg flex items-center -mt-1.25 ml-20 my-8 lg:m-auto">
            <input type="text" placeholder="Price Range" className="w-full h-full bg-transparent pl-4 pr-10 text-sm font-bold outline-none placeholder:text-[#695346]"/>
            <button className="absolute right-3">
            <img src={Price} alt="Location" className="w-5 h-5" />
            </button>
            </div>
            
            <div className='w-39 h-14 rounded-lg ml-30 flex justify-between items-center mt-8 lg:m-10'>
                <button className='bg-[#2B1B12] text-white text-base font-semibold px-8 py-2 rounded-xl w-fit hover:opacity-90 hover:scale-105 hover:duration-300 duration-200 transition-opacity mt-2 shadow-sm'>
                    Sign up
                </button>
            </div>
        </div>
        </div>
    )
}

export default SectionOne
