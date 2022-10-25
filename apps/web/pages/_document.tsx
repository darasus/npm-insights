import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { getBaseUrl } from 'utils'
import { theme } from '../theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href={`${getBaseUrl()}/api/favicon`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ultra:wght@400&display=swap&text=js.watch"
          rel="stylesheet"
        />
        <style>
          {`a:hover {
              text-decoration: underline;
            }`}
        </style>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
