import React from 'react'
import FooterLogo from '../../assets/Icons/footer-logo.png'
import instagram from "../../assets/Icons/instagram.png"
import facebook from "../../assets/Icons/facebook.png"
import twitter from "../../assets/Icons/twitterx.png"

function Footer() {
    return (
        <div className='bg-[#DDC7BB] p-15 pb-30 lg:flex'>

        <div className='mr-20'>
            <img src={FooterLogo} alt={FooterLogo} className='w-23 h-7' />
            <p className='font-bold text-[18px] leading-[130%] text-[#4F3527] pt-5'>Bringing you closer to <br />your dream home, one <br />click at a time.</p>
        </div>

        <div className='flex pt-10 lg:pt-0 justify-center'>
        <div className='px-10'>
        <p className='font-bold text-[22px] text-[#2B1B12] py-4'>About</p>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Our Story</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Careers</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Our Team</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Resources</p></a>
        </div>


        <div className='px-10'>
        <p className='font-bold text-[22px] text-[#2B1B12] py-4'>Support</p>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>FAQ</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Contact Us</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Help Center</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Terms of Service</p></a>
        </div>
        </div>

        <div className='flex pt-10 lg:pt-0 justify-center'>
        <div className='px-10'>
        <p className='font-bold text-[22px] text-[#2B1B12] py-4'>Find Us</p>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Events</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Locations</p></a>
        <a href="#"><p className='font-bold text-[18px] text-[#4F3527] py-3'>Newsletter</p></a>
        </div>


        <div className='px-7'>
        <p className='font-bold text-[22px] text-[#2B1B12] py-4'>Our Social</p>
        <a href="#" className='flex items-center'><img src={instagram} alt="instagram" className='w-12 h-8 pr-4' /><p className='font-bold text-[18px] text-[#4F3527] py-3'>Instagram</p></a>

        <a href="#" className='flex items-center'><img src={facebook} alt="Facebook" className='w-12 h-8 pr-4' /><p className='font-bold text-[18px] text-[#4F3527] py-3'>Facebook</p></a>
        <a href="#" className='flex items-center'><img src={twitter} alt="twitter" className='w-12 h-8 pr-4' /><p className='font-bold text-[18px] text-[#4F3527] py-3'>Twitter (x)</p></a>
        </div>
        </div>


        </div>
    )
}

export default Footer
