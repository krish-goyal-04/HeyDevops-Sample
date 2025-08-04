import { Play, Users, BookOpen, GraduationCap, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

const employerLogos = [
  { src: "icons/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo.png", alt: "Amazon" },    // replace with actual logo URLs
  { src: "icons/IBM.jpeg", alt: "IBM" },
  { src: "icons/Walmart_logo.svg.png", alt: "Walmart" },
  { src: "icons/flipkart.png", alt: "Flipkart" },
  { src: "icons/dell.png", alt: "Dell" },
  { src: "icons/zynga.png", alt: "Zynga" },
];

const testimonials = [
  {
    name: "Akash S.",
    text: "HeyDevops gave me industry-ready skills & a job at my dream company! The hands-on labs are exceptional.",
    avatar: "icons/man.jpeg",
    company: "Amazon",
  },
  {
    name: "Saanvi P.",
    text: "The blend of SRE and DevOps made all the difference. Trainers genuinely care about our growth.",
    avatar: "icons/woman.jpeg",
    company: "IBM",
  },
];

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
    label: "Hands-on Labs",
    desc: "Environment-rich projects and real-time feedback.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    label: "Job Assistance",
    desc: "Mock interviews, resume review, daily support.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-tr from-blue-50 via-white to-blue-100 dark:from-[#0b1120] dark:via-[#101a2b] dark:to-[#0b1120] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Row */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-8">
          {/* Left (Text) */}
          <div className="w-full md:w-2/3 flex flex-col text-center md:text-left">
            {/* Headline & Subhead */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight leading-tight"
            >
              Master <span className="text-blue-600 dark:text-blue-400">DevOps & Cloud</span> <br /> with Industry Leaders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0"
            >
              Advance your tech career with practical DevOps, SRE, and Cloud programs trusted by 15,000+ learners worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link to="/batch12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl font-semibold transition-transform transform hover:scale-105">
                  Start Learning Today
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 text-lg rounded-lg flex items-center gap-2 font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-wrap gap-6 justify-center md:justify-start mb-10"
            >
              {/* Active Students */}
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">15K+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Active Students</span>
              </div>
              {/* Hours Content */}
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                  <BookOpen className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">50+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Hours Content</span>
              </div>
              {/* Success Rate */}
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
                  <GraduationCap className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">95%</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Success Rate</span>
              </div>
            </motion.div>
          </div>

          {/* Right (Illustration) */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-5">
            <img
              src="icons/devopshero-image.jpg"
              alt="DevOps Illustration"
              className="max-w-xs md:max-w-md w-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
          {features.map(f => (
            <div key={f.label} className="flex items-start gap-3 bg-gray-200 dark:bg-gray-700/70 rounded-2xl p-6 shadow transition hover:shadow-lg">
              <span>{f.icon}</span>
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-lg mb-1">{f.label}</div>
                <div className="text-gray-700 dark:text-gray-300">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Employer Logos */}
        <div className="mt-14 px-2 py-8  bg-gray-200 dark:bg-gray-800/70 rounded-2xl flex flex-wrap gap-8 items-center justify-center shadow-lg">
          <span className="dark:text-white text-black font-semibold text-lg mr-8">Our Learners work at</span>
          {employerLogos.map(logo => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto opacity-90 grayscale-0 transition"
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-14 max-w-3xl mx-auto">
          <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-6">What Our Alumni Say</h3>
          <div className="grid gap-8 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-200 dark:bg-gray-800/70 rounded-2xl shadow p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-blue-600 dark:text-blue-300 text-xs">{t.company}</div>
                  </div>
                </div>
                <div className="text-gray-700 dark:text-gray-300 flex-1">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient shape */}
      <div className="hidden lg:block absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-600 opacity-10 rounded-full -z-10" />
    </section>
  );
};

export default HeroSection;
