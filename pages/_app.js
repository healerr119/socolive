import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return <Component {...pageProps} />
}

export default MyApp
