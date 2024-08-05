"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Axios from "axios";
import { usePathname } from "next/navigation"
// pupup
import { Dialog } from "@material-tailwind/react";
import usePopup from '@/app/configs/store/Popup';
// Images
import closeBtn from 'media/video-explainer/close-btn.svg'
import popUpImage from "media/images/boost-img.gif"
import arrowRed from "media/icons/arrow-red.png"

const Popup = ({ }) => {

    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Get A Quote');
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
            <Dialog open={popup} handler={popupHandle} className='popup h-full w-full' style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' }}>
                <section className='lg:h-auto 2xl:h-full lg:w-full py-7 2xl:py-12 px-4 md:px-6 flex items-center justify-center'>
                    <div className="popupBg bg-[url('../../public/video-explainer/popupnew-bg.png')] bg-[length:100%_100%] bg-center bg-no-repeat pt-8 pb-8 xl:pt-9 px-4 sm:px-6 lg:px-10 relative w-full lg:w-[850px] xl:w-[900px] rounded-xl">
                        <div className='w-[40px] xl:w-[60px] h-[40px] xl:h-[60px] absolute top-[1%] right-[1%] flex items-center justify-center text-center rounded-[50%] border-0 cursor-pointer'>
                            <Image onClick={popupHandle} src={closeBtn} className="w-full" alt='Infinity Animations' />
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 lg:col-span-6">
                                <div className="txt pt-5 sm:pt-0">
                                    <p className="montserrat uppercase text-[17px] 2xl:text-[20px] leading-[30px] 2xl:leading-[30px] text-center text-white bg-white/20 backdrop-blur-2xl rounded-[20px] px-4 sm:w-6/12 lg:w-9/12 pt-[2px]">Fill This Form to Avail</p>
                                    <h2 className="fontsfpromedium uppercase text-[25px] sm:text-[35px] tracking-normal font-bold leading-[30px] sm:leading-[45px] text-white pt-2 pb-0 xl:py-2 2xl:py-3">Amazing <span className="text-[#FB2035]">Discounts</span></h2>
                                    <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-white leading-[26px] xl:leading-[28px] montserrat pl-2 pb-3 xl:pb-4 2xl:pb-6">On Video Animation Services</p>
                                </div>
                                <form className="relative z-[99]">
                                    <div className="relative">
                                        <input type="text" id="name" name="name" placeholder="Enter Your Name" className="montserrat text-[10px] xl:text-[12px] text-white w-full h-[35px] xl:h-[50px] bg-[#242424]/100 rounded-[6px] backdrop-blur-xl px-3 lg:px-4 mb-3 2xl:mb-4 focus:outline-0" onChange={handleDataChange} />
                                        {errors.name && (
                                            <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-10px]">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="email" id="email" name="email" placeholder="Enter Email Address" className="montserrat text-[10px] xl:text-[12px] text-white w-full h-[35px] xl:h-[50px] bg-[#242424]/100 rounded-[6px] backdrop-blur-xl px-3 lg:px-4 mb-3 2xl:mb-4 focus:outline-0" onChange={handleDataChange} />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-10px]">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input type="tel" id="phone" name="phone" minLength="10" maxLength="13" placeholder="Enter Phone" className="montserrat text-[10px] xl:text-[12px] text-white w-full h-[35px] xl:h-[50px] bg-[#242424]/100 rounded-[6px] backdrop-blur-xl px-3 lg:px-4 mb-3 2xl:mb-4 focus:outline-0" onChange={handleDataChange} />
                                        {errors.phone && (
                                            <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-10px]">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <textarea id="message" name="message" className="montserrat text-[12px] text-white w-full h-[95px] bg-[#242424]/100 rounded-[6px] backdrop-blur-xl px-3 lg:px-4 pt-3 2xl:mb-4 focus:outline-0 resize-none" placeholder="Message" onChange={handleDataChange}></textarea>
                                    </div>
                                    <button className='bg-prime text text-[10px]-xl:white border-0 h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2 mt-2 ml-[4px]' onClick={handleFormSubmit} disabled={isDisabled}>
                                        <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">
                                            {formStatus}
                                        </span>
                                        <Image className="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2 object-contain formbutton" src={arrowRed} alt="Infinity Animations " />
                                    </button>
                                </form>
                            </div>
                            <div className="col-span-12 lg:col-span-6 lg:block hidden">
                                <div className="max-h-[400px] 2xl:max-h-full mt-[-55px] xl:mt-0">
                                    <Image src={popUpImage} alt="Infinity Animation" className="h-full m-auto w-[90%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Dialog>
        </>
    )
}

export default Popup