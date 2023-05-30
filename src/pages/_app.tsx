import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

import "../styles/scss/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
