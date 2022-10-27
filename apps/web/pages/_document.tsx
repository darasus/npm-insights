import { Html, Head, Main, NextScript } from 'next/document'
import { getBaseUrl } from 'utils'

export default function Document() {
  return (
    <Html lang="en" className="font-body">
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
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
