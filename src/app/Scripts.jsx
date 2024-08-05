"use client"
import { useEffect } from 'react'

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== zenDesk ========//
            const zenDesk = document.createElement("script");
            zenDesk.id = "ze-snippet";
            zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
            zenDesk.async = true;
            zenDesk.defer = true;
            document.body.appendChild(zenDesk);
            //======== GATG ========//
            const gtmScript = document.createElement("script");
            gtmScript.id = "google-tag-manager";
            gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-11475040852";
            gtmScript.async = true;
            gtmScript.defer = true;
            document.head.appendChild(gtmScript);
            //======== Google Tag Manager ========//
            const gtmConfigScript = document.createElement("script");
            gtmConfigScript.id = "google-tag-manager-one";
            gtmConfigScript.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11475040852');
            `;
            document.head.appendChild(gtmConfigScript);
            //======== Number Convertion  ========//
            const numberConverstionCode = document.createElement("script");
            numberConverstionCode.id = "phone_conversion_number"
            numberConverstionCode.text = `
                gtag('config', 'AW-11475040852/d8ZeCOHomaoZENT03N8q', 
                {'phone_conversion_number': '(833) 666-6689'});
              `
            document.head.appendChild(numberConverstionCode);
            //======== Meta Pixel Code ========//
            const MetaPixelCode = document.createElement("script");
            MetaPixelCode.id = "meta-pixel";
            MetaPixelCode.text = `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '403846962177452');
                fbq('track', 'PageView');
            `;
            document.head.appendChild(MetaPixelCode);
            //======== GATG2 ========//
            const gtmScript2 = document.createElement("script");
            gtmScript2.id = "google-tag-manager";
            gtmScript2.src = "https://www.googletagmanager.com/gtag/js?id=G-NTFT6HEZCW";
            gtmScript2.async = true;
            gtmScript2.defer = true;
            document.head.appendChild(gtmScript2);
            //======== Google Tag Manager2 ========//
            const gtmConfigScript2 = document.createElement("script");
            gtmConfigScript2.id = "google-tag-manager-one";
            gtmConfigScript2.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NTFT6HEZCW');
            `;
            document.head.appendChild(gtmConfigScript2);
            //======== Google Tag Manager ========//
            const hotjar = document.createElement("script");
            hotjar.id = "hotjar";
            hotjar.text = `
                (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5073993,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `;
            document.head.appendChild(hotjar);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default Scripts
