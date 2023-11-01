import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Ticket wave web application</title>
                <meta name="description" content="Ticket wave web application" />

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="description" content="Application description" />

                <meta property="og:url" content="https://ticketwave.netlify.app" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Ticket wave web application" />
                <meta property="og:description" content="Application description" />
                <meta property="og:image" content="../../public/images/event_flyer.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="ticketwave.netlify.app" />
                <meta property="twitter:url" content="https://ticketwave.netlify.app" />
                <meta name="twitter:title" content="Ticket wave web application" />
                <meta name="twitter:description" content="Application description" />
                <meta name="twitter:image" content="../../public/images/event_flyer.jpg" />

                <meta name="image" content="../../public/images/event_flyer.jpg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
