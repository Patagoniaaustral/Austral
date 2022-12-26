import '../styles/globals.css'
import { store } from "../src-client/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src-client/redux/store";
import { SessionProvider } from "next-auth/react";
import Layout from './layout';


function App ({ Component, pageProps }) {
  return (
    <>
      <Layout> 
        <Component {...pageProps} />
      </Layout>
    </>
    )
}


export default App;