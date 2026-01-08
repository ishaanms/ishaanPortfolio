import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-warm-brown mb-4">
          About Me
        </h1>
        <p className="text-xl text-warm-grey mb-12">
          Background, philosophy, and what drives me
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-warm-tan/30 to-warm-bronze/30 rounded-2xl aspect-square flex items-center justify-center">
              <img 
                  src="/ishaan_about.jpg" 
                  alt="Ishaan Misra"
                  className="w-full h-full object-cover rounded-4xl"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(to bottom right, rgba(184, 145, 108, 0.3), rgba(139, 111, 71, 0.3))';
                    e.target.parentElement.style.display = 'flex';
                    e.target.parentElement.style.alignItems = 'center';
                    e.target.parentElement.style.justifyContent = 'center';
                    e.target.parentElement.innerHTML = '<span class="text-warm-grey text-lg">Your Photo Here</span>';
                  }}
                />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6 text-warm-grey leading-relaxed text-lg"
          >
            <p>
              I'm Ishaan Misra, an analyst at Axtria with a unique background that bridges 
              chemistry, technology, and business strategy. With an Integrated Dual Degree 
              (B.Tech. + M.Tech.) in Industrial Chemistry from IIT-BHU, I bring a scientific 
              lens to business problems.
            </p>

            <p>
              Currently based in Noida, India, I work at the intersection of data science 
              and pharmaceutical operations, helping clients make data-driven decisions that 
              drive measurable impact. My work focuses on translating complex analytical 
              insights into actionable business strategies.
            </p>

            <p>
              I'm drawn to consulting because I want to solve problems that impact many, 
              not just optimize algorithms. I'm fascinated by how data can generate meaningful 
              insights that translate into tangible solutions—decisions that reshape how 
              businesses operate and ultimately affect people's daily lives.
            </p>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-warm-brown mb-8">My Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-beige-50 rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-warm-bronze mb-3">
                Business-First Thinking
              </h3>
              <p className="text-warm-grey">
                Every technical solution must answer: "What's the business impact?" 
                I focus on outcomes, not just outputs.
              </p>
            </div>

            <div className="bg-beige-50 rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-warm-bronze mb-3">
                Analytical Rigor
              </h3>
              <p className="text-warm-grey">
                Grounded in scientific methodology, I approach problems systematically, 
                testing hypotheses and validating solutions with data.
              </p>
            </div>

            <div className="bg-beige-50 rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-warm-bronze mb-3">
                Collaborative Problem-Solving
              </h3>
              <p className="text-warm-grey">
                The best solutions emerge from diverse perspectives. I bridge technical 
                and business stakeholders to drive alignment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Beyond Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-warm-brown mb-8">Beyond Work</h2>
          
          <div className="bg-beige-50 rounded-xl p-8 shadow-lg">
            <p className="text-warm-grey leading-relaxed text-lg mb-6">
              Beyond analytics, I'm a classically trained tabla player (11 years), former 
              Taekwondo black belt (2nd Dan), and amateur photographer. I experiment with 
              Italian cuisine, follow Formula 1 religiously, and occasionally design graphics 
              for fun.
            </p>
            <p className="text-warm-grey leading-relaxed text-lg">
              These pursuits teach me discipline, creativity, and the importance of continuous 
              learning—skills that translate directly to consulting. Whether perfecting a pasta 
              recipe or analyzing race strategy, I approach challenges with the same rigor: 
              understand the fundamentals, practice deliberately, and always seek improvement.
            </p>
          </div>
        </motion.div>

        {/* Connect CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center py-12 bg-beige-50 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-warm-brown mb-4">
            Let's Connect
          </h3>
          <p className="text-warm-grey mb-6">
            Always open to interesting conversations and opportunities
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-warm-bronze text-beige-50 rounded-lg hover:bg-warm-tan transition-colors duration-300 text-lg font-semibold"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
      
      {/* <div className="mt-20">
      </div> */}
    </div>
        <Footer />
    </>
  );
};

export default About;