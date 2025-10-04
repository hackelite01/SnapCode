import { AppProps } from "next/app";
import Header from "../src/components/Header";
import SEO from "../src/components/SEO";
import { EditorProvider } from "../src/contexts/EditorContext";
import SupportDialogProvider from "../src/contexts/SupportDialogContext";
import { ToastProvider } from "../src/contexts/ToastContext";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ToastProvider>
      <SupportDialogProvider>
        <EditorProvider>
          <SEO />
          <Header />
          <Component {...pageProps} />
        </EditorProvider>
      </SupportDialogProvider>
    </ToastProvider>
  );
};

export default MyApp;
