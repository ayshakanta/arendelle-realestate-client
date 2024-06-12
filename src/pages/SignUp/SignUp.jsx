import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Arendelle | Sign Up</title>
      </Helmet>
      <div className="">
        <div className="lg:flex items-center m-8 bg-slate-300 bg-opacity-30 p-8 drop-shadow-lg">
          <div className="flex-1 items-center">
            <h2 className="text-3xl font-bold text-center">
              Please SignUp Here!!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-700">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && (
                  <span className="text-red-700">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-700">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-700">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-700">
                    Password must be in 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-700">
                    Password must be less then 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-700">
                    Password must one upper case, one lower case, one number and
                    one special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input className="btn" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-center text-xl font-bold">
              Already Have an account?
              <small className="text-teal-700">
                <Link to="/login">Login Here</Link>
              </small>
            </p>
          </div>
          <img className="" src={loginImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
