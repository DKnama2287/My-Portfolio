import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-blue-100 to-sky-200 py-10 text-center text-gray-800 border-t border-blue-300 mt-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-2 text-blue-700">Durgesh Nama | Portfolio</h3>
      <p className="text-sm mb-4 italic">
        "Crafting code with curiosity, creativity, and caffeine."
      </p>

      <div className="flex justify-center gap-6 text-2xl mb-6">
        <a href="https://www.linkedin.com/in/durgesh-nama-40570b302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/DKnama2287" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/durgesh_nama_07?igsh=MXdqdWxrNTg4cnVwag==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
          <FaFacebook />
        </a>
      </div>

      <p className="text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Durgesh Nama. All rights reserved.
      </p>
    </motion.footer>
  );
}
