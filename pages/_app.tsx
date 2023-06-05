import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />

      <Toaster position="top-right" />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
