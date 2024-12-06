import { Helmet } from "react-helmet-async";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import LatestReview from "./LatestReview";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Arendelle | Home</title>
      </Helmet>

      <Banner></Banner>
      <Advertisement></Advertisement>
      <LatestReview></LatestReview>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
