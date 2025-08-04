import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CourseBody from "./components/CourseBody"




const App=()=>{
    return(
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <main className="pt-4">
                <HeroSection />
                <CourseBody />
            </main>
        </div>
    )
}
export default App;