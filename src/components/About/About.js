import React from 'react';
import './About.css';
import headshot from './images/Headshot.jpg';
import { MapPin, GraduationCap, Heart, Linkedin, Mail, GithubIcon } from 'lucide-react';

function About() {
  return (
    <div className="about-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <div className="headshot-container">
          <img
            src={headshot}
            alt="Cole Malinchock Headshot"
          />
        </div>
        
        <div className="profile-info">
          <h1>About Me</h1>
          <div className="profile-detail">
            <MapPin size={20} />
            <span>Chapel Hill, NC</span>
          </div>
          <div className="profile-detail">
            <Mail size={20} />
            <span>malinchc@gmail.com</span>
          </div>
          <div className="profile-detail">
            <Linkedin size={20} />
            <a href="https://www.linkedin.com/in/cole-malinchock/">LinkedIn</a>
          </div>
          <div className="profile-detail">
            <GithubIcon size={20} />
            <a href="https://github.com/ColeMalinchock1">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <section className="content-section">
        <h2>Bio</h2>
        <p>
          Hello! I'm Cole Malinchock, a passionate mechanical engineer with a love for building
          innovative robotics. When I'm not building or designing, you can find me exploring new
          technologies, contributing to open-source projects, or enjoying outdoor
          activities.
        </p>
        <p>
          I believe in continuous learning and pushing the boundaries of what's possible
          with technology. My goal is to develop the technology to aid the beautiful
          environment around us.
        </p>
      </section>

      {/* Education Section */}
      <section className="content-section">
        <div className="section-header">
          <GraduationCap size={24} />
          <h2>Education</h2>
        </div>
        <div className="section-card">
          <h3>North Carolina State University</h3>
          <p>B.S. in Mechanical Engineering</p>
          <p>Minors in Computer Programming and Environmental Science</p>
          <p>Expected Graduation: May 2026</p>
          <p>Honors:</p>
          <p> - Park Scholarship Class of 2026</p>
          <p> - Dean's List from Fall 2022 to Spring 2025</p>
          <p> - Member of Tau Beta Pi and Pi Tau Sigma Honor Societies</p>
          <p> - Projected Summa Cum Laude</p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="content-section">
        <h2>Relevant Courses</h2>
        <div className="courses-grid">
          {[
            {
              ref: "https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2022:1:1:CE:591:001",
              description: "CE 591: Cyber Physical Systems"
            },
            {
              ref: "https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2025:1:1:MAE:435:001",
              description: "MAE 435: Principles of Automatic Control"
            },
            {
              ref: "https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2023:1:1:ECE:331:001",
              description: "ECE 331: Principles of Electrical Engineering"
            },
            {
              ref: "https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8000026",
              description: "CSC 246: Concepts and Facilities of Operating Systems for Computer Scientists"
            },
            {
              ref: "https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2024:8:1:MAE:315:001",
              description: "MAE 315: Dynamics of Machines"
            },
            {
              ref: "https://wolfware.ncsu.edu/courses/details/?sis_id=SIS:2022:8:1:NR:406:001",
              description: "NR 406: Conservation of Biological Diversity"
            },
            {
              ref: "https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=17500048",
              description: "CSC 230: C and Software Tools"
            }
          ].map((course) => (
            <a
              key={course.description}
              className="course-tag"
              href={course.ref}
            >
              {course.description}
            </a>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="content-section">
        <div className="section-header">
          <Heart size={24} />
          <h2>Interests & Hobbies</h2>
        </div>
        <div className="interests-grid">
          <div className="section-card">
            <h3>Technical Interests</h3>
            <ul>
              <li>Robotics</li>
              <li>Reinforcement Learning</li>
              <li>Environmental Monitoring</li>
            </ul>
          </div>
          <div className="section-card">
            <h3>Personal Interests</h3>
            <ul>
              <li>Photography</li>
              <li>Hiking</li>
              <li>Cycling</li>
              <li>Woodworking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="content-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {[
            'Python', 'SolidWorks', 'KiCAD',
            'Matlab', 'Simulink', 'Git', 'ROS2', 'C',
            'C++', 'MIG Welding', '3D Printing', 'Java',
            'React', 'MuJoCo', 'Arduino', 'Linux', 'Uppaal',
            'Assembly', 'SolidWorks FEA'
          ].map((skill) => (
            <div 
              key={skill}
              className="skill-tag"
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