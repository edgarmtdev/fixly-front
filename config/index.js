let URL;

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  URL = "http://localhost:4000";
} else {
  URL = "http://localhost:4000";
}

export { URL };
