"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Import Css
import styles from "./PortFolio.module.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// icons
import PlayIcon from "media/icons/play.png"
//==== Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"

const tabs = ["2D Animations", "3D Animation", "Whiteboard", "Explainer Videos", "Typographic"];

const videoData = [
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9", image: polio1 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee", image: polio2 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1", image: polio3 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380", image: polio4 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e", image: polio4 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12", image: polio2 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5", image: polio3 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969", image: polio1 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e", image: polio1 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256", image: polio2 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14", image: polio3 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3", image: polio4 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4", image: polio4 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51", image: polio2 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb", image: polio3 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6", image: polio1 }
    ],
    [
        { href: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86", image: polio1 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987", image: polio2 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3", image: polio1 },
        { href: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466", image: polio2 },
    ]
]

const Portfolio = () => {
    //========= tabs =========
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    //========= fancy box =========
    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }
    // ====== Responsive Slider 
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    //========= video code start =========
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
            <section className={`w-full flex items-center justify-start pb-12 pt-6 md:py-12 lg:py-16`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className={`text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-3 capitalize`}>
                                Our Exceptional Portfolio Of Video Animations
                            </h2>
                            <p className="w-full md:w-[70%] lg:w-[60%] mx-auto text-[15px] lg:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5 md:mb-0 lg:mb-3">
                                Why we are a Top Animation studio in NYC, we take pride in creating stunning 2D Animations, 3D Animations, Whiteboard Animations, Motion Graphics Animations, Hybrid Animations, and more videos for our Valued Clientele.
                            </p>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-12`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                            {tabs.map((tab, index) => (
                                <li key={index}
                                    className={`inline-block w-[155px] md:w-[180px] xl:w-[220px] py-3 text-[16px] lg:text-[20px] font-normal font-sans text-white border rounded-[27px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : 'border-[#646464]'}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab}
                                </li>
                            ))}
                        </ul>
                        <div className={`${styles.desktop} tabs-content pt-6`}>
                            {activeTab === 0 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover " >
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9" type="video/mp4" />
                                                        </video>
                                                        <div className=" bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center ">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover " >
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee" type="video/mp4" />
                                                        </video>
                                                        <div className=" bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center ">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover " >
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1" type="video/mp4" />
                                                        </video>
                                                        <div className=" bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center ">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover " >
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380" type="video/mp4" />
                                                        </video>
                                                        <div className=" bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center ">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 1 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 2 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 3 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 4 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-10'>
                                        <div className='col-span-3 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-5 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                        {/* =============== */}
                        <div className={`${styles.mobile} mt-6 md:mt-10`}>
                            {videoData.map((tabData, index) => (
                                activeTab === index && (
                                    <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                        <Slider {...testiSlider} className="testiSlider portfolio">
                                            {tabData.map((video, videoIndex) => (
                                                <div key={videoIndex} className='w-full h-full'>
                                                    <Link href={video.href} datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                        <div className={`w-full h-full overlay relative group overflow-hidden ${styles.shadow}`}>
                                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                                    <source href={video.href} type="video/mp4" />
                                                                </video>
                                                                <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </Slider>
                                    </Fancybox>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio