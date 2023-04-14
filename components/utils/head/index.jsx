import Head from "next/head";

export const HeadComponent = ({ title }) => (
  <Head>
    <link rel="icon" type="image/ico" sizes="32x32" href="/favicon-16x16.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <meta
      name="description"
      content="Ecommerce to Fixly Store shop products for
           projects of electronic"
    />
    <title>{title}</title>
  </Head>
);
