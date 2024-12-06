import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const AddProperty = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");
  return (
    <div className="bg-slate-100 m-5 drop-shadow-xl md:m-10">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="location"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Agent Name</span>
          </label>
          <input
            type="name"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Agent Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price Range</span>
          </label>
          <input
            type="number"
            name="price"
            min="10000"
            max="1000000"
            step="1000"
            placeholder="enter price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            className="input input-bordered"
            required
          ></textarea>
        </div>
        <div className=" p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center">
          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
            <div className="flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  onChange={(e) => handleImage(e.target.files[0])}
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
                <div className="bg-cyan-900 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-cyan-700">
                  {/* {imageText} */}
                  {imageText.length > 20
                    ? imageText.split(".")[0].slice(0, 15) +
                      "...." +
                      imageText.split(".")[1]
                    : imageText}
                </div>
              </label>
            </div>
          </div>
          <div className="h-16 w-16 object-cover overflow-hidden flex items-center">
            {imagePreview && <img src={imagePreview} />}
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn bg-cyan-900 text-white"
            type="submit"
            value="Add Property"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
