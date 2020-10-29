// Copied from https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.js
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), 'pages', 'projects')

export function getProjectSlugs () {
  return fs.readdirSync(projectsDirectory).filter((slug) => !slug.startsWith('.'))
}

export function getProjectBySlug (slug, fields = []) {
  const pathToProject = join(projectsDirectory, slug)
  const files = fs.readdirSync(pathToProject)
  const indexFile = files.find(
    (file) => file.substr(0, file.lastIndexOf('.')) === 'index'
  )

  const fullPath = join(pathToProject, indexFile)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data /* content */ } = matter(fileContents)

  data.slug = slug

  return data
}

export function getAllProjects (fields = []) {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? '-1' : '1'))
  return projects
}
