import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CourseBody from "./components/CourseBody"
import Footer from "./components/Footer"
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'

/*const appRouter = createBrowserRouter([
    {
        path:"/batch12",
        element:<App />,
        children:[

        ]
        
    }
])

*/
const App=()=>{
    return(
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="pt-4">
                <HeroSection />
                <CourseBody />
            </main>
        </div>
    )
}
export default App;