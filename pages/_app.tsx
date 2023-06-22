import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />

        <Toaster position="top-right" />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default appWithTranslation(MyApp);
