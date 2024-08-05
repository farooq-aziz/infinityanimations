import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Services = () => {
    const tabInfo = [
        {
            image: "https://player.vimeo.com/progressive_redirect/playback/950010334/rendition/720p/file.mp4?loc=external&log_user=0&signature=a761e4cb6edbbad24b418c5e42ebcc25598aa36503bb5e3f218b69efbb9a666b",
            title: "2D Animation",
            para: `Engage your audience with our stunning 2D animations. Perfect for commercials, explainer videos, and more, our 2D animation services are unmatched in the industry.`
        },
        {
            image: "https://player.vimeo.com/progressive_redirect/playback/950011852/rendition/720p/file.mp4?loc=external&log_user=0&signature=15e9c340553571fedce72842f58c3e0af4fcafb7bbda0938d479a2246d9f7e06",
            title: "3D Animation",
            para: `Take your visuals to the next level with our 3D animations. From character design to full-length features, our 3D animation services are ideal for creating lifelike, immersive experiences.`
        },
        {
            image: "https://player.vimeo.com/progressive_redirect/playback/950016751/rendition/720p/file.mp4?loc=external&log_user=0&signature=029bced4bb0cb9e41cb9accc4e9c35fc8abd08ce894378fd6764f648b8a20a72",
            title: "Whiteboard Animation",
            para: `Simplify complex ideas with our engaging whiteboard animations. Perfect for educational content and corporate presentations, our whiteboard animations make information easy to understand and retain.`
        },
        {
            image: "https://player.vimeo.com/progressive_redirect/playback/950015871/rendition/720p/file.mp4?loc=external&log_user=0&signature=c5d9400c52dea49465f643fde173da06371fde9a7a0b971d4d549c53d301beba",
            title: "Motion Graphics",
            para: ` Enhance your visual storytelling with our dynamic motion graphics. Ideal for promotional videos, presentations, and digital content, our motion graphics bring your brand to life.`
        },
        {
            image: "https://player.vimeo.com/progressive_redirect/playback/950013729/rendition/720p/file.mp4?loc=external&log_user=0&signature=dc0b60052c9254433445dab7bbd7e44d7df58cb701acbc8dd39dcb6d2c87e915",
            title: "CGI-VFX",
            para: `Create stunning visual effects with our CGI-VFX services. From blockbuster effects to subtle enhancements, our CGI-VFX can transform any project into a visual masterpiece.`
        },
        {
            image: "https://player.vimeo.com/progressive_redirect/playback/950014379/rendition/720p/file.mp4?loc=external&log_user=0&signature=e8531345e63363850629261ac3d75f8bd50a9f7f735af57b7fa62aeaa973e202",
            title: "Hybrid & Cel Animations",
            para: `Combine the best of both worlds with our hybrid and cel animations. This unique approach blends traditional and digital techniques to create animations with a distinct, timeless appeal.`
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
            <section className={`w-full flex items-center justify-start pb-10 pt-6 md:py-16`}>
                <div className="container">
                    <div className="grid grid-cols-12 gap-6 mt-[65px] md:mt-0">
                        <div className="col-span-12 text-center">
                            <h2 className='w-full md:w-[70%] lg:w-[60%] mx-auto text-[16px] sm:text-[18px] font-normal font-sans leading-[10px] tracking-wider text-center my-2 '>Partner with NYC's Leading Animation Experts</h2>
                            <h2 className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans text-[#FF2D4A] leading-tight mb-0 md:mb-8 capitalize`}>
                                Our Services
                            </h2>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-12 gap-6">
                            {tabInfo.map((items, i) => (
                                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                    <div className="card rounded-[10px] bg-black shadow-2xl pt-[5px] px-[20px] pb-[35px] h-full">
                                        <div onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-lg" >
                                                <source src={items.image} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="content">
                                            <h3 className='text-[#fff] text-[20px] md:text-[25px] font-bold font-sans pt-[20px] pb-[10px] leading-[23px] md:leading-[33px] text-center hover:text-[#FF2D4A]'>{items.title}</h3>
                                            <p className='text-[15px] lg:text-[16px] font-sans text-[#fff] font-normal leading-[1.52857143] md:px-[10px] text-center '>{items.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="typeSlider servicSlider">
                            {tabInfo.map((items, i) => (
                                <div className='p-3'>
                                    <div className="card rounded-[10px] bg-black shadow-2xl pt-4 h-[375px]">
                                        <div onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-lg" >
                                                <source src={items.image} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="content">
                                            <h3 className='text-[#fff] text-[20px] md:text-[25px] font-bold font-sans py-[20px] leading-[23px] md:leading-[33px] text-center hover:text-[#FF2D4A]'>{items.title}</h3>
                                            <p className='text-[15px] lg:text-[16px] font-sans text-[#fff] font-normal leading-[1.52857143] md:px-[10px] text-center '>{items.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
