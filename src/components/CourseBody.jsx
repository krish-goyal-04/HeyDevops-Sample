import Coursecard from "./Coursecard";
import CourseDetails from "./CourseDetails";
const CourseBody = ()=>{
    return(
        <div className="mt-5 flex bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-lg text-white">
        <div style={{width: '30%'}} className="mr-8">
            <Coursecard />
        </div>
        <div style={{width: '60%'}} className=" text-white">
            <CourseDetails />
        </div>
        </div>
    )
}
export default CourseBody;