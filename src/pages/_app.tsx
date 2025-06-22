import { AppProps } from "next/app";
import { Head } from "next/document";
import { FC } from "react";
import ContextProvider from "contexts/ContextProvider";
import AppBar from "components/AppBar";
import Footer from "components/Footer";
import Notification from "components/Notification";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App :  FC<AppProps> =  ({Component , pageProps}) => {
  return  (
    <div className="bg-default-900">
      <Head>
        Solana Token Creator
      </Head>
      <ContextProvider>
        <Notification/>
        <Component {...pageProps} />
        <Footer/>
      </ContextProvider>


      {/* SCRIPTS */}
      <script src="assets/lib/preline/parline.js"></script>
      <script src="assets/lib/swiper/swiper-bundle.js"></script>
      <script src="assets/lib/gumshoe/gumshoe.polyfills.min.js"></script>
      <script src="assets/lib/lucide/lucide.min.js"></script>
      <script src="assets/lib/aos/aos.min.js"></script>
      <script src="assets/js/swiper.js"></script>
      <script src="assets/js/theme.js"></script>
    </div>
  )
}

export default App;