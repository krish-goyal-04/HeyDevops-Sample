import {
  CalendarDays, Globe, Hand, MessagesSquare, CalendarCheck2, Code2, 
  Radio, FileDown, FileText, Users, BrainCircuit
} from "lucide-react";

const features = [
  [
    { icon: <CalendarDays className="w-6 h-6" />, label: "Project Classes Start Date - 05th July 2025" },
    { icon: <Hand className="w-6 h-6" />, label: "Interactive learning environment" },
    { icon: <CalendarCheck2 className="w-6 h-6" />, label: "LIVE classes every weekend 9AM to 11:30 AM IST" },
    { icon: <Radio className="w-6 h-6" />, label: "60+ hours live sessions" },
    { icon: <FileDown className="w-6 h-6" />, label: "30+ downloadable resource" },
    { icon: <Users className="w-6 h-6" />, label: "Class Recording Available" },
    { icon: <BrainCircuit className="w-6 h-6" />, label: "Learn AI with DevOps" },
  ],
  [
    { icon: <Globe className="w-6 h-6" />, label: "14+ real-world projects" },
    { icon: <MessagesSquare className="w-6 h-6" />, label: "Live Doubts solving classes every Wednesday 8PM to 9PM IST" },
    { icon: <Code2 className="w-6 h-6" />, label: "30+ New Assignments every week" },
    { icon: <FileText className="w-6 h-6" />, label: "Certificate of completion" },
  ]
];

const CourseIncludes = () => (
  <section className="w-full mx-auto py-8 px-4">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900 dark:text-white">
      This course includes
    </h2>
    <div className="grid gap-x-20 gap-y-6 sm:grid-cols-2 shadow-xl bg-white dark:bg-[#101a2b] rounded-2xl p-8  text-gray-800 dark:text-gray-100">
      {features.map((col, colIdx) => (
        <ul key={colIdx} className="space-y-5">
          {col.map(({ icon, label }, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 text-blue-700 dark:text-yellow-300">{icon}</span>
              <span className="text-xl font-medium">{label}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default CourseIncludes;
