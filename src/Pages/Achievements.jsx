import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const achievements = [
  'Codeforces Pupil (Max Rating: 1200+)',
  'CodeChef 2 Star (Max Rating: 1481)',
  '300+ problems solved on LeetCode',
  '150+ problems solved on GeeksforGeeks',
  'Qualified JEE Advanced (Top Engineering Aspirants)'
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-blue-100 to-sky-200 text-gray-900">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        🏆 Achievements
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-5 rounded-xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Animated glowing border effect */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-400 animate-pulse rounded-r-lg opacity-60"></div>

            <div className="flex items-start gap-4 z-10 relative">
              <FaTrophy className="text-blue-600 mt-1 text-xl shrink-0" />
              <span className="text-gray-800 text-base font-medium">{item}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
