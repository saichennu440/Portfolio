import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Full Stack Developer intern",
    company: "Busitron solutions Pvt Ltd",
    location: "Hyderabad, India",
    period: "2024 Oct - 2025 May",
    description: [
      "Developed and maintained full-stack web applications using React, Node.js, and Databses like MongoDB and sql",
      "Implemented RESTful APIs and integrated third-party services",
      "Collaborated with cross-functional teams to deliver high-quality software products",
      "Optimized application performance and improved user experience"
    ]
  },
  {
    id: 2,
    title: "Web development internship",
    company: "Aicte idea Lab",
    location: "Bhimavaram, India",
    period: "2024 June -2024 Aug",
    description: [
      "Assisted in the development of web applications using JavaScript, HTML, and CSS",
      "Participated in code reviews and contributed to improving coding standards",
      "Fixed bugs and implemented new features in existing applications",
      "Worked closely with senior developers to enhance technical skills"
    ]
  },
  {
    id: 3,
    title: "Frontend development summer Intern",
    company: "Henotic Technologies ",
    location: "Bhimavaram, India",
    period: "2023 Mar - 2023 May",
    description: [
      "Assisted in developing and testing web applications",
      "Learned and applied software development best practices",
      "Participated in team meetings and agile development processes",
      "Gained hands-on experience with various programming languages and frameworks"
    ]
  }
];

const Experience: React.FC = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50"></div>
            
            {/* Experience items */}
            {experienceData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative mb-16 last:mb-0 sm:${index % 2 === 0 ? 'ml-auto sm:pl-16' : 'mr-auto sm:pr-16 sm:pl-0'} ${index % 2 === 0 ? 'pl-10 sm:pl-0' : 'pl-10 sm:pl-0'} w-full sm:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-auto sm:right-0 -translate-x-1/2 sm:-translate-x-1/2 top-6 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                
                {/* Content card */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600 dark:border-blue-400">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex flex-wrap items-center mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center mr-4 mb-2">
                      <Briefcase size={16} className="mr-1" />
                      <span>{item.company}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;