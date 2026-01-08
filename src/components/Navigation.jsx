import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'work', label: 'Work', path: '/work' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const path = location.pathname;
    const active = navItems.find(item => item.path === path);
    if (active) setActiveSection(active.id);
  }, [location]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Logo - Top Left with Scroll Fade */}
      <Link 
        to="/"
        className={`fixed top-4 left-4 md:top-6 md:left-6 z-50 text-3xl md:text-4xl lg:text-5xl text-warm-bronze hover:text-warm-tan transition-all duration-10 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ fontFamily: '"Great Vibes", cursive' }}
        onClick={() => setActiveSection('home')}
      >
        Ishaan
      </Link>

      {/* Desktop Navigation - Side Dots with Hover Labels */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group relative"
              onClick={() => setActiveSection(item.id)}
            >
              {/* Dot */}
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-warm-bronze scale-125' 
                  : 'bg-warm-tan/40 hover:bg-warm-tan'
              }`} />
              
              {/* Label - Shows ONLY on hover */}
              <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-warm-brown text-beige-50 px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="fixed top-6 right-6 z-50 w-12 h-12 bg-warm-bronze rounded-full flex items-center justify-center shadow-lg"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-beige-50 transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`w-full h-0.5 bg-beige-50 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-full h-0.5 bg-beige-50 transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-warm-brown/95 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-full gap-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Logo in menu */}
                <h2 
                  className="text-6xl text-warm-tan mb-8"
                  style={{ fontFamily: '"Great Vibes", cursive' }}
                >
                  Ishaan
                </h2>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-3xl font-semibold transition-colors ${
                        activeSection === item.id
                          ? 'text-warm-tan'
                          : 'text-beige-100 hover:text-warm-tan'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;