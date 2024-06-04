import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/home/main/main-menu";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col  items-center ">
      <Navigation/>
      <Component {...pageProps} />
    </div>
  );
}
