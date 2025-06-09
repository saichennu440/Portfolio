import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 pb-8 relative opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">Sai Chennu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Full Stack/Front end Developer
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Passionate about creating efficient, scalable solutions with modern technologies.
              I specialize in full-stack development and enjoy turning complex problems into simple, beautiful interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/file/d/1tqHQdzMCnZRXhkaXevnnP_1I4Re2NUGe/view?usp=drivesdk"
                download
              >
                <Download size={18} /> Resume
              </a>
            </div>
            <div className="flex gap-5 mt-8">
              <a 
                href="https://github.com/saichennu440" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-chennu-03792a20b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:chennusaiprasad24@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 dark:bg-blue-500 rounded-full absolute -top-4 -left-4 animate-blob opacity-30"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg relative z-10">
              <img 
                src="/images/hero.jpg" 
                alt="Sai Chennu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;