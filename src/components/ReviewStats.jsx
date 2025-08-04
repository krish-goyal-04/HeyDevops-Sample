import { Star } from "lucide-react";

const ReviewStats = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-gray-900 dark:text-white">15K+</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Satisfied learners</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-4xl font-extrabold text-gray-900 dark:text-white">
            <span>5</span>
            <Star className="text-yellow-400 w-8 h-8" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">(12,323 ratings)</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;
