import Head from "next/head";
import React from "react";

export const HeadComponent = ({ title }) => (
  <Head>
    <link rel="icon" type="image/ico" sizes="32x32" href="/favicon-16x16.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <title>{title}</title>
  </Head>
);
