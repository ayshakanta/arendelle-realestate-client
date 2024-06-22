import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import PropertyCard from "./PropertyCard";
import Heading from "../../components/Heading";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import cover from "../../../src/assets/images/cover.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const AllProperties = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const axiosCommon = useAxiosCommon();
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/properties");
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  const Austin = properties.filter(
    (property) => property.property_location === "Austin"
  );
  const Seattle = properties.filter(
    (property) => property.property_location === "Seattle"
  );

  return (
    <div className="">
      <Helmet>
        <title>Arendelle | Properties</title>
      </Helmet>

      <div
        className="hero min-h-screen bg-fixed mb-10"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content bg-slate-400 bg-opacity-50 drop-shadow-2xl">
          <div className="text-slate-200">
            <h1 className="mb-5 text-5xl  font-bold">Find Your Dream House</h1>
            <p className="mb-5 text-2xl">
              Arndelle will help you to find a beautiful one.
            </p>
          </div>
        </div>
      </div>
      {/* tabs */}

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center my-6 text-cyan-900">
          <Tab>Austin</Tab>
          <Tab>Seattle</Tab>
        </TabList>

        <TabPanel>
          <div className="min-h-screen ">
            {Austin && Austin.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 drop-shadow-2xl">
                {Austin.map((property) => (
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
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen ">
            {Seattle && Seattle.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 drop-shadow-2xl">
                {Seattle.map((property) => (
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
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllProperties;
