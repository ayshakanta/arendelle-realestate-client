import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";

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
          <div>
            {reviews.map((review, index) => (
              <li key={index}>{review.review_description}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
