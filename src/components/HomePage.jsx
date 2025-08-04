
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import MentorDetails from "./MentorDetails";
import WhyHeyDevops from "./WhyHeyDevops"

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>
    <section className="relative w-full ">
        <div className="w-full bg-white dark:bg-gray-800/70 backdrop-blur-xl py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6  pt-5 pb-8 dark:bg-gray-900 sm:px-12 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
            <WhyHeyDevops />
          </div>
        </div>
      </section>
      {/* Mentor Section */}
      <section className="relative w-full dark:bg-gray-950 ">
        {/* Full-width background container */}
        <div className="w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl py-24 lg:py-32">
          {/* Centered container with MentorDetails keeping its background */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
            <MentorDetails />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;

