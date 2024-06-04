import { Html, Head, Main, NextScript } from "next/document";
import Navigation from '../components/home/main/main-menu';
import App from "../pages/_app"
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
