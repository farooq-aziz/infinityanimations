import Link from 'next/link'
import React from 'react'
// icons
import { FaExternalLinkAlt, FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <>
            <section className='relative pt-[140px] pb-[100px] lg:pb-[0] sm:pt-[200px] h-full lg:h-screen lg:max-h-[600px] overflow-hidden'>
                <div className="video absolute top-0 left-0 w-full z-0">
                    <video src='https://ik.imagekit.io/TailoredLogo/video-animation/video-animation_iXPeqqq4u.mp4' autoPlay={true} loop={true} muted={true} className='w-full h-full mt-[112px] lg:mt-0'></video>
                </div>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div>
                            <div className="txt relative z-10">
                                <h1 className='text-white text-[30px] lg:text-[40px] font-[600] leading-[1.1] poppins'>Viral Animated Logos
                                    <span className='text-[#00ce7dd9] block'> Starring Your Brand!</span>
                                </h1>
                                <p className='text-[18px] mt-[17px] w-[475px] leading-[24px] font-sans'>Are you ready to handle fame? We will make your brand a star in the digital world through our vivid animated logos.</p>
                                <div className="btn group">
                                    <Link href="javascript:;" className='text-[17px] font-bold poppins group-hover:text-white text-[#00ce7d] border-[#00ce7d] border-2 rounded-[5px] leading-[19px] mt-[20px] py-[10px] px-[35px] w-[50%] lg:w-[36%] text-center duration-700 group-hover:duration-700 ease-in-out group-hover:bg-[#00ce7d] flex items-center justify-center overflow-hidden relative'>
                                        <FaExternalLinkAlt className='absolute top-[50%] translate-y-[-50%] ml-[-110%] group-hover:ml-[-60%] duration-700 group-hover:duration-700 ease-in-out text-[17px] font-bold poppins group-hover:text-white' />
                                        <span>Get A Quote</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:block hidden'>
                            <div className="pl-[150px]">
                                <div className="group lpbannerBtn">
                                    <Link href="javascript:;" className='w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] border-[6px] border-white flex items-center justify-center relative bg-[#1bc27c] rounded-[50%] '>
                                        <FaPlay className='absolute group-hover:left-[50%] group-hover:top-[33%] w-[25%] h-[25%] text-[25px] lpHover' />
                                    </Link>
                                </div>
                                <span className='text-[18px] lg:text-[25px] mt-[24px] text-left block relative font-sans'>
                                    Watch Our Showreel
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
