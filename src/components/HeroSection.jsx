import { Play, Users, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-tr from-blue-50 via-white to-blue-100 dark:from-[#0b1120] dark:via-[#101a2b] dark:to-[#0b1120] py-10 lg:py-22 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8 tracking-tight"
          >
            Master{" "}
            <span className="text-blue-600 dark:text-blue-400">DevOps & Cloud</span>
            <br />
            with Industry Experts
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join 15,000+ professionals who advanced their careers with our comprehensive DevOps, SRE, and AI courses
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
          >
           <Link to="/batch12"> <Button className="bg-blue-600 hover:bg-blue-700 text-white px-14 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 font-semibold">
              Start Learning Today
            </Button></Link>

            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-10 py-5 text-lg rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">15K+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Students</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Hours Content</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative SVG or shapes (optional) */}
      <div className="hidden lg:block absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-600 opacity-10 rounded-full -z-10" />
    </section>
  );
};

export default HeroSection;
