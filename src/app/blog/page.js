import React from 'react';
import Script from 'next/script';
// Import Page Components
import Hero from "@/components/hero/Hero";
import Blogs from "@/components/blogs/Blogs";

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> <span className='text-primary-100'>Our</span> Blogs </>),
        para: "A top-notch video animation production company in Austin helping brands to grow their business and drive more conversion with interactive animated videos.",
        btnBg: "bg-prime",
    };

    return (
        <>
            <Hero content={hero} />
            {/* <Blogs /> */}
            <Script id="productSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "Product", 
                        "name": "Animation Blogs | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner-bg.b24e321b.gif",
                        "description": "From impactful storytelling to technical mastery, our blog is your gateway to the art and innovation of video animation services.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Infinity Animations"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "ratingCount": "1174"
                        }
                    }
                `}
            </Script>
        </>
    )
}