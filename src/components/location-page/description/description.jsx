import Image from 'next/image';
// Import Images
import DescDot from "media/location-page/desc-dot.png"

function Description({ content }) {
    const { title, para, bannerLeft, bannerRight, downArrow } = content;

    // video code start
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };

    return (
        <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative `}>
            <div className="container">
                <div className='grid grid-cols-12 w-full'>
                    {bannerLeft && <div className={`order-last lg:order-first mt-[25px] lg:mt-0  col-span-12 lg:col-span-6 lg:w-[80%]`} >
                        <div className="w-full h-full" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-lg">
                                <source src={bannerLeft} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    }

                    <div className={` col-span-12 lg:col-span-6 ms-auto pe-0 md:pe-5 flex flex-col justify-center`}>
                        <h2 className={`text-[#fff] text-[30px] sm:text-[40px] font-semibold font-sans leading-tight md:mt-5 mb-5 text-start`}>
                            {title}
                        </h2>
                        <p className="text-[15px] lg:text-[16px] text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                            {para}
                        </p>
                        {downArrow &&
                            <div className={`flex items-center w-[98%] md:w-full h-[70px] mt-[35px] ${downArrow === 'start' && 'justify-start border-l-2 '} ${downArrow === 'end' && 'justify-end border-r-2'}  border-gray-500`}>
                                <Image src={DescDot} width='25px' height='25px' className={`${downArrow === 'start' && 'ms-[-18px]'} ${downArrow === 'end' && 'me-[-18px]'}`} />
                            </div>
                        }
                    </div>
                    {bannerRight && <div className={`col-span-12 lg:col-span-6 lg:ms-auto my-auto mt-[25px] lg:mt-0 lg:w-[80%]`}>
                        <div className="w-full h-full" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-lg" >
                                <source src={bannerRight} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default Description