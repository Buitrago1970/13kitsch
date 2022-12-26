import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'

import App from 'next/app';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (

//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// }

// export default MyApp;
