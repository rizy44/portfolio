import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function DevOpsProjects() {
  return (
    <section id="devops-projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-2">
            <Cloud className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <span className="font-mono text-sm text-cyan-600 dark:text-cyan-400">01</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            DevOps & Cloud Engineering
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            Infrastructure automation, security compliance platforms, and cloud-native
            deployment pipelines built on OpenStack with IaC best practices.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              skills={project.skills}
              images={project.images}
              githubUrl={project.githubUrl}
              reportLinks={project.reportLinks}
              highlights={project.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
