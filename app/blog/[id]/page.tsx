import { getPostData } from "@/lib/blog"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { promises as fs } from "fs"
import path from "path"

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts")
  const fileNames = await fs.readdir(postsDirectory)
  return fileNames
    .filter((fileName) => fileName !== "hello-world.md")
    .map((fileName) => ({
      id: fileName.replace(/\.md$/, ""),
    }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts")
  const fullPath = path.join(postsDirectory, `${params.id}.md`)
  const fileContents = await fs.readFile(fullPath, "utf8")
  const postData = await getPostData(params.id, fileContents)

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
        <article className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-8 border border-white/10">
              <h1 className="text-3xl font-bold text-white mb-4">{postData.title}</h1>
              <div className="text-gray-400 mb-8">{postData.date}</div>
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

