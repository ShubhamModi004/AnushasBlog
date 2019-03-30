import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="shortcut icon" href="/icons/icon-48x48.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#000" />
        <link rel="apple-touch-icon" sizes="48x48" href="./images/Icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./images/Icon.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="./images/Icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./images/Icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="./images/Icon.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="./images/Icon.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="./images/Icon.png" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
