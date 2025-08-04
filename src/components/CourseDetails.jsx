import UpdatePannel from "./UpdatePannel";
import ReviewStats from "./ReviewStats";
import UserReviews from "./UserReviews";

const CourseDetails = () => {
  return (
    <div className="flex flex-col px-6 py-8 space-y-10">
      
      <section className="text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          PRIME12 Devops/SRE/AI Job Ready Course<br />
          <span className="text-yellow-300">Basics to Advanced</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-gray-300">
          A comprehensive course covering from Basics to Industry standards in DevOps/Cloud and SRE technology.
          Perfect for beginners as well as working professionals who are looking to Master DevOps and move up in their career.
        </p>
      </section>

    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-1 space-y-6">
          <UpdatePannel />
          <ReviewStats />
        </div>
        <div className="lg:col-span-2">
          <UserReviews />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;