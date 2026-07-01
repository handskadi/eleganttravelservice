import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/dashboard/", "/admin/", "/api/"] },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: "https://www.eleganttravelservice.com/sitemap.xml",
    host: "https://www.eleganttravelservice.com",
  };
}
