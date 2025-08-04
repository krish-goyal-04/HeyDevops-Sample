const MenubarTop = () => {
  const menuItems = [
    "Home",
    "Courses",
    "Devops Lab",
    "Placement Stories",
    "Companies"
  ];

  return (
    <nav className="flex space-x-20 text-black dark:text-white font-semibold text-xl select-none">
      {menuItems.map((item) => (
        <button
          key={item}
          type="button"
          className="
            relative px-1
            text-black dark:text-white
            hover:text-white dark:hover:text-blue-600
            focus:outline-none focus-visible:ring focus-visible:ring-blue-600 dark:focus-visible:ring-blue-600
            transition
            after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
            after:bg-white dark:after:bg-blue-600
            hover:after:w-full after:transition-all
          "
        >
          {item}
        </button>
      ))}
      
    </nav>
  );
};

export default MenubarTop;
