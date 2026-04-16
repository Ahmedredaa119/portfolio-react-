import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Gym Website',
      description: 'A comprehensive fitness and gym platform that helps you track workouts and progress in real time, with personalized training plans and insights to help you achieve your goals',
      tags: ['React.js', 'Next.js',  'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://ahmedredaa119.github.io/Fitness-Gym/',
      github: 'https://github.com/Ahmedredaa119',
    },
    {
      title: 'Cafe Website',
      description: 'A modern café platform that showcases the menu, special offers, and customer favorites, with an easy browsing experience and online ordering features to enhance customer convenience',
      tags: [ 'HTML', 'Bootstrap', 'CSS','Next.js', 'Tailwind CSS'],
      gradient: 'from-orange-500 to-red-500',
      link: 'https://ahmedredaa119.github.io/Keofi-coffee/',
      github: 'https://github.com/Ahmedredaa119',
    },
    {
      title: 'Restaurant Website',
      description: 'A seafood restaurant platform that highlights fresh daily catches, signature dishes, and special offers, with an easy browsing experience and online ordering ',
      tags: ['HTML', 'Bootstrap', 'Tailwind CSS', 'React.js',  'Chart.js'],
      gradient: 'from-indigo-500 to-purple-500',
      link: 'https://ahmedredaa119.github.io/Resturant-main/',
      github: 'https://github.com/Ahmedredaa119',
    },
    {
      title: 'BOOKS Website',
      description: 'A book website that offers a wide range of titles with easy browsing and search features to help readers find their favorite books quickly.',
      tags: ['React.js', 'CSS3', 'Responsive Design', 'API Integration'],
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://ahmedredaa119.github.io/booken-master/#Contact',
      github: 'https://github.com/Ahmedredaa119',
    },
    {
      title: 'SPORTS SHOES Website',
      description: 'A sports shoes website that showcases the latest sneaker collections with an easy browsing experience, helping customers find comfortable',
      tags:   [ 'HTML', 'Bootstrap', 'CSS', 'Tailwind CSS', 'API Integration'],
      gradient: 'from-green-500 to-teal-500',
      link: 'https://ahmedredaa119.github.io/footcap/',
      github: 'https://github.com/Ahmedredaa119',
    },
    {
      title: 'Explorations about birds',
      description: 'The starling is a small, beautiful bird with a melodious song. It lives in gardens and forests and feeds on insects and fruits. ',
      tags: ['React.js', 'Chart.js', 'Material-UI', 'Node.js', 'Bootstrap', 'CSS'],
      gradient: 'from-pink-500 to-rose-500',
      link: 'https://ahmedredaa119.github.io/wren-master/',
      github: 'https://github.com/Ahmedredaa119',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                {/* Gradient Overlay */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-slate-700/50 text-blue-400 rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
