import MenubarTop from "./MenubarTop";
import { ThemeToggleButton } from "./ThemeToggleButton";
import {Button} from "./ui/button"
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 dark:bg-gradient-to-r dark:from-gray-800  dark:to-gray-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-white dark:bg-gray-100 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-300 mr-10">
              <img
                src="/assets/heydevops-logo.png"
                alt="HeyDevOps Logo"
                className="h-12 w-auto"
                draggable={false}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <MenubarTop />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 ml-10">
            <ThemeToggleButton />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
