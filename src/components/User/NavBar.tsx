import React, { useState } from "react";

function NavBar() {
  // nav items
  interface navItems {
    link: string;
    path: string;
  }
  const navItem: navItems[] = [
    { link: "", path: "Services" },
    { link: "", path: "About Us" },
    { link: "", path: "Contact Us" },
    { link: "", path: "Doctors" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-bgColors w-full ">
      <nav className="p-10">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-black text-4xl font-extrabold">
              MED<span className="text-green-500 text-5xl">D</span>ICAL
            </h1>
          </div>

          <ul className="hidden md:flex gap-x-16">
            {navItem.map((values) => (
              <li className="mx-auto text-black text-lg font-medium">{values.path}</li>
            ))}
          </ul>

          <div>
            <button className="md:bg-btnColor text-white py-2 px-4 rounded-lg">Sign Up</button>
          </div>
          <div className="md:hidden">
            <button className="text-black" onClick={toogleMenu}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {isMenuOpen ? (
          <ul className="block my-2 bg-serviceColors rounded-md p-2 ">
            {navItem.map((values) => (
              <li className="mx-auto text-black text-lg font-medium">{values.path}</li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}

export default NavBar;