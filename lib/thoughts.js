// Copied from https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.js
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const thoughtsDirectory = join(process.cwd(), 'pages', 'thoughts')

export function getThoughtSlugs () {
  return fs.readdirSync(thoughtsDirectory).filter((slug) => !slug.startsWith('.'))
}

export function getThoughtBySlug (slug, fields = []) {
  const pathToThought = join(thoughtsDirectory, slug)
  const files = fs.readdirSync(pathToThought)
  const indexFile = files.find(
    (file) => file.substr(0, file.lastIndexOf('.')) === 'index'
  )

  const fullPath = join(pathToThought, indexFile)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data /* content */ } = matter(fileContents)

  data.slug = slug

  return data
}

export function getAllThoughts (fields = []) {
  const slugs = getThoughtSlugs()
  const thoughts = slugs
    .map((slug) => getThoughtBySlug(slug, fields))
    // sort thoughts by date in descending order
    .sort((thought1, thought2) => (thought1.date > thought2.date ? '-1' : '1'))
  return thoughts
}
