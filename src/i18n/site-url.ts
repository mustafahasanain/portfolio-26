const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = new URL(
  configuredUrl ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
);
