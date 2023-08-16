import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-white-2'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
