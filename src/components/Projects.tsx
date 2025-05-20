import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Sentiment Analysis Web Application",
      description: "Developed a web-based sentiment analysis application for analyzing Twitter data related to ISP services (Indihome and Firstmedia) using the Naive Bayes algorithm. The application processes tweet data to determine user sentiment toward these services.",
      technologies: ["Web Development", "Sentiment Analysis", "Naive Bayes Algorithm", "Twitter API"],
      period: "October 2020 - January 2021"
    },
    {
      title: "E-Administration System with QR Code",
      description: "Created a web-based e-administration system for letter transactions and archiving at Budi Luhur University Secretariat. The system includes QR code functionality for document verification and tracking.",
      technologies: ["Web Development", "QR Code Generation", "Document Management"],
      period: "February 2020 - August 2020"
    },
    {
      title: "Web Sysadmin Application",
      description: "Developed a web-based system administration application as part of a bootcamp final project, implementing both frontend and backend components.",
      technologies: ["Spring Boot", "React JS", "MySQL", "REST API"],
      period: "May 2021 - July 2021"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-3 bg-gradient-to-r from-blue-800 to-teal-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.period}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
