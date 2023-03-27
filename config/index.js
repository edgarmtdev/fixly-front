let URL;

if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
  URL = "http://localhost:4000";
} else {
  URL = "http://localhost:4000";
}

export { URL };
