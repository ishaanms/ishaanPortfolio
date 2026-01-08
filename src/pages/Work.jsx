import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';

const Work = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const currentExperience = {
    company: "Axtria",
    role: "Analyst",
    period: "2025 - Present",
    location: "Noida, India",
    logo: "/logos/axtria.png",
    description: "Working on pharma supply chain optimization and data analytics projects, translating complex data into actionable business insights for pharmaceutical clients.",
    achievements: [
      "Supporting pharma clients in supply chain optimization and data analytics",
      "Developing data-driven insights for business decision-making",
      "Collaborating with cross-functional teams on client engagements",
      "Building analytical models for pharmaceutical operations"
    ]
  };

  const previousExperience = [
    {
      company: "St. Jude Children's Research Hospital",
      role: "Khorana Program Summer Intern",
      period: "May 2024 - July 2024",
      location: "Memphis, TN, USA",
      logo: "/logos/StJude.png",
      description: "Conducted computational drug discovery research focused on DNA-nucleosome complexes and genetic disease analysis.",
      achievements: [
        "Executed 100+ molecular docking simulations, identifying 5 drug candidates with 70% improved binding affinity",
        "Developed protocols to isolate GAA repeats in FXN gene linked to Friedreich's Ataxia with 90% efficiency",
        "Analyzed 50K+ patient records to correlate symptoms with demographic and geographic factors, identifying disease hotspots"
      ]
    },
    {
      company: "Pawzzitive Welfare Foundation",
      role: "Business Development Intern",
      period: "Jan 2024 - May 2024",
      location: "Gurgaon, India (Remote)",
      logo: "/logos/PAWWZ.png",
      description: "Led fundraising and digital outreach initiatives for animal welfare campaigns.",
      achievements: [
        "Raised 10,000+ donations through strategic campaign management",
        "Increased digital reach by 50% through collaborative marketing efforts",
        "Coordinated with cross-functional intern teams to optimize donor engagement"
      ]
    },
    {
      company: "Technische Universität Darmstadt",
      role: "DAAD-WISE Summer Intern",
      period: "May 2023 - July 2023",
      location: "Darmstadt, Germany",
      logo: "/logos/TUD.png",
      description: "Developed computational models to analyze structural and dynamic properties of hydrocarbon molecules.",
      achievements: [
        "Built programs for molecular dynamics and coarse-grained modeling of hydrocarbon structures",
        "Collaborated with research team on product reviews and methodology improvements",
        "Applied computational chemistry techniques to solve complex molecular behavior problems"
      ]
    },
    {
      company: "Defence Research & Development Organisation (DRDO)",
      role: "Research Intern",
      period: "May 2022 - Aug 2022",
      location: "Pune, India",
      logo: "/logos/DRDO.png",
      description: "Researched physical and chemical properties of advanced composite materials for defense applications.",
      achievements: [
        "Analyzed carbon fiber reinforced epoxy resin interleaved composites for structural applications",
        "Collaborated with cross-functional teams of researchers and scientists on material synthesis",
        "Contributed to development of high-quality epoxy resins with improved properties"
      ]
    },
    {
      company: "Oil and Natural Gas Corporation (ONGC)",
      role: "Geochemist Intern",
      period: "May 2022 - Aug 2022",
      location: "India (Remote)",
      logo: "/logos/ONGC.png",
      description: "Analyzed trace elemental anomalies in geological samples using advanced instrumentation.",
      achievements: [
        "Worked on inorganic vertical of geochemistry, focusing on trace element detection",
        "Collaborated with multidisciplinary teams to produce comprehensive analytical reports",
        "Gained expertise in instrumentation for elemental anomaly detection"
      ]
    },
    {
      company: "Exposys Data Labs",
      role: "Full Stack Developer Intern",
      period: "May 2021 - July 2021",
      location: "Bengaluru, India (Remote)",
      logo: "/logos/Exposys.png",
      description: "Developed and maintained web applications using modern JavaScript frameworks.",
      achievements: [
        "Built web applications using React.js and SocketIO for real-time functionality",
        "Ensured cross-browser compatibility and responsive design implementation",
        "Participated in code reviews and collaborated with designers and product managers"
      ]
    },
    {
      company: "IIT (BHU) Varanasi",
      role: "Student Researcher",
      period: "July 2021 - Apr 2022",
      location: "Varanasi, India",
      logo: "/logos/IIT.png",
      description: "Conducted research on applications of differential equations and chaos theory in chemistry.",
      achievements: [
        "Simulated chemical systems using Lotka-Volterra equations and iodine clock reactions",
        "Explored bifurcation diagrams and logistic maps for chemical applications",
        "Published research article in peer-reviewed journal (DOI: 10.1007/s43538-022-00081-6)"
      ]
    }
  ];

  const education = [
    {
      degree: "Integrated Dual Degree (B.Tech. + M.Tech.)",
      major: "Industrial Chemistry",
      institution: "Indian Institute of Technology (BHU), Varanasi",
      logo: "/logos/IIT.png",
      period: "2020 - 2025",
      details: "CGPA: 9.38/10.0"
    },
    {
      degree: "Class XII (Higher Secondary)",
      major: "Science Stream (PCM/PCB)",
      institution: "Amrita Vidyalayam",
      logo: "/logos/Amrita.png",
      period: "2018 - 2020",
      details: "Percentage: 95.2%"
    },
    {
      degree: "Class X (Secondary)",
      major: "",
      institution: "Amrita Vidyalayam",
      logo: "/logos/Amrita.png",
      period: "2018",
      details: "Percentage: 97%"
    }
  ];

  const capabilities = [
    {
      category: "Strategic & Analytical",
      skills: ["Market Analysis", "Strategic Planning", "Business Case Development", "Financial Modeling", "Data-Driven Decision Making"]
    },
    {
      category: "Technical & Data Science",
      skills: ["Machine Learning", "Neural Networks", "Ensemble Methods", "Statistical Analysis"]
    },
    {
      category: "Domain Expertise",
      skills: ["Healthcare Analytics", "Pharmaceutical R&D", "Incentive Compensation Optimization"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Python", "React.js", "Next.js", "MongoDB", "TypeScript", "Tableau", "Power BI", "MySQL", "Snowflake", "Databricks", "Informatica IDMC"]
    },
    {
      category: "Research & Scientific Computing",
      skills: ["Molecular Docking", "Coarse-Grained Modeling", "Computational Simulations", "Molecular Dynamics", "Computational Chemistry", "Drug Discovery"]
    },
    {
      category: "Languages",
      skills: ["English (Fluent)", "Hindi (Native)", "Sanskrit (Basic)"]
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-warm-brown mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-warm-grey mb-12">
            Professional background and capabilities
          </p>

          {/* Current Experience */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-warm-brown mb-8">Current Role</h2>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-beige-50 rounded-xl p-8 shadow-lg"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                    <img 
                      src={currentExperience.logo} 
                      alt={`${currentExperience.company} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-warm-bronze text-xl font-bold">${currentExperience.company.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-warm-bronze mb-1">
                      {currentExperience.role}
                    </h3>
                    <p className="text-xl text-warm-brown font-semibold">
                      {currentExperience.company}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-warm-grey">{currentExperience.period}</p>
                  <p className="text-warm-grey text-sm">{currentExperience.location}</p>
                </div>
              </div>

              <p className="text-warm-grey leading-relaxed mb-6">
                {currentExperience.description}
              </p>

              <div>
                <h4 className="font-semibold text-warm-brown mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2">
                  {currentExperience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-warm-tan mt-1">▸</span>
                      <span className="text-warm-grey">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Previous Experience */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-warm-brown mb-8">Previous Experience</h2>
            
            <div className="space-y-6">
              {previousExperience.slice(0, showAllExperience ? previousExperience.length : 3).map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (idx * 0.05) }}
                  className="bg-beige-50 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<span class="text-warm-bronze text-xl font-bold">${exp.company.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-warm-bronze mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-warm-brown font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-warm-grey">{exp.period}</p>
                      <p className="text-warm-grey text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-warm-grey leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-warm-brown mb-3">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-warm-tan mt-1">▸</span>
                          <span className="text-warm-grey">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {previousExperience.length > 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-8"
              >
                <button
                  onClick={() => setShowAllExperience(!showAllExperience)}
                  className="px-8 py-3 border-2 border-warm-bronze text-warm-bronze rounded-lg hover:bg-warm-bronze hover:text-beige-50 transition-all duration-300 font-semibold"
                >
                  {showAllExperience ? 'Show Less' : `Show ${previousExperience.length - 3} More Experiences`}
                </button>
              </motion.div>
            )}
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-warm-brown mb-8">Education</h2>
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
                  className="bg-beige-50 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<span class="text-warm-bronze text-xl font-bold">${edu.institution.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-warm-bronze mb-1">
                          {edu.degree}
                        </h3>
                        {edu.major && (
                          <p className="text-xl text-warm-brown font-semibold mb-1">
                            {edu.major}
                          </p>
                        )}
                        <p className="text-warm-grey mb-2">
                          {edu.institution}
                        </p>
                        {edu.details && (
                          <p className="text-warm-grey text-sm">
                            {edu.details}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-warm-grey">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-warm-brown mb-8">Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-beige-50 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-bold text-warm-bronze mb-4">
                    {cap.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cap.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-warm-tan/20 text-warm-brown text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center py-12 bg-beige-50 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-warm-brown mb-4">
              Interested in working together?
            </h3>
            <p className="text-warm-grey mb-6">
              Download my full resume for more details
            </p>
            <a
              href="/Ishaan Misra_Resume.pdf"
              download
              className="inline-block px-10 py-4 bg-warm-bronze text-beige-50 rounded-lg hover:bg-warm-tan transition-colors duration-300 text-lg font-semibold"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Work;