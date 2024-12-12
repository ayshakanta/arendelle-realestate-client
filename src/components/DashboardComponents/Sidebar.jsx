import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import logo from "../../../public/logo.png";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { FaOpencart } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useAgent from "../../hooks/useAgent";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const isAdmin = useAdmin();
  const isAgent = useAgent();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      {/* Small Screen Navbar */}
      <div className="  flex justify-between md:hidden ">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <div className="flex items-center">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="100"
                  height="100"
                  className="w-10 lg:w-14"
                />
                <h2 className="text-xl lg:text-4xl text-cyan-900 font-extrabold">
                  Arendelle
                </h2>
              </div>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto">
              <Link to="/">
                <div className="flex items-center">
                  <img
                    // className='hidden md:block'
                    src={logo}
                    alt="logo"
                    width="100"
                    height="100"
                    className="w-10 lg:w-14"
                  />
                  <h2 className="text-xl lg:text-4xl text-cyan-900 font-extrabold">
                    Arendelle
                  </h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {isAdmin ? (
                <>
                  {/* admin */}

                  <NavLink
                    to="addedProperties"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">Admin Profile</span>
                  </NavLink>
                  <NavLink
                    to="addedProperties"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">Manage Properties</span>
                  </NavLink>
                  <NavLink
                    to="users"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">Manage Users</span>
                  </NavLink>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">Manage Reviews</span>
                  </NavLink>
                </>
              ) : isAgent ? (
                <>
                  {/* agent */}

                  <NavLink
                    to="addProperty"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <BsFillHouseAddFill className="w-5 h-5" />

                    <span className="mx-4 font-medium">Agent Profile</span>
                  </NavLink>
                  <NavLink
                    to="addProperty"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <BsFillHouseAddFill className="w-5 h-5" />

                    <span className="mx-4 font-medium">Add Property</span>
                  </NavLink>

                  <NavLink
                    to="addedProperties"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">
                      My Added Properties
                    </span>
                  </NavLink>
                  <NavLink
                    to="addedProperties"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">My Sold Properties</span>
                  </NavLink>
                  <NavLink
                    to="addedProperties"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">
                      Requested Properties
                    </span>
                  </NavLink>
                </>
              ) : (
                <>
                  {/* user */}
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FcSettings className="w-5 h-5" />

                    <span className="mx-4 font-medium">My Profile</span>
                  </NavLink>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaOpencart className="w-5 h-5" />

                    <span className="mx-4 font-medium">Wishlist</span>
                  </NavLink>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaOpencart className="w-5 h-5" />

                    <span className="mx-4 font-medium">Property Bought</span>
                  </NavLink>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaOpencart className="w-5 h-5" />

                    <span className="mx-4 font-medium">My Reviews</span>
                  </NavLink>
                </>
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
