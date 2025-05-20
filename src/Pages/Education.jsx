import React from 'react';
import {motion} from 'framer-motion';

const educationData = [
  {
    title: 'Indian Institute of Technology (IIT) Bhilai',
    degree: 'B.Tech. in Computer Science',
    duration: 'Aug 2023 – April 2027',
    result: 'CGPA: 8.55 / 10.0',
  },
  {
    title: 'English Medium Children Academy, Alwar, Rajasthan',
    degree: 'Class XII (RBSE Board)',
    duration: '2022',
    result: 'Percentage: 94.20%',
  },
  {
    title: 'Bloom Happy Sr. Sec. School,Alwar, Rajasthan',
    degree: 'Class X (RBSE Board)',
    duration: '2020',
    result: 'Percentage: 97.17%',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-700"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}

      >
        🎓 Education
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}

          >
            <h3 className="text-xl font-bold text-blue-800">{edu.title}</h3>
            <p className="text-gray-800">{edu.degree}</p>
            <p className="text-sm text-gray-600">{edu.duration} | {edu.result}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
