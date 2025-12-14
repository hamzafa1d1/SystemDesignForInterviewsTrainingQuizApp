// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/client` can be served as a static site.

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Get all chapter IDs from the data files
const chapterFiles = fs.readdirSync(toAbsolute('src/data/chapters'))
const chapterIds = chapterFiles
  .filter(file => file.endsWith('.json'))
  .map(file => file.replace('.json', ''))

// Define routes to pre-render
const routesToPrerender = [
  '/',
  '/about',
  '/chapter',
  ...chapterIds.map(id => `/chapter/${id}`)
]

;(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const [appHtml, preloadLinks] = await render(url, {})

    const html = template
      .replace(`<!--preload-links-->`, preloadLinks)
      .replace(`<!--app-html-->`, appHtml)

    const filePath = `dist/client${url === '/' ? '/index' : url}.html`
    const absolutePath = toAbsolute(filePath)
    
    // Create directory if it doesn't exist
    const dir = path.dirname(absolutePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(absolutePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
