import { Helmet } from "react-helmet-async";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import LatestReview from "./LatestReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Arendelle | Home</title>
      </Helmet>
      <h2>This is home</h2>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <LatestReview></LatestReview>
    </div>
  );
};

export default Home;
