import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Le site tient sur une seule page : les ancres (#about…) ne sont pas des URL
// distinctes pour les moteurs de recherche, on ne déclare donc que la racine.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
