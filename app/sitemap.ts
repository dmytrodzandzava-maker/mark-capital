import type { MetadataRoute } from "next";
import { portfolioHighlights, verticals } from "@/lib/data";

const siteUrl = "https://thisismark.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...verticals.map((v) => ({
      url: `${siteUrl}/verticals/${v.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...portfolioHighlights.map((p) => ({
      url: `${siteUrl}/portfolio/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
