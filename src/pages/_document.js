import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>React Shop</title>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XMZ26PJ5JV"></script>
                    <script dangerouslySetInnerHTML={{
                        html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());                      
                        gtag('config', 'G-XMZ26PJ5JV');`
                    }}/>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};

export default MyDocument;