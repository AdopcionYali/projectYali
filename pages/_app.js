import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.css'


import connectDB from './db'; 

connectDB();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
