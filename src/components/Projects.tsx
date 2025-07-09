import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, Admin dashboard, shopping cart, user authentication, and payment processing integration.",
    image: "/images/project1.png",
    technologies: ["React", "TypeScript", "Node.js", "supabase", "Express", "Redux", "Tailwind CSS","Twilio", "razorpay"],
    category: "Full Stack",
    githubUrl: "https://github.com/saichennu440/Fresh-cuts",
    liveUrl: "https://fresh-cuts.vercel.app/"
  },
  {
    id: 2,
    title: "Astro Ping",
    description: "A blog website with features like user authentication,API integration, daily horoscope",
    image: "/images/project2.png",
    technologies: ["React", "Javascript", "HTML/CSS", "Material UI"],
    category: "Frontend",
    githubUrl: "https://github.com/saichennu440/AstroPing",
    liveUrl: "https://astroping.com/"
  },
  {
    id: 3,
    title: "School Website",
    description: "A responsive school website with features like student registration, teacher login, and student dashboard.",
    image: "/images/project3.png",
    technologies: ["React", "Javascript", "HTML/CSS", "Material UI"],
    category: "Frontend",
    githubUrl: "https://github.com/saichennu440/westberry.in",
    liveUrl: "https://westberry-in.vercel.app/"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts, historical data, and interactive maps using weather API integration.",
    image: "/images/project4.png",
    technologies: ["React.js", "React Hooks","Vite","HTML/CSS", "Weather API", "Chart.js","TailwindCss","Lucide React"],
    category: "Full Stack",
    githubUrl: "https://github.com/saichennu440/weatherapp",
    liveUrl: "https://weatherapp-ivory-three.vercel.app/"
  },
  {
    id: 5,
    title: "Booking request website for Acqua Farmers",
    description: "A booking request website for Acqua Farmers, where farmers can create and manage their booking requests.",
    image: "/images/project5.png",
    technologies: ["React", "Javascript", "Tailwind CSS", "Material UI"],
    category: "Frontend",
    githubUrl: "https://github.com/saichennu440/Aanjineya-acqua-traders",
    liveUrl: "https://aanjineya-acqua-traders.vercel.app/"
  },
  
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);

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
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/saichennu440" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <Github size={20} className="mr-2" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;