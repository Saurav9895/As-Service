import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
    <RecoilRoot>
			<Head>
				<title>As Service</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icon.png' />
				<meta
					name='description'
					content='BeBest platform to find your service man.'
				/>
			</Head>
			<ToastContainer />

			<Component {...pageProps} />
      </RecoilRoot>
	);
}
