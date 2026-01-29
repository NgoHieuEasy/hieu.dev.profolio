const Nav = () => {
  return (
    <div className="bg-[#0b0b10] hidden md:block">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-sm uppercase tracking-widest text-gray-400">
        <div className="flex gap-8">
         

          <a
            href="#about"
            className="relative hover:text-white 
      after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white
      after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          >
            About
          </a>

          <a
            href="#service"
            className="relative hover:text-white 
      after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white
      after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          >
            Career Stage
          </a>

          <a
            href="#projects"
            className="relative hover:text-white 
      after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white
      after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="relative hover:text-white 
      after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white
      after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          >
            Skills
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
