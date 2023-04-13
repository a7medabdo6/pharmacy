import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" integrity="sha512-+vQ+jSa1HG6gePn+YmXcXoemUtDTMeEJOM5rs4eS1rClpOnKm2WAZRS/rjWZkSnna1mAMZ8upmOxrJgoUKX9lQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
