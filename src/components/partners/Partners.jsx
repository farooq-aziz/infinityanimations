"use client"
import Image from "next/image";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide1 from 'media/icons/partner1.png'
import slide2 from 'media/icons/partner2.png'

const Testimonial = () => {
    // Slider Setting
    // const testiSlider = {
    //     rows: 2,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     speed: 5000,
    //     pauseOnHover: false, 
    // };
    return (
        <>
            <section className={`w-full flex py-16`}>
                <div className="container">
                    <div className='flex items-start justify-between'>
                        <div className='w-full text-center'>
                            <h2 className='text-[40px] md:text-[60px] font-bold font-sans leading-tight text-center lg:w-10/12 mx-auto mb-3'>Our Partners and Clients Make Us the Most Outstanding Service Providers Today</h2>
                        </div>
                    </div>
                    <div className="mt-12">
                        {/* <Slider {...testiSlider} className="testiSlider">
                            <div>
                                <div className="slide1">
                                    <Image src={slide1} alt='Infinity Animation' />
                                </div>
                            </div>
                            <div>
                                <div className="slide1">
                                    <Image src={slide2} alt='Infinity Animation' />
                                </div>
                            </div>
                            <div>
                                <div className="slide1">
                                    <Image src={slide1} alt='Infinity Animation' />
                                </div>
                            </div>
                            <div>
                                <div className="slide1">
                                    <Image src={slide2} alt='Infinity Animation' />
                                </div>
                            </div>
                        </Slider> */}
                        <div className="slider1 border-b border-[#F91927] mr-[-40px] pb-5 relative before:content-[''] before:bg-[url('../../public/icons/arrow-left.png')] before:bg-no-repeat before:absolute before:left-[-31px] before:bottom-[-59px] before:w-[100px] before:h-[100px]">
                            <Image src={slide1} alt="Infinity Animation" className="w-11/12 ml-auto" />
                        </div>
                        <div className="slider2 pt-14 ml-[-40px] border-b border-[#F91927] pb-5 relative before:content-[''] before:bg-[url('../../public/icons/arrow-right.png')] before:bg-no-repeat before:absolute before:right-[-31px] before:bottom-[-60px] before:w-[100px] before:h-[100px]">
                            <Image src={slide2} alt="Infinity Animation" className="w-11/12" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
