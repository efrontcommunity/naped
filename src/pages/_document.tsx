import React from 'react';

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=Rubik:ital,wght@0,300;0,400;1,300&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" type="image/png" href="/icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
