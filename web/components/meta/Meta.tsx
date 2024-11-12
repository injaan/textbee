import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <title>ServeSMS - SMS Gateway</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content={`ServeSMS`}
      />
      <meta
        name='keywords'
        content='android, text, sms, gateway, sms-gateway, open-source foss'
      />
      <meta name='author' content='Israel Abebe Kokiso' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
