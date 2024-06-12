import { Link } from "react-router-dom";
import errorImage from "../assets/images/error.png";
const ErrorPage = () => {
  return (
    <div className="w-1/2 mx-auto relative">
      <img src={errorImage} alt="" />
      <div className="bg-slate-400 text-sky-800 drop-shadow-2xl absolute top-1/3 justify-center items-center text-center right-1/4 bg-opacity-50 p-20 space-y-2">
        <h2 className="text-7xl font-extrabold">404</h2>
        <p className="text-4xl font-bold">Page Not Found!!</p>
        <p className="text-2xl font-bold">
          Want To Go Home???
          <br />
          <span className="text-3xl">
            <Link to="/">
              <button className="btn mt-5 bg-sky-700 text-white font-bold">
                Home
              </button>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
