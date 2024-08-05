"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/services/services.module.css';
import log from "media/banner/log.png"


const Video = () => {
   
    return (
        <>
            <section className={`newcon ${styles.touch}`}>
                    <div class={`container mx-auto ${styles.pointer} `}>
                        <div class={`md:grid md:grid-cols-1 items-center ${styles.world}`}>
                        <div className={styles.element}>
                        <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Our  <span class="colorred2">Clients </span>
                        </h3>
                        <Image src={log} />
                    </div>
                            
                    
                    
                        </div>
                </div>
            </section>
        
        </>
    )
}

export default Video
