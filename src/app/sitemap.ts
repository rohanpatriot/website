import type { MetadataRoute } from "next";
import { getAllEssays } from "@/lib/essays";

export default function sitemap(): MetadataRoute.Sitemap {
  const essays = getAllEssays();

  const essayEntries: MetadataRoute.Sitemap = essays.map((essay) => ({
    url: `https://huntsyea.com/essays/${essay.slug}`,
    lastModified: new Date(essay.date + "T00:00:00"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://huntsyea.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://huntsyea.com/about",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://huntsyea.com/essays",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://huntsyea.com/projects",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://huntsyea.com/tools",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...essayEntries,
  ];
}
