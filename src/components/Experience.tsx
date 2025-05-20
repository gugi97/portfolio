import React from 'react';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  projects: Project[];
}

interface Project {
  name: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: 'Pegadaian (Bullion)',
      position: 'Backend Developer',
      period: 'October 2023 - Present',
      location: 'Jakarta, Indonesia',
      projects: [
        {
          name: 'Setor Fisik Emas',
          period: 'March 2024 - Present',
          responsibilities: [
            'Developed digital gold savings top-up feature through physical gold deposits',
            'Implemented tiered approval system for gold submission and withdrawal',
            'Optimized existing systems to integrate new features',
            'Implemented unit tests with 80% minimum coverage at repository layer',
            'Created technical documentation for physical gold deposit submissions',
            'Implemented CSV file generation for SAP posting from transaction journal data'
          ]
        },
        {
          name: 'Tabungan Emas Plus / Deposito Emas',
          period: 'April 2024 - August 2024',
          responsibilities: [
            'Maintained and optimized existing code to improve system performance',
            'Developed centralized document service for PDF creation and email delivery',
            'Integrated inquiry features in CMS for real-time interest payment monitoring',
            'Built and ran unit tests for new features with 80% minimum code coverage',
            'Created technical documentation for document service'
          ]
        },
        {
          name: 'Gold Trading',
          period: 'January 2025 - February 2025',
          responsibilities: [
            'Developed gold purchase feature with tiered approval for transactions',
            'Developed gold stock update feature to track additions and reductions',
            'Created role-based menu access mechanism for gold trading features',
            'Actively participated in task distribution and technical flow design',
            'Directly involved in business requirements analysis'
          ]
        },
        {
          name: 'Pinjaman Modal Kerja Emas',
          period: 'October 2023 - February 2024',
          responsibilities: [
            'Developed Role-Based Access Control (RBAC) for CMS using Golang',
            'Created PDF generation feature for payment proofs and bills',
            'Implemented transaction journaling for gold work capital rental',
            'Developed email bill notifications'
          ]
        }
      ]
    },
    {
      company: 'PT. Paramadaksa Teknologi Nusantara (nexSOFT)',
      position: 'Backend Developer',
      period: 'July 2021 - October 2023',
      location: 'Tangerang, Indonesia',
      projects: [
        {
          name: 'Grolog',
          period: 'January 2023 - October 2023',
          responsibilities: [
            'Developed application to monitor and optimize goods delivery routes',
            'Maintained existing APIs, including manual testing and bug fixes',
            'Implemented NATS Message Broker for real-time notifications',
            'Implemented Redis with pub/sub for automated trip start based on schedule',
            'Created scheduler for scheduled data synchronization between applications'
          ]
        },
        {
          name: 'NexChief',
          period: 'July 2021 - December 2022',
          responsibilities: [
            'Developed application for distribution management and reporting for FMCG products',
            'Maintained existing APIs and fixed bugs continuously',
            'Created File Watcher to replace Mule software',
            'Implemented Kafka Message Broker for data synchronization',
            'Tested APIs through stress testing with JMeter and manual testing',
            'Developed Excel export feature for reporting needs'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-200"></div>
              )}
              
              <div className="flex">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center z-10 relative">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-6 flex-1">
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-1">{exp.position}</h3>
                    <h4 className="text-lg font-semibold text-teal-700 mb-2">{exp.company}</h4>
                    <div className="flex flex-wrap text-sm text-gray-600 mb-4">
                      <span className="mr-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Projects */}
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="bg-white rounded-lg shadow-sm p-6 mb-4 border-l-4 border-teal-500">
                      <div className="flex justify-between mb-3">
                        <h5 className="font-semibold text-blue-800">{project.name}</h5>
                        <span className="text-sm text-gray-600">{project.period}</span>
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        {project.responsibilities.map((resp, rIndex) => (
                          <li key={rIndex} className="text-gray-700">{resp}</li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;
