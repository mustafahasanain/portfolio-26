import type { MetadataRoute } from "next";
import { siteUrl } from "@/i18n/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects"].flatMap((path) => ["", "/ar"].map((prefix) => ({
    url: new URL(`${prefix}${path}` || "/", siteUrl).toString(),
    alternates: { languages: {
      en: new URL(path || "/", siteUrl).toString(),
      ar: new URL(`/ar${path}`, siteUrl).toString(),
    } },
  })));
}
