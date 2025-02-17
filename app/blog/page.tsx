import Link from "next/link";
import { SparklesCore } from "@/components/sparkles";
import Navbar from "@/components/navbar";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMetadata {
  id: string;
  title: string;
  date: string;
}

async function getSortedPostsData(): Promise<PostMetadata[]> {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts");
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as { date: string; title: string }),
      };
    })
  );

  return allPostsData
    .filter((post) => post.id !== "hello-world")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-white">
      <div className="absolu
