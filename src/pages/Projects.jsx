import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projectsData';
import Footer from '../components/Footer';

const Projects = () => {
  const categories = ['All', 'Strategic Analysis', 'Healthcare & Life Sciences', 'Technology & Digital'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <>
      <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-warm-brown mb-4">
            Projects
          </h1>
          <p className="text-xl text-warm-grey mb-12">
            Case studies and technical work across strategy, healthcare, and technology
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-warm-bronze text-beige-50'
                    : 'bg-beige-50 text-warm-grey hover:bg-warm-tan/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Accordion */}
          <div className="space-y-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-beige-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Accordion Header - Always Visible */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-warm-tan/5 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Number Badge */}
                    <div className="w-12 h-12 flex-shrink-0 bg-warm-bronze/10 rounded-lg flex items-center justify-center">
                      <span className="text-warm-bronze font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Project Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs text-warm-tan font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-warm-brown">
                        {project.title}
                      </h2>
                      <p className="text-warm-grey text-sm md:text-base mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className={`w-6 h-6 text-warm-bronze transition-transform duration-300 ${
                        expandedProject === project.id ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content - Expandable */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-warm-tan/20">
                        {/* Project Details */}
                        <div className="space-y-4 mb-6">
                          <div>
                            <h3 className="font-semibold text-warm-brown mb-2 text-sm uppercase tracking-wider">
                              Challenge
                            </h3>
                            <p className="text-warm-grey leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-warm-brown mb-2 text-sm uppercase tracking-wider">
                              Approach
                            </h3>
                            <p className="text-warm-grey leading-relaxed">
                              {project.approach}
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-warm-brown mb-2 text-sm uppercase tracking-wider">
                              Business Impact
                            </h3>
                            <ul className="space-y-2">
                              {project.impact.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-warm-grey">
                                  <span className="text-warm-tan mt-1">▸</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-4">
                          <h3 className="font-semibold text-warm-brown mb-3 text-xs uppercase tracking-wider">
                            Skills & Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map(skill => (
                              <span 
                                key={skill}
                                className="px-3 py-1.5 bg-warm-tan/20 text-warm-bronze text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        {(project.link || project.caseStudyLink) && (
                          <div className="flex flex-wrap gap-3 pt-4 border-t border-warm-tan/20">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-warm-bronze hover:text-warm-tan transition-colors text-sm font-semibold"
                              >
                                <span>Click to View</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}

                            {project.caseStudyLink && (
                              <a
                                href={project.caseStudyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-warm-bronze text-beige-50 px-4 py-2 rounded-lg hover:bg-warm-tan transition-colors text-sm font-semibold"
                              >
                                <span>View Case Study</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
