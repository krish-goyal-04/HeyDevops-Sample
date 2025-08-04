import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-1">HeyDevops</h2>
        <p className="text-lg mb-4">
          Become DevOps Engineer In The Top Product Based Companies
        </p>
        <div className="flex justify-center space-x-6 text-white text-3xl">
          <a
            href="https://www.linkedin.com/in/praveen-singampalli/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 transition-colors duration-300 hover:text-blue-900"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Singam4devops"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-sky-400 transition-colors duration-300 hover:text-sky-700"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/@PraveenSingampalli/featured"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-red-600 transition-colors duration-300 hover:text-red-900"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/singam4devops/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-500 transition-colors duration-300 hover:text-pink-800"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;