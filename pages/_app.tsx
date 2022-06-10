import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps }: AppProps) {
  const { emotionCache = clientSideEmotionCache } = pageProps
  return <CacheProvider value={emotionCache} >
          <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
         </Head>
        <Component {...pageProps} />
       </CacheProvider>
}

export default MyApp
