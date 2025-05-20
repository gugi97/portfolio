import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6 text-gray-700">
            As a Backend Developer with over 3 years of specialized experience in Golang and microservice architecture, 
            I've built a strong foundation in developing scalable, performant, and secure applications. My journey in 
            software development has taken me through both government-owned enterprises (BUMN) and technology sectors, 
            where I've consistently delivered effective technical solutions.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            Born and raised in Tangerang, Indonesia, I graduated from Universitas Budi Luhur with a Bachelor's degree 
            in Informatics Engineering, achieving a GPA of 3.89/4.00. My academic background, combined with professional 
            certifications and continuous learning, has equipped me with a comprehensive understanding of modern software 
            development practices.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            I excel at translating complex business requirements into efficient technical solutions, with particular 
            expertise in database design, message broker implementation, and system integration. My experience spans 
            from developing financial applications at Pegadaian to creating logistics and distribution management 
            systems at PT. Paramadaksa Teknologi Nusantara.
          </p>
          <p className="text-lg text-gray-700">
            I'm passionate about creating robust backend systems that power seamless user experiences, and I'm 
            constantly expanding my knowledge to stay at the forefront of backend development technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
