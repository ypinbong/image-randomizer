import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from 'notistack'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SnackbarProvider
        autoHideDuration={3000}
        className={styles.code}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        maxSnack={3}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
  );
}
