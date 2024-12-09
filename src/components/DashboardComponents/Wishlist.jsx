import Swal from "sweetalert2";
import useWishlist from "../../hooks/useWishlist";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Wishlist = () => {
  const [wishlist, refetch] = useWishlist();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
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
          <div>
            <button className="btn bg-cyan-900 text-white ml-2 mb-2">
              Make An Offer
            </button>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn bg-white ml-2 mb-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
