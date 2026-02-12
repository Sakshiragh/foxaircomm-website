import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital marketing strategies that drive measurable growth and success.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the leading digital marketing agency known for transforming brands through data-driven creativity.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, and client success drive everything we do. We believe in transparent partnerships.',
    },
    {
      icon: Award,
      title: 'Why Different',
      description: 'We combine cutting-edge technology with creative excellence to deliver results that exceed expectations.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary mb-2">About FoxAirComm</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-6">
            Your Partner in Digital Success
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At FoxAirComm, we are passionate about helping businesses thrive in the digital landscape. With years of experience and a team of dedicated experts, we deliver marketing solutions that make a real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold font-heading mb-4">Who We Are</h4>
              <p className="text-muted-foreground leading-relaxed">
                FoxAirComm is a full-service digital marketing agency dedicated to helping businesses achieve their goals. We specialize in creating customized strategies that combine creativity with data analytics.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold font-heading mb-4">What We Do</h4>
              <p className="text-muted-foreground leading-relaxed">
                From SEO and social media marketing to web design and paid advertising, we offer comprehensive solutions that drive traffic, engagement, and conversions for your business.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold font-heading mb-4">Our Approach</h4>
              <p className="text-muted-foreground leading-relaxed">
                We believe in a results-driven approach. Every strategy is backed by thorough research, testing, and optimization to ensure maximum ROI for our clients.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all"
                data-testid={`about-value-${index}`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h5 className="text-xl font-bold font-heading mb-3">{value.title}</h5>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
