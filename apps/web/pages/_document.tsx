import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { getBaseUrl } from 'utils'
import { theme } from '../theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href={`${getBaseUrl()}/api/favicon`} />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
