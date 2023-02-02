import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../src-client/redux/store"
import Layout from './layout';
import {AnimatePresence} from 'framer-motion'
import Script from 'next/script'


function App ({ Component, pageProps }) {

  return (
    <>
      <AnimatePresence>
        <Provider store={store}> 
          <Layout > 
          <Script async
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRAKING_ID}`}/>
          
          <Script 
          id="gtag-init"
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
              _html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_TRAKING_ID}', {
                page_path: window.location.pathname,
              });
              `}}/>
    
          
          <Script  
          id="fb-pixel" 
          strategy='afterInteractive' 
          dangerouslySetInnerHTML={{
            _html: `!function(f,b,e,v,n,t,s)
            if(f.fbq) return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js')  bq('init', '${process.env.FB_PIXEL_ID}'); fbq('track', 'PageView');`}}/>
      
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </AnimatePresence>
    </>
    )
}


export default App;