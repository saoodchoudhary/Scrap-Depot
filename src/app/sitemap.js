import { site } from "@/data/site";
import { services } from "@/data/services";
import { posts, policies } from "@/data/content";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/materials", priority: 0.9, freq: "weekly" },
    { path: "/process", priority: 0.7, freq: "monthly" },
    { path: "/sustainability", priority: 0.7, freq: "monthly" },
    { path: "/infrastructure", priority: 0.7, freq: "monthly" },
    { path: "/clients", priority: 0.6, freq: "monthly" },
    { path: "/resources", priority: 0.7, freq: "weekly" },
    { path: "/careers", priority: 0.6, freq: "weekly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/quote", priority: 0.9, freq: "monthly" },
    { path: "/policies", priority: 0.4, freq: "yearly" },
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${site.url}/resources/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const policyRoutes = policies.map((p) => ({
    url: `${site.url}/policies/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes, ...policyRoutes];
}
