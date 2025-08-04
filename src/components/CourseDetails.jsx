import UpdatePannel from "./UpdatePannel";
import ReviewStats from "./ReviewStats";
import UserReviews from "./UserReviews";

const CourseDetails = () => {
  return (
    <div className="space-y-12 ">
      {/* Clean Course Header */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-lg font-bold text-red-600 dark:text-red-500 uppercase tracking-wider">
              Live
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-md font-medium">
              Industry Certified
            </span>
            <span className="text-xs px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md font-medium">
              Job Ready
            </span>
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PRIME12 DevOps/SRE/AI
            </span>
            <span className="block text-gray-800 dark:text-gray-200 mt-2">
              Professional Certification Program
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
            Industry-leading comprehensive training program designed for professionals seeking advanced DevOps,
            Site Reliability Engineering, and AI integration skills. Developed in partnership with Fortune 500 companies.
          </p>
        </div>
      </div>

      
<div className="flex flex-col space-y-8">
  {/* Top row: Updates and Stats, aligned right */}
  <div className="flex justify-end gap-12 max-w-full">
    <div className="max-w-xs w-full">
      <UpdatePannel />
    </div>
    <div className="max-w-xs w-full">
      <ReviewStats />
    </div>
  </div>

  {/* Bottom: User Reviews full width */}
  <div className="w-full">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      Alumni Success Stories
    </h3>
    <UserReviews />
  </div>
</div>
    </div>
  );
};

export default CourseDetails;
