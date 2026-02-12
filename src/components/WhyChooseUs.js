import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team of seasoned professionals brings years of expertise and proven success across all digital channels.',
      stat: '10+ Years',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Get premium quality services at competitive prices with flexible packages tailored to your budget.',
      stat: '30% Savings',
    },
    {
      icon: TrendingUp,
      title: 'Result-Driven Strategies',
      description: 'Every campaign is optimized for maximum ROI with continuous monitoring and data-driven adjustments.',
      stat: '3x Growth',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to ensure your campaigns run smoothly without interruption.',
      stat: 'Always Available',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
   <section 
  id="why-choose-us" 
  className="py-24 sm:py-32 relative overflow-hidden 
  bg-gradient-to-r from-blue-50 via-blue-100 to-cyan-50">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary mb-2">Why Choose Us</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-6 text-blue-700">
            What Makes Us Different
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just deliver services—we build lasting partnerships focused on your success. Here's what sets FoxAirComm apart from the competition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
                data-testid={`why-choose-us-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                 <div className="relative p-8 rounded-2xl 
           border border-blue-100 
           bg-blue-50/70 
            backdrop-blur-sm 
           hover:border-blue-300 
            hover:bg-blue-100/70 
           transition-all h-full">

                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-md">
  <Icon className="w-8 h-8 text-white" />
</div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">{reason.stat}</div>
                    <h4 className="text-xl font-bold font-heading">{reason.title}</h4>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 border border-primary/20">
            <div className="text-left">
              <h4 className="text-2xl font-bold font-heading mb-2">Ready to Get Started?</h4>
              <p className="text-muted-foreground">Join hundreds of satisfied clients who trust FoxAirComm for their digital success.</p>
            </div>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="why-choose-us-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
