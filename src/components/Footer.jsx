function Footer() {
  return (
    <footer className="bg-warm-brown text-beige-100 py-12 mt-20 w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="font-logo text-4xl text-warm-tan mb-2">Ishaan Misra</h3>
            <p className="text-beige-200 text-sm">
              Analyst | Strategy, Data & Business Insights
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-beige-50 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-beige-200 hover:text-warm-tan transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/work" className="text-beige-200 hover:text-warm-tan transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="/projects" className="text-beige-200 hover:text-warm-tan transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="text-beige-200 hover:text-warm-tan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-beige-200 hover:text-warm-tan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-beige-50 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:ishaanmsr@gmail.com" 
                  className="text-beige-200 hover:text-warm-tan transition-colors"
                >
                  ishaanmsr@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ishaanms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-beige-200 hover:text-warm-tan transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/ishaan-misra-0202/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-beige-200 hover:text-warm-tan transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-beige-200/20 pt-8 text-center text-sm text-beige-200">
          <p>© 2025 Ishaan Misra. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;