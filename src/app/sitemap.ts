import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alibenjannet.vercel.app";
  const now = new Date();
  const sections = ["", "#about", "#skills", "#experiences", "#projects", "#contact"];
  return sections.map((section) => ({
    url: `${base}/${section}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.7,
  }));
}
