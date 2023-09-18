import type { AppProps } from 'next/app';
import { globalStyles } from "../styles/global";
import { SessionProvider } from "next-auth/react"
//import { ContextProvider } from '@/context';

globalStyles();

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    return (
        //  <ContextProvider>
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
        // </ContextProvider>
    );
}