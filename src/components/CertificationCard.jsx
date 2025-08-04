import { BadgeCheck } from "lucide-react";

const CertificationCard = () => (
  <section className="w-full my-2 px-6 py-12 flex items-center bg-gray-200 dark:bg-gray-900/70 rounded-3xl shadow-2xl">

    <div className="flex-1 text-left ">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Get Certified from <span className="text-blue-700 dark:text-blue-400">HeyDevOps</span>
      </h2>
      <div className="text-gray-700 dark:text-gray-200 text-lg mb-4">
        Upon successful completion of this course, you’ll receive a digital course completion certificate, boosting your professional portfolio and demonstrating your DevOps skills to top employers.
      </div>
      </div>
      <div className="flex-1 text-center md:text-left">
       <img src="icons/certificate.webp" alt="" />
      </div>
    
  </section>
);

export default CertificationCard;
