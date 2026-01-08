import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/scrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen bg-beige-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;