import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5">
            Full Stack Developer passionate about creating beautiful and functional web applications
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="Workspace"
          />
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={`https://images.unsplash.com/photo-${project === 1 ? '1555952517-2e8e729e0b44' : project === 2 ? '1551434873-6e5c8e10ad14' : '1557690267-23f0b76688fe'}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
                alt={`Project ${project}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Project {project}</h3>
                <p className="mt-2 text-gray-500">
                  A brief description of project {project} and the technologies used to build it.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;