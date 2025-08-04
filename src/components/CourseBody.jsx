import Coursecard from "./Coursecard";
import CourseDetails from "./CourseDetails";
import CourseIncludes from "./CourseIncludes";
import CourseLearning from "./CourseLearnings";
import ToolsGrid from "./ToolsGrid";


const CourseBody = ()=>{
    return(
        <div>
            <div className="mt-8 flex bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-lg text-white">
                <div style={{width: '30%'}} className="mr-8">
                    <Coursecard />
                </div>
                <div style={{width: '60%'}} className=" text-white">
                    <CourseDetails />
                </div>
            </div>
            <div>
                <CourseIncludes />
            </div>
            <div>
                <ToolsGrid />
            </div>
            <div>
                <CourseLearning />
            </div>
        </div>
        
    )
}
export default CourseBody;