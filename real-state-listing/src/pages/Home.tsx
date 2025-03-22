import Banner from "../components/Banner";
import Listing from "../components/Listing";
import Search from "../components/Search";

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