import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PropertyCard from "./PropertyCard";
import Heading from "../../components/Heading";

const AllProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/properties");
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  return (
    <div className="mt-20">
      <Helmet>
        <title>Arendelle | Properties</title>
      </Helmet>

      <div className="min-h-screen ">
        {properties && properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 drop-shadow-2xl">
            {properties.map((property) => (
              <PropertyCard
                key={property._id}
                property={property}
              ></PropertyCard>
            ))}
          </div>
        ) : (
          <div>
            <Heading
              center={true}
              title="No Property Available"
              subtitle="Add New Property Details"
            ></Heading>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProperties;
