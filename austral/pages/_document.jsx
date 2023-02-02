import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/Favicon.webp" />
        <meta name="austral" content="Austral Rent A Car" />
        <meta name="robots" content="index, follow" />
      
        <meta property="og:title" content="Austral Rent A Car" />
        <meta property="og:description" content="Austral Rent A Car" />
        <meta property="og:url" content="https://www.australrentacar.com.ar/" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;500;600;700;800&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        
        <meta name="google-site-verification" content="D6kjcV62_XcOUnO0F8QtplLUMW2VDhZOLqucq4gaYTE"/>
        <meta name="keywords" content="Rentacar,Bariloche,Alquiler de autos,turismobariloche,escapadas,findesemana"/>
        
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());`}}/>
        
        <noscript><img height="1" width="1" style={{display: 'none'}}
        src={`https://www.facebook.com/tr?id=${process.env.FB_PIXEL_ID}&ev=PageView&noscript=1`}/>
        </noscript>
        
        <Script 
          strategy= "lazyOnload"
          dangerouslySetInnerHTML={
          {__html: `
          function loadScript(a){
            var b=document.getElementsByTagName("head")[0],
            c=document.createElement("script");c.type="text/javascript",
            c.src="https://tracker.metricool.com/resources/be.js",
            c.onreadystatechange=a,c.onload=a,b.appendChild(c)}
            loadScript(function(){
              beTracker.t({hash:${process.env.METRICOOL_HASH}})});
          `}}/>
        
        </Head> 

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

 


