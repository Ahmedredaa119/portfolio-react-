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
    <section id="about" className="ppy-12 md:py-20 px-4 md:px-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative order-2 md:order-1"
        >
         
          <h2 className="text-center  mb-10 md:mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center">
              About Me
            </span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>
        <br/>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* Left Side - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl"
              />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-blue-400 text-sm">
                <pre className="text-xs sm:text-sm md:text-base">
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
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
             I'm Ahmed Reda, a <span className="text-blue-400 font-semibold">Front-End Developer</span>  specializing in the design and development of modern, responsive user interfaces.with over 2 years of experience in building modern web applications. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey started at <span className="text-purple-400 font-semibold"> National Telecommunication Institute </span>, Academy, and since then, I've worked with various startups and companies, delivering high-quality solutions that exceed expectations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
             I'm always eager to learn new technologies and stay updated with the latest trends in web development. I believe in writing clean, maintainable code and creating seamless user experiences.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
                >
                  <feature.icon className="text-blue-400 text-3xl mb-2" />
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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
