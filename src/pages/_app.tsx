import "../styles/globals.css";
import "../styles/typography.css";
import type { AppProps } from "next/app";

import { LayoutProvider } from "../layout/LayoutProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
