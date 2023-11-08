import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout>
        <Component {...pageProps} />
      </Layout>{" "}
    </LocalizationProvider>
  );
}
