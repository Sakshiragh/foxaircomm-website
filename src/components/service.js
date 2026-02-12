import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Smartphone, Monitor, LineChart, Megaphone, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies to boost your online presence and drive measurable results.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all major platforms with creative content and targeted campaigns.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Monitor,
      title: 'Website Design & Development',
      description: 'Beautiful, responsive websites that convert visitors into customers with modern design.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: LineChart,
      title: 'SEO Optimization',
      description: 'Rank higher on search engines and attract organic traffic with our proven SEO strategies.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Megaphone,
      title: 'Google & Facebook Ads',
      description: 'Maximize ROI with expertly managed paid advertising campaigns across all major platforms.',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Palette,
      title: 'Branding & Content Creation',
      description: 'Build a memorable brand identity with stunning visuals and compelling content.',
      color: 'from-violet-500 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary mb-2">Our Services</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-6">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a full suite of digital marketing services designed to help your business grow and succeed in the competitive online landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl border border-border/50 bg-card backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl transition-all overflow-hidden"
                data-testid={`service-${index}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-full blur-2xl" style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6">
                  <button className="text-primary font-semibold inline-flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
