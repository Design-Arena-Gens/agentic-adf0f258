'use client';

import { motion } from 'framer-motion';
import {
  Code,
  TrendingUp,
  Palette,
  BarChart3,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  Target,
  Users,
  Zap,
  Award,
  ArrowRight,
  Globe,
  PenTool,
  Share2
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">AE</span>
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-accent-400 animate-pulse" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gradient">Ahmed Elfar</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-slate-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Digital Marketing Specialist
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Combining data-driven strategy with creative visual content to build
              impactful campaigns and grow brand presence effectively
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center gap-2"
              >
                Let's Connect
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 gradient-border bg-slate-900 rounded-full font-semibold hover:bg-slate-800 transition-all"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-12 text-center"
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-800"
            >
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a versatile digital marketing specialist with a strong creative mindset and
                hands-on expertise across multiple areas of the digital space. My approach combines
                data-driven strategy with engaging visual content to deliver results that matter.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Over the years, I've worked on various projects that showcase my skills and adaptability
                in different aspects of digital marketing—from designing responsive websites to crafting
                compelling campaigns that grow brand presence effectively.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
            >
              What I <span className="text-gradient">Do</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Globe,
                  title: 'Website Design',
                  description: 'Creating responsive, user-friendly websites tailored to enhance user experience and support business objectives.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: PenTool,
                  title: 'Content Creation',
                  description: 'Crafting engaging, on-brand content that resonates with audiences and drives meaningful engagement.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: BarChart3,
                  title: 'Data-Driven Strategy',
                  description: 'Leveraging analytics and insights to build effective marketing strategies that deliver measurable results.',
                  color: 'from-emerald-500 to-teal-500'
                },
                {
                  icon: Target,
                  title: 'Campaign Management',
                  description: 'Planning and executing comprehensive marketing campaigns across multiple digital channels.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Palette,
                  title: 'Visual Design',
                  description: 'Creating stunning visuals and graphics that capture attention and communicate brand stories effectively.',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: Share2,
                  title: 'Social Media Marketing',
                  description: 'Building and managing social presence to connect with audiences and amplify brand reach.',
                  color: 'from-pink-500 to-rose-500'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
            >
              Core <span className="text-gradient">Expertise</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Code,
                  title: 'Technical Skills',
                  skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'SEO Optimization', 'Analytics Tools', 'Marketing Automation']
                },
                {
                  icon: TrendingUp,
                  title: 'Marketing Skills',
                  skills: ['Campaign Strategy', 'Content Marketing', 'Social Media', 'Email Marketing', 'Brand Development', 'Growth Hacking']
                },
                {
                  icon: Palette,
                  title: 'Creative Skills',
                  skills: ['Graphic Design', 'UI/UX Design', 'Video Editing', 'Copywriting', 'Brand Identity', 'Visual Storytelling']
                },
                {
                  icon: Users,
                  title: 'Soft Skills',
                  skills: ['Project Management', 'Client Relations', 'Team Collaboration', 'Strategic Thinking', 'Problem Solving', 'Adaptability']
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300 hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-16 text-center"
            >
              Why Work <span className="text-gradient">With Me</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: 'Results-Driven',
                  description: 'Focus on delivering measurable outcomes that align with your business goals and drive real growth.'
                },
                {
                  icon: Sparkles,
                  title: 'Creative Excellence',
                  description: 'Bringing fresh, innovative ideas to every project with a keen eye for design and storytelling.'
                },
                {
                  icon: Award,
                  title: 'Proven Experience',
                  description: 'Years of hands-on experience across diverse projects and industries, delivering consistent quality.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-8 text-center"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 text-center mb-12"
            >
              Ready to take your digital marketing to the next level? Let's discuss how I can help grow your brand.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-800"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <a
                  href="mailto:contact@ahmedelfar.com"
                  className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">Email Me</span>
                </a>

                <a
                  href="https://linkedin.com/in/ahmedelfar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
                </a>

                <a
                  href="#portfolio"
                  className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">Portfolio</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-slate-400">
            <p className="mb-4">© 2024 Ahmed Elfar. All rights reserved.</p>
            <p className="text-sm">Digital Marketing Specialist | Building Brands That Matter</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
