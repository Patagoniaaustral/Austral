import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="austral" content="Austral Rent A Car" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="alquiler de autos, alquiler de autos en argentina,
         alquiler de autos bariloche, rent a car, rent a car bariloche, rent a car argentina"/>
        <meta property="og:title" content="Austral Rent A Car" />
        <meta property="og:description" content="Austral Rent A Car" />
        <meta property="og:url" content="https://www.australrentacar.com.ar/" />
        <meta name="google-site-verification" content="GDZpDah58kjFg2Q5RBcgT48NdKk0DkwrQFHB_k8hZkc" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;500;600;700;800&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        {/* <meta name="google-site-verification" content="D6kjcV62_XcOUnO0F8QtplLUMW2VDhZOLqucq4gaYTE"/>
        <meta name="keywords" content="Rentacar,Bariloche,Alquiler de autos,turismobariloche,escapadas,findesemana"/>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-117085817-1"></Script>
        <Script>
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-117085817-1');
      </Script>
      <Script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        bq('init', '632010765358607');
        fbq('track', 'PageView');
        </Script>
        <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=632010765358607&ev=PageView&noscript=1"/></noscript>
      */}
      </Head> 
   
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
