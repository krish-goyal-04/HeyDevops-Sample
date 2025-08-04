import { Rocket } from "lucide-react";

const jobGuidanceData = [
  {
    color: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    text: "Infosys/Walmart/Verizon + Sample Resume templates",
  },
  {
    color: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-100 dark:bg-teal-900/40",
    text: "400+ DevOps Interview Questions",
  },
  {
    color: "text-orange-500 dark:text-orange-400",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    text: "Mock Interviews with feedback",
  },
  {
    color: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    text: "Each Project roles and responsibilities",
  },
  {
    color: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    text: "Job Portals and Current Jobs in market walkthrough",
  },
  {
    color: "text-yellow-500 dark:text-yellow-300",
    iconBg: "bg-yellow-100 dark:bg-yellow-700/30",
    text: "Linkedin Profile Optimisation",
  },
];

export default function JobGuidance() {
  return (
    <section className="w-full py-16 bg-gray-900 rounded-2xl">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-tight">
          JOB GUIDANCE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {jobGuidanceData.map((item, idx) => (
            <div
              key={idx}
              className={`
                group bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-md hover:shadow-xl
                transition-all duration-300 p-7 flex flex-col items-center justify-center text-center
                hover:scale-105 cursor-pointer
              `}
            >
              <span className={`mb-4 rounded-full p-3 ${item.iconBg} transition-colors duration-200`}>
                <Rocket className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform`} strokeWidth={2.2} />
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
