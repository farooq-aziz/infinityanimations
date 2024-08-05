"use client"
// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import logo from "media/images/black-logo.gif";
import facebook from "media/explainer-videos/fb.png";
import twitter from "media/explainer-videos/twitter.png";
import instagram from "media/explainer-videos/insta.png";
import linkedin from "media/explainer-videos/linkedin.png";

const Footer = () => {
    const quickLinks = [
        {
            text: "Home",
            link: "javascript:;"
        },
        {
            text: "Why Us",
            link: "javascript:;"
        },
        {
            text: "Portfolio",
            link: "javascript:;"
        },
        {
            text: "Process",
            link: "javascript:;"
        },
        {
            text: "Career",
            link: "javascript:;"
        },
        {
            text: "Pricing",
            link: "javascript:;"
        },
        {
            text: "Case Studies",
            link: "javascript:;"
        },
        {
            text: "Contact Us",
            link: "javascript:;"
        },
        {
            text: "Get Quote",
            link: "javascript:;"
        }
    ];
    const servicesLinks = [
        {
            text: "3D Animation",
            link: "javascript:;"
        },
        {
            text: "2D Animation",
            link: "javascript:;"
        },
        {
            text: "Whiteboard",
            link: "javascript:;"
        },
        {
            text: "Motion Graphics",
            link: "javascript:;"
        },
        {
            text: "Video Editing",
            link: "javascript:;"
        },
        {
            text: "Logo Animation",
            link: "javascript:;"
        },
        {
            text: "Architectural ",
            link: "javascript:;"
        },
        {
            text: "Visualization",
            link: "javascript:;"
        },
        {
            text: "CGI-VFX",
            link: "javascript:;"
        },
        {
            text: "Infographics",
            link: "javascript:;"
        },
        {
            text: "Hybrid & Cel",
            link: "javascript:;"
        },
    ];
    const resourceLinks = [
        {
            text: "Hire 2D Animator",
            link: "javascript:;"
        },
        {
            text: "Hire 3D Animator",
            link: "javascript:;"
        },
        {
            text: "Hire Animator",
            link: "javascript:;"
        },
        {
            text: "Hire Game Designer",
            link: "javascript:;"
        },
        {
            text: "Hire UI/UX Designer",
            link: "javascript:;"
        }
    ];
    const otherLinks = [
        {
            text: "Terms of Services",
            link: "javascript:;",
        },
        {
            text: "Privacy Policy",
            link: "javascript:;",
        },
    ];
    const socialLinks = [
        {
            icon: facebook,
            link: "https://www.facebook.com/"
        },
        {
            icon: twitter,
            link: "https://twitter.com/_"
        },
        {
            icon: instagram,
            link: "https://www.instagram.com/"
        },
        {
            icon: linkedin,
            link: "https://www.linkedin.com/"
        },
    ]

    return (
        <footer className="bg-[#F3F3F3] pt-[70px] 3xl:mt-0 relative z-[999]">
            <div className="px-5 lg:max-w-7xl mx-auto">
                <div className="flex gap-x-5 pb-8 flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
                    <div className="basis-full sm:basis-[55%] md:pr-[55px] lg:basis-[30%]">
                        <Link href="javascript:;" className="lg:w-[25%]">
                            <Image src={logo} width={150} height={54} className="pb-3" alt="Animation Studio" />
                        </Link>
                        <p className="text-[16px] poppins text-justify text-black mt-3 md:pr-5 pb-10">Animating Studio is a visionary kingdom where creativity knows no bounds. With masterful strokes of artistry, they breathe life into ideas, forging appealing animations that dance with imagination.</p>

                        <hr className="border-black " />

                        <ul className="flex items-center gap-4 mt-4">
                            {
                                socialLinks.map((e, i) => {
                                    return (
                                        <li key={i} className="">
                                            <Link href={e.link} target="_blank">
                                                <Image src={e.icon} className="w-[20px] brightness-0 " alt="Animation Studio" />
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="basis-full sm:basis-[48%] lg:basis-[20%]">
                        <h4 className="text-[16px] font-semibold poppins text-black leading-none mb-3">Quick Links</h4>
                        <ul>
                            {
                                quickLinks.map((e, i) => {
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
                    <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                        <h4 className="text-[16px] font-semibold poppins text-black leading-none mb-3">Quick Links</h4>
                        <ul>
                            {
                                servicesLinks.map((e, i) => {
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
                    <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                        <h4 className="text-[16px] font-semibold poppins text-black leading-none mb-3">Resource Augmentation</h4>
                        <ul>
                            {
                                resourceLinks.map((e, i) => {
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
                <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 items-center border-t border-[#000000]">
                    <div className="basis-full sm:basis-1/2">
                        <p className="text-sm poppins text-black leading-6 text-center sm:text-left">
                            © Copyright 2024 - Animation Studio
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
        </footer>
    );
}

export default Footer;