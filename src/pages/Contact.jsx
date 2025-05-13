import Navbar from "../components/Navbar";
import email_icon from '../assets/gmail.png';
import ig_icon from '../assets/instagram.png';
import github_icon from '../assets/github.png';

import turtle from '../assets/mascot.png'

const Contact = () => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />

      <div className="py-10 mt-4 flex justify-center items-center">
        <p className="text-[22px] mt-8 text-center">Contact Me</p>
      </div>

      <div className="flex justify-center px-4">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Email */}
          <div className="bg-gray-700 w-full px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 mb-6 rounded-lg shadow-md">
            <img src={email_icon} alt="email icon" width={24} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <p className="text-white">devdixitsocial@gmail.com</p>
              <a
                href="mailto:devdixitsocial@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                /Send mail
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-gray-700 w-full px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 mb-6 rounded-lg shadow-md">
            <img src={ig_icon} alt="instagram icon" width={24} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <p className="text-white">devvv_dixit</p>
              <a
                href="https://www.instagram.com/devvv_dixit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                /DM me
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-gray-700 w-full px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg shadow-md">
            <img src={github_icon} alt="github icon" width={24} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <p className="text-white">devdixit-dev</p>
              <a
                href="https://github.com/devdixit-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                /Checkout projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-end bg-gray-600 mt-54 py-4 px-20">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4 bg-black px-4 py-3 rounded-sm">
            <p className="text-lg">Made by Dev Dixit</p>
            <img src={turtle} width={40} className="drop-shadow-lg drop-shadow-blue-500 animate-pulse" />
          </div>
          <div className="flex bg-blue-500 px-6 py-3 rounded-lg gap-2 items-center">
            <a href="https://github.com/devdixit-dev/Portfolio" className="" target="_blank">Source code</a>
            <img src={github_icon} width={26} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
