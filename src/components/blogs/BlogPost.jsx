import React from 'react'
// style
import styles from "./Blogs.module.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Profile from "media/inner-blogs/profile-hero.svg"
import verified from "media/blogs/verified.png"
import Blog1 from "media/blogs/blog1.png"
import Blog2 from "media/blogs/blog2.png"
import Blog3 from "media/blogs/blog3.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';


const BlogPost = () => {
    const tabInfo = [
        {
            subTitle: (<> Architectural Animation</>),
            image: Blog1,
            title: "Be the First to Hire Our Professional Animators",
            para: `Discover unparalleled creativity at Infinity Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin.`
        },
        {
            subTitle: (<> Architectural Animation</>),
            image: Blog2,
            title: "Be the First to Hire Our Professional Animators",
            para: `Discover unparalleled creativity at Infinity Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,`
        },
        {
            subTitle: (<> Architectural Animation</>),
            image: Blog3,
            title: "Be the First to Hire Our Professional Animators",
            para: `Discover unparalleled creativity at Infinity Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,`
        },
    ];

    // Slider Setting
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    };
    // ======== Video
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };

    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16`}>
                <div className="container">
                    <div className="grid grid-cols-12 gap-6 mt-[65px] md:mt-0">
                        <div className="col-span-12 text-center">

                            <h2 className={`text-[30px] sm:text-[35px] lg:text-[45px] xl:text-[55px] font-bold font-sans text-[#FFF] leading-tight mb-8 capitalize`}>
                                Related Post
                            </h2>
                        </div>
                    </div>
                    <div className="lg:block hidden py-[55px]">
                        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-16">
                            {tabInfo.map((items, i) => (
                                <div key={i} className="w-full md:col-span-6 lg:col-span-4 blogCard">
                                    <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                        <div className="blogImg">
                                            <Image src={items.image} alt={items.title} />
                                        </div>
                                        <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                            <h5 className="text-[14px] md:text-[16px] text-primary-100 font-normal font-sans tracking-wider mb-0">{items.subTitle}</h5>
                                            <h4 className="text-[20px] md:text-[25px] text-white leading-tight font-bold font-sans mb-0">{items.title}</h4>
                                            <p className="text-[14px] md:text-[16px] text-white font-normal font-sans mb-0">{items.para}</p>
                                        </div>
                                        <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                            <div className="author flex flex-row items-center w-full gap-3">
                                                <div className="w-[20%]">
                                                    <Image src={Profile} alt="James D. Surratt" />
                                                </div>
                                                <div className="relative">
                                                    <Image src={verified} alt="Verified" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                    <h4 className="text-[15px] xl:text-[16px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                    <h5 className="text-[12px] xl:text-[14px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                                </div>
                                            </div>
                                            <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                                <div className="flex items-center justify-between border-b-2 border-white-500 w-[100px]">
                                                    <p className="text-[14px] xl:text-[16px] font-sans font-light leading-[1.52857143] text-start text-white text-opacity-80">
                                                        Read More
                                                    </p>
                                                    <FaArrowRightLong />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <div className="card rounded-[20px] shadow-2xl h-full bg-[#262626] ">
                                        <div onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='border rounded-[20px]'>
                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-[20px]" >
                                                <source src={items.image} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="content px-[25px] py-[25px]">
                                            <h5 className='text-[#FF2D4A] text-opacity-90 text-[14px] sm:text-[16px] w-full font-light font-sans leading-[20px] tracking-wider text-start pt-[10px] pb-[15px]'>
                                                {items.subTitle}
                                            </h5>
                                            <h3 className={`text-white text-[20px] md:text-[25px] poppins font-normal font-sans leading-[23px] md:leading-[33px] text-start`}>
                                                {items.title}
                                            </h3>
                                            <p className="text-[14px] xl:text-[16px] font-sans text-white text-opacity-80 font-light leading-[1.52857143] text-start py-[15px]">
                                                {items.para}
                                            </p>

                                            <div className="grid grid-cols-6">
                                                <div className='col-span-4 text-center flex items-start'>
                                                    <div className="grid grid-cols-12  pt-2">
                                                        <div className="col-span-3">
                                                            <Image src={Profile} />
                                                        </div>
                                                        <div className="col-span-9 flex flex-col  text-start ps-3 pe-[35px]">
                                                            <span className='text-[16px] font-normal poppins text-white text-opacity-80'>James D. Surratt</span>
                                                            <span className='text-[13px] font-normal poppins text-white text-opacity-80'>Animation Manager</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className=' py-[15px] col-span-2 flex items-start justify-end'>
                                                    <div className="flex items-center justify-between border-b-2 border-white-500 w-[100px]">
                                                        <p className="text-[14px] xl:text-[16px] font-sans font-light leading-[1.52857143] text-start text-white text-opacity-80">
                                                            Read More
                                                        </p>
                                                        <FaArrowRightLong />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="typeSlider">
                            {tabInfo.map((items, i) => (
                                <div className='p-3'>
                                    <div key={i} className="w-full md:col-span-6 lg:col-span-4 blogCard">
                                        <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                            <div className="blogImg">
                                                <Image src={items.image} alt={items.title} />
                                            </div>
                                            <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                                <h5 className="text-[14px] md:text-[16px] text-primary-100 font-normal font-sans tracking-wider mb-0">{items.subTitle}</h5>
                                                <h4 className="text-[20px] md:text-[25px] text-white leading-tight font-bold font-sans mb-0">{items.title}</h4>
                                                <p className="text-[14px] md:text-[16px] text-white font-normal font-sans mb-0">{items.para}</p>
                                            </div>
                                            <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                                <div className="author flex flex-row items-center w-full gap-3">
                                                    <div className="w-[20%]">
                                                        <Image src={Profile} alt="James D. Surratt" />
                                                    </div>
                                                    <div className="relative">
                                                        <Image src={verified} alt="Verified" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                        <h4 className="text-[15px] xl:text-[16px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                        <h5 className="text-[12px] xl:text-[14px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                                    </div>
                                                </div>
                                                <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                                    <div className="flex items-center justify-between border-b-2 border-white-500 w-[100px]">
                                                        <p className="text-[14px] xl:text-[16px] font-sans font-light leading-[1.52857143] text-start text-white text-opacity-80">
                                                            Read More
                                                        </p>
                                                        <FaArrowRightLong />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="card rounded-[10px] bg-black shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                        <div onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-lg" >
                                                <source src={items.image} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="content">
                                            <h3 className='text-[#fff] text-[20px] md:text-[25px] font-bold font-sans py-[20px] leading-[23px] md:leading-[33px] text-center hover:text-[#FF2D4A]'>{items.title}</h3>
                                            <p className='text-[14px] xl:text-[16px] font-sans text-[#fff] font-normal leading-[1.52857143] md:px-[10px] text-center '>{items.para}</p>
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPost
