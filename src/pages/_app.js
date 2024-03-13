import React from "react";
import Head from "next/head";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>Oswal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/img/Favcion.png" />
        <link rel="icon" type="image/x-icon" href="/img/Favcion.png" />
        {/* seo end */}
        <script
          type="application/ld+json"
          id="HomePageSEO"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "Oswal",
              alternateName: "Osawal Sanitaryware",
              url: "https://oswalpotteryworks.com",
              logo: "https://oswalpotteryworks.com/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "9512532000",
                  contactType: "customer service",
                  contactOption: "TollFree",
                  areaServed: ["US", "IN", "FR"],
                  availableLanguage: "en",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "9909596400",
                  contactType: "technical support",
                  contactOption: "HearingImpairedSupported",
                  areaServed: ["US", "CA", "AF"],
                  availableLanguage: ["en", "es", "fr"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/oswal/",
                "https://www.instagram.com/oswal",
              ],
            }),
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
