import React from 'react'
import verifiedIcon from '../../assets/Icons/verified-icon.png'
import email from '../../assets/Icons/email.png'

function SectionSix() {
    return (
        <div className='justify-center py-20'>
            <h3 className='text-[#2B1B12] font-extrabold text-[40px] leading-[140%] text-center pt-10'>Do You Have Any Questions? <br />Get Help From Us</h3>

            <div className='flex justify-center gap-15 py-10'>
                <div className='flex gap-1'>
                    <img src={verifiedIcon} alt={verifiedIcon} className='w-6 h-6' />
                    <p className='text-[#543E32] font-bold text-[14px]'>Chat live with our support team</p>
                </div> 

                <div className='flex gap-1'>
                    <img src={verifiedIcon} alt={verifiedIcon} className='w-6 h-6' />
                    <p className='text-[#543E32] font-bold text-[14px]'>Browse our FAQ</p>
                </div> 
            </div>

            <div className='sm:flex sm:justify-center text-center sm:gap-2 items-center'>
                <div className="relative w-106 h-14 bg-[#DDC7BB] rounded-lg flex items-center m-auto sm:m-0 -mt-1.25 my-8">
                <input type="text" placeholder="Enter your email address..." className="w-full h-full bg-transparent pl-8 pr-10 text-sm font-bold outline-none placeholder:text-[#695346]"/>
                <button className="absolute left-2">
                <img src={email} alt="email" className="w-5 h-5" />
                </button>
                </div>

                <div>
                <button className='bg-[#2B1B12] text-white font-semibold rounded-xl w-32 h-12 hover:opacity-90 hover:scale-105 hover:duration-300 duration-200 cursor-pointer transition-opacity shadow-sm'>
                Submit
                </button>
                </div>
            </div>

        </div>
    )
}

export default SectionSix
