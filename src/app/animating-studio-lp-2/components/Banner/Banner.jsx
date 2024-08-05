"use client"
import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
// Images
import BannerLogos from "media/infinity-studio/bannerLogos.png"
import BannerLogosTwo from "media/infinity-studio-lp-new/bannerLogosTwo.png"
import Logo1 from "media/infinity-studio-lp-new/form-1.png"
import Logo2 from "media/infinity-studio-lp-2/form-3.png"
import Chats from "media/infinity-studio-lp-new/chat-icon.svg"
import BadgeSlider from '../badgeSlider2/BadgeSlider2'
import { usePathname } from 'next/navigation'

const Banner = () => {
    const backgroundVideo = 'https://player.vimeo.com/progressive_redirect/playback/950015917/rendition/720p/file.mp4?loc=external&log_user=0&signature=e0789e199bc0374e4971e5fc0b408a23ea883170eeb1fa2500dbaf2d0117d095';

    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Get a Free Quote');
    const [isDisabled, setIsDisabled] = useState(false);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    //========== Fetch IP data from the API
    const getIPData = async () => {
        try {
            const res = await Axios.get('https://ipwho.is/');
            setIP(res.data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const router = usePathname();
    const currentRoute = router;

    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formValidateHandle = () => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        const phoneRegex = /^[0-9]+$/;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone number is required";
        }
        return errors;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            const currentdate = new Date().toLocaleString();
            const dataToSend = {
                ...data,
                pageUrl: pagenewurl,
                IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
                currentdate: currentdate,
            };
            const JSONdata = JSON.stringify(dataToSend);

            try {
                //========== First API call to your server
                await fetch('/api/email/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                });

                //========== Second API call to SheetDB
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                    "Content-Type": "application/json"
                };
                let bodyContent = JSON.stringify({
                    "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
                    "Brand": "Infinity Animations",
                    "Page": `${currentRoute}`,
                    "Date": currentdate,
                    "Time": currentdate,
                    "JSON": JSONdata,
                });
                await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                setFormStatus("Success...");
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 2000);
            } catch (error) {
                console.error('Error during form submission:', error);
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
    };

    return (
        <>
            <section className='pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] lg:pt-[140px] lg:pb-[60px] relative h-full'>
                <div className="video-div w-full h-[480px] md:h-full absolute top-0 z-[-1] before:content-[''] before:bg-[#000] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7]">
                    <video id="background-video" src={backgroundVideo} autoPlay loop muted className='relative h-full xl:left-0 w-full object-cover'>
                    </video>
                </div>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-5 md:gap-y-10 items-center">
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                            <div className="txt">
                                <h1 className='text-[25px] lg:text-[45px] xl:text-[55px] xl:leading-[70px] font-semibold poppins leading-[35px] lg:leading-[50px] mb-5'><span className='text-[#F5090B]'>Boost Sales</span> With
                                    Animation: Instantly
                                    Create <span className='text-[#F5090B]'>Videos!</span></h1>
                                <p className='text-[14px] md:text-[16px] poppins leading-[25px] font-normal xl:pr-[20px]'>
                                    We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.We are a leading video
                                </p>
                                <div className="flex items-center gap-4 lg:gap-8 pt-5 lg:pt-9">
                                    <div>
                                        <Link href="tel:833-666-6689" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                            <FaPhoneAlt />
                                            Call Now
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="javascript:$zopim.livechat.window.show();" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-black font-semibold poppins h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-white hover:duration-700 hover:transition-all'>
                                            <Image src={Chats} alt='Infinity Animation' className='brightness-100 invert-[1]' />
                                            Live Chat
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex items-center gap-7 pt-7 mb-6 lg:mb-0 md:pt-9'>
                                    <Image src={BannerLogos} alt='Infinity Animation' className='w-6/12' />
                                    <Image src={BannerLogosTwo} alt='Infinity Animation' className='w-4/12' />
                                </div>
                            </div>
                        </div>
                        <div className="2xl:block hidden 2xl:col-span-1"></div>
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                            <div className='bg-[#F5090B] rounded-[19px] py-10 px-6 xl:px-8 relative lg:w-[90%] ml-auto'>
                                <div className="flex items-center justify-center sm:justify-start gap-x-4">
                                    <Image src={Logo1} alt='Infinity Animation' height={120} className='mt-[-40px] ml-[-14px] sm:block hidden' />
                                    <h3 className='text-[#FFCC00] text-[30px] md:text-[40px] leading-[45px] md:leading-[50px] text-center font-bold poppins'>Get A Quote</h3>
                                </div>
                                <p className='text-[13px] leading-[20px] text-center sm:text-left sm:ml-[90px] md:ml-0 lg:text-center poppins lg:pt-3'>Sign-Up & Get Upto 50%Off On All Type Of Video Services</p>
                                <div className="logo absolute right-[-6px] top-[0px] lg:top-[-30px] xl:top-[-41px] sm:block hidden">
                                    <Image src={Logo2} alt='Infinity Animation' width={180} height={60} />
                                </div>
                                <form className='pb-2 sm:pb-0 pt-2 sm:pt-5'>
                                    <div className="name relative mb-3">
                                        <input type="text" name="name" placeholder='Name' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-48%] z-50">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="number relative mb-3">
                                        <input type="tel" name='phone' placeholder='Phone Number' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-48%] z-50">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="email relative mb-3">
                                        <input type="email" name='email' placeholder='Email' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-semibold poppins text-black absolute left-0 bottom-[-48%] z-50">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message mb-2">
                                        <textarea name="message" placeholder='Tell us about your Project' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[100px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0 pt-4 resize-none' onChange={handleDataChange}></textarea>
                                    </div>
                                    <div className="btn">
                                        <button className='h-[50px] w-full bg-black rounded-[5px] poppins text-[14px] md:text-[16px] leading-[25px] font-semibold' onClick={handleFormSubmit} disabled={isDisabled}> {formStatus}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#CCCCCC] py-[25px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="badges">
                                <BadgeSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
