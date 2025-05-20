import React from 'react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  period: string;
  details?: string[];
}

const Education: React.FC = () => {
  const educations: Education[] = [
    {
      institution: "Universitas Budi Luhur",
      degree: "Bachelor of Informatics Engineering",
      period: "2017 - 2021",
      gpa: "3.89/4.00",
      details: [
        "Developed a web-based sentiment analysis application for ISP service tweets using Naive Bayes algorithm",
        "Created an E-Administration system for letter creation with QR Code at Budi Luhur University Secretariat"
      ]
    },
    {
      institution: "SMKN 1 Tangerang",
      degree: "Marketing",
      period: "2014 - 2017"
    }
  ];

  const certifications: Certification[] = [
    {
      name: "Programming and Software Development",
      issuer: "BNSP",
      period: "April 2021 - April 2023"
    },
    {
      name: "Bootcamp",
      issuer: "Paideia Educational Solutions",
      period: "May 2021 - July 2021",
      details: [
        "Curriculum: Java, Spring Boot, JavaScript, ReactJS, HTML, CSS, MySQL, GIT, Teamwork & Project Management",
        "Final Project: Created web sysadmin application with Spring Boot & React JS"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Education & Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Education</h3>
            
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-blue-900">{edu.institution}</h4>
                      <p className="text-lg text-teal-700">{edu.degree}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-gray-600">{edu.period}</p>
                      {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                  
                  {edu.details && (
                    <ul className="list-disc pl-5 space-y-2">
                      {edu.details.map((detail, dIndex) => (
                        <li key={dIndex} className="text-gray-700">{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Certifications & Training</h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-blue-900">{cert.name}</h4>
                      <p className="text-lg text-teal-700">{cert.issuer}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-gray-600">{cert.period}</p>
                    </div>
                  </div>
                  
                  {cert.details && (
                    <ul className="list-disc pl-5 space-y-2">
                      {cert.details.map((detail, dIndex) => (
                        <li key={dIndex} className="text-gray-700">{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
