import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const content = [
  { week: "Week 1", title: "DevOps / SRE fundamentals" },
  { week: "Week 2", title: "CICD Flow with Project" },
  { week: "Week 3", title: "Docker and Kubernetes Real Time Scenarios" },
  { week: "Week 4", title: "Python Basics to Advanced" },
  { week: "Week 5", title: "Kubernetes Advanced [ PART 2 ]" },
  { week: "Week 6", title: "Terraform with AWS Architecture Creation / Python Django framework deployment in AWS" },
  { week: "Week 7", title: "Ansible Real-Time Scenarios / Red Hat Linux Administration" },
  { week: "Week 8", title: "AZURE infra creation with terraform / Kubernetes Istio Kiali Jaeger Cluster Management (O)" },
  { week: "Week 9", title: "LinkedIn profile building / Resume Building" },
  { week: "Projects", title: "14+ DEVOPS/SRE Real Time Projects" },
];

const AccordionItem = ({ week, title, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 dark:border-gray-700">
      <button
        className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-xl"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{week} - {title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 transition-transform duration-300" /> : <ChevronDown className="w-5 h-5 transition-transform duration-300" />}
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out text-gray-700 dark:text-gray-300"
      >
        <p className="italic text-md py-2 px-4">{`Detailed content can go here.`}</p>
      </div>
    </div>
  );
};

export default function CourseContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-8 mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Course Content (Weekwise)
      </h2>
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        {content.map(({ week, title }, index) => (
          <AccordionItem
            key={index}
            week={week}
            title={title}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
