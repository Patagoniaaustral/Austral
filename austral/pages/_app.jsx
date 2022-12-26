import '../styles/globals.css'
import { store } from "../src-client/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../src-client/redux/store";

import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from './layout';


function App ({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Layout> 
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
    )
}


export default App;