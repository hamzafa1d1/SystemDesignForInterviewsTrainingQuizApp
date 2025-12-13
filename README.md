# System Design For Interviews · Quiz App

An interactive web application that helps developers master system design concepts through bite-sized quizzes based on the "System Design Interview – An Insider's Guide" book. Built with modern web technologies, this app provides an engaging learning experience with instant feedback, progress tracking, and beautiful animations.

## 🎯 Project Context

System design interviews are crucial for senior engineering roles, but studying can be overwhelming. This app breaks down complex topics from the book into digestible quizzes, allowing you to:

- **Learn incrementally**: Study one chapter at a time with focused question sets
- **Practice with purpose**: Get instant validation and detailed explanations for each answer
- **Track your progress**: Monitor scores, time spent, and mastery across all chapters
- **Stay motivated**: Beautiful UI with animations and performance feedback keeps learning engaging

Currently features 4 complete chapters with 30 questions each, covering topics from scaling from zero to millions of users to designing rate limiters.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript for type-safe component development
- **Build Tool**: Vite 7 for lightning-fast development and optimized production builds
- **Styling**: Tailwind CSS 3.4 with custom glassmorphism design and gradient effects
- **Animations**: Framer Motion for smooth, physics-based animations and transitions
- **Routing**: React Router DOM for seamless navigation between pages
- **State Management**: React hooks with local storage persistence for quiz results

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

4. **Build for production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## ✨ Features

- **Interactive Quizzes**: Select answers, validate them, and see instant feedback with visual indicators
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

- **Issues**: Report bugs or request features via [GitHub Issues](../../issues)
- **Support**: If you find this project helpful, consider [buying me a coffee](https://buymeacoffee.com/hamzafaidi)

---

Made with ❤️ for developers preparing for system design interviews
