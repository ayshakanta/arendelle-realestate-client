import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const {
    property_image,
    property_title,
    property_location,
    verification_status,
    agent_name,
    agent_image,
  } = property;
  return (
    <div className="bg-slate-400 bg-opacity-15 mb-8 group">
      <img
        className="w-full h-72 group-hover:scale-110 "
        src={property_image}
        alt=""
      />
      <h2 className="ml-2 text-2xl font-bold mt-2">{property_title}</h2>
      <div className="flex justify-between px-2 py-4">
        <div>
          <p>
            <span className="font-bold mr-2">Location:</span>{" "}
            {property_location}
          </p>
          <p>
            <span className="font-bold mr-2">Verification Status:</span>{" "}
            {verification_status}
          </p>
        </div>
        <div>
          <h2 className="font-bold">Agent Info:</h2>
          <img src={agent_image} alt="" />
          <p>{agent_name}</p>
        </div>
      </div>
      <Link to={`/property/${property?._id}`}>
        <button className="btn bg-white ml-2 mb-2">Show Details</button>
      </Link>
    </div>
  );
};

export default PropertyCard;
