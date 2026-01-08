import { motion } from 'framer-motion';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
    <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-warm-brown mb-4 text-center">
          Let's Connect
        </h1>
        <p className="text-xl text-warm-grey mb-16 text-center">
          I'm always open to interesting conversations and opportunities
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.a
            href="mailto:ishaanmsr@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-beige-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-xl font-bold text-warm-brown mb-2">Email</h3>
            <p className="text-warm-grey">ishaanmsr@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://github.com/ishaanms"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-beige-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              💻
            </div>
            <h3 className="text-xl font-bold text-warm-brown mb-2">GitHub</h3>
            <p className="text-warm-grey">@ishaanms</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ishaan-misra-0202/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-beige-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              💼
            </div>
            <h3 className="text-xl font-bold text-warm-brown mb-2">LinkedIn</h3>
            <p className="text-warm-grey">Connect with me</p>
          </motion.a>
        </div>

        {/* Simple Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-beige-50 rounded-xl p-12 text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold text-warm-brown mb-4">
            Looking for Consulting Opportunities
          </h2>
          <p className="text-lg text-warm-grey mb-8 max-w-2xl mx-auto">
            I'm exploring my next opportunity in consulting and analytics—ideally where I can combine technical depth with strategic thinking. 
            If you're hiring, have an interesting project, or just want to talk shop about data and strategy, 
            I'd love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ishaanmsr@gmail.com"
              className="px-8 py-3 bg-warm-bronze text-beige-50 rounded-lg hover:bg-warm-tan transition-colors duration-300 font-semibold"
            >
              Send Email
            </a>
            <a
              href="/Ishaan_Misra_Resume.pdf"
              download
              className="px-8 py-3 border-2 border-warm-bronze text-warm-bronze rounded-lg hover:bg-warm-bronze hover:text-beige-50 transition-all duration-300 font-semibold"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* <div className="mt-20">
      </div> */}
    </div>
        <Footer />
    </>
  );
}

export default Contact;