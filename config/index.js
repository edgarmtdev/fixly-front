let URL;

if (process.env.NODE_ENV === "production") {
  URL = "https://ecommerce-api-production-b278.up.railway.app/";
} else {
  URL = "http://localhost:4000";
}

export { URL };
