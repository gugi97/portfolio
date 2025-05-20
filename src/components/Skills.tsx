import React from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: 'Golang', level: 90, category: 'Programming Languages' },
    { name: 'JavaScript', level: 75, category: 'Programming Languages' },
    { name: 'HTML5', level: 80, category: 'Programming Languages' },
    { name: 'CSS', level: 70, category: 'Programming Languages' },
    
    // Databases
    { name: 'MySQL', level: 85, category: 'Databases' },
    { name: 'PostgreSQL', level: 80, category: 'Databases' },
    { name: 'Redis', level: 75, category: 'Databases' },
    
    // Tools & Platforms
    { name: 'Docker', level: 80, category: 'Tools & Platforms' },
    { name: 'Git', level: 85, category: 'Tools & Platforms' },
    { name: 'Postman', level: 80, category: 'Tools & Platforms' },
    { name: 'Kibana', level: 70, category: 'Tools & Platforms' },
    { name: 'Jira', level: 75, category: 'Tools & Platforms' },
    { name: 'JMeter', level: 75, category: 'Tools & Platforms' },
    
    // Message Brokers
    { name: 'Kafka', level: 80, category: 'Message Brokers' },
    { name: 'NATS', level: 75, category: 'Message Brokers' },
    
    // Frameworks & Libraries
    { name: 'Laravel', level: 65, category: 'Frameworks & Libraries' },
  ];

  // Get unique categories
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Technical Skills</h2>
        
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-800">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div key={skill.name} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-teal-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
