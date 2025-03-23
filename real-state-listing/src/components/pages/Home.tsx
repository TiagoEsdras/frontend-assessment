import Banner from "../Banner";
import Listing from "../Listing";
import Search from "../Search";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <Search />
      <Listing />
    </div>
  );
};

export default Home;