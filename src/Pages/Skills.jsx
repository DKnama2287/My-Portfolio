import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt,
  FaDocker, FaLinux, FaGithub
} from 'react-icons/fa';
import {
  SiMongodb, SiPostman, SiC, SiCplusplus, SiExpress,
  SiTailwindcss, SiVscodium , SiFirebase,
} from 'react-icons/si';

const skillSet = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'C', icon: <SiC /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'VS Code', icon: <SiVscodium  /> },
  { name: 'Linux', icon: <FaLinux /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}

      >
        🚀 My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skillSet.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800 hover:bg-gray-700 transition-all p-5 rounded-xl shadow-lg flex flex-col items-center gap-2 border border-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: false, amount: 0.3 }}

          >
            <div className="text-3xl text-blue-400">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
