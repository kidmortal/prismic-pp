import Document, { Html, Head, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";
import DeferNextScript from "../config/DeferNextScript";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head></Head>
        <body>
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
