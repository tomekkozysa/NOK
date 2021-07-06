import React from "react";
import { Helmet } from "react-helmet";
// import Footer from "../components/Footer";
import Header from "../components/Header";

import "./global-pre.css";
import "./global.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import Footer from "../components/Footer"

const TemplateWrapper = ({ children, path }) => {
  const { title, description, siteUrl } = useSiteMetadata();
  console.log('siteUrl',siteUrl, path)
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/icons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/icons/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/icons/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/icons/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${siteUrl}/img/icons/nok-social.jpg`}
        />
        <meta
          property="twitter:image"
          content={`${siteUrl}/img/icons/nok-social.jpg`}
        />
        <meta property="twitter:card" content="summary_large_image" />

        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" ></link>


      </Helmet>




      <Header />

      <div className="layout-content">
        {children}

      </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
