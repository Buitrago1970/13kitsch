import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout/Layout';
import App from 'next/app';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp

