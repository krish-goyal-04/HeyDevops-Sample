import MenubarTop from "./MenubarTop";
import { ThemeToggleButton } from "./ThemeToggleButton";
import {Button} from "./ui/button"
const Header = () => {
  return (
    <header
      className="
        flex items-center justify-between w-full 
        bg-blue-500 dark:bg-gray-900 
        border-b border-gray-200 dark:border-gray-700
        px-10 py-6
        rounded-2xl
        shadow-2xl
        transition-colors duration-300
        select-none
      "
    >
    <div className="flex-shrink-0">
    <div className="bg-white dark:bg-gray-200 rounded-xl shadow-2xl p-2 border border-gray-300 dark:border-gray-700">
        <img
        src="/assets/heydevops-logo.png"
        alt="HeyDevOps Logo"
        className="h-14 w-auto"
        draggable={false}
        />
    </div>
    </div>


    <div className="flex-1 flex justify-center">
    <MenubarTop />
    </div>

    <div >
    <ThemeToggleButton />
    </div>

    <div className=" ml-4 ">
        <Button
            className="
                h-10
                text-lg p-4
                bg-white text-blue-600 font-semibold
                px-5 py-2 rounded-lg shadow-sm
                hover:bg-blue-100 hover:text-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                transition
                dark:bg-blue-700 dark:text-white
                dark:hover:bg-blue-900
                dark:focus:ring-blue-400
            "
            >Login
        </Button>
    </div>

    
    </header>
  );
};

export default Header;
