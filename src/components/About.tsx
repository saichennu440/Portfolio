import React, { useEffect, useRef } from 'react';
import { BookOpen, Code, Laptop } from 'lucide-react';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate software developer with a strong foundation in full-stack development. My journey in technology 
              began with a curiosity about how digital systems work, which led me to pursue a degree in Computer Science.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I enjoy creating elegant solutions to complex problems and am constantly learning new technologies to stay 
              at the forefront of the industry. My experience spans across web development, database management, and 
              application development.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical blogs and community forums.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-gray-600 dark:text-gray-400">Building digital products with innovative solutions</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  <Laptop size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">Passionate about emerging technologies</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">Continuously expanding my knowledge and skills</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-md">
              <div className="w-full h-96 bg-blue-200 dark:bg-blue-900/20 rounded-lg absolute top-4 left-4"></div>
              <div className="w-full h-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative z-10">
                <div className="h-full overflow-hidden rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt="About Sai Chennu" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;