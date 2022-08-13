import { useEffect } from "react";
import "../styles/globals.css";
import { getWeb3Modal } from "../store/getWeb3Modal";

function MyApp({ Component, pageProps }) {
  const { connectWeb3Modal } = getWeb3Modal();
  useEffect(() => {
    connectWeb3Modal();
    return () => {};
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
