import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allProperties">All Properties</Link>
      </li>
    </>
  );

  return (
    <div className="navbar drop-shadow-lg bg-opacity-15  bg-black max-w-screen-xl pt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-cyan-900"
          >
            {navOptions}
          </ul>
        </div>
        <img className="w-10 lg:w-14" src={logo} alt="" />
        <Link
          to="/"
          className="text-xl lg:text-4xl text-cyan-900 font-extrabold"
        >
          Arendelle
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-cyan-900">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end text-cyan-900">
        {user ? (
          <>
            <Link
              to="/dashboard"
              className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Dashboard
            </Link>
            <div className="tooltip w-10 lg:w-14" data-tip={user.displayName}>
              <img
                className="w-8 h-8 lg:w-14 lg:h-14 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </div>
            <div
              onClick={handleLogOut}
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Login
            </Link>
            /
            <Link
              to="/signUp"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
