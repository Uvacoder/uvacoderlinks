import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/tree.svg" width="24" height="24" alt="" />
      <span style={{ marginLeft: ".4em" }}>learn.mueezkhan.com</span>
    </>
  ),
  // Banner
  // banner: {
  //   key: "construction-banner",
  //   text: <p>🚧 learn.mueezkhan.com is currently under construction!</p>,
  // },
  // Link Icons
  project: {
    link: "https://github.com/rzmk/learn.mueezkhan.com",
  },
  chat: {
    link: "https://discord.com/servers/learn-with-mueez-1068446943736516678",
  },
  docsRepositoryBase: "https://github.com/rzmk/learn.mueezkhan.com",
  footer: {
    text: "Learning resources compiled by Mueez Khan",
  },
  // SEO setup
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s - learn.mueezkhan.com",
      };
    } else {
      return {
        title: "learn.mueezkhan.com",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta
          name="description"
          content={
            frontMatter.description ||
            "Learning resources compiled by Mueez Khan."
          }
        />
        <meta
          property="og:url"
          content={`https://learn.mueezkhan.com${asPath}`}
        />
        <meta
          property="og:title"
          content={frontMatter.title || "learn.mueezkhan.com"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Learning resources compiled by Mueez Khan"
          }
        />
      </>
    );
  },
};

export default config;
