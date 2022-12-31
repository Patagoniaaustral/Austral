import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../src-client/redux/store"
import Layout from './layout';

function App ({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}> 
        <Layout > 
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
    )
}


export default App;