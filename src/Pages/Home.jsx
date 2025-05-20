// 📁 src/pages/Home.jsx (Updated Responsive + Animated Home Page)

import React from "react";
import profilePic from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-10"
    >
      <div className="max-w-6xl w-full px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Hi, I'm Durgesh Nama
          </h2>
          <div className="text-xl text-purple-700 font-medium mb-4 h-10">
            <Typewriter
              options={{
                strings: ["Software Engineer", "Full Stack Developer", "Frontend Developer" , "Backend Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <p className="text-gray-700 mb-4">
            I'm currently pursuing <strong>B.Tech in Computer Science</strong>{" "}
            at <strong>IIT Bhilai</strong>. I love building responsive and
            interactive web applications with modern tech stacks.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 my-4">
            <a
              href="https://www.linkedin.com/in/durgesh-nama-40570b302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/durgesh_nama_07?igsh=MXdqdWxrNTg4cnVwag=="
              target="_blank"
              className="text-pink-500 hover:text-pink-700 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/DKnama2287"
              target="_blank"
              className="text-gray-800 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="space-x-4 mt-4">
            <a
              href="/Durgesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-block px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Durgesh Nama"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
