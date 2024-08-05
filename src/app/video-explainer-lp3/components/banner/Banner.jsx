"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
import { usePathname } from "next/navigation"
import { CheckCircle } from 'heroicons-react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
//===== CSS
import styles from './banner.module.css'
// ===== Images
import BannerLogos from "media/video-explainer2/bnr-logo.png"
import chatIcon from "media/video-explainer2/chatIcon.png"
import discount from "media/video-explainer2/bnr-form.png"
import Star from "media/banner/star.png"

const Banner = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('GET A QUOTE');
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
            <section className='bg-cover bg-right bg-black/90 lg:bg-[url("../../public/video-explainer2/banner.png")] h-[100%] pt-[180px] lg:pt-[265px] pb-[60px] md:pb-[100px] mt-[-85px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h1 className='text-white text-[20px] md:text-[25px] lg:text-[30px] font-[700] uppercase montserrat lg:w-10/12 md:leading-[35px]'>Combining Creativity With Motion & Turning Concepts Into Extraordinary Visual Experiences</h1>
                            <p className='text-white text-[17px] font-[400] montserrat lg:w-11/12 leading-[25px] py-[25px]'>Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & Elevate your Brand.</p>
                            <ul>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Demo/Tutorial Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Training Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Animated commercial Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Promotional Videos</span>
                                </li>
                                <li className='flex items-start gap-x-2'>
                                    <CheckCircle className='text-[#A70A0E]' />
                                    <span className='text-white font-[400] pb-[10px] montserrat'>Marketing Videos</span>
                                </li>
                            </ul>
                            <div className='flex items-center gap-5'>
                                <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4 mb-6' />
                                <div className='flex flex-col items-center'>
                                    <div className="flex items-center">
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                        <Image src={Star} alt='banner-logos' width={22} height={22} />
                                    </div>
                                    <p className='mb-0 text-[12px] font-sans'>
                                        <strong>4.8 out of 5</strong> (review rating)
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-2">
                                <div className="btn">
                                    <a href='tel:833-666-6689' className='flex items-center text-[14px] text-white font-[700] montserrat bg-[#A70A0E] py-[12px] px-[16px] xl:px-[25px] md:px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                        Call Now
                                    </a>
                                </div>
                                <a href="javascript:$zopim.livechat.window.show();" className="chat flex items-center gap-2">
                                    <Image src={chatIcon} alt='chat-icon' className='w-[25px] ml-[10px]' />
                                    <div className="text">
                                        <span className='block montserrat text-[14px] font-[400] text-white leading-[14px]'>
                                            Chat Now to Avail 50% OFF
                                        </span>
                                        <span className='text-white text-[16px] montserrat font-[700]'>Live Chat</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <form className={`${styles.banForm} pt-[20px] md:mr-[98px] md:ml-[40px] relative border-[1px] border-[#A70A0E] md:border-white lg:w-8/12`}>
                                <h3 className='text-white text-[20px] md:text-[25px] leading-[30px] montserrat font-[700] text-left py-[10px] px-[20px]'>Share Your <br className='block' />
                                    <strong className='text-[30px] md:ml-[2rem] font-extrabold '>
                                        Animation Idea
                                    </strong>
                                </h3>
                                <div className="form pt-[5px] px-[20px] pb-[30px]">
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' className='mt-[10px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white' onChange={handleDataChange} required />
                                        {errors.name && (
                                            <span className="text-[10px] block p-2 font-medium font-sans text-white tracking-wider absolute left-0 bottom-[-38%]">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" name='email' placeholder='Enter Email' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white' onChange={handleDataChange} required />
                                        {errors.email && (
                                            <span className="text-[10px] block p-2 font-medium font-sans text-white tracking-wider absolute left-0 bottom-[-36%]">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="tel" name='phone' minLength="10"
                                            maxLength="13"
                                            pattern="[0-9]*" placeholder='Enter Phone Number' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[10px] block p-2 font-medium font-sans text-white tracking-wider absolute left-0 bottom-[-36%]">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <textarea name='message' type="text" placeholder='Message' className='mt-[16px] py-[13px] px-[8px] shadow-lg w-full border-none montserrat placeholder:text-[#ffffff] focus:outline-0 text-white resize-none' required onChange={handleDataChange}></textarea>

                                    <button type='submit' className='bg-[#A70A0E] hover:bg-[#1c2a49] text-white text-[16px] font-[700] montserrat uppercase mt-[10px] py-[13px] px-[8px] shadow-lg w-full duration-700 transition-all hover:duration-700 hover:transition-all' onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </div>
                                <div>
                                    <Image src={discount} alt='Infinity Animation' className={`${styles.discountbg}`} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner
