import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;