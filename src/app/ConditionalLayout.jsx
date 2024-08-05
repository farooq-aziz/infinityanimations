"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
//
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Popup from "@/components/popup/Popup"

const ConditionalLayout = ({ children }) => {
    //=============== Popup ===============//
    const pathname = usePathname();
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPopup(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    const togglePopup = (e) => {
        setPopup(!e)
    }
    return (
        <PopupProvider value={{ popup, togglePopup }}>
            <Popup />
            <>
                {
                    pathname !== "/video-explainer-lp" &&
                    pathname !== "/video-explainer-lp2" &&
                    pathname !== "/video-explainer-lp3" &&
                    pathname !== "/video-explainer-lp-ca" &&
                    pathname !== "/video-explainer-lp-new" &&
                    pathname !== "/explainer-videos" &&
                    pathname !== "/explainer-videos-new" &&
                    pathname !== "/explainer-videos-duplicate" &&
                    pathname !== "/explainer-videos-animations" &&
                    pathname !== "/logo-animation-lp" &&
                    pathname !== "/lp/explainer-video-animation" &&
                    pathname !== "/explainer-video-services" &&
                    pathname !== "/animating-studio-lp-2" &&
                    pathname !== "/infinity-studio" && (
                        <Header />
                    )
                }
                {children}
                {
                    pathname !== "/video-explainer-lp" &&
                    pathname !== "/video-explainer-lp2" &&
                    pathname !== "/video-explainer-lp3" &&
                    pathname !== "/video-explainer-lp-ca" &&
                    pathname !== "/video-explainer-lp-new" &&
                    pathname !== "/explainer-videos" &&
                    pathname !== "/explainer-videos-new" &&
                    pathname !== "/explainer-videos-duplicate" &&
                    pathname !== "/explainer-videos-animations" &&
                    pathname !== "/logo-animation-lp" &&
                    pathname !== "/logo-animation-lp-copy" &&
                    pathname !== "/logo-animation-lp-black" &&
                    pathname !== "/lp/explainer-video-animation" &&
                    pathname !== "/explainer-video-services" &&
                    pathname !== "/animating-studio-lp-2" &&
                    pathname !== "/infinity-studio" && (
                        <Footer />
                    )
                }
            </>
        </PopupProvider>
    )
}

export default ConditionalLayout