import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    const isProduction = process.env.GATSBY_ACTIVE_ENV === "production"
    return (
        <html {...props.htmlAttributes}>
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link
                rel="preload"
                href="/fonts/AvenirNext/AvenirNextLTPro-Regular.otf"
                as="font"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/AvenirNext/AvenirNextLTPro-BoldCn.otf"
                as="font"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/AvenirNext/AvenirNextLTPro-Demi.otf"
                as="font"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/AvenirNext/AvenirNextLTPro-DemiCn.otf"
                as="font"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/AvenirNext/AvenirNextLTPro-It.otf"
                as="font"
                crossOrigin="anonymous"
            />
            {isProduction && (
                <>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-1Z8RQ3FZTG"
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-1Z8RQ3FZTG');`,
                        }}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-M7HL79C2');`,
                        }}
                    />
                </>
            )}
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
        {isProduction && (
            <noscript dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7HL79C2"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}/>
        )}
        {props.preBodyComponents}
        <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: props.body}}
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
