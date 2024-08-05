import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterest, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <section className='bg-[#F5F5F5] pt-[50px] pb-[25px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="socials_icons flex items-center justify-center gap-x-1 border-t border-[#888888] pt-[30px]">
                            <Link href="https://www.facebook.com/infinityanimationsofficial" className="facebook bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#6078ab] flex items-center justify-center">
                                <FaFacebookF className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://twitter.com/infinityan_/" className="twitter bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#31bbef] flex items-center justify-center">
                                <FaTwitter className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://www.linkedin.com/company/infinity-animations/" className="google bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#e26d5f] flex items-center justify-center ">
                                <FaLinkedinIn className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://www.youtube.com/@Infinity-Animations" className="youtube bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#b00] flex items-center justify-center">
                                <FaYoutube className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://www.vimeo.com/infinityanimations" className="printerest bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#cb2027] flex items-center justify-center">
                                <FaVimeoV className='text-[23px] sm:text-[32px]' />
                            </Link>
                            <Link href="https://www.instagram.com/infinityanimationsofficials" className="instagram bg-[#676767] rounded-[50px] text-white h-[45px]  sm:h-[60px] w-[45px] sm:w-[60px] text-center duration-700 ease-in-out hover:duration-700 hover:bg-[#517fa4] flex items-center justify-center">
                                <FaInstagram className='text-[23px] sm:text-[32px]' />
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-5 lg:w-9/12 mx-auto pt-8">
                            <div className="number">
                                <Link href="tel:833-666-6689" className='text-[#272b2b] font-[600] text-[14px] sm:text-[16px] poppins flex items-center gap-x-2'>
                                    <FaPhoneAlt className='text-[#9545cc] text-[18px] sm:block hidden' />
                                    <span>833-666-6689</span>
                                </Link>
                            </div>
                            <div className="email">
                                <Link href="mailto:queries@infinityanimations.com" className='text-[#272b2b] font-[600] text-[14px] sm:text-[16px] poppins flex items-center gap-x-2'>
                                    <FaEnvelope className='text-[#008c80] text-[18px] sm:block hidden' />
                                    <span>queries@infinityanimations.com</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer_bottom bg-[#F5F5F5] text-center">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto border-t border-[#888888] py-[10px]">
                    <span className='text-[14px] pb-[12px] text-[#333] montserrat text-center '>© 2024 - <p className='text-[14px] lg:text-[16px] poppins text-center inline'> - All Rights Reserved By<Link href="https://bhaooinc.com/">Bhaoo Inc</Link></p> </span>
                </div>
            </div>
        </>
    )
}

export default Footer
