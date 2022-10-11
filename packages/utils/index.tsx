const productionUrl = "https://www.npm-package-size.com";

export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return productionUrl;
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    return `https://${process.env.VERCEL_URL}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;

  return "";
}

export function getProductionBaseUrl() {
  return productionUrl;
}
