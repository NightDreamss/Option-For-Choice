import React from "react";
import Links from "../../constants/Links";

const Navbar = () => {
  return (
    <header className="antialiased h-16 bg-gray-100">
      <div className="container flex flex-col flex-wrap items-end p-4 mx-auto md:flex-row">
        <nav className="flex flex-wrap w-full lg:justify-start justify-end">
          <Links styleClass="flex z-50"></Links>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
