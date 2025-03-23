import { useContext } from "react";
import { ListingContext } from "../contexts/ListingContext";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";
import Loading from "./Loading";

const Listing = () => {
  const context = useContext(ListingContext);
  const { listings, loading } = context!;

  if (loading) {
    return (
      <Loading />
    );
  }

  if (listings.length == 0) {
    return (
      <div className="text-center text-3xl text-dark-gray mt-48">No results found. Please adjust your filters and try again.</div>
    );
  }

  return (
    <section id="listing" className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {listings.map((listing, index) => {
            return (
              <Link to={`listing/${listing.id}`} key={index}>
                <ListingCard listing={listing} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Listing;
