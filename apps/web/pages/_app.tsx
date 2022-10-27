import '../styles/tailwind.css'

import { trpc } from '../utils/trpc'
import { SearchOverlay } from '../components/SearchOverlay'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
      <SearchOverlay />
      <Analytics />
    </>
  )
}

export default trpc.withTRPC(MyApp)
