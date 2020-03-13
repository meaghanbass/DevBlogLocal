import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=devide-width, initial-scale=1.0" />
                    <link rel="shortcut icon" type="image/png" href="/images/favicon.ico" />
                    <link rel="shortcut icon" type="image/png" href="/images/favicon.ico" />
                    <link rel="stylesheet" href="/styles/styles.scss" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
