"use client"
import Image from "next/image";
// Import Components
import styles from '@/app/explainer-videos-animations/component/header/header.module.css';
import icon1 from "media/banner/logo.gif"
import email from "media/banner/email.png"
import lang from "media/banner/lang.png"
import chat from "media/banner/chat.png"
import usePopup from "@/app/configs/store/Popup";

const Video = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }

    return (
        <>
            <section className={`newcon  ${styles.display}`} id="header">
                <div className={`container ${styles.pointer} items-center`}>
                    <div className="w-[34%] md:w-[12%]">
                        <Image src={icon1} />
                    </div>
                    <div className={`${styles.poster}`}>
                        <div className={styles.got}>
                            <Image src={email} />     <a href="mailto:queries@infinityanimations.com">  queries@infinityanimations.com</a>
                        </div>
                        <div className={styles.got}>
                            <Image src={lang} />   <a href="tel:833-666-6689">  833-666-6689</a>
                        </div>
                        <div className={styles.got}>
                            <Image src={chat} />   <a href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                        </div>
                        <div className={styles.got1}>
                            <button onClick={popupHandle}>Get Started</button>
                        </div>
                    </div>
                    <div className="md:hidden block">
                        <a href="tel:833-666-6689" className="flex items-center gap-2 text-white font-sans">
                            <Image src={lang} alt="InfinityAnimationPro" />
                            833-666-6689
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Video
