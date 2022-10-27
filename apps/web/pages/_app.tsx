import '../styles/tailwind.css'

import Script from 'next/script'
import { trpc } from '../utils/trpc'
import * as gtag from '../utils/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { SearchOverlay } from '../components/SearchOverlay'

function MyApp({ Component, pageProps }: any) {
  const { events } = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    events.on('routeChangeComplete', handleRouteChange)
    events.on('hashChangeComplete', handleRouteChange)
    return () => {
      events.off('routeChangeComplete', handleRouteChange)
      events.off('hashChangeComplete', handleRouteChange)
    }
  }, [events])

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="worker"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.trackingId}`}
          />
          <Script
            id="gtag-init"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.trackingId}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
      <Component {...pageProps} />
      <SearchOverlay />
    </>
  )
}

export default trpc.withTRPC(MyApp)
