import React from 'react';
import { Code, Database, Layout } from 'lucide-react';

function About() {
  const skills = [
    {
      name: 'Frontend Development',
      icon: <Layout className="h-6 w-6" />,
      description: 'Experienced in React, Vue.js, and modern CSS frameworks',
    },
    {
      name: 'Backend Development',
      icon: <Code className="h-6 w-6" />,
      description: 'Proficient in Node.js, Python, and RESTful APIs',
    },
    {
      name: 'Database Management',
      icon: <Database className="h-6 w-6" />,
      description: 'Skilled in SQL and NoSQL databases',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
          <p className="mt-4 text-lg text-gray-500">
            I'm a passionate full-stack developer with over X years of experience in building web
            applications. I love turning complex problems into simple, beautiful, and intuitive
            solutions.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical writing.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="Working on laptop"
          />
        </div>
      </div>

      {/* Skills */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600">{skill.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{skill.name}</h3>
              <p className="mt-2 text-gray-500">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        <div className="mt-8 space-y-8">
          {[1, 2, 3].map((job) => (
            <div key={job} className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-2 mt-2 w-4 h-4 rounded-full bg-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Company {job}</h3>
                <p className="text-sm text-gray-500">2020 - Present</p>
                <p className="mt-2 text-gray-600">
                  Description of role and key achievements at Company {job}. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;