import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// ===== Images ===== //
import AnimationImage from "media/explainer-videos/animations.png"
import Logos from "media/explainer-videos/animations-logos.png"

const Animations = ({ content }) => {
    const { title, para, subtitleOne, subtitleTwo, subpara, AnimationVideo } = content;
    // fancy box 
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
    return (
        <section className='lg:pt-[70px] relative'>
            <div className="grid grid-cols-12">
                <div className="col-span-12 px-3 md:px-5">
                    <h2 className='text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-bold font-sans leading-tight text-black text-center mb-3'>{title}</h2>
                    <p className='text-[13px] text-center sm:text-[16px] font-sans text-black leading-[19px] pb-6 lg:w-8/12 mx-auto md:mb-[75px]'>{para}</p>
                </div>
            </div>
            <div className="bg-[#00C6F9] pb-[70px]">
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <Link href={AnimationVideo} datafancybox="gallery">
                                    <video src={AnimationVideo} autoPlay={true} loop={true} muted={true} className='mt-4 md:w-8/12 lg:w-5/12 mx-auto md:mt-[-50px] shadow-md rounded-[15px]'></video>
                                </Link>
                            </Fancybox>
                            <h3 className='text-[25px] sm:text-[40px] lg:text-[50px] leading-[25px] md:leading-[40px] lg:leading-[55px] font-bold font-sans mt-3 md:mt-8 mb-2 text-white text-center'>{subtitleOne}</h3>
                            <h5 className='text-center text-[25px] text-white leading-[30px] md:leading-[33px] font-bold font-sans mb-4 lg:mb-8'>{subtitleTwo}</h5>
                            <p className='text-[13px] sm:text-[16px] font-sans leading-[20px] mb-3 text-white text-center lg:w-10/12 mx-auto'>{subpara}</p>

                            <div className="logos mt-4 lg:mt-10">
                                <Image src={Logos} alt='Animating Studios' className='w-11/12 mx-auto' />
                            </div>
                            <div className="btn mt-8 lg:mt-12 flex items-center justify-center">
                                <a href="tel:833-666-6689" class="text-[16px] font-semibold leading-[25px] text-white bg-[#FF2D4B] dropShadow rounded-[5px] w-full sm:w-3/12 mx-auto h-[44px] poppins flex items-center justify-center" >Make an Animation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Animations
