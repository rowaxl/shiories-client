import * as React from 'react';
import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import getLocales from 'utils/getLocales'

interface Props {
  locale: 'en-US' | 'ja-JP'
}

class CustomDocument extends NextDocument<Props> {
  render() {
    return (
      <Html lang={this.props.locale.split('-')[0]}>
        <Head>
          <meta name='viewport' content='width=device-width,height=device-height' key='viewport' />
          <link rel='shortcut icon' href='/static/shortcut-icon.png' key='shortcutIcon' />
          <meta name='theme-color' content='#087da1' key='themeColor' />
          <title>The Shiories v0.1</title>
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(context: DocumentContext) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = context.renderPage

    context.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

    const initialProps = await NextDocument.getInitialProps(context)
    const locale = getLocales(context.query)

    return { ...initialProps, locale, style: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()] }
  }
}

export default CustomDocument
