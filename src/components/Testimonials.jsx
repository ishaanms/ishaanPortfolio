import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-beige-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4 text-center">
          What Others Say
        </h2>
        <p className="text-xl text-warm-grey mb-16 text-center">
          Testimonials from colleagues and collaborators
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-beige-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-warm-tan text-4xl mb-4">"</div>
              <p className="text-warm-grey leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-warm-tan/20 pt-4">
                <p className="font-semibold text-warm-brown">
                  {testimonial.name}
                </p>
                <p className="text-sm text-warm-grey">
                  {testimonial.title}
                </p>
                <p className="text-sm text-warm-tan">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;