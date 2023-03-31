import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        content="Vince is a blockchain powering the Vince Ecosystem and its products."
                        name="Vince is a blockchain powering the Vince Ecosystem and its products."
                    />
                    <meta
                        content="Vince is a blockchain powering the Vince Ecosystem and its products."
                        property="og:title"
                    />
                    <meta
                        content="Vince is a blockchain powering the Vince Ecosystem and its products."
                        property="og:description"
                    />

                    <meta
                        property="og:url"
                        content="https://vincechain.com"
                    />
                    <meta
                        property="og:vincechain"
                        content="Vince is a blockchain powering the Vince Ecosystem and its products."
                    />
                    {/* <meta
                        content="Vince is a blockchain powering the Vince Ecosystem and its products."
                        property="twitter:title"
                    /> */}
                    {/* <meta
                        content="Vince is a blockchain powering the Vince Ecosystem and its products."
                        property="twitter:description"
                    /> */}
                    {/* <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    /> */}
                    {/* <meta property="og:type" content="Article" /> */}
                    <meta name="twitter:site" content="@vincechain" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Karla:wght@400;500;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
