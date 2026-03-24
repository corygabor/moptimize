import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.moptimize.agency"

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/agent`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/subscriptions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ]

  // Dynamically add blog posts
  const postsDirectory = path.join(process.cwd(), "app/blog/posts")
  const fileNames = await fs.readdir(postsDirectory)
  const blogPages: MetadataRoute.Sitemap = await Promise.all(
    fileNames
      .filter((fileName) => fileName !== "hello-world.md")
      .map(async (fileName) => {
        const id = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = await fs.readFile(fullPath, "utf8")
        const { data } = matter(fileContents)
        return {
          url: `${baseUrl}/blog/${id}`,
          lastModified: data.date ? new Date(data.date) : new Date(),
          changeFrequency: "yearly" as const,
          priority: 0.5,
        }
      })
  )

  return [...staticPages, ...blogPages]
}
