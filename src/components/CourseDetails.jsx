import UpdatePannel from "./UpdatePannel";
import ReviewStats from  "./ReviewStats"
import UserReviews from "./UserReviews";

const CourseDetails = () => {
  return (
    <div className="flex flex-col">
        <section className="mt-5 ml-3">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          PRIME12 Devops/SRE/AI Job Ready Course<br />
          <span className="text-yellow-300">Basics to Advanced</span>
        </h1>
      </div>

      <div className=" text-xl leading-relaxed text-gray-300 text-center">
        <p>
          A comprehensive course covering from Basics to Industry standards in DevOps/Cloud and SRE technology.
          Perfect for beginners as well as working professionals who are looking to Master DevOps and move up in their career.
        </p>
      </div>
    </section>
    <div className="flex h-full">
  <div className="flex flex-col justify-end space-y-6 w-1/3">
    <UpdatePannel />
    <ReviewStats />
  </div>
  <div className="flex-1"><UserReviews /></div>
</div>
  
    </div>
    
  );
};

export default CourseDetails;
