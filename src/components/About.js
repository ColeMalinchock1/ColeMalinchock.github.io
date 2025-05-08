import React from 'react';
import './About.css';
import headshot from '../images/Headshot.jpg';
import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';

function About() {
  return (
    <div className="about-container max-w-4xl mx-auto px-4 py-8 mt-32 pt-12">
      {/* Header Section with Image */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <img
            src={headshot}  // Replace with your image path
            alt="Cole Malinchock Headshot"
            className="rounded-full object-cover w-full h-full shadow-lg"
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-2">
            <MapPin size={20} />
            <span>Chapel Hill, NC</span>  {/* Update with your location */}
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
            <Briefcase size={20} />
            <span>Engineering Student</span>  {/* Update with your role */}
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Bio</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hello! I'm Cole Malinchock, a passionate mechanical engineer with a love for building
          innovative robotics. When I'm not building or designing, you can find me exploring new
          technologies, contributing to open-source projects, or enjoying outdoor
          activities.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I believe in continuous learning and pushing the boundaries of what's possible
          with technology. My goal is to develop the technology to aid the beautiful
          environment around us.
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap size={24} className="text-gray-700" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-2">North Carolina State University</h3>
          <p className="text-gray-600 mb-1">B.S. in Mechanical Engineering</p>
          <p className="text-gray-600 mb-1">Minors in Computer Programming and Environmental Science</p>
          <p className="text-gray-500">Expected Graduation: May 2026</p>
          <p className="text-gray-500">Honors:</p>
          <p className="text-gray-500"> - Park Scholarship Class of 2026</p>
          <p className="text-gray-500"> - Dean's List from Fall 2022 to Spring 2025 </p>
          <p className="text-gray-500"> - Member of Tau Beta Pi and Pi Tau Sigma Honor Societies </p>
        </div>
      </section>

      {/* Interests Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Heart size={24} className="text-gray-700" />
          <h2 className="text-2xl font-semibold">Interests & Hobbies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Technical Interests</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Web Development</li>
              <li>Machine Learning</li>
              <li>Open Source Contributing</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Personal Interests</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Photography</li>
              <li>Hiking</li>
              <li>Playing Guitar</li>
              <li>Reading Tech Blogs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'JavaScript', 'React', 'Node.js', 'Python',
            'SQL', 'Git', 'AWS', 'Docker'
          ].map((skill) => (
            <div 
              key={skill}
              className="bg-gray-50 rounded-lg p-4 text-center font-medium text-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;