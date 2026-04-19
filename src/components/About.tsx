import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaPalette } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: FaPalette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7 px-4 sm:px-6 lg:px-8 mx-auto" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold">
              About Me
            </span>
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto md:mx-0"
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-2xl group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all"
              />
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/20" />
                </div>
                <div className="text-blue-400 overflow-x-auto custom-scrollbar">
                  <pre className="text-[10px] sm:text-xs md:text-sm leading-relaxed font-mono">
                    <code>{`const developer = {

                    
 name: "Ahmed Reda",
  location: "Mansoura, Dakahlia",
  experience: "2+ years",
  education: "Computer Science Student",
  passion: [
  "Front-End Development",
  "Full Stack Web Development using PHP",
  "UI Designer"
  "Problem Solving"
  ],
  currentFocus: "React.js & Next.js"

}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-6 text-left"
          >
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I'm Ahmed Reda, a <span className="text-blue-400 font-semibold">Front-End Developer</span> specializing in building modern, responsive interfaces with <span className="text-white font-medium">2+ years</span> of experience.
              </p>
              <p>
                My journey started at the <span className="text-purple-400 font-semibold">National Telecommunication Institute</span>. I focus on delivering high-quality solutions that balance performance and design.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <feature.icon className="text-blue-400 text-2xl mb-3" />
                  <h3 className="text-white font-bold text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs leading-tight">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


















