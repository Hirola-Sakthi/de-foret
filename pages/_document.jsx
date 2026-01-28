import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon"></link>
                {/* 
                <link
                    href="https://fonts.googleapis.com/css2?family=Prata&family=Raleway:wght@400;600&display=swap"
                    rel="stylesheet"
                /> */}
                {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Prata&family=Raleway:wght@400;600&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
                <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prata&family=Raleway:wght@400;600&display=swap" /></noscript>
           
            */}

                <link rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Prata&family=Raleway:wght@400;600&display=swap" />

                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Prata&family=Raleway:wght@400;600&display=swap"
                    media="print" onLoad="this.media='all'" />

                <noscript>
                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Prata&family=Raleway:wght@400;600&display=swap" />
                </noscript>

            </Head>


            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
