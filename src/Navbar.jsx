import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-80 w-full flex">
      <header className="flex text-[#00ff00] w-[1000px] bg-black py-4 mx-auto">
        <h3 className="text-[22px]">Portfolio</h3>
        <nav className="flex w-200px ml-auto text-[17px]">
          <a href="#Home" className="pr-10">
            HOME
          </a>
          <a href="#Projects" className="pr-10">
            Projects
          </a>
          <a href="#Contact" className="pr-10">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
