import { Star } from "lucide-react";

const ReviewStats = () => (
  <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-7 rounded-2xl shadow border border-gray-200 dark:border-gray-800 flex justify-between items-center gap-8">
    <div className="flex flex-col items-center">
      <span className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">15K+</span>
      <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Satisfied learners</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="flex items-center gap-1 text-4xl font-extrabold text-yellow-500">
        5 <Star className="w-7 h-7" />
      </span>
      <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">(12,323 ratings)</span>
    </div>
  </div>
);
export default ReviewStats;
