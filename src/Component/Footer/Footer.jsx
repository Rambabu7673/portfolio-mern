import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="  shadow-[0_0_10px_#f97316,0_0_25px_#f97316] animate-pulsew-full bg-gray-700 text-white py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <div className="h-16 w-16 flex justify-center items-center rounded-t-4xl">
              <a href="#home">
                <p className=" h-18 w-18 lg:h-23 lg:w-23  rounded-t-4xl flex justify-center items-center text-3xl font-serif text-white ">
                  <img
                    src="/Ram.png"
                    alt="Rambabu Kumar Logo"
                    className="h-18 w-18 lg:h-23 lg:w-23 "
                  />
                </p>
              </a>
            </div>

            <p className="text-gray-400 mt-4 leading-7 text-sm sm:text-base">
              MERN Stack Developer passionate about building modern, responsive
              and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-green-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-green-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-green-500 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-green-500 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-green-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/Rambabu7673"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:rambabu767301@gmail.com"
                className="hover:text-green-500 transition"
              >
                <MdEmail />
              </a>
            </div>

            <p className="text-gray-400 mt-4 break-all">
              rambabu767301@gmail.com
            </p>

            <p className="text-gray-400">Patna, Bihar, India</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rambabu Kumar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
