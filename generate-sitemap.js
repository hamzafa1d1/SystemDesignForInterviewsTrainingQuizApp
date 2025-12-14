// Generate sitemap.xml for SEO
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const DOMAIN = 'https://www.sysdesigncoach.org'

// Get all chapter IDs from the data files
const chapterFiles = fs.readdirSync(path.join(__dirname, 'src/data/chapters'))
const chapterIds = chapterFiles
  .filter(file => file.endsWith('.json'))
  .map(file => file.replace('.json', ''))

// Define all routes
const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/chapter', priority: '0.9', changefreq: 'weekly' },
  ...chapterIds.map(id => ({ 
    path: `/chapter/${id}`, 
    priority: '0.9', 
    changefreq: 'weekly' 
  }))
]

const currentDate = new Date().toISOString().split('T')[0]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

// Write sitemap to public folder (will be copied to dist during build)
fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), sitemap)
console.log('✅ Sitemap generated at public/sitemap.xml')
console.log(`   Generated ${routes.length} URLs`)
