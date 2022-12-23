import '../styles/globals.css'
import { store } from "../src-client/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src-client/redux/store";
import { SessionProvider } from "next-auth/react";
import Footer from '../src-client/components/Footer';
import { NavBar } from '../src-client/components/NavBar';
import Layout from './layout';
import { appWithTranslation } from 'next-i18next'

function App ({ Component, pageProps }) {
  return (
    <>
      <Layout> 
        <Component {...pageProps} />
      </Layout>
    </>
    )
}


export default appWithTranslation(App)