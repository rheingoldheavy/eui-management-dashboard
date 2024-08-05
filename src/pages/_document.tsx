import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> {/* It's a good practice to specify a language attribute */}
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Add other global head elements here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
