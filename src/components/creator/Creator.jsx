import React from 'react';
import Navbar from '../components_lite/Navbar';
import Ayush from './Ayush.jpg';
import Footer from '../components_lite/Footer';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Creator = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={Ayush}
              alt="Ayush Sir"
              className="h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ayush Kumar Singh</h2>
            <p className="text-gray-600 mb-2">
              Ayush Kumar Singh <strong>currently pursuing B.Tech in Electronics and Communication Engineering (ECE)</strong> from <strong>Centurin University of Technology and Management, Odisha</strong>, in <strong>2022-2026</strong>.
            </p>
            <br />
            <p className="text-gray-600 mb-2">
              Prior to graduation, I have completed my intermediate study from <strong>Ram Krishna Dwarika College</strong> in 2022, <strong>Patna, Bihar</strong>.
            </p>
            <br />
            <p className="text-gray-600 mb-4">
              <strong>In June 2025,</strong> I successfully completed a <strong>Frontend Designing Training</strong> program from the <strong>Central Tool Room and Training Centre (CTTC)</strong>, Bhubaneswar, gaining hands-on experience in modern frontend technologies and <strong>UI/UX design principles</strong>.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-5 mt-4">
              <a href="www.linkedin.com/in/ayush-kumar-singh-301a23296" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/AYUSHRAHUL" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black text-2xl">
                <FaGithub />
              </a>
              <a href="https://github.com/AYUSHRAHUL" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Creator;
