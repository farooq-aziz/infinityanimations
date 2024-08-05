"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import { usePathname } from "next/navigation"
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ChatAlt2, Globe, Phone, User } from 'heroicons-react'
import { HiMapPin } from 'react-icons/hi2';
// Import Images
import logo from "media/images/black-logo.gif";
import Payment from "media/video-explainer/payment-img.png"
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import youtube from "media/icons/youtube.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
import vimeo from "media/icons/vemio.png";
import tiktok from "media/icons/tiktok.png";

const Footer = () => {
    const otherLinks = [
        {
            text: "Terms of Services",
            link: "/terms-and-conditions",
        },
        {
            text: "Privacy Policy",
            link: "/privacy-policy",
        },
    ];
    const socialLinks = [
        {
            icon: facebook,
            link: "https://www.facebook.com/infinityanimationsofficial"
        },
        {
            icon: twitter,
            link: "https://twitter.com/infinityan_/"
        },
        {
            icon: instagram,
            link: "https://www.instagram.com/infinityanimationsofficials"
        },
        {
            icon: linkedin,
            link: "https://www.linkedin.com/company/infinity-animations/"
        },
        {
            icon: youtube,
            link: "https://www.youtube.com/@Infinity-Animations"
        },
        {
            icon: vimeo,
            link: "https://www.vimeo.com/infinityanimations"
        },
        {
            icon: tiktok,
            link: "https://www.tiktok.com/@infinityanimationsusa"
        },
    ];
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Submit');
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
            <footer className="bg-[#00C6F9] pt-[50px] pb-[50px]">
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-4">
                            <Link href="javascript:;" className="lg:w-[25%]">
                                <Image src={logo} width={150} height={54} className="pb-3" alt="Animation Studio" />
                            </Link>
                            <div className="col-span-12 lg:col-span-4">
                                <div className="address_detail">
                                    <ul>
                                        <li className='py-[10px]'>
                                            <a href="tel:833-666-6689" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                                <Phone className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> 1-833-666-6689
                                            </a>
                                        </li>
                                        <li className='py-[10px]'>
                                            <a href="mailto:queries@infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                                <EnvelopeIcon className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> queries@infinityanimations.com
                                            </a>
                                        </li>
                                        <li className='py-[10px]'>
                                            <a href="https://infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                                <Globe className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[26px] h-[26px]' /> www.infinityanimations.com
                                            </a>
                                        </li>
                                        <li className='py-[10px]'>
                                            <a href="https://maps.app.goo.gl/BFBsCwAX1znom3LE6" target='_blank' className='text-[15px] md:text-[20px] text-white montserrat flex gap-2'>
                                                <HiMapPin className='bg-[#ffffff] text-[#222] rounded-[60%] p-[4px] text-[15px] w-[25px] lg:w-[45px] h-[25px]' /> One World Trade Center, 285 Fulton St 85th floor suite 8500, New York, NY 10007
                                            </a>
                                        </li>
                                    </ul>
                                    <Image src={Payment} alt='Payment-Methods' className='md:w-5/12 lg:w-full my-3 object-contain' />
                                    <div>
                                        <ul className="flex items-center flex-wrap md:flex-nowrap gap-4 mt-4 md:mt-6">
                                            {
                                                socialLinks.map((e, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <Link target="_blank" href={e.link} className="bg-transparent border border-[#ffffff] w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1">
                                                                <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                                            </Link>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2"></div>
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className='text-white font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>
                                Get A Free Consultation with An Experienced Animation Expert
                            </h2>
                            <p className='text-white text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] leading-[22px] pb-[20px] lg:pb-[60px]'>Book a meeting with a member of our team to learn more and get a quote today!</p>
                            <div className="form">
                                <form>
                                    <div className="flex-wrap flex items-center">
                                        <div className="name relative w-full">
                                            <User className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="text" name="name" placeholder='Enter your name' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
                                            {errors.name && (
                                                <span className="text-[12px] block p-2 font-sans font-semibold text-primary-100 absolute left-0 bottom-[-16%]">
                                                    {errors.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="email relative w-full">
                                            <EnvelopeIcon className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                            <input type="email" name="email" placeholder='Enter Email' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
                                            {errors.email && (
                                                <span className="text-[12px] block p-2 font-sans font-semibold text-primary-100 absolute left-0 bottom-[-16%]">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="phone relative">
                                        <Phone className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[16px] font-[500]' onChange={handleDataChange} required />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-sans font-semibold text-primary-100 absolute left-0 bottom-[-16%]">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message relative">
                                        <ChatAlt2 className='text-[#b2b2b2] text-[16px] absolute top-[10px] left-[8px] w-[20px] h-[20px]' />
                                        <textarea name='message' placeholder='Message' className='text-[14px] text-black placeholder:text-black montserrat py-[10px] px-[35px] w-full mb-[10px] font-[500] resize-none' onChange={handleDataChange}></textarea>
                                    </div>
                                    <div className="btn mt-3">
                                        <button type='submit' className='py-[10px] px-[30px] border-0 text-white text-[16px] uppercase font-[600] bg-[#231f20] poppins' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright bg-white">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative">
                    <div className="flex gap-x-5 py-3 flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 items-center border-t border-[#ffffff]">
                        <div className="basis-full sm:basis-1/2">
                            <p className="text-sm poppins text-black leading-6 text-center sm:text-left">
                                © Copyright 2024 - Infinity Animations
                            </p>
                        </div>
                        <div className="basis-full sm:basis-1/2">
                            <ul className="flex items-center justify-center sm:justify-end gap-4">
                                {
                                    otherLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-[16px] text-black poppins font-normal hover:opacity-50 leading-[30px]">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;