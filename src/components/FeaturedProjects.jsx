import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4">
          Featured Work
        </h2>
        <p className="text-xl text-warm-grey mb-16">
          Strategic analysis, healthcare innovation, and data-driven solutions
        </p>
      </motion.div>

      <div className="space-y-32">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Project Number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-warm-tan"></div>
              <span className="text-warm-grey font-mono text-sm">
                {String(index + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
              </span>
            </div>

            {/* Project Card */}
            <div className="bg-beige-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Placeholder Image */}
              <div className="w-full h-64 md:h-106 bg-gradient-to-br from-warm-tan/20 to-warm-bronze/20 flex items-center justify-center">
                {project.featuredImage ? (
                  <img 
                    src={project.featuredImage} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-warm-grey text-lg">
                      {project.title} Visual
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <span className="text-sm text-warm-tan font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-bold text-warm-brown mt-3 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-lg text-warm-grey mb-6">
                  {project.subtitle}
                </p>

                <p className="text-warm-grey leading-relaxed mb-8">
                  {project.challenge}
                </p>

                <Link
                  to={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-warm-bronze hover:text-warm-tan transition-colors duration-300 font-semibold"
                >
                  Click to View
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link
          to="/projects"
          className="inline-block px-10 py-4 border-2 border-warm-bronze text-warm-bronze rounded-lg hover:bg-warm-bronze hover:text-beige-50 transition-all duration-300 text-lg font-semibold"
        >
          View All Projects →
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;