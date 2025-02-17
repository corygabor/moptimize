import Link from "next/link"
import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

export interface PostMetadata {
  id: string
  title: string
  date: string
}

async function getSortedPostsData(): Promise<PostMetadata[]> {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts")
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, "utf8")
      const matterResult = matter(fileContents)

      return {
        id,
        ...(matterResult.data as { date: string; title: string }),
      }
    }),
  )

  // Filter out the "Hello World" post and sort the remaining posts
  return allPostsData.filter((post) => post.id !== "hello-world").sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData()

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8A7FFF"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <section className="py-10">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-center text-white mb-8">Blog</h1>
            <div className="max-w-4xl mx-auto">
              {allPostsData.map(({ id, date, title }) => (
                <div key={id} className="mb-8 p-6 backdrop-blur-sm bg-black/20 rounded-lg border border-white/10 text-white">
                  <Link href={`/blog/${id}`}>
                    <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
                  </Link>
                  <p className="text-gray-400">{date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
