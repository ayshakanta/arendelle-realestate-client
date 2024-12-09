import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PropertyDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const { data: property = {}, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/property/${id}`);
      console.log(data);
      return data;
    },
  });

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const handleAddToWishlist = (item) => {
    if (user && user.email) {
      console.log(user.email, item);
      const wishlistItem = {
        email: user.email,
        property_image,
        property_title,
        property_location,
        verification_status,
        agent_name,
        agent_image,
        agent_email,
        property_description,
      };
      axiosSecure.post("/wishlist", wishlistItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Property is added to Wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

      // } else {
      //   Swal.fire({
      //     title: "You are not Logged In",
      //     text: "Please login to add to the Wishlist",
      //     icon: "warning",
      //     showCancelButton: true,
      //     confirmButtonColor: "#3085d6",
      //     cancelButtonColor: "#d33",
      //     confirmButtonText: "Yes,Login!",
      //   }).then((result) => {
      //     if (result.isConfirmed) {
      //      navigate("/login")
      //       });
      //     }
      //   });
    }
  };

  const {
    property_image,
    property_title,
    property_location,
    verification_status,
    agent_name,
    agent_image,
    agent_email,
    property_description,
    reviews,
  } = property;
  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  return (
    <div className="min-h-screen mb-20">
      <div className="">
        <div
          className="hero min-h-screen bg-fixed"
          style={{ backgroundImage: `url(${property_image})` }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content bg-slate-400 bg-opacity-40 drop-shadow-2xl">
            <div className="text-cyan-900">
              <h1 className="mb-5 text-5xl  font-bold">{property_title}</h1>
              <p className="mb-5 text-2xl">{property_description}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-around text-2xl mt-8 mb-6">
            <div>
              <p>
                <span className="font-bold mr-2">Property Location:</span>
                {property_location}
              </p>
              <p>
                <span className="font-bold mr-2">Verification Status:</span>
                {verification_status}
              </p>
            </div>
            <div>
              <h2 className="font-bold">Agent Info:</h2>
              <img src={agent_image} alt="" />
              <p>
                <span className="font-bold mr-2">Agent Name: </span>
                {agent_name}
              </p>
              <p>
                <span className="font-bold mr-2">Agent Email: </span>
                {agent_email}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6  items-center justify-center mt-10">
            <div>
              <h2 className="font-bold text-xl mr-2">Reviews:</h2>
              {reviews.map((review, index) => (
                <li key={index}>{review.review_description}</li>
              ))}
            </div>
            <div className="mt-8">
              <button className="btn text-white bg-cyan-900 ml-2 mb-2">
                Add a Review
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => handleAddToWishlist(property)}
              className="btn bg-slate-200 text-cyan-900 ml-2 mb-2"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
