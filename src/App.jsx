import Header from "./components/Header"
import Coursecard from "./components/Coursecard"
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
        <div className="p-8 ">
            <Header />
            <CourseBody />
        </div>
    )
}
export default App;