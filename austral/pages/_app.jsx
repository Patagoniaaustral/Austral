import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../src-client/redux/store"
import Layout from './layout';
import {AnimatePresence} from 'framer-motion'

function App ({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence mode="wait">
      <Provider store={store}> 
        <Layout > 
          <Component {...pageProps} />
        </Layout>
      </Provider>
      </AnimatePresence>
    </>
    )
}


export default App;