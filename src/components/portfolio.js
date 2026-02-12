import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Growth Campaign',
      category: 'Digital Marketing',
      description: 'Increased online sales by 350% through targeted ads and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1760611656007-f767a8082758?q=80&w=2070&auto=format&fit=crop',
      results: '+350% Sales',
    },
    {
      title: 'Brand Identity Redesign',
      category: 'Branding',
      description: 'Complete brand transformation that boosted brand recognition by 200%.',
      image: 'https://images.unsplash.com/photo-1492448497576-45b1efcdc02c?q=80&w=2070&auto=format&fit=crop',
      results: '+200% Recognition',
    },
    {
      title: 'Social Media Viral Campaign',
      category: 'Social Media',
      description: 'Generated 2M+ impressions and 50K+ engagements in 30 days.',
      image: 'https://images.unsplash.com/photo-1758691736545-5c33b6255dca?q=80&w=2070&auto=format&fit=crop',
      results: '2M+ Impressions',
    },
    {
      title: 'SaaS Platform Launch',
      category: 'Web Development',
      description: 'Built and launched a scalable SaaS platform with modern design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      results: '10K+ Users',
    },
    {
      title: 'Local SEO Success Story',
      category: 'SEO',
      description: 'Achieved #1 ranking for 50+ keywords in local search results.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      results: '#1 Rankings',
    },
    {
      title: 'Paid Ads ROI Optimization',
      category: 'Paid Advertising',
      description: 'Achieved 5x ROAS through strategic campaign optimization.',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2006&auto=format&fit=crop',
      results: '5x ROAS',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary mb-2">Our Work</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-6">
            Success Stories & Case Studies
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful campaigns and projects that have helped businesses achieve remarkable growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="portfolio-item group rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/50 hover:shadow-2xl transition-all"
              data-testid={`portfolio-project-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-overlay">
                  <div className="text-white">
                    <div className="text-sm font-semibold mb-1">{project.category}</div>
                    <div className="text-2xl font-bold">{project.results}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-primary">
                  <span>View Case Study</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
