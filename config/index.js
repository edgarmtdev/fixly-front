/* eslint-disable no-undef */
let URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_URL
    : process.env.NEXT_PUBLIC_URL;

export { URL };
