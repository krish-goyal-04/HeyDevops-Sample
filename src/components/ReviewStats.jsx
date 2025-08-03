import { Star } from "lucide-react";

const ReviewStats = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-16 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-md w-full mx-auto">
      <div className="text-center">
        <p className="text-4xl font-extrabold text-gray-900 dark:text-white">15K+</p>
        <p className="text-lg text-gray-600 dark:text-gray-400">Satisfied learners</p>
      </div>

      <div className="text-center">
        <p className="flex items-center justify-center space-x-1 text-4xl font-extrabold text-gray-900 dark:text-white">
      <span>5</span>
      <Star className="text-yellow-400 w-8 h-8" />
      </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">(12,323 ratings)</p>
      </div>
    </section>
  );
};

export default ReviewStats;
