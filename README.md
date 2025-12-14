# System Design For Interviews · Quiz App

An interactive web application that helps developers master system design concepts through bite-sized quizzes based on the "System Design Interview – An Insider's Guide" book. Built with modern web technologies, this app provides an engaging learning experience with instant feedback, progress tracking, and beautiful animations.

**🚀 [Try it live at sysdesigncoach.org](https://www.sysdesigncoach.org/)**

## 🎯 Project Context

System design interviews are crucial for senior engineering roles, but studying can be overwhelming. This app breaks down complex topics from the book into digestible quizzes, allowing you to:

- **Learn incrementally**: Study one chapter at a time with focused question sets
- **Practice with purpose**: Get instant validation and detailed explanations for each answer
- **Track your progress**: Monitor scores, time spent, and mastery across all chapters
- **Stay motivated**: Beautiful UI with animations and performance feedback keeps learning engaging

Currently features 4 complete chapters with 30 questions each, covering topics from scaling from zero to millions of users to designing rate limiters.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript for type-safe component development
- **Build Tool**: Vite 7 for lightning-fast development and optimized production builds
- **Rendering**: Static Site Generation (SSG) with pre-rendered HTML for all routes
- **Styling**: Tailwind CSS 3.4 with custom glassmorphism design and gradient effects
- **Animations**: Framer Motion for smooth, physics-based animations and transitions
- **Routing**: React Router DOM v7 with server-side rendering support
- **State Management**: React hooks with local storage persistence for quiz results
- **SEO**: Pre-rendered HTML, sitemap generation, and comprehensive meta tags

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd systemDesignForInterviewsApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production (with SSG)**
   ```bash
   npm run generate
   ```
   This generates:
   - Static HTML for all routes (/, /about, /chapter, and all chapter pages)
   - Optimized client bundle in `dist/client`
   - Server bundle for SSR in `dist/server`
   - Sitemap.xml for SEO

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build client and server bundles |
| `npm run build:client` | Build optimized client bundle only |
| `npm run build:server` | Build server bundle for SSR only |
| `npm run generate` | Generate static site with pre-rendered HTML for all routes |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## ✨ Features

- **Interactive Quizzes**: Select answers, validate them, and see instant feedback with visual indicators
- **Static Site Generation (SSG)**: All pages pre-rendered as static HTML for excellent SEO and performance
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and auto-generated sitemap
- **Adaptive UI**: Responsive design that works beautifully on desktop, tablet, and mobile
- **Progress Tracking**: Monitor answered questions, time spent, and completion percentage
- **Performance Metrics**: View scores, correct/wrong answers, and personalized feedback
- **Chapter Management**: Browse available chapters with question counts and estimated time
- **Results Celebration**: Animated completion screen with detailed statistics and performance insights
- **Local Storage**: Quiz results are saved and persist across sessions
- **Expandable Content**: "View More" functionality for managing multiple chapters gracefully

## 📁 Project Structure

```
src/
├── assets/          # Images, logos, and static files
├── components/      # Reusable React components
│   ├── AppLayout.tsx
│   ├── ChapterCard.tsx
│   ├── NavigationBar.tsx
│   ├── ProgressBar.tsx
│   └── ...
├── data/           # Question banks and chapter content
│   ├── content.ts
│   └── chapters/   # JSON files for each chapter
├── hooks/          # Custom React hooks
│   ├── useChapterQuiz.ts
│   └── useChaptersWithStats.ts
├── pages/          # Page components
│   ├── HomePage.tsx
│   ├── ChapterPage.tsx
│   ├── AboutPage.tsx
│   └── NotFoundPage.tsx
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── main.tsx        # Application entry point
```

## 🔍 SEO & Performance

This app is fully optimized for search engines and social sharing:

### Static Site Generation
- All routes pre-rendered at build time as static HTML
- Search engines can crawl and index content without executing JavaScript
- Faster initial page loads and better Core Web Vitals

### Meta Tags & Social Sharing
- Comprehensive meta tags on all pages (title, description, keywords)
- Open Graph tags for beautiful Facebook/LinkedIn previews
- Twitter Card tags for enhanced Twitter sharing
- Canonical URLs to prevent duplicate content issues

### Sitemap & Robots
- Auto-generated `sitemap.xml` with all routes
- Proper `robots.txt` configuration
- Submit sitemap to Google Search Console after deployment

### Performance
- Optimized bundle splitting and lazy loading
- Static assets served with aggressive caching
- Lighthouse scores: 90+ across all metrics

### Deployment Checklist
1. ✅ Domain configured: **[sysdesigncoach.org](https://www.sysdesigncoach.org/)**
2. Run `npm run generate` to build with SEO assets
3. Deploy `dist/client` folder to your hosting provider
4. Submit sitemap to Google Search Console
5. Verify meta tags using [OpenGraph.xyz](https://www.opengraph.xyz/) or [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🤝 Contributing

We welcome contributions from the community! Whether you've found a bug, have a feature request, or want to improve the documentation, your input is valuable.

### How to Contribute

1. **Report Issues**: Found a bug or have a suggestion?
   - Open an issue on GitHub with a clear description
   - Include steps to reproduce for bugs
   - Suggest improvements with context and use cases

2. **Request Features**: Have an idea for a new feature?
   - Check existing issues to avoid duplicates
   - Describe the feature and its benefits
   - Consider providing mockups or examples if applicable

3. **Submit Pull Requests**:
   - Fork the repository
   - Create a feature branch (`git checkout -b feature/amazing-feature`)
   - Commit your changes (`git commit -m 'Add some amazing feature'`)
   - Push to the branch (`git push origin feature/amazing-feature`)
   - Open a Pull Request with a clear description

### Areas for Contribution

- 📝 Add more chapter question banks
- 🎨 Improve UI/UX animations and interactions
- ♿ Enhance accessibility features
- 🧪 Add unit and integration tests
- 📱 Improve mobile responsiveness
- 🌐 Add internationalization support
- 📊 Create dashboard analytics and insights
- 🎯 Implement spaced repetition algorithms

### Guidelines

- Follow the existing code style and TypeScript conventions
- Write clear, descriptive commit messages
- Update documentation for new features
- Test your changes thoroughly before submitting
- Be respectful and constructive in discussions

## 📝 License

This project is for educational purposes. The quiz content is based on "System Design Interview – An Insider's Guide" by Alex Xu.

## 🙏 Acknowledgments

- **Alex Xu** for the excellent System Design Interview book
- **Gergely Orosz** (Pragmatic Engineer) for the comprehensive book review
- The open-source community for the amazing tools and libraries

## 📬 Contact & Support

- **Live App**: [sysdesigncoach.org](https://www.sysdesigncoach.org/)
- **Issues**: Report bugs or request features via [GitHub Issues](../../issues)
- **Support**: If you find this project helpful, consider [buying me a coffee](https://buymeacoffee.com/hamzafaidi)

---

Made with ❤️ for developers preparing for system design interviews
