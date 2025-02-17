import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

export interface PostData {
  id: string
  title: string
  date: string
  contentHtml: string
}

export async function getPostData(id: string, content: string): Promise<PostData> {
  const matterResult = matter(content)
  const processedContent = await remark().use(html).use(remarkGfm).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}

