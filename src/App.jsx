import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Achievements from './Pages/Achievements';
import Contact from './Pages/Contact';
import Education from './Pages/Education';

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <main className="scroll-smooth">
        <section id="home"><Home /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
