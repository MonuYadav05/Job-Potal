import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, isLoading } = useSelector((state) => state.auth);
  // const { user, loading } = useSelector((state) => state.profile);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header>
      <nav className="flex justify-between mt-5 ">
        <div className="flex justify-center text-2xl text-primary gap-2  ml-5 md:ml-14">
          <a href="/">
            <img src="logo.png" alt="logo" className="w-6 h-7 " />
          </a>
          JobPortal
        </div>

        <div>
          <ul className="hidden md:flex justify-center text-1xl font-normal text-slate-800 gap-11 mt-2 mr-5 ">
            {navItems.map(({ path, title }) => {
              return (
                <li key={path}>
                  <NavLink to={path} activeclassname="active">
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {token === null && (
          <div>
            {" "}
            <div className=" hidden md:flex justify-center gap-4 mr-14">
              <Link
                to="/login"
                className="pt-1 px-5 text-blue border h-9 rounded"
              >
                Log in
              </Link>
              <Link
                to="/sign-up"
                className="pt-1 px-5 border rounded h-9 bg-blue text-white"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}

        {token !== null && <ProfileDropdown />}

        {/* nav for mobile */}

        <div className="md:hidden block mr-5 mt-2">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <RxCross2 className="w-5 h-5" />
            ) : (
              <FaBarsStaggered className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`text-sm text-white py-5 mt-5 mr-5 ${
          isMenuOpen ? "" : "hidden"
        } bg-black p-3 ml-3 `}
      >
        <ul>
          {navItems.map(({ path, title }) => {
            return (
              <li key={path} className="mb-2">
                <NavLink to={path} activeclassname="active">
                  {title}
                </NavLink>
              </li>
            );
          })}
          <Link to="/login" className=" text-white  h-9 ">
            Log in
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
