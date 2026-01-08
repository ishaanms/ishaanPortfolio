import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const greetings = [
    'नमस्ते',      // Namaste (Hindi)
    'Hola',        // Spanish
    'Hello',       // English
    'Bonjour',     // French
    '你好',        // Chinese
    'こんにちは',   // Japanese
    'مرحبا',       // Arabic
    'Привет',      // Russian
    'Ciao',        // Italian
    '안녕하세요'    // Korean
  ];
  
  // Initialize state based on sessionStorage IMMEDIATELY
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showMain, setShowMain] = useState(() => {
    // Check if animation already played THIS SESSION
    return sessionStorage.getItem('heroAnimationPlayed') === 'true';
  });

  useEffect(() => {
    // If already played, don't run animation
    if (sessionStorage.getItem('heroAnimationPlayed') === 'true') {
      return;
    }

    // Lock scroll during animation
    document.body.style.overflow = 'hidden';

    // Play the animation
    if (currentGreeting < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentGreeting(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowMain(true);
        // Mark animation as played
        sessionStorage.setItem('heroAnimationPlayed', 'true');
        // Unlock scroll when animation finishes
        document.body.style.overflow = 'unset';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentGreeting, greetings.length]);

  // Cleanup: ensure scroll is unlocked if component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-24 md:pt-0">
      <div className="max-w-7xl w-full">
        <AnimatePresence mode="wait">
          {!showMain ? (
            <motion.div
              key="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h1 
                className="text-6xl md:text-8xl text-warm-bronze"
                style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 600 }}
              >
                {greetings[currentGreeting]}
              </h1>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/ishaan-photo2.jpg" 
                    alt="Ishaan Misra" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <h1 
                  className="text-6xl md:text-7xl lg:text-8xl text-warm-bronze mb-3"
                  style={{ fontFamily: '"Great Vibes", cursive' }}
                >
                  Ishaan Misra
                </h1>
                <p className="text-2xl md:text-2xl text-warm-ngrey mb-8 mt-3 font-medium">
                  Analyst | Strategy, Data & Business Insights
                </p>
                <p className="text-xl md:text-2xl text-warm-grey mb-8 font-medium">
                  Turning data into insights and decisions that create real-world impact.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="px-8 py-3 bg-warm-bronze text-beige-50 rounded-lg hover:bg-warm-tan transition-colors duration-300 font-semibold"
                  >
                    View Projects
                  </a>
                  <a
                    href="/Ishaan Misra_Resume.pdf"
                    download
                    className="px-8 py-3 border-2 border-warm-bronze text-warm-bronze rounded-lg hover:bg-warm-bronze hover:text-beige-50 transition-all duration-300 font-semibold"
                  >
                    Download Resume
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;