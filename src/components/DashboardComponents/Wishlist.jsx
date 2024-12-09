import useWishlist from "../../hooks/useWishlist";

const Wishlist = () => {
  const [wishlist] = useWishlist();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
      {wishlist.length}

      {wishlist.map((item) => (
        <div key={item._id} className="bg-slate-400 bg-opacity-15 mb-8 group">
          <img
            className="h-72 w-full group-hover:scale-110 "
            src={item.property_image}
            alt=""
          />
          <h2 className="ml-2 text-2xl font-bold mt-2">
            {item.property_title}
          </h2>
          <div className="flex justify-between px-2 py-4">
            <div>
              <p>
                <span className="font-bold mr-2">Location:</span>{" "}
                {item.property_location}
              </p>
              <p>
                <span className="font-bold mr-2">Verification Status:</span>{" "}
                {item.verification_status}
              </p>
            </div>
            <div>
              <h2 className="font-bold">Agent Info:</h2>
              <img src={item.agent_image} alt="" />
              <p>{item.agent_name}</p>
            </div>
          </div>

          <button className="btn bg-white ml-2 mb-2">Show Details</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
