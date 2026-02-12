import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'FoxAirComm transformed our digital presence completely. Our website traffic increased by 300% within just 3 months. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'The team at FoxAirComm is exceptional. Their strategic approach to SEO and paid ads delivered results beyond our expectations.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StyleHub',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'Working with FoxAirComm has been a game-changer for our e-commerce business. Their social media campaigns drove massive engagement and sales.',
    },
    {
      name: 'David Thompson',
      role: 'CMO, FitLife',
      image: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      text: 'Outstanding service and incredible ROI. FoxAirComm helped us achieve a 5x return on our advertising spend. True professionals!',
    },
    {
      name: 'Lisa Anderson',
      role: 'Owner, Bloom Bakery',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'The branding work they did for us was phenomenal. Our new identity has helped us stand out in a crowded market.',
    },
    {
      name: 'James Wilson',
      role: 'VP Marketing, CloudTech',
      image: 'https://i.pravatar.cc/150?img=14',
      rating: 5,
      text: 'FoxAirComm is our go-to partner for all things digital marketing. Their expertise and dedication are unmatched.',
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-base font-semibold text-primary mb-2">Testimonials</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-6">
            What Our Clients Say
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with FoxAirComm.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: [0, -100 * testimonials.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm"
                data-testid={`testimonial-${index % testimonials.length}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-3" />
                  <p className="text-foreground leading-relaxed">{testimonial.text}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold font-heading">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center"
      >
        <div className="inline-flex items-center space-x-12 p-8 rounded-2xl border border-border/50 bg-card/50">
          <div>
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="w-px h-16 bg-border"></div>
          <div>
            <div className="text-4xl font-bold text-primary">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-border"></div>
          <div>
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
