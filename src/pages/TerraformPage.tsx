import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { QuizSectionCard } from '../components/QuizSectionCard'
import { terraformSections } from '../data/content'
import { useChaptersWithStats } from '../hooks/useChaptersWithStats'

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function TerraformPage() {
  // Reuse the same hook for tracking stats (it works with any QuizSection)
  const sectionsWithStats = useChaptersWithStats(terraformSections)
  const availableSections = sectionsWithStats.filter((section) => section.questionCount > 0)

  return (
    <div className="space-y-12">
      <motion.section
        className="glass-panel p-8"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Terraform Associate 003</p>
          <h1 className="font-display text-4xl leading-tight text-foam sm:text-5xl">
            Master Terraform certification through practice quizzes
          </h1>

          <p className="text-lg text-white/70">
            Prepare for the HashiCorp Terraform Associate 003 certification exam with comprehensive quizzes covering all exam objectives.
          </p>
        </div>
      </motion.section>

      {availableSections.length > 0 ? (
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Exam Sections</p>
            <h2 className="font-display text-3xl text-foam">Pick a topic and start quizzing</h2>
            <p className="text-white/60">
              Track your progress, time spent, and scores as you work through each exam objective.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {availableSections.map((section) => (
              <Link key={section.id} to={`/terraform/${section.id}`} className="no-underline">
                <QuizSectionCard section={section} categoryLabel="Exam Section" />
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <motion.section
          className="glass-panel p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
              <span role="img" aria-label="construction">🚧</span>
              Coming Soon
            </div>
            
            <h2 className="font-display text-3xl text-foam">
              Content in Development
            </h2>
            
            <p className="text-white/70">
              We're currently building comprehensive quiz content for the Terraform Associate 003 certification. 
              This section will include questions covering:
            </p>

            <div className="grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-lg bg-white/5 p-4">
                <h3 className="font-semibold text-mint mb-2">Infrastructure as Code</h3>
                <p className="text-sm text-white/60">Core concepts and benefits of IaC</p>
              </div>
              
              <div className="rounded-lg bg-white/5 p-4">
                <h3 className="font-semibold text-mint mb-2">Terraform Basics</h3>
                <p className="text-sm text-white/60">Providers, resources, and data sources</p>
              </div>
              
              <div className="rounded-lg bg-white/5 p-4">
                <h3 className="font-semibold text-mint mb-2">State Management</h3>
                <p className="text-sm text-white/60">Remote state, locking, and backends</p>
              </div>
              
              <div className="rounded-lg bg-white/5 p-4">
                <h3 className="font-semibold text-mint mb-2">Terraform Cloud & Enterprise</h3>
                <p className="text-sm text-white/60">Collaboration and workflow features</p>
              </div>
            </div>

            <p className="text-sm text-white/50 pt-4">
              Check back soon for quiz content!
            </p>
          </div>
        </motion.section>
      )}
    </div>
  )
}
