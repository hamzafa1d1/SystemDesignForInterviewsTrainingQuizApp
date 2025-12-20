import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function HomePage() {
  return (
    <div className="space-y-12">
      <motion.section
        className="glass-panel p-8"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Welcome</p>
          <h1 className="font-display text-4xl leading-tight text-foam sm:text-5xl">
            Master Your Technical Skills Through Practice
          </h1>
          <p className="text-lg text-white/70">
            Choose your learning path and start practicing with comprehensive quizzes designed to help you succeed.
          </p>
        </div>
      </motion.section>

      <section className="space-y-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Quiz Categories</p>
          <h2 className="font-display text-3xl text-foam mt-2">Choose Your Path</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* System Design Card */}
          <Link to="/system-design" className="no-underline">
            <motion.article
              className="glass-panel group relative h-full overflow-hidden p-8 transition-all hover:border-mint/40 hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-transparent to-foam/5 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-mint/10 p-3 ring-2 ring-mint/20 transition-all group-hover:bg-mint/20 group-hover:ring-mint/40">
                    <svg className="h-8 w-8 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-foam transition-colors group-hover:text-mint">
                    System Design Interview
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed">
                  Master system design concepts through chapter-by-chapter quizzes based on Alex Xu's comprehensive guide. 
                  Perfect for preparing for technical interviews at top tech companies.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    Multiple Chapters
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    Progress Tracking
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    Interview Prep
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-4 text-mint font-semibold">
                  <span>Start Learning</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          </Link>

          {/* Terraform Card */}
          <Link to="/terraform" className="no-underline">
            <motion.article
              className="glass-panel group relative h-full overflow-hidden p-8 transition-all hover:border-mint/40 hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-transparent to-foam/5 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-mint/10 p-3 ring-2 ring-mint/20 transition-all group-hover:bg-mint/20 group-hover:ring-mint/40">
                    <svg className="h-8 w-8 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-foam transition-colors group-hover:text-mint">
                    Terraform Associate 003
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed">
                  Prepare for the HashiCorp Terraform Associate 003 certification with comprehensive practice quizzes 
                  covering all exam objectives and real-world scenarios.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    Certification Prep
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    Infrastructure as Code
                  </span>
                  <span className="rounded-full bg-mint/20 px-3 py-1 text-xs text-mint">
                    Coming Soon
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-4 text-mint font-semibold">
                  <span>Explore Content</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      <motion.section
        className="glass-panel p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="font-display text-2xl text-foam">Why Practice With Us?</h2>
          <div className="grid gap-6 sm:grid-cols-3 text-left">
            <div>
              <div className="text-mint text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-foam mb-1">Track Progress</h3>
              <p className="text-sm text-white/60">Monitor your scores and time spent on each topic</p>
            </div>
            <div>
              <div className="text-mint text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-foam mb-1">Focused Learning</h3>
              <p className="text-sm text-white/60">Bite-sized quizzes designed for effective learning</p>
            </div>
            <div>
              <div className="text-mint text-3xl mb-2">✅</div>
              <h3 className="font-semibold text-foam mb-1">Immediate Feedback</h3>
              <p className="text-sm text-white/60">Get instant results and understand your mistakes</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
